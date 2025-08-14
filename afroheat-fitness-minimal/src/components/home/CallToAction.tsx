import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Heart } from 'lucide-react'

const CallToAction: React.FC = () => {
  return (
    <section className="section-padding gradient-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full" />
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-full" />
        <div className="absolute bottom-20 left-32 w-12 h-12 border-2 border-white rounded-full" />
        <div className="absolute bottom-32 right-10 w-24 h-24 border-2 border-white rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2">
              <Star className="w-8 h-8 text-accent-300 fill-current" />
              <Heart className="w-8 h-8 text-white" />
              <Star className="w-8 h-8 text-accent-300 fill-current" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            Ready to Transform
            <span className="block">Your Life?</span>
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Join our vibrant community of strong, empowered women and discover 
            the joy of African-inspired fitness. Your journey starts today!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/classes"
              className="bg-white text-primary-600 hover:bg-neutral-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 text-lg"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              to="/pricing"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
            >
              View Membership Plans
            </Link>
          </div>

          {/* Special Offer */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-2">New Member Special!</h3>
            <p className="text-white/90 mb-4">
              Get your first week FREE when you sign up for any membership plan
            </p>
            <div className="text-2xl font-bold text-accent-300">
              Save 500 ETB
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce-slow">
        <div className="w-4 h-4 bg-white/30 rounded-full" />
      </div>
      <div className="absolute top-40 right-20 animate-bounce-slow animation-delay-200">
        <div className="w-6 h-6 bg-accent-300/50 rounded-full" />
      </div>
      <div className="absolute bottom-32 left-20 animate-bounce-slow animation-delay-400">
        <div className="w-5 h-5 bg-white/40 rounded-full" />
      </div>
      <div className="absolute bottom-20 right-32 animate-bounce-slow animation-delay-600">
        <div className="w-3 h-3 bg-accent-300/60 rounded-full" />
      </div>
    </section>
  )
}

export default CallToAction
