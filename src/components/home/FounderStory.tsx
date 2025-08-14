import React from 'react'
import { GraduationCap, Heart, Users, Globe } from 'lucide-react'

const FounderStory: React.FC = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: 'International Education',
      description: 'BSc Computer Science (U.S.) & MSc Business Psychology (U.K.)'
    },
    {
      icon: Globe,
      title: 'Returned to Ethiopia 2021',
      description: 'Came back with a mission to close the fitness industry gap for women'
    },
    {
      icon: Users,
      title: 'Certified Professional',
      description: 'Internationally certified personal trainer and group fitness instructor'
    },
    {
      icon: Heart,
      title: 'Founded September 2021',
      description: 'Creating safe spaces for women-specific workouts embracing African culture'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Founder Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-white border-2 border-neutral-800 rounded-2xl p-12 aspect-square flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-neutral-800 tracking-wide">
                  FOUNDER PHOTO
                </span>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-400 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-400 rounded-full"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-8 tracking-wide">
              ABOUT THE FOUNDER & PHILOSOPHY
            </h2>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary-600 mb-4">Hamrawit Gizaw</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                Hamrawit Gizaw is the visionary founder of AfroHeat Fitness, bringing a unique blend of
                international education and deep cultural understanding to women's fitness in Ethiopia.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                With a BSc in Computer Science and an MSc in Business Psychology from universities in the
                U.S. and U.K., Hamrawit returned to Ethiopia in 2021 with a clear mission: to close the
                industry gap by focusing on women-specific workouts and creating safe spaces for empowerment.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                As an internationally certified personal trainer and group fitness instructor, she founded
                AfroHeat in September 2021 to promote healthy, active lifestyles within a community that
                embraces African music, dance, and culture.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                AfroHeat is more than a fitness studio—it's a movement that creates a space where women
                can thrive both physically and mentally while celebrating their African heritage.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-neutral-100">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-100 p-3 rounded-lg">
                        <IconComponent className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral-900 mb-2">{achievement.title}</h4>
                        <p className="text-sm text-neutral-600">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Website Link */}
            <div className="mt-8 p-6 bg-white rounded-xl border-2 border-primary-200">
              <p className="text-center">
                <span className="text-neutral-600">Visit us at: </span>
                <a
                  href="https://afroheatfitness.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 font-bold hover:text-primary-700 transition-colors"
                >
                  afroheatfitness.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FounderStory
