import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, MapPin, Clock, Users } from 'lucide-react'

const UpcomingEvents: React.FC = () => {
  const events = [
    {
      id: 1,
      title: 'African Dance Workshop',
      date: '2024-02-15',
      time: '10:00 AM',
      location: 'Main Studio',
      attendees: 25,
      maxAttendees: 30,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Learn traditional Ethiopian dance moves in this special workshop.',
      price: 'Free for Members',
    },
    {
      id: 2,
      title: 'Women\'s Empowerment Bootcamp',
      date: '2024-02-20',
      time: '6:00 PM',
      location: 'Outdoor Area',
      attendees: 18,
      maxAttendees: 20,
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Special evening bootcamp focused on building confidence and strength.',
      price: '200 ETB',
    },
    {
      id: 3,
      title: 'Healthy Cooking Class',
      date: '2024-02-25',
      time: '2:00 PM',
      location: 'Community Kitchen',
      attendees: 12,
      maxAttendees: 15,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Learn to prepare nutritious Ethiopian meals that fuel your fitness journey.',
      price: '150 ETB',
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

  return (
    <section className="section-padding bg-neutral-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Upcoming Events
          </h2>
          <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto">
            Join us for special workshops, community events, and exclusive classes 
            designed to enhance your fitness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`bg-neutral-800 rounded-xl overflow-hidden hover:bg-neutral-700 transition-colors duration-300 animate-slide-up animation-delay-${index * 200}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {event.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-neutral-300 mb-4 text-sm">
                  {event.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-neutral-400">
                    <Calendar className="w-4 h-4 mr-2 text-primary-400" />
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center text-sm text-neutral-400">
                    <Clock className="w-4 h-4 mr-2 text-primary-400" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-neutral-400">
                    <MapPin className="w-4 h-4 mr-2 text-primary-400" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-neutral-400">
                    <Users className="w-4 h-4 mr-2 text-primary-400" />
                    {event.attendees}/{event.maxAttendees} attending
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="w-full bg-neutral-700 rounded-full h-2 mr-3">
                    <div 
                      className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-neutral-400 whitespace-nowrap">
                    {event.maxAttendees - event.attendees} spots left
                  </span>
                </div>

                <button className="w-full mt-4 bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  RSVP Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/events"
            className="btn-outline border-white text-white hover:bg-white hover:text-neutral-900"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  )
}

export default UpcomingEvents
