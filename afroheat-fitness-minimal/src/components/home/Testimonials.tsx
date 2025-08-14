import React from 'react'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Meron Tadesse',
      role: 'Marketing Manager',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 5,
      text: 'AfroHeat has completely transformed my relationship with fitness. The African dance cardio classes are so much fun that I forget I\'m working out! The community here is incredible.',
    },
    {
      id: 2,
      name: 'Sara Bekele',
      role: 'Software Developer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 5,
      text: 'I\'ve tried many gyms in Addis, but nothing compares to AfroHeat. The instructors are amazing, and I love how the workouts celebrate our culture while getting us in the best shape of our lives.',
    },
    {
      id: 3,
      name: 'Hanan Mohammed',
      role: 'Teacher',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 5,
      text: 'The bootcamp classes have made me stronger than I ever thought possible. The women-only environment makes me feel comfortable and supported. I\'ve made lifelong friends here!',
    },
    {
      id: 4,
      name: 'Bethlehem Girma',
      role: 'Entrepreneur',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 5,
      text: 'AfroHeat is more than a gym - it\'s a sisterhood. The energy in every class is infectious, and I always leave feeling empowered and ready to take on the world.',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-12 tracking-wide">
            TESTIMONIALS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="text-center"
            >
              {/* Photo Placeholder */}
              <div className="bg-white border-2 border-neutral-800 rounded-lg p-12 mb-6 aspect-square flex items-center justify-center">
                <span className="text-2xl font-bold text-neutral-800 tracking-wide">PHOTO</span>
              </div>

              {/* Testimonial Label */}
              <h3 className="text-xl font-bold text-neutral-900 tracking-wide">
                TESTIMONIAL
              </h3>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary-500 mb-2">500+</div>
            <div className="text-neutral-600">Happy Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-secondary-500 mb-2">2000+</div>
            <div className="text-neutral-600">Classes Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-accent-500 mb-2">98%</div>
            <div className="text-neutral-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">3</div>
            <div className="text-neutral-600">Years Strong</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
