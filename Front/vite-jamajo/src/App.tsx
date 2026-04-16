import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Página principal</h1>} />
        <Route path="/acceder" element={<h1>Acceder</h1>} />
        <Route path="/perfil" element={<h1>Mi Perfil</h1>} />
        <Route path="/mis-listas" element={<h1>Mis Listas</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App