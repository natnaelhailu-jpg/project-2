import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Classes from './pages/Classes'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Shop from './pages/Shop'
import Events from './pages/Events'
import Contact from './pages/Contact'
import Blog from './pages/Blog'

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
