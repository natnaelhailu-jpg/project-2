import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Calendar, MapPin, Clock, Users, Ticket } from 'lucide-react'

const Events: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const events = [
    {
      id: 1,
      title: 'African Dance Workshop',
      date: '2024-02-15',
      time: '10:00 AM - 12:00 PM',
      location: 'Main Studio',
      instructor: 'Meron Tadesse',
      price: 'Free for Members',
      paidPrice: 150,
      capacity: 30,
      registered: 25,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Learn traditional Ethiopian dance moves and their cultural significance in this special workshop.',
      category: 'Workshop',
    },
    {
      id: 2,
      title: 'Women\'s Empowerment Bootcamp',
      date: '2024-02-20',
      time: '6:00 PM - 7:30 PM',
      location: 'Outdoor Area',
      instructor: 'Sara Bekele',
      price: '200 ETB',
      paidPrice: 200,
      capacity: 20,
      registered: 18,
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Special evening bootcamp focused on building confidence and strength through challenging workouts.',
      category: 'Special Class',
    },
    {
      id: 3,
      title: 'Healthy Cooking Class',
      date: '2024-02-25',
      time: '2:00 PM - 4:00 PM',
      location: 'Community Kitchen',
      instructor: 'Bethlehem Girma',
      price: '150 ETB',
      paidPrice: 150,
      capacity: 15,
      registered: 12,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Learn to prepare nutritious Ethiopian meals that fuel your fitness journey.',
      category: 'Wellness',
    },
    {
      id: 4,
      title: 'AfroHeat Anniversary Celebration',
      date: '2024-03-01',
      time: '5:00 PM - 9:00 PM',
      location: 'Main Studio & Outdoor Area',
      instructor: 'All Instructors',
      price: 'Free',
      paidPrice: 0,
      capacity: 100,
      registered: 45,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Join us for our 3rd anniversary celebration with special classes, food, and prizes!',
      category: 'Celebration',
    },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Workshop': return 'bg-primary-100 text-primary-700'
      case 'Special Class': return 'bg-secondary-100 text-secondary-700'
      case 'Wellness': return 'bg-accent-100 text-accent-700'
      case 'Celebration': return 'bg-purple-100 text-purple-700'
      default: return 'bg-neutral-100 text-neutral-700'
    }
  }

  return (
    <>
      <Helmet>
        <title>Events - AfroHeat Fitness | Workshops & Special Classes in Addis Ababa</title>
        <meta 
          name="description" 
          content="Join AfroHeat Fitness special events, workshops, and celebrations. Book your spot for African dance workshops, wellness classes, and community events in Addis Ababa." 
        />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="gradient-bg text-white section-padding">
          <div className="container-custom text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Events & Workshops
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto">
              Join our special events, workshops, and community celebrations designed 
              to enhance your fitness journey and connect with fellow sisters.
            </p>
          </div>
        </section>

        {/* Events Grid */}
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Events List */}
              <div className="lg:col-span-2">
                <div className="space-y-8">
                  {events.map((event, index) => (
                    <div
                      key={event.id}
                      className={`card p-6 animate-slide-up animation-delay-${index * 200}`}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-1">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                        </div>
                        
                        <div className="md:col-span-2">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)} mb-2`}>
                                {event.category}
                              </span>
                              <h3 className="text-xl font-bold text-neutral-900">
                                {event.title}
                              </h3>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-primary-500">
                                {event.price}
                              </div>
                              {event.paidPrice > 0 && (
                                <div className="text-sm text-neutral-500">
                                  Non-members: {event.paidPrice} ETB
                                </div>
                              )}
                            </div>
                          </div>

                          <p className="text-neutral-600 mb-4">
                            {event.description}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                            <div className="flex items-center text-sm text-neutral-600">
                              <Calendar className="w-4 h-4 mr-2 text-primary-500" />
                              {formatDate(event.date)}
                            </div>
                            <div className="flex items-center text-sm text-neutral-600">
                              <Clock className="w-4 h-4 mr-2 text-primary-500" />
                              {event.time}
                            </div>
                            <div className="flex items-center text-sm text-neutral-600">
                              <MapPin className="w-4 h-4 mr-2 text-primary-500" />
                              {event.location}
                            </div>
                            <div className="flex items-center text-sm text-neutral-600">
                              <Users className="w-4 h-4 mr-2 text-primary-500" />
                              {event.registered}/{event.capacity} registered
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex-1 mr-4">
                              <div className="w-full bg-neutral-200 rounded-full h-2">
                                <div 
                                  className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                                />
                              </div>
                              <div className="text-xs text-neutral-500 mt-1">
                                {event.capacity - event.registered} spots remaining
                              </div>
                            </div>
                            
                            <button className="btn-primary flex items-center space-x-2">
                              <Ticket className="w-4 h-4" />
                              <span>RSVP</span>
                            </button>
                          </div>

                          <div className="mt-3 text-sm text-neutral-600">
                            <strong>Instructor:</strong> {event.instructor}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="space-y-6">
                  {/* Quick RSVP */}
                  <div className="card p-6">
                    <h3 className="text-lg font-bold text-neutral-900 mb-4">
                      Quick RSVP
                    </h3>
                    <p className="text-neutral-600 text-sm mb-4">
                      Members get priority booking and special discounts on all events.
                    </p>
                    <button className="btn-primary w-full mb-3">
                      View Member Benefits
                    </button>
                    <button className="btn-outline w-full">
                      Become a Member
                    </button>
                  </div>

                  {/* Event Categories */}
                  <div className="card p-6">
                    <h3 className="text-lg font-bold text-neutral-900 mb-4">
                      Event Categories
                    </h3>
                    <div className="space-y-2">
                      {['Workshop', 'Special Class', 'Wellness', 'Celebration'].map(category => (
                        <button
                          key={category}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${getCategoryColor(category)} hover:opacity-80`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Newsletter */}
                  <div className="card p-6">
                    <h3 className="text-lg font-bold text-neutral-900 mb-4">
                      Stay Updated
                    </h3>
                    <p className="text-neutral-600 text-sm mb-4">
                      Get notified about new events and early bird discounts.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Your email"
                        className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500"
                      />
                      <button className="btn-primary w-full">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Events
