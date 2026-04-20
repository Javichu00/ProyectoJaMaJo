import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import type { MediaShelf } from '../data/mediaLibrary'

type MediaCarouselProps = {
  shelf: MediaShelf
}

function Arrow({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
      {direction === 'left' ? <path d="m15 6-6 6 6 6" /> : <path d="m9 6 6 6-6 6" />}
    </svg>
  )
}

function toneFor(index: number) {
  const tones = [
    'from-[#faf8f6] via-[#efe8e3] to-[#dbd2cd]',
    'from-[#eef2f0] via-[#dde7e3] to-[#c3d0cc]',
    'from-[#f5f0ee] via-[#e8ded8] to-[#d1c5bf]',
    'from-[#f0f5f4] via-[#d8e5e1] to-[#b8c9c4]',
  ]

  return tones[index % tones.length]
}

export default function MediaCarousel({ shelf }: MediaCarouselProps) {
  const railRef = useRef<HTMLDivElement | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        '[data-card]',
        { y: 24, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.72, stagger: 0.06, ease: 'power3.out' },
      )
    }, sectionRef)

    return () => context.revert()
  }, [])

  function scrollRail(direction: 'left' | 'right') {
    if (!railRef.current) {
      return
    }

    const amount = railRef.current.clientWidth * 0.84
    railRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <section
      ref={sectionRef}
      id={shelf.anchor}
      className="rounded-[2.3rem] border border-black/8 bg-white/76 px-4 py-5 backdrop-blur-xl sm:px-6 sm:py-6"
    >
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-[0.7rem] uppercase tracking-[0.24em] text-slate">{shelf.eyebrow}</div>
          <h3 className="mt-2 text-[clamp(2rem,4vw,3.7rem)] leading-[0.94] font-semibold tracking-[-0.05em] text-ink">
            {shelf.title}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate">{shelf.description}</p>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollRail('left')}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-paper text-ink transition hover:border-deep-teal/25 hover:text-deep-teal"
            aria-label="Mover carrusel hacia la izquierda"
          >
            <Arrow direction="left" />
          </button>
          <button
            type="button"
            onClick={() => scrollRail('right')}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-paper text-ink transition hover:border-deep-teal/25 hover:text-deep-teal"
            aria-label="Mover carrusel hacia la derecha"
          >
            <Arrow direction="right" />
          </button>
        </div>
      </div>

      <div ref={railRef} className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
        {/* TODO(back): cada tarjeta debe consumir portada, slug, precio/estado y enlace real. */}
        {shelf.items.map((item, index) => (
          <article
            key={item.id}
            data-card
            className="group min-w-[230px] snap-start overflow-hidden rounded-[1.7rem] border border-black/8 bg-paper sm:min-w-[260px]"
          >
            <div className={`relative aspect-[4/5] overflow-hidden bg-gradient-to-br ${toneFor(index)}`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(2,51,52,0.12),transparent_38%)]" />
              <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-3">
                <div className="rounded-full border border-black/8 bg-white/72 px-3 py-1 text-[0.64rem] uppercase tracking-[0.18em] text-slate">
                  {item.category}
                </div>
                <div className="text-[0.62rem] uppercase tracking-[0.18em] text-slate">
                  {item.status ?? item.kind}
                </div>
              </div>

              <div className="absolute inset-x-4 bottom-4">
                <div className="text-[0.64rem] uppercase tracking-[0.18em] text-slate">
                  {item.kind === 'movie' ? 'Pelicula' : 'Serie'}
                </div>
                <div className="mt-2 text-[1.85rem] leading-[0.95] font-semibold tracking-[-0.05em] text-ink">
                  {item.title}
                </div>
                <div className="mt-8 flex items-center justify-between rounded-[1rem] border border-black/8 bg-white/74 px-3 py-3">
                  <div className="text-[0.64rem] uppercase tracking-[0.18em] text-slate">
                    {item.note ?? 'placeholder'}
                  </div>
                  <div className="text-sm text-ink/70">{'->'}</div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
