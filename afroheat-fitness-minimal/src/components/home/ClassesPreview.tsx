import React from 'react'
import { Link } from 'react-router-dom'
import { Clock, Users, Zap, ArrowRight } from 'lucide-react'

const ClassesPreview: React.FC = () => {
  const classes = [
    {
      id: 1,
      name: 'African Dance Cardio',
      description: 'High-energy cardio workout featuring traditional and modern African dance moves.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '45 min',
      intensity: 'High',
      participants: '15-20',
      color: 'from-primary-500 to-primary-600',
    },
    {
      id: 2,
      name: 'Bootcamp Strength',
      description: 'Full-body strength training with African-inspired movements and music.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '50 min',
      intensity: 'High',
      participants: '12-15',
      color: 'from-secondary-500 to-secondary-600',
    },
    {
      id: 3,
      name: 'Afro Kickboxing',
      description: 'Martial arts meets African rhythm for an empowering workout experience.',
      image: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '40 min',
      intensity: 'Medium',
      participants: '10-15',
      color: 'from-accent-500 to-accent-600',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-6">
            Our Signature Classes
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
            Experience the perfect blend of African culture and modern fitness through our 
            carefully designed classes that celebrate movement, strength, and sisterhood.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {classes.map((classItem, index) => (
            <div
              key={classItem.id}
              className={`card overflow-hidden animate-slide-up animation-delay-${index * 200}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={classItem.image}
                  alt={classItem.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${classItem.color} opacity-80`} />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{classItem.name}</h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{classItem.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Zap className="w-4 h-4" />
                      <span>{classItem.intensity}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{classItem.participants}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-neutral-600 mb-4">
                  {classItem.description}
                </p>
                <Link
                  to="/classes"
                  className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/classes"
            className="btn-primary text-lg px-8 py-4"
          >
            View All Classes
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ClassesPreview
