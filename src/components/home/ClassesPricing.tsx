import React from 'react'

const Classes: React.FC = () => {
  const classes = [
    'BOOTCAMP',
    'DANCE CARDIO',
    'KICKBOXING',
    'STRENGTH & CONDITIONING'
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-12 tracking-wide">
            CLASSES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {classes.map((className, index) => (
              <div key={index} className="bg-white border-2 border-neutral-800 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-neutral-900 tracking-wide">
                  {className}
                </h3>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <p className="text-lg text-neutral-600 mb-6">
              Ready to join our empowering fitness community?
            </p>
            <a
              href="/pricing"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2"
            >
              View Pricing & Plans
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Classes
