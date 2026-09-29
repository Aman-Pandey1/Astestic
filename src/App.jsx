import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Facility from './components/Facility'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Facility />
        <Reviews />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  )
}

export default App
