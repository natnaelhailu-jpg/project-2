import React from 'react'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/home/Hero'
import Mission from '../components/home/Mission'
import Testimonials from '../components/home/Testimonials'
import Classes from '../components/home/ClassesPricing'
import BookingContact from '../components/home/BookingContact'

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AfroHeat Fitness - African-Inspired Women's Fitness in Addis Ababa</title>
        <meta
          name="description"
          content="Join AfroHeat Fitness for empowering African-inspired dance cardio, bootcamp, and strength training classes for women in Addis Ababa. Book your class today!"
        />
        <meta
          name="keywords"
          content="Addis Ababa dance fitness, women's bootcamp Addis, African-inspired workouts, dance cardio Ethiopia, women's fitness Addis Ababa, AfroHeat Fitness"
        />
        <meta property="og:title" content="AfroHeat Fitness - African-Inspired Women's Fitness" />
        <meta property="og:description" content="Empowering women through African-inspired movement in Addis Ababa" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://afroheatfitness.com" />
      </Helmet>

      <div className="overflow-hidden">
        <Hero />
        <Mission />
        <Testimonials />
        <Classes />
        <BookingContact />
      </div>
    </>
  )
}

export default Home
