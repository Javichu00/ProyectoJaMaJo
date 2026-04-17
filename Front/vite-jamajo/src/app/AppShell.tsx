import Footer from '../components/layout/Footer/Footer'
import Navbar from '../components/layout/Navbar/Navbar'
import HomePage from '../features/home/HomePage'

export default function AppShell() {
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
