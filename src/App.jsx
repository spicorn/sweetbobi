import CompleteNavbar from './components/CompleteNavbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import BeautyProducts from './pages/BeautyProducts'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
      <div className="min-h-screen bg-gray-50">
        <CompleteNavbar />
      <main>
        <section id="home" className="scroll-mt-24">
          <Home />
        </section>
        <section id="about" className="scroll-mt-24">
          <About />
        </section>
        <section id="products" className="scroll-mt-24">
          <BeautyProducts />
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>
      <Footer />
      </div>
  )
}

export default App
