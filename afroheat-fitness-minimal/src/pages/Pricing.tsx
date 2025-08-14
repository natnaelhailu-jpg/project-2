import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Check, Star, Crown, Heart } from 'lucide-react'

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')

  const plans = {
    oneMonth: [
      {
        id: 'strength-1m',
        name: 'Strength & Conditioning',
        description: 'Monday to Friday sessions',
        price: 15000,
        schedule: 'Mon–Fri',
        features: [
          'Strength & Conditioning classes',
          'Free kickboxing session',
          'Sauna access included',
          'Professional instruction',
          'Equipment provided',
        ],
        popular: false,
        color: 'from-primary-500 to-primary-600',
        icon: Star,
      },
      {
        id: 'kickboxing-1m',
        name: 'Kickboxing',
        description: 'Monday to Saturday sessions',
        price: 10000,
        schedule: 'Mon–Sat',
        features: [
          'Kickboxing classes',
          'Free Strength & Conditioning session',
          'Sauna access included',
          'Self-defense techniques',
          'High-energy workouts',
        ],
        popular: true,
        color: 'from-secondary-500 to-secondary-600',
        icon: Heart,
      },
      {
        id: 'combination-1m',
        name: 'Combination Plan',
        description: 'Ultimate flexibility',
        price: 20000,
        schedule: 'Any class, any day',
        features: [
          'Access to all classes',
          'Complete flexibility',
          'Strength & Conditioning',
          'Kickboxing sessions',
          'Sauna access',
        ],
        popular: false,
        color: 'from-accent-500 to-accent-600',
        icon: Crown,
      },
    ],
    threeMonth: [
      {
        id: 'strength-3m',
        name: 'Strength & Conditioning',
        description: '3-month commitment',
        price: 33000,
        monthlyEquivalent: 11000,
        features: [
          'All Strength & Conditioning classes',
          'Up to 2-week pause allowed',
          'Sauna access',
          'Progress tracking',
          'Nutrition guidance',
        ],
        popular: false,
        color: 'from-primary-500 to-primary-600',
        icon: Star,
      },
      {
        id: 'kickboxing-3m',
        name: 'Kickboxing',
        description: '3-month commitment',
        price: 23000,
        monthlyEquivalent: 7667,
        features: [
          'All Kickboxing classes',
          'Up to 2-week pause allowed',
          'Sauna access',
          'Self-defense training',
          'Fitness assessment',
        ],
        popular: true,
        color: 'from-secondary-500 to-secondary-600',
        icon: Heart,
      },
      {
        id: 'combined-3m',
        name: 'Combined Classes',
        description: '3-month commitment',
        price: 43000,
        monthlyEquivalent: 14333,
        features: [
          'Access to all classes',
          'Up to 2-week pause allowed',
          'Complete flexibility',
          'Sauna access',
          'Personal progress tracking',
        ],
        popular: false,
        color: 'from-accent-500 to-accent-600',
        icon: Crown,
      },
    ],
    sixMonth: [
      {
        id: 'strength-6m',
        name: 'Strength & Conditioning',
        description: '6-month commitment',
        price: 53000,
        monthlyEquivalent: 8833,
        features: [
          'All Strength & Conditioning classes',
          'Up to 1-month pause allowed',
          'Sauna access',
          'Body composition analysis',
          'Personalized workout plans',
        ],
        popular: false,
        color: 'from-primary-500 to-primary-600',
        icon: Star,
      },
      {
        id: 'kickboxing-6m',
        name: 'Kickboxing',
        description: '6-month commitment',
        price: 38000,
        monthlyEquivalent: 6333,
        features: [
          'All Kickboxing classes',
          'Up to 1-month pause allowed',
          'Sauna access',
          'Advanced techniques training',
          'Competition preparation',
        ],
        popular: true,
        color: 'from-secondary-500 to-secondary-600',
        icon: Heart,
      },
      {
        id: 'combined-6m',
        name: 'Combined Classes',
        description: '6-month commitment',
        price: 72000,
        monthlyEquivalent: 12000,
        features: [
          'Access to all classes',
          'Up to 1-month pause allowed',
          'Complete flexibility',
          'Sauna access',
          'Personal training sessions',
        ],
        popular: false,
        color: 'from-accent-500 to-accent-600',
        icon: Crown,
      },
    ],
  }

  const [selectedPeriod, setSelectedPeriod] = useState<'oneMonth' | 'threeMonth' | 'sixMonth'>('oneMonth')

  const getCurrentPlans = () => {
    return plans[selectedPeriod]
  }

  const getPeriodLabel = (period: 'oneMonth' | 'threeMonth' | 'sixMonth') => {
    switch (period) {
      case 'oneMonth': return '1 Month'
      case 'threeMonth': return '3 Months'
      case 'sixMonth': return '6 Months'
    }
  }

  return (
    <>
      <Helmet>
        <title>Pricing - AfroHeat Fitness | Membership Plans in Addis Ababa</title>
        <meta
          name="description"
          content="Choose the perfect membership plan for your fitness journey. Affordable pricing for African-inspired fitness classes in Addis Ababa with special women-only discounts."
        />
        <meta
          name="keywords"
          content="gym membership Addis Ababa, fitness pricing Ethiopia, women's gym membership, African fitness classes cost"
        />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="gradient-bg text-white section-padding">
          <div className="container-custom text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Choose Your Plan
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto mb-8">
              Invest in yourself with our flexible membership options designed
              to fit your lifestyle and fitness goals.
            </p>

            {/* Special Offer Banner */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
              <h3 className="text-xl font-bold mb-2">🎉 Women's Month Special!</h3>
              <p className="text-white/90">
                20% off all memberships + Free first week
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            {/* Period Toggle */}
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-lg p-1 shadow-lg">
                <button
                  onClick={() => setSelectedPeriod('oneMonth')}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${selectedPeriod === 'oneMonth'
                    ? 'bg-primary-500 text-white'
                    : 'text-neutral-600 hover:text-primary-500'
                    }`}
                >
                  1 Month
                </button>
                <button
                  onClick={() => setSelectedPeriod('threeMonth')}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${selectedPeriod === 'threeMonth'
                    ? 'bg-primary-500 text-white'
                    : 'text-neutral-600 hover:text-primary-500'
                    }`}
                >
                  3 Months
                </button>
                <button
                  onClick={() => setSelectedPeriod('sixMonth')}
                  className={`px-6 py-2 rounded-md font-medium transition-colors relative ${selectedPeriod === 'sixMonth'
                    ? 'bg-primary-500 text-white'
                    : 'text-neutral-600 hover:text-primary-500'
                    }`}
                >
                  6 Months
                  <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs px-2 py-1 rounded-full">
                    Best Value
                  </span>
                </button>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {getCurrentPlans().map((plan, index) => {
                const IconComponent = plan.icon
                return (
                  <div
                    key={plan.id}
                    className={`relative card p-8 ${plan.popular ? 'ring-2 ring-primary-500 transform scale-105' : ''
                      } animate-slide-up animation-delay-${index * 200}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${plan.color} rounded-full flex items-center justify-center`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-neutral-600">
                        {plan.description}
                      </p>
                      {'schedule' in plan && (
                        <p className="text-sm text-primary-600 font-medium mt-1">
                          {plan.schedule}
                        </p>
                      )}
                    </div>

                    <div className="text-center mb-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-neutral-900">
                          {plan.price.toLocaleString()}
                        </span>
                        <span className="text-lg text-neutral-600 ml-1">ETB</span>
                        <span className="text-neutral-500 ml-1">
                          /{getPeriodLabel(selectedPeriod)}
                        </span>
                      </div>

                      {'monthlyEquivalent' in plan && plan.monthlyEquivalent && (
                        <div className="mt-2">
                          <span className="text-sm text-green-600 font-medium">
                            ~{Math.round(plan.monthlyEquivalent).toLocaleString()} ETB/month
                          </span>
                        </div>
                      )}
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-neutral-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${plan.popular
                        ? 'btn-primary'
                        : 'btn-outline hover:bg-primary-500 hover:text-white'
                        }`}
                    >
                      Get Started
                    </button>
                  </div>
                )
              })}
            </div>

            {/* Additional Info */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                All Plans Include
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6 text-primary-500" />
                  </div>
                  <h4 className="font-semibold text-neutral-900 mb-1">No Contracts</h4>
                  <p className="text-sm text-neutral-600">Cancel anytime</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6 text-secondary-500" />
                  </div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Free Trial</h4>
                  <p className="text-sm text-neutral-600">7-day free trial</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6 text-accent-600" />
                  </div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Equipment</h4>
                  <p className="text-sm text-neutral-600">All equipment provided</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6 text-primary-500" />
                  </div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Support</h4>
                  <p className="text-sm text-neutral-600">24/7 member support</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Pricing
