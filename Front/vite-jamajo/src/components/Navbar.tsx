import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

// Simula autenticación — reemplaza con tu contexto/estado real
const useAuth = () => {
  const [isLoggedIn] = useState(false) // cambia a true para probar sesión activa
  return { isLoggedIn }
}

const seriesCategories = ['Comedia', 'Acción', 'Terror', 'Drama', 'Sci-Fi', 'Documental']
const peliculasCategories = ['Comedia', 'Acción', 'Terror', 'Drama', 'Animación', 'Thriller']

export default function Navbar() {
  const { isLoggedIn } = useAuth()
  const navigate = useNavigate()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleAcceder = () => {
    if (isLoggedIn) {
      navigate('/perfil')
    } else {
      navigate('/acceder')
    }
  }

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar__logo">
        {/* Coloca aquí tu imagen: <img src="/logo.png" alt="Logo" /> */}
        <div className="navbar__logo-placeholder">LOGO</div>
      </Link>

      {/* Links principales */}
      <ul className="navbar__links">
        <li>
          <Link to="/" className="navbar__link">Inicio</Link>
        </li>

        {/* Series */}
        <li
          className="navbar__item--dropdown"
          onMouseEnter={() => setActiveDropdown('series')}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <span className="navbar__link navbar__link--arrow">
            Series <span className="navbar__arrow">▾</span>
          </span>
          {activeDropdown === 'series' && (
            <div className="navbar__dropdown">
              <div className="navbar__dropdown-section">
                <span className="navbar__dropdown-title">Categorías</span>
                <ul>
                  {seriesCategories.map(cat => (
                    <li key={cat}>
                      <Link to={`/series/categoria/${cat.toLowerCase()}`} className="navbar__dropdown-link">
                        {cat}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="navbar__dropdown-divider" />
              <Link to="/series/nuevo" className="navbar__dropdown-link navbar__dropdown-link--section">Nuevo</Link>
              <Link to="/series/popular" className="navbar__dropdown-link navbar__dropdown-link--section">Popular</Link>
            </div>
          )}
        </li>

        {/* Películas */}
        <li
          className="navbar__item--dropdown"
          onMouseEnter={() => setActiveDropdown('peliculas')}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <span className="navbar__link navbar__link--arrow">
            Películas <span className="navbar__arrow">▾</span>
          </span>
          {activeDropdown === 'peliculas' && (
            <div className="navbar__dropdown">
              <div className="navbar__dropdown-section">
                <span className="navbar__dropdown-title">Categorías</span>
                <ul>
                  {peliculasCategories.map(cat => (
                    <li key={cat}>
                      <Link to={`/peliculas/categoria/${cat.toLowerCase()}`} className="navbar__dropdown-link">
                        {cat}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="navbar__dropdown-divider" />
              <Link to="/peliculas/nuevo" className="navbar__dropdown-link navbar__dropdown-link--section">Nuevo</Link>
              <Link to="/peliculas/popular" className="navbar__dropdown-link navbar__dropdown-link--section">Popular</Link>
            </div>
          )}
        </li>

        {/* Mis Listas — solo si hay sesión */}
        {isLoggedIn && (
          <li>
            <Link to="/mis-listas" className="navbar__link">Mis Listas</Link>
          </li>
        )}
      </ul>

      {/* Botón Acceder / Perfil */}
      <button className="navbar__acceder" onClick={handleAcceder}>
        {isLoggedIn ? 'Mi Perfil' : 'Acceder'}
      </button>
    </nav>
  )
}