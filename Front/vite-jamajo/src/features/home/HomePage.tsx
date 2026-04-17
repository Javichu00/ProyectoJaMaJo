import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import CategoryBrowser from './components/CategoryBrowser'
import HomeHero from './components/HomeHero'
import MediaCarousel from './components/MediaCarousel'
import { categorySummary, heroSlides, shelves, spotlightItems } from './data/mediaLibrary'

export default function HomePage() {
  const pageRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    if (!pageRef.current) {
      return
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        '[data-reveal]',
        { y: 42, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.85, ease: 'power3.out', stagger: 0.12 },
      )
    }, pageRef)

    return () => context.revert()
  }, [])

  return (
    <div ref={pageRef} className="pb-4 pt-4 sm:pt-6">
      <HomeHero slides={heroSlides} spotlightItems={spotlightItems} />

      <section id="explorar" data-reveal className="mx-auto mt-6 max-w-[1320px] px-3 sm:px-5">
        <div className="mb-5 grid gap-4 rounded-[2.2rem] border border-black/8 bg-white/74 px-5 py-5 backdrop-blur-xl sm:px-6 sm:py-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="text-[0.72rem] uppercase tracking-[0.24em] text-slate">Explorar</div>
            <h2 className="mt-2 text-[clamp(2.1rem,6vw,4.8rem)] leading-[0.92] font-semibold tracking-[-0.06em] text-ink">
              Un home que mezcla curaduria y sistema.
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate">
            Las filas de abajo ya ordenan peliculas, series y descubrimiento con una logica
            clara. Cuando el backend exista, aqui mismo entraran portadas, estados y enlaces reales.
          </p>
        </div>

        <div className="space-y-4">
          {shelves.map((shelf) => (
            <MediaCarousel key={shelf.id} shelf={shelf} />
          ))}
        </div>
      </section>

      <CategoryBrowser categories={categorySummary} />
    </div>
  )
}
