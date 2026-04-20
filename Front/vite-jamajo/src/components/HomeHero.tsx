import { startTransition, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { homePillars, type MediaItem } from '../data/mediaLibrary'

type HomeHeroProps = {
  slides: MediaItem[]
  spotlightItems: MediaItem[]
}

function abstractTone(index: number) {
  const tones = [
    'from-[#faf8f6] via-[#efe8e3] to-[#d8d1cf]',
    'from-[#edf1ef] via-[#dde6e3] to-[#bfcfcb]',
    'from-[#f5f0ee] via-[#e5dbd6] to-[#cbc1bc]',
  ]

  return tones[index % tones.length]
}

function PosterStack({ slides, activeIndex }: { slides: MediaItem[]; activeIndex: number }) {
  return (
    <div className="relative min-h-[360px] sm:min-h-[430px]">
      {slides.map((slide, index) => {
        const offset = (index - activeIndex + slides.length) % slides.length
        const isActive = index === activeIndex
        const translate = offset === 0 ? 'translate-x-0 rotate-0' : offset === 1 ? 'translate-x-14 rotate-[6deg]' : '-translate-x-10 -rotate-[8deg]'
        const scale = isActive ? 'scale-100' : 'scale-[0.93]'

        return (
          <article
            key={slide.id}
            className={`absolute left-1/2 top-1/2 w-[210px] -translate-y-1/2 overflow-hidden rounded-[1.8rem] border border-black/8 bg-gradient-to-br ${abstractTone(index)} px-4 py-4 shadow-[0_32px_80px_rgba(0,0,0,0.08)] transition-all duration-500 sm:w-[255px] ${translate} ${scale}`}
            style={{ zIndex: isActive ? 3 : 2 - offset }}
          >
            <div className="mb-20 text-[0.68rem] uppercase tracking-[0.22em] text-slate">{slide.category}</div>
            <div className="text-[clamp(1.7rem,4vw,2.5rem)] leading-[0.92] font-semibold tracking-[-0.06em] text-ink">
              {slide.title}
            </div>
            <div className="mt-6 rounded-full border border-black/10 bg-white/70 px-3 py-2 text-[0.64rem] uppercase tracking-[0.18em] text-slate">
              Poster real pendiente
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(2,51,52,0.1),transparent_38%)]" />
          </article>
        )
      })}
    </div>
  )
}

export default function HomeHero({ slides, spotlightItems }: HomeHeroProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const copyRef = useRef<HTMLDivElement | null>(null)
  const activeSlide = slides[activeIndex] ?? slides[0]
  const activeSlideId = activeSlide?.id

  useEffect(() => {
    if (!activeSlideId || !copyRef.current) {
      return
    }

    gsap.fromTo(
      copyRef.current.children,
      { y: 18, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.65, ease: 'power3.out', stagger: 0.08 },
    )
  }, [activeSlideId])

  if (!activeSlide) {
    return null
  }

  return (
    <section id="inicio" data-reveal className="mx-auto max-w-[1320px] px-3 sm:px-5">
      <div className="grid gap-4 xl:grid-cols-[1.08fr_0.92fr]">
        <div className="relative overflow-hidden rounded-[2.4rem] border border-black/8 bg-[linear-gradient(160deg,#f8f5f3_0%,#f2edeb_52%,#ebe4e0_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(2,51,52,0.11),transparent_34%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.35),transparent_46%)]" />

          <div className="relative grid gap-8 px-5 py-6 sm:px-8 sm:py-8 xl:grid-cols-[1fr_0.88fr] xl:items-end">
            <div ref={copyRef} className="flex min-h-[520px] flex-col justify-between">
              <div>
                <div className="inline-flex rounded-full border border-black/8 bg-white/68 px-4 py-2 text-[0.7rem] uppercase tracking-[0.22em] text-slate backdrop-blur-sm">
                  Home
                </div>

                <div className="mt-8 text-[0.72rem] uppercase tracking-[0.24em] text-slate">
                  Descubrimiento + compra individual
                </div>
                <h1 className="mt-4 max-w-[10ch] text-[clamp(3.2rem,9vw,7.3rem)] leading-[0.88] font-semibold tracking-[-0.07em] text-ink">
                  Cine y series con pulso editorial.
                </h1>
                <p className="mt-5 max-w-xl text-sm leading-7 text-slate">
                  Esta portada ya marca el tono de la plataforma: clara, cinematografica,
                  minimalista y lista para recibir despues contenido real desde backend.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {homePillars.map((pillar) => (
                  <article
                    key={pillar.id}
                    className="rounded-[1.45rem] border border-black/8 bg-white/74 px-4 py-4 backdrop-blur-sm"
                  >
                    <div className="text-[0.66rem] uppercase tracking-[0.2em] text-slate">{pillar.eyebrow}</div>
                    <div className="mt-3 text-lg leading-tight font-medium text-ink">{pillar.title}</div>
                  </article>
                ))}
              </div>
            </div>

            <div className="xl:pb-4">
              {/* TODO(back): aqui luego entran poster principal, titulo real y CTA del hero. */}
              <PosterStack slides={slides} activeIndex={activeIndex} />
            </div>
          </div>
        </div>

        <aside className="grid gap-4">
          <div className="rounded-[2.4rem] border border-black/8 bg-deep-teal px-5 py-6 text-white sm:px-6 sm:py-7">
            <div className="text-[0.7rem] uppercase tracking-[0.22em] text-white/54">Destacado</div>
            <div className="mt-4 space-y-3">
              {spotlightItems.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => startTransition(() => setActiveIndex(index % slides.length))}
                  className={`flex w-full items-center justify-between rounded-[1.2rem] border px-4 py-4 text-left transition ${index === activeIndex ? 'border-white/22 bg-white/12' : 'border-white/10 bg-white/5 hover:bg-white/9'}`}
                >
                  <div>
                    <div className="text-[0.66rem] uppercase tracking-[0.18em] text-white/54">{item.category}</div>
                    <div className="mt-2 text-xl font-medium text-white">{item.title}</div>
                    <div className="mt-2 text-sm text-white/56">{item.note}</div>
                  </div>
                  <div className="text-lg text-white/40">{'->'}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[2.4rem] border border-black/8 bg-white/82 px-5 py-6 sm:px-6">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-black/8 bg-paper px-3 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-slate">
                peliculas
              </span>
              <span className="rounded-full border border-black/8 bg-paper px-3 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-slate">
                series
              </span>
              <span className="rounded-full border border-black/8 bg-paper px-3 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-slate">
                reparto
              </span>
              <span className="rounded-full border border-black/8 bg-paper px-3 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-slate">
                categorias
              </span>
            </div>

            <div className="mt-5 text-2xl font-semibold tracking-[-0.05em] text-ink sm:text-3xl">
              El home ya puede lucir completo aunque todavia no consuma datos reales.
            </div>
            <p className="mt-4 text-sm leading-7 text-slate">
              La integracion final solo tendra que reemplazar estos placeholders por las
              respuestas del backend para hero, carruseles, estados y resultados de busqueda.
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}
