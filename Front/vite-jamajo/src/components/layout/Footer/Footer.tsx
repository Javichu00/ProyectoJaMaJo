import { brandLockup, footerColumns } from '../../../features/home/data/mediaLibrary'

export default function Footer() {
  return (
    <footer id="footer" className="px-3 pb-6 pt-10 sm:px-5 sm:pt-14">
      <div className="mx-auto max-w-[1320px] overflow-hidden rounded-[2.4rem] border border-black/8 bg-ink text-paper">
        <div className="grid gap-10 px-5 py-7 sm:px-8 sm:py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,#071617,#000000)] p-6 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(2,51,52,0.42),transparent_42%)]" />
            <div className="relative">
              <div className="flex items-center gap-4">
                <img src="/jam-logo.png" alt="JAM" className="h-12 w-12 object-contain invert" />
                <div>
                  <div className="text-sm font-semibold tracking-[0.08em] text-white">{brandLockup}</div>
                  <div className="text-[0.68rem] uppercase tracking-[0.26em] text-white/46">Home base</div>
                </div>
              </div>

              <h2 className="mt-8 max-w-[10ch] text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-white">
                Cine curado con estructura lista para crecer.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/62">
                El home queda preparado para conectar despues compras, reservas, biblioteca,
                ratings, resenas, reparto y recomendaciones reales.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {footerColumns.map((column) => (
              <section
                key={column.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/4 px-4 py-5 backdrop-blur-sm"
              >
                <div className="text-[0.68rem] uppercase tracking-[0.2em] text-white/46">{column.title}</div>
                <div className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <div key={link} className="text-sm text-white/84">
                      {link}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 px-5 py-4 text-[0.68rem] uppercase tracking-[0.22em] text-white/42 sm:px-8">
          Front listo para recibir datos reales sin depender aun del backend.
        </div>
      </div>
    </footer>
  )
}
