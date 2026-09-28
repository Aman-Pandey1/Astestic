import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Facility from './components/Facility'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-cream">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Facility />
        <Reviews />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
