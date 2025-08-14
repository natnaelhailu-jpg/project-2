import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Award, Heart, Users, Target } from 'lucide-react'

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About - AfroHeat Fitness | Our Story & Mission in Addis Ababa</title>
        <meta
          name="description"
          content="Learn about AfroHeat Fitness founder's story, our mission to empower women through African-inspired fitness, and our certified instructors in Addis Ababa."
        />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="gradient-bg text-white section-padding">
          <div className="container-custom text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Our Story
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto">
              Empowering women through the beautiful fusion of African culture and modern fitness
            </p>
          </div>
        </section>

        {/* Founder Story */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-6">
                  Meet Our Founder
                </h2>
                <h3 className="text-xl font-semibold text-primary-500 mb-4">
                  Hamrawit Gizaw
                </h3>
                <p className="text-neutral-700 mb-4">
                  Hamrawit Gizaw is the visionary founder of AfroHeat Fitness, bringing a unique blend of
                  international education and deep cultural understanding to women's fitness in Ethiopia.
                  With a BSc in Computer Science and an MSc in Business Psychology from universities in the
                  U.S. and U.K., Hamrawit returned to Ethiopia in 2021 with a clear mission.
                </p>
                <p className="text-neutral-700 mb-4">
                  As an internationally certified personal trainer and group fitness instructor, she founded
                  AfroHeat in September 2021 to close the industry gap by focusing on women-specific workouts
                  and creating safe spaces for empowerment.
                </p>
                <p className="text-neutral-700 mb-4">
                  "I wanted to create a space where women could celebrate their heritage while
                  building strength and confidence. AfroHeat is more than a gym - it's a community
                  where culture and fitness unite to empower every woman who walks through our doors."
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-500">15+</div>
                    <div className="text-sm text-neutral-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary-500">500+</div>
                    <div className="text-sm text-neutral-600">Women Empowered</div>
                  </div>
                </div>
              </div>
              <div className="animate-slide-up animation-delay-400">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Almaz Tesfaye - Founder"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-6">
                Our Mission & Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Heart,
                  title: 'Empowerment',
                  description: 'Building confidence and strength in every woman',
                },
                {
                  icon: Users,
                  title: 'Community',
                  description: 'Creating lasting bonds through shared experiences',
                },
                {
                  icon: Target,
                  title: 'Excellence',
                  description: 'Delivering the highest quality fitness programs',
                },
                {
                  icon: Award,
                  title: 'Culture',
                  description: 'Celebrating African heritage through movement',
                },
              ].map((value, index) => {
                const IconComponent = value.icon
                return (
                  <div
                    key={value.title}
                    className={`text-center animate-slide-up animation-delay-${index * 200}`}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
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
          </div>
        </section>

        {/* Team */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-6">
                Our Certified Instructors
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Meet our passionate team of certified fitness professionals who bring energy,
                expertise, and cultural authenticity to every class.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: 'Meron Tadesse',
                  role: 'Dance Cardio Specialist',
                  image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  certifications: ['ACSM Certified', 'Dance Fitness Specialist'],
                },
                {
                  name: 'Sara Bekele',
                  role: 'Strength & Conditioning Coach',
                  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  certifications: ['NASM Certified', 'Functional Movement Specialist'],
                },
                {
                  name: 'Hanan Mohammed',
                  role: 'Kickboxing Instructor',
                  image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  certifications: ['Kickboxing Certified', 'Self-Defense Instructor'],
                },
                {
                  name: 'Bethlehem Girma',
                  role: 'Wellness Coach',
                  image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  certifications: ['Nutrition Specialist', 'Wellness Coach'],
                },
              ].map((instructor, index) => (
                <div
                  key={instructor.name}
                  className={`card p-6 text-center animate-slide-up animation-delay-${index * 200}`}
                >
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-primary-500 font-medium mb-3">
                    {instructor.role}
                  </p>
                  <div className="space-y-1">
                    {instructor.certifications.map((cert, idx) => (
                      <div key={idx} className="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default About
