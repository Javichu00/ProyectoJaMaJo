import { useDeferredValue, useEffect, useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { categorySummary, menuLinks, searchIndex } from '../../../features/home/data/mediaLibrary'

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 7h16" />
      <path d="M4 12h12" />
      <path d="M4 17h16" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-4-4" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </svg>
  )
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [categoriesOpen, setCategoriesOpen] = useState(false)
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)
  const menuPanelRef = useRef<HTMLDivElement | null>(null)
  const searchPanelRef = useRef<HTMLDivElement | null>(null)
  const categoriesPanelRef = useRef<HTMLDivElement | null>(null)

  const searchResults = useMemo(() => {
    const normalized = deferredQuery.trim().toLowerCase()

    if (!normalized) {
      return searchIndex.slice(0, 4)
    }

    return searchIndex
      .filter((item) => `${item.title} ${item.category} ${item.note ?? ''}`.toLowerCase().includes(normalized))
      .slice(0, 6)
  }, [deferredQuery])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuPanelRef.current) {
      return
    }

    if (menuOpen) {
      gsap.fromTo(
        menuPanelRef.current,
        { xPercent: -7, autoAlpha: 0 },
        { xPercent: 0, autoAlpha: 1, duration: 0.42, ease: 'power3.out' },
      )
    }
  }, [menuOpen])

  useEffect(() => {
    if (!searchPanelRef.current) {
      return
    }

    if (searchOpen) {
      gsap.fromTo(
        searchPanelRef.current,
        { y: -14, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.26, ease: 'power3.out' },
      )
    }
  }, [searchOpen])

  useEffect(() => {
    if (!categoriesPanelRef.current) {
      return
    }

    gsap.to(categoriesPanelRef.current, {
      height: categoriesOpen ? 'auto' : 0,
      autoAlpha: categoriesOpen ? 1 : 0,
      duration: 0.24,
      ease: 'power2.out',
      overflow: 'hidden',
    })
  }, [categoriesOpen])

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto max-w-[1320px]">
        <div className="rounded-[1.75rem] border border-black/8 bg-white/38 backdrop-blur-xl">
          <div className="grid grid-cols-[56px_1fr_56px] items-center px-3 py-3 sm:px-5">
            <button
              type="button"
              onClick={() => {
                setSearchOpen(false)
                setMenuOpen(true)
              }}
              className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition hover:bg-black/5"
              aria-label="Abrir menu"
            >
              <MenuIcon />
            </button>

            <a href="#inicio" className="mx-auto flex items-center justify-center gap-3">
              <img src="/jam-logo.png" alt="JAM" className="h-9 w-9 object-contain sm:h-10 sm:w-10" />
              <div className="hidden text-left sm:block">
                <div className="text-sm font-semibold tracking-[0.08em] text-ink">JAMAJO</div>
                <div className="text-[0.63rem] uppercase tracking-[0.24em] text-slate">Cine</div>
              </div>
            </a>

            <button
              type="button"
              onClick={() => {
                setMenuOpen(false)
                setSearchOpen((current) => !current)
              }}
              className="ml-auto flex h-11 w-11 items-center justify-center rounded-full text-ink transition hover:bg-black/5"
              aria-label="Abrir buscador"
            >
              <SearchIcon />
            </button>
          </div>

          {searchOpen && (
            <div ref={searchPanelRef} className="border-t border-black/8 px-4 pb-4 pt-3 sm:px-5">
              <div className="rounded-[1.5rem] border border-black/8 bg-white/82 p-3 backdrop-blur-xl sm:p-4">
                <div className="flex items-center gap-3 rounded-[1.1rem] border border-black/8 bg-paper px-4 py-3">
                  <SearchIcon />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Buscar contenido, categoria o reparto"
                    className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-slate"
                  />
                </div>

                <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
                  {/* TODO(back): reemplazar este mapeo por resultados reales del buscador. */}
                  {searchResults.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.kind === 'movie' ? 'peliculas' : 'series'}`}
                      onClick={() => setSearchOpen(false)}
                      className="rounded-[1.1rem] border border-black/8 bg-[#fcfbfa] px-3 py-3 transition hover:border-deep-teal/25 hover:bg-white"
                    >
                      <div className="text-[0.68rem] uppercase tracking-[0.18em] text-slate">{item.category}</div>
                      <div className="mt-2 text-base font-medium text-ink">{item.title}</div>
                      <div className="mt-2 text-xs uppercase tracking-[0.16em] text-slate">
                        {item.kind === 'movie' ? 'Pelicula' : 'Serie'}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/54 backdrop-blur-sm" onClick={() => setMenuOpen(false)}>
          <div
            ref={menuPanelRef}
            className="h-full w-full max-w-[620px] border-r border-white/10 bg-black/95 px-6 py-5 text-white sm:px-8 sm:py-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-8 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-white/78 transition hover:text-white"
              >
                <CloseIcon />
                <span>Cerrar</span>
              </button>

              <div className="flex items-center gap-3">
                <img src="/jam-logo.png" alt="JAM" className="h-8 w-8 object-contain invert" />
                <span className="text-[0.68rem] uppercase tracking-[0.28em] text-white/56">JAMAJO | Cine</span>
              </div>
            </div>

            <div className="grid h-[calc(100%-4.5rem)] gap-8 lg:grid-cols-[1fr_0.82fr]">
              <nav className="grid content-start gap-1">
                {menuLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center justify-between border-b border-white/10 py-4 text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.94] font-medium tracking-[-0.06em] text-white transition hover:text-white/82"
                  >
                    <span>{link.label}</span>
                    <span className="text-lg text-white/30 transition group-hover:translate-x-1 group-hover:text-white/70">
                      {'->'}
                    </span>
                  </a>
                ))}
              </nav>

              <div className="flex flex-col rounded-[2rem] border border-white/10 bg-white/4 p-5">
                <button
                  type="button"
                  onClick={() => setCategoriesOpen((current) => !current)}
                  className="flex w-full items-center justify-between border-b border-white/10 pb-4 text-left text-sm uppercase tracking-[0.22em] text-white/68"
                >
                  <span>Categorias</span>
                  <ChevronIcon open={categoriesOpen} />
                </button>

                <div ref={categoriesPanelRef} className="overflow-hidden">
                  <div className="grid gap-2 pt-4 sm:grid-cols-2">
                    {categorySummary.map((category) => (
                      <a
                        key={category.name}
                        href="#categorias"
                        onClick={() => setMenuOpen(false)}
                        className="rounded-[1rem] border border-white/10 bg-white/5 px-3 py-3 text-sm text-white/86 transition hover:border-white/24 hover:bg-white/9"
                      >
                        {category.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-auto border-t border-white/10 pt-5">
                  <div className="text-[0.68rem] uppercase tracking-[0.22em] text-white/48">Home</div>
                  <p className="mt-3 text-sm leading-6 text-white/64">
                    Base visual para compra individual, descubrimiento, listas y sistema social.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
