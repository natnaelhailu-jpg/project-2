import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Clock, Users, Zap, Calendar, Star } from 'lucide-react'
import BookingModal from '../components/BookingModal'

const Classes: React.FC = () => {
  const [bookingModal, setBookingModal] = useState({
    isOpen: false,
    className: '',
    classTime: '',
    instructor: ''
  })

  const openBookingModal = (className: string, classTime: string, instructor: string) => {
    setBookingModal({
      isOpen: true,
      className,
      classTime,
      instructor
    })
  }

  const closeBookingModal = () => {
    setBookingModal({
      isOpen: false,
      className: '',
      classTime: '',
      instructor: ''
    })
  }

  const classes = [
    {
      id: 1,
      name: 'African Dance Cardio',
      description: 'High-energy cardio workout featuring traditional and modern African dance moves. Perfect for burning calories while celebrating culture.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '45 min',
      difficulty: 'Beginner to Intermediate',
      intensity: 'High',
      participants: '15-20',
      schedule: ['Monday 6:00 PM', 'Wednesday 7:00 AM', 'Friday 6:00 PM', 'Saturday 9:00 AM'],
      benefits: ['Cardiovascular health', 'Cultural connection', 'Stress relief', 'Full-body workout'],
      instructor: 'Meron Tadesse',
      rating: 4.9,
    },
    {
      id: 2,
      name: 'Bootcamp Strength',
      description: 'Full-body strength training with African-inspired movements and music. Build muscle and endurance in a supportive environment.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '50 min',
      difficulty: 'Intermediate to Advanced',
      intensity: 'High',
      participants: '12-15',
      schedule: ['Tuesday 6:00 AM', 'Thursday 6:00 PM', 'Saturday 10:30 AM'],
      benefits: ['Muscle building', 'Functional strength', 'Mental toughness', 'Community bonding'],
      instructor: 'Sara Bekele',
      rating: 4.8,
    },
    {
      id: 3,
      name: 'Afro Kickboxing',
      description: 'Martial arts meets African rhythm for an empowering workout experience. Learn self-defense while getting fit.',
      image: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '40 min',
      difficulty: 'All Levels',
      intensity: 'Medium to High',
      participants: '10-15',
      schedule: ['Monday 7:00 AM', 'Wednesday 6:00 PM', 'Friday 7:00 AM'],
      benefits: ['Self-defense skills', 'Coordination', 'Confidence building', 'Stress release'],
      instructor: 'Hanan Mohammed',
      rating: 4.9,
    },
    {
      id: 4,
      name: 'Strength & Conditioning',
      description: 'Traditional strength training with a cultural twist. Focus on building lean muscle and improving overall fitness.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '55 min',
      difficulty: 'Beginner to Advanced',
      intensity: 'Medium to High',
      participants: '8-12',
      schedule: ['Tuesday 7:00 AM', 'Thursday 7:00 AM', 'Sunday 10:00 AM'],
      benefits: ['Muscle definition', 'Bone density', 'Metabolic boost', 'Injury prevention'],
      instructor: 'Bethlehem Girma',
      rating: 4.7,
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty.includes('Beginner')) return 'text-green-600 bg-green-100'
    if (difficulty.includes('Intermediate')) return 'text-yellow-600 bg-yellow-100'
    if (difficulty.includes('Advanced')) return 'text-red-600 bg-red-100'
    return 'text-blue-600 bg-blue-100'
  }

  const getIntensityColor = (intensity: string) => {
    if (intensity === 'High') return 'text-red-600'
    if (intensity.includes('Medium')) return 'text-yellow-600'
    return 'text-green-600'
  }

  return (
    <>
      <Helmet>
        <title>Classes - AfroHeat Fitness | African-Inspired Fitness Classes in Addis Ababa</title>
        <meta
          name="description"
          content="Discover our African-inspired fitness classes including dance cardio, bootcamp, kickboxing, and strength training for women in Addis Ababa."
        />
        <meta
          name="keywords"
          content="African dance cardio, bootcamp classes Addis Ababa, women's kickboxing, strength training Ethiopia, fitness classes for women"
        />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="gradient-bg text-white section-padding">
          <div className="container-custom text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Our Classes
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto">
              Discover the perfect class for your fitness journey. From high-energy dance cardio
              to strength-building bootcamps, we have something for every woman.
            </p>
          </div>
        </section>

        {/* Classes Grid */}
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {classes.map((classItem, index) => (
                <div
                  key={classItem.id}
                  className={`card p-8 animate-slide-up animation-delay-${index * 200}`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <img
                        src={classItem.image}
                        alt={classItem.name}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-neutral-900">
                          {classItem.name}
                        </h3>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-accent-400 fill-current" />
                          <span className="text-sm font-medium">{classItem.rating}</span>
                        </div>
                      </div>

                      <p className="text-neutral-600 mb-4">
                        {classItem.description}
                      </p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center space-x-1">
                            <Clock className="w-4 h-4 text-primary-500" />
                            <span>Duration:</span>
                          </span>
                          <span className="font-medium">{classItem.duration}</span>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center space-x-1">
                            <Zap className={`w-4 h-4 ${getIntensityColor(classItem.intensity)}`} />
                            <span>Intensity:</span>
                          </span>
                          <span className="font-medium">{classItem.intensity}</span>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center space-x-1">
                            <Users className="w-4 h-4 text-primary-500" />
                            <span>Class Size:</span>
                          </span>
                          <span className="font-medium">{classItem.participants}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(classItem.difficulty)}`}>
                          {classItem.difficulty}
                        </span>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-neutral-900 mb-2">Instructor:</h4>
                        <p className="text-neutral-600">{classItem.instructor}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2 flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-primary-500" />
                        Schedule:
                      </h4>
                      <ul className="space-y-1">
                        {classItem.schedule.map((time, idx) => (
                          <li key={idx} className="text-sm text-neutral-600">
                            {time}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {classItem.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-neutral-600 flex items-center">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => openBookingModal(classItem.name, classItem.schedule[0], classItem.instructor)}
                      className="btn-primary flex-1"
                    >
                      Book This Class
                    </button>
                    <button
                      onClick={() => openBookingModal(classItem.name, classItem.schedule[0], classItem.instructor)}
                      className="btn-outline flex-1"
                    >
                      Try Free Class
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Modal */}
        <BookingModal
          isOpen={bookingModal.isOpen}
          onClose={closeBookingModal}
          className={bookingModal.className}
          classTime={bookingModal.classTime}
          instructor={bookingModal.instructor}
        />
      </div>
    </>
  )
}

export default Classes
