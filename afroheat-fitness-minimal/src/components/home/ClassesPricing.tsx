import React from 'react'

const ClassesPricing: React.FC = () => {
  const classes = [
    'BOOTCAMP',
    'DANCE CARDIO',
    'KICKBOXING',
    'STRENGTH & CONDITIONING'
  ]

  const pricingPlans = {
    oneMonth: [
      {
        name: 'Strength & Conditioning',
        schedule: 'Mon–Fri',
        price: '15,000 ETB',
        includes: 'Free kickboxing session + sauna'
      },
      {
        name: 'Kickboxing',
        schedule: 'Mon–Sat',
        price: '10,000 ETB',
        includes: 'Free Strength & Conditioning session + sauna'
      },
      {
        name: 'Combination Plan',
        schedule: 'Any class, any day',
        price: '20,000 ETB',
        includes: 'Access to all classes'
      }
    ],
    threeMonth: [
      {
        name: 'Strength & Conditioning',
        price: '33,000 ETB',
        note: 'Up to 2-week pause allowed'
      },
      {
        name: 'Kickboxing',
        price: '23,000 ETB',
        note: 'Up to 2-week pause allowed'
      },
      {
        name: 'Combined Classes',
        price: '43,000 ETB',
        note: 'Up to 2-week pause allowed'
      }
    ],
    sixMonth: [
      {
        name: 'Strength & Conditioning',
        price: '53,000 ETB',
        note: 'Up to 1-month pause allowed'
      },
      {
        name: 'Kickboxing',
        price: '38,000 ETB',
        note: 'Up to 1-month pause allowed'
      },
      {
        name: 'Combined Classes',
        price: '72,000 ETB',
        note: 'Up to 1-month pause allowed'
      }
    ]
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Classes Section */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-12 tracking-wide">
              CLASSES
            </h2>
            <div className="space-y-6">
              {classes.map((className, index) => (
                <div key={index} className="border-b-2 border-neutral-800 pb-4">
                  <h3 className="text-xl font-bold text-neutral-900 tracking-wide">
                    {className}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-8 tracking-wide">
              PRICING & MEMBERSHIP PACKAGES
            </h2>

            {/* 1-Month Plans */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary-600 mb-4">1-Month Plans</h3>
              <div className="space-y-4">
                {pricingPlans.oneMonth.map((plan, index) => (
                  <div key={index} className="bg-white border-2 border-neutral-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-neutral-900">{plan.name}</h4>
                      <span className="font-bold text-primary-600">{plan.price}</span>
                    </div>
                    {plan.schedule && (
                      <p className="text-sm text-neutral-600 mb-1">Schedule: {plan.schedule}</p>
                    )}
                    <p className="text-sm text-neutral-600">{plan.includes}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3-Month Plans */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-secondary-600 mb-4">3-Month Plans</h3>
              <div className="space-y-4">
                {pricingPlans.threeMonth.map((plan, index) => (
                  <div key={index} className="bg-white border-2 border-neutral-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-neutral-900">{plan.name}</h4>
                      <span className="font-bold text-secondary-600">{plan.price}</span>
                    </div>
                    <p className="text-sm text-neutral-600">{plan.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 6-Month Plans */}
            <div>
              <h3 className="text-2xl font-bold text-accent-600 mb-4">6-Month Plans</h3>
              <div className="space-y-4">
                {pricingPlans.sixMonth.map((plan, index) => (
                  <div key={index} className="bg-white border-2 border-neutral-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-neutral-900">{plan.name}</h4>
                      <span className="font-bold text-accent-600">{plan.price}</span>
                    </div>
                    <p className="text-sm text-neutral-600">{plan.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClassesPricing
