import React from 'react'
import HeroSection from '../components/services/page_2/hero'
import ContentSection from '../components/services/page_2/content'
import WhyChoose from '../components/services/page_2/whyChooseUs'
import Frequently from '../components/services/page_2/frequently'
import Design from '../components/services/page_2/design'
import OurClient from '../components/services/page_2/clients'

const services = () => {
  return (
    <div className="pt-16 overflow-x-hidden w-full max-w-full">
        <HeroSection />
        <ContentSection />
        <WhyChoose />
        <Frequently />
        <Design />
        <OurClient/>
    </div>
  )
}

export default services