import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <Helmet>
        <title>Contact - AfroHeat Fitness | Get in Touch with Us in Addis Ababa</title>
        <meta 
          name="description" 
          content="Contact AfroHeat Fitness in Addis Ababa. Get directions, hours, phone number, and send us a message. Located in Bole, Addis Ababa, Ethiopia." 
        />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="gradient-bg text-white section-padding">
          <div className="container-custom text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto">
              Ready to start your fitness journey? We'd love to hear from you. 
              Contact us today to learn more about our classes and community.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-slide-up">
                <div className="card p-8">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                    Send us a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="+251 911 123 456"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="membership">Membership Inquiry</option>
                        <option value="classes">Class Information</option>
                        <option value="events">Events & Workshops</option>
                        <option value="personal-training">Personal Training</option>
                        <option value="partnerships">Partnerships</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors resize-vertical"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="animate-slide-up animation-delay-400">
                <div className="space-y-8">
                  {/* Contact Details */}
                  <div className="card p-8">
                    <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                      Contact Information
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-primary-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-neutral-900 mb-1">Address</h3>
                          <p className="text-neutral-600">
                            Bole Sub City, Woreda 03<br />
                            Near Edna Mall<br />
                            Addis Ababa, Ethiopia
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-secondary-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-neutral-900 mb-1">Phone</h3>
                          <p className="text-neutral-600">
                            +251 911 123 456<br />
                            +251 911 654 321
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-accent-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-neutral-900 mb-1">Email</h3>
                          <p className="text-neutral-600">
                            hello@afroheatfitness.com<br />
                            info@afroheatfitness.com
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-primary-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-neutral-900 mb-1">Hours</h3>
                          <div className="text-neutral-600 space-y-1">
                            <p>Monday - Friday: 6:00 AM - 9:00 PM</p>
                            <p>Saturday: 7:00 AM - 8:00 PM</p>
                            <p>Sunday: 8:00 AM - 6:00 PM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="card p-8">
                    <h3 className="text-xl font-bold text-neutral-900 mb-4">
                      Quick Actions
                    </h3>
                    <div className="space-y-3">
                      <button className="btn-primary w-full">
                        Book a Free Trial Class
                      </button>
                      <button className="btn-outline w-full">
                        Schedule a Tour
                      </button>
                      <button className="btn-outline w-full">
                        View Class Schedule
                      </button>
                    </div>
                  </div>

                  {/* Emergency Contact */}
                  <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-secondary-800 mb-2">
                      Emergency Contact
                    </h3>
                    <p className="text-secondary-700 text-sm mb-2">
                      For urgent matters outside business hours:
                    </p>
                    <p className="text-secondary-800 font-medium">
                      +251 911 999 888
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-white py-16">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Find Us
              </h2>
              <p className="text-neutral-600">
                Located in the heart of Bole, easily accessible by public transport
              </p>
            </div>
            
            <div className="bg-neutral-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
                <p className="text-neutral-600">
                  Interactive map will be integrated here
                </p>
                <p className="text-sm text-neutral-500 mt-2">
                  Bole Sub City, Near Edna Mall, Addis Ababa
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact
