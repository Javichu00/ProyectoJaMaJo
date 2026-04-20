import type { CategorySummary } from '../data/mediaLibrary'

type CategoryBrowserProps = {
  categories: CategorySummary[]
}

export default function CategoryBrowser({ categories }: CategoryBrowserProps) {
  return (
    <section id="categorias" data-reveal className="mx-auto mt-6 max-w-[1320px] px-3 sm:px-5">
      <div className="grid gap-4 xl:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-[2.3rem] border border-black/8 bg-[#f0ebe7] px-5 py-6 sm:px-6 sm:py-7">
          <div className="text-[0.7rem] uppercase tracking-[0.24em] text-slate">Categorias</div>
          <h3 className="mt-3 text-[clamp(2.2rem,5vw,4.5rem)] leading-[0.92] font-semibold tracking-[-0.06em] text-ink">
            Un mapa flexible para descubrir mejor.
          </h3>
          <p className="mt-4 max-w-lg text-sm leading-7 text-slate">
            Esta zona prepara la navegacion por genero, mezcla de categorias, reparto y
            relaciones entre contenidos sin depender todavia de datos reales.
          </p>

          <div className="mt-7 grid gap-3">
            <article className="rounded-[1.45rem] border border-black/8 bg-white/82 px-4 py-4">
              <div className="text-[0.66rem] uppercase tracking-[0.18em] text-slate">Luego</div>
              <div className="mt-2 text-xl font-medium text-ink">Conteos y filtros vivos</div>
              <p className="mt-2 text-sm leading-6 text-slate">
                Aqui entran datos reales de peliculas, series, rankings y disponibilidad.
              </p>
            </article>

            <article className="rounded-[1.45rem] border border-black/8 bg-white/82 px-4 py-4">
              <div className="text-[0.66rem] uppercase tracking-[0.18em] text-slate">Despues</div>
              <div className="mt-2 text-xl font-medium text-ink">Similitud y personas</div>
              <p className="mt-2 text-sm leading-6 text-slate">
                La misma estructura soporta exploracion por actores, directores y contenido relacionado.
              </p>
            </article>
          </div>
        </div>

        <div className="rounded-[2.3rem] border border-black/8 bg-white/78 px-4 py-5 backdrop-blur-xl sm:px-6 sm:py-6">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {/* TODO(back): usar conteos y relaciones reales por categoria. */}
            {categories.map((category, index) => (
              <article
                key={category.name}
                className={`rounded-[1.4rem] border px-4 py-4 transition hover:-translate-y-0.5 ${index % 4 === 0 ? 'border-deep-teal/16 bg-[#ecf2f1]' : 'border-black/8 bg-[#faf8f6]'}`}
              >
                <div className="text-lg font-medium text-ink">{category.name}</div>
                <div className="mt-4 flex flex-wrap gap-2 text-[0.64rem] uppercase tracking-[0.16em] text-slate">
                  <span className="rounded-full border border-black/8 px-3 py-1">series</span>
                  <span className="rounded-full border border-black/8 px-3 py-1">peliculas</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
