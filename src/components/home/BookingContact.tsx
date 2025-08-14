import React from 'react'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

const BookingContact: React.FC = () => {
  const handleWhatsAppBooking = () => {
    const message = "Hi! I'd like to book a free trial class at AfroHeat Fitness"
    const whatsappUrl = `https://wa.me/251911123456?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const openGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Bole, Addis Ababa, Ethiopia')}`
    window.open(googleMapsUrl, '_blank')
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-6 tracking-wide">
            BOOK & CONTACT
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Ready to start your fitness journey? Book a free trial or get in touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Booking Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Book Your Free Trial</h3>

            <div className="space-y-4 mb-8">
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-2">What's Included:</h4>
                <ul className="text-neutral-600 space-y-1 text-sm">
                  <li>• 1-hour trial class of your choice</li>
                  <li>• Personal consultation with instructor</li>
                  <li>• Studio tour and orientation</li>
                  <li>• Fitness assessment (optional)</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleWhatsAppBooking}
                className="w-full btn-primary flex items-center justify-center gap-2 text-lg py-4"
              >
                <MessageCircle className="w-5 h-5" />
                Book Free Trial via WhatsApp
              </button>
              <a
                href="tel:+251911123456"
                className="w-full btn-outline flex items-center justify-center gap-2 text-lg py-4"
              >
                <Phone className="w-5 h-5" />
                Call to Book: +251 911 123 456
              </a>
            </div>
          </div>

          {/* Enhanced Contact Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-neutral-900">Get in Touch</h3>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-md flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-neutral-900">Visit Our Studio</h4>
                  <p className="text-neutral-600">Bole, Addis Ababa, Ethiopia</p>
                  <p className="text-sm text-neutral-500">Near Bole Atlas Hotel</p>
                  <button
                    onClick={openGoogleMaps}
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-1"
                  >
                    Get Directions →
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-neutral-900">Studio Hours</h4>
                  <div className="text-neutral-600 text-sm space-y-1">
                    <div className="flex justify-between">
                      <span>Mon - Fri:</span>
                      <span>6:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>7:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-neutral-900">Email & Phone</h4>
                  <div className="space-y-1">
                    <a href="mailto:hello@afroheatfitness.com" className="text-primary-600 hover:text-primary-700 block">
                      hello@afroheatfitness.com
                    </a>
                    <a href="tel:+251911123456" className="text-primary-600 hover:text-primary-700 block">
                      +251 911 123 456
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl p-6 text-white">
              <h4 className="font-semibold mb-4">Why Choose AfroHeat?</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm opacity-90">Happy Members</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm opacity-90">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingContact
