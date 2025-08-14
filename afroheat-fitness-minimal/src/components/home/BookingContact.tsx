import React from 'react'

const BookingContact: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Booking Section */}
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-12 tracking-wide">
              BOOKING
            </h2>
            <button className="bg-white border-2 border-neutral-800 text-neutral-800 hover:bg-neutral-100 font-bold py-4 px-12 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-xl tracking-wide">
              BOOK NOW
            </button>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-12 tracking-wide">
              CONTACT
            </h2>
            <div className="space-y-4">
              <div className="bg-white border-2 border-neutral-800 rounded-lg p-6">
                <span className="text-lg font-medium text-neutral-800">
                  Contact Information
                </span>
              </div>
              <div className="bg-white border-2 border-neutral-800 rounded-lg p-6">
                <span className="text-lg font-medium text-neutral-800">
                  Location & Hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingContact
