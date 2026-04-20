import { useDeferredValue, useEffect, useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { categorySummary, menuLinks, searchIndex } from '../data/mediaLibrary'

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
  const [categoriesOpen, setCategoriesOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [navVisible, setNavVisible] = useState(true)
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

  function openMenu() {
    setCategoriesOpen(false)
    setMenuOpen(true)
  }

  function closeMenu() {
    setCategoriesOpen(false)
    setMenuOpen(false)
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 24) {
        setNavVisible(true)
      } else if (currentScrollY > lastScrollY) {
        setNavVisible(false)
      } else if (currentScrollY < lastScrollY) {
        setNavVisible(true)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
    if (!searchPanelRef.current || !menuOpen) {
      return
    }

    gsap.fromTo(
      searchPanelRef.current,
      { y: -14, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.26, ease: 'power3.out', delay: 0.08 },
    )
  }, [menuOpen])

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
    <header className="sticky top-0 z-50">
      <div
        className={`border-b border-black/10 bg-paper/92 backdrop-blur-md transition-transform duration-300 ${
          navVisible || menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="grid min-h-[90px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 sm:min-h-[108px] sm:px-10 lg:px-14">
          <button
            type="button"
            onClick={openMenu}
            className="inline-flex w-fit items-center gap-4 text-[0.96rem] font-medium uppercase tracking-[0.04em] text-ink transition hover:text-deep-teal"
            aria-label="Abrir menu"
          >
            <span className="flex h-8 w-8 items-center justify-center">
              <MenuIcon />
            </span>
            <span>Menu</span>
          </button>

          <a href="#inicio" className="justify-self-center">
            <img src="/jam-logo.png" alt="JAM" className="h-10 w-10 object-contain sm:h-12 sm:w-12" />
          </a>

          <div className="justify-self-end">
            <a
              href="#footer"
              className="text-[0.92rem] font-medium uppercase tracking-[0.04em] text-ink transition hover:text-deep-teal"
            >
              Iniciar sesion
            </a>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/54 backdrop-blur-sm" onClick={closeMenu}>
          <div
            ref={menuPanelRef}
            className="h-screen w-full max-w-[620px] overflow-y-auto border-r border-white/10 bg-black px-6 py-6 text-white sm:px-8 sm:py-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-10">
              <button
                type="button"
                onClick={closeMenu}
                className="flex h-12 w-12 items-center justify-center text-white/78 transition hover:text-white"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="flex h-[calc(100%-5.5rem)] flex-col">
              <div ref={searchPanelRef} className="mb-8 max-w-[420px]">
                <div className="flex items-center gap-3 border-b border-white/20 pb-3">
                  <SearchIcon />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Buscar contenido"
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/42"
                  />
                </div>

                <div className="mt-4 grid gap-2">
                  {searchResults.slice(0, 3).map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.kind === 'movie' ? 'peliculas' : 'series'}`}
                      onClick={closeMenu}
                      className="rounded-[0.95rem] border border-white/10 px-3 py-3 transition hover:border-white/24 hover:bg-white/6"
                    >
                      <div className="text-[0.64rem] uppercase tracking-[0.18em] text-white/46">{item.category}</div>
                      <div className="mt-2 text-sm font-medium text-white">{item.title}</div>
                    </a>
                  ))}
                </div>
              </div>

              <nav className="grid content-start gap-2">
                {menuLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={closeMenu}
                    className="group py-1 text-[clamp(2.9rem,7vw,5.2rem)] leading-[0.92] font-medium tracking-[-0.08em] text-white transition hover:text-white/82"
                  >
                    <span>{link.label}</span>
                  </a>
                ))}

                <div className="py-1">
                  <button
                    type="button"
                    onClick={() => setCategoriesOpen((current) => !current)}
                    className="flex items-center gap-4 text-[clamp(2.9rem,7vw,5.2rem)] leading-[0.92] font-medium tracking-[-0.08em] text-white transition hover:text-white/82"
                  >
                    <span>Categorias</span>
                    <span className="mt-2 text-base text-white/52">
                      <ChevronIcon open={categoriesOpen} />
                    </span>
                  </button>

                  <div
                    ref={categoriesPanelRef}
                    className={`overflow-hidden ${categoriesOpen ? 'h-auto opacity-100' : 'h-0 opacity-0'}`}
                  >
                    <div className="mt-4 grid max-w-[420px] gap-2 sm:grid-cols-2">
                      {categorySummary.slice(0, 10).map((category) => (
                        <a
                          key={category.name}
                          href="#categorias"
                          onClick={closeMenu}
                          className="rounded-[0.95rem] border border-white/10 px-3 py-3 text-sm text-white/82 transition hover:border-white/24 hover:bg-white/6"
                        >
                          {category.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
