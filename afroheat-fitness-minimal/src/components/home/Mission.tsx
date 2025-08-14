import React from 'react'
import { Heart, Users, Zap, Target } from 'lucide-react'

const Mission: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Empowerment',
      description: 'Building confidence and strength in every woman who walks through our doors.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Creating lasting bonds and friendships through shared fitness journeys.',
    },
    {
      icon: Zap,
      title: 'Energy',
      description: 'Bringing high-energy, fun workouts that make fitness feel like celebration.',
    },
    {
      icon: Target,
      title: 'Results',
      description: 'Delivering real fitness results through proven African-inspired training methods.',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-6 tracking-wide">
            EMPOWERING WOMEN THROUGH<br />
            AFRICAN-INSPIRED MOVEMENT
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div
                key={value.title}
                className={`text-center animate-slide-up animation-delay-${index * 200}`}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-neutral-600">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 mb-6">
              Why Choose AfroHeat?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <p className="text-neutral-700">
                  <strong>Culturally Rich:</strong> Experience authentic African dance and movement patterns that connect you to heritage and tradition.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <p className="text-neutral-700">
                  <strong>Women-Focused:</strong> A safe, supportive environment designed specifically for women's fitness needs and goals.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <p className="text-neutral-700">
                  <strong>Expert Instruction:</strong> Certified trainers with deep knowledge of both fitness science and African movement traditions.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <p className="text-neutral-700">
                  <strong>Holistic Approach:</strong> We focus on physical strength, mental wellness, and community connection.
                </p>
              </div>
            </div>
          </div>

          <div className="animate-slide-up animation-delay-400">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Women exercising together"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent rounded-2xl" />

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-500">500+</div>
                  <div className="text-sm text-neutral-600">Happy Members</div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-500">50+</div>
                  <div className="text-sm text-neutral-600">Classes Weekly</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
