import React from 'react'
import Hero from '../components/hero'
import Services from '../components/services'
import BookConsultation from '../components/bookConsultation'
import BookAppointment from '../components/bookAppointment'
import AboutSasha from '../components/about'
import Explore from '../components/Explore'

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSasha />
      <Services />
      <BookConsultation />
      <Explore />
      <BookAppointment />
    </div>
  )
}

export default Homepage