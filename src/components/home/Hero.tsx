import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Unleash Your Power',
      subtitle: 'African-Inspired Fitness for Women',
      description: 'Join our vibrant community and discover strength through movement, culture, and sisterhood.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Dance Your Way to Fitness',
      subtitle: 'High-Energy Cardio Classes',
      description: 'Experience the joy of African dance while building strength and endurance.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Strength in Sisterhood',
      subtitle: 'Bootcamp & Conditioning',
      description: 'Build confidence and power alongside amazing women in our supportive environment.',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Area */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-secondary-900/60 to-accent-900/80" />

      {/* Hero Video Section - Matching Wireframe */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          {/* Enhanced Hero Content */}
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 tracking-wide leading-tight">
              AFROHEAT FITNESS
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
              Empowering women through African-inspired movement in Addis Ababa
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join our vibrant community of strong women. Dance, sweat, and celebrate your heritage while building strength and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="https://wa.me/251911123456?text=Hi! I'm interested in joining AfroHeat Fitness classes"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                <span>📱</span> Book Free Trial
              </a>
              <Link
                to="/classes"
                className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-neutral-900 inline-flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                <span>💃</span> View Classes
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <span>✨</span> Women-Only Classes
              </div>
              <div className="flex items-center gap-2">
                <span>🎵</span> African Music & Dance
              </div>
              <div className="flex items-center gap-2">
                <span>🏆</span> Certified Instructors
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default Hero
