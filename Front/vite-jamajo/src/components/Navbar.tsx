import { useState } from "react";
import './Navbar.css'

function Navbar() {
    const isLoggedIn = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      
      {/* Logo + Nombre */}
      <a className="navbar-brand d-flex align-items-center" href="#">
        <img
          src="TU_LOGO_AQUI"
          alt="logo"
          width="30"
          height="30"
          className="me-2"
        />
        <span>NombreProyecto</span>
      </a>

      {/* Botón hamburguesa */}
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
        
        {/* Menú izquierda */}
        <ul className="navbar-nav me-auto">
          <li className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle btn btn-link text-light"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Series
            </button>

            <ul className={`dropdown-menu ${menuOpen ? "show" : ""}`}>
              <li><a className="dropdown-item" href="#">Acción</a></li>
              <li><a className="dropdown-item" href="#">Drama</a></li>
              <li><a className="dropdown-item" href="#">Comedia</a></li>
            </ul>
          </li>
        </ul>

        {/* Derecha */}
        <div className="d-flex align-items-center gap-2">
          
          {/* Listas usuario */}
          <button className="btn btn-outline-light">
            Mis listas
          </button>

          {/* Login / Perfil */}
          {!isLoggedIn ? (
            <button className="btn btn-primary">
              Iniciar sesión
            </button>
          ) : (
            <div
              className="rounded-circle bg-light text-dark d-flex justify-content-center align-items-center"
              style={{ width: "40px", height: "40px", cursor: "pointer" }}
            >
              U
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
