import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}
