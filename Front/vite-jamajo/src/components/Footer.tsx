import { brandLockup, footerColumns } from '../data/mediaLibrary'

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-black/10 bg-paper px-3 pb-8 pt-10 sm:px-5 sm:pt-14">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-2 sm:px-0 lg:grid-cols-[0.9fr_1.4fr_0.7fr]">
        <div>
          <div className="flex items-center gap-4">
            <img src="/jam-logo.png" alt="JAM" className="h-12 w-12 object-contain" />
            <div className="text-base font-semibold tracking-[0.04em] text-ink">{brandLockup}</div>
          </div>

          <div className="mt-10 text-sm font-medium text-slate">Siguenos en</div>
          <div className="mt-5 flex flex-wrap gap-3 text-[0.72rem] uppercase tracking-[0.18em] text-ink">
            <span className="rounded-full border border-black/10 px-3 py-2">Instagram</span>
            <span className="rounded-full border border-black/10 px-3 py-2">TikTok</span>
            <span className="rounded-full border border-black/10 px-3 py-2">YouTube</span>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerColumns.map((column) => (
            <section key={column.title}>
              <div className="text-[0.74rem] uppercase tracking-[0.2em] text-slate">{column.title}</div>
              <div className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <div key={link} className="text-[1rem] leading-6 text-ink/76">
                    {link}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="justify-self-start lg:justify-self-end">
          <div className="flex h-28 w-28 items-center justify-center border border-black/10 bg-paper text-[0.62rem] uppercase tracking-[0.2em] text-slate">
            App
          </div>
          <div className="mt-4 max-w-[12rem] text-sm leading-6 text-slate">
            Acceso directo a biblioteca, listas y actividad personal.
          </div>
        </div>
      </div>
    </footer>
  )
}
