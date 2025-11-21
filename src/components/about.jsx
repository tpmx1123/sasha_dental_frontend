import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FrameImage from '../components/assets/Frame 1984078762.svg'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const AboutSasha = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Image carousel for mobile
  const mobileImages = [
    '/aboutimg1.png',
    '/aboutimg2.png',
    '/aboutimg3.png',
    '/aboutimg4.png'
  ]

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % mobileImages.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [mobileImages.length])

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % mobileImages.length)
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + mobileImages.length) % mobileImages.length)
  }

  const goToSlide = (index) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="bg-white-90 mt-6 lg:-mt-7">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-9 pt-6 pb-10 md:py-16">
        {/* Mobile View - Header Section with Side-by-Side Layout */}
        <motion.div 
          className="mb-4 md:mb-16" 
          initial={{ opacity: 0, y: 16 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5 }}
        >
          {/* Mobile Layout - Matches Design Exactly */}
          <div className="flex md:hidden items-start gap-3 mb-4 -mt-12">
            {/* Left Side - About Sasha Smiles (Main Text) */}
            <div className="w-[55%] min-w-0 pr-1">
              <motion.h1 
                className="font-bold leading-tight font-sans" 
                initial={{ opacity: 0, y: 12 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.45, delay: 0.1 }}
              >
                <span className="block text-sm font-bold mb-0.5 mt-10" style={{ color: '#4D4D4D' }}>About</span>
                <span className="block text-lg font-black leading-tight" style={{ color: '#0267AC' }}>Sasha Smiles</span>
              </motion.h1>
            </div>

            {/* Vertical Divider Line - Light Blue */}
            <div className="w-[1px] h-20 bg-blue-200/60 self-stretch mt-5"></div>

            {/* Right Side - Our Vision (Small Text) */}
            <motion.div 
              className="w-[100%] max-w-[200px] pl- flex-shrink-0" 
              initial={{ opacity: 0, y: 12 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.45, delay: 0.15 }}
            >
              <h2 className="text-[12px] font-bold mb-1.5 font-sans leading-tight" style={{ color: '#FF6633' }}>Our Vision</h2>
              <div className="text-[10px] leading-[1.35] font-sans" style={{ color: '#0267AC' }}>
                <p className="mb-1 italic">
                  Your smile is personal—and so is our approach.
                </p>
                <p className="mb-1">
                  At Sasha Smiles, dentistry goes beyond treatment. It's about precision, comfort, and trust.
                </p>
                <p>
                  Whether you need preventive care, cosmetic enhancements, or advanced restorative solutions, we ensure your journey feels seamless and reassuring.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex flex-col lg:flex-row items-start gap-6 lg:gap-10">
            {/* Left Side - About Sasha Smiles */}
            <div className="flex-1 lg:mt-5 lg:-translate-x-4 -mb-3">
              <motion.h1 
                className="font-bold leading-tight font-sans" 
                initial={{ opacity: 0, y: 12 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.45, delay: 0.1 }}
              >
                <span className="block text-md sm:text-4xl md:text-5xl lg:text-6xl sm:mb-2" style={{ color: '#0267AC' }}>About</span>
                <span className="block text-xl sm:text-5xl md:text-6xl lg:text-7xl" style={{ color: '#4D4D4D' }}>Sasha Smiles</span>
              </motion.h1>
            </div>

            {/* Right Side - Our Vision */}
            <motion.div 
              className="w-full lg:max-w-lg lg:-translate-x-16" 
              initial={{ opacity: 0, y: 12 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.45, delay: 0.15 }}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 font-sans" style={{ color: '#FF6633' }}>Our Vision</h2>
              <div className="text-xs sm:text-base md:text-lg leading-relaxed font-sans" style={{ color: '#0267AC' }}>
                <p className="mb-2">
                  Your smile is personal—and so is our approach. At Sasha Smiles, dentistry goes beyond treatment. It's about precision, comfort, and trust.
                </p>
                <p>
                  Whether you need preventive care, cosmetic enhancements, or advanced restorative solutions, we ensure your journey feels seamless and reassuring.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile Image Carousel - Matches Design */}
        <motion.div 
          className="md:hidden relative"
          initial={{ opacity: 0, scale: 0.98 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative overflow-hidden rounded-t-xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={mobileImages[currentImageIndex]}
                alt={`Dental services ${currentImageIndex + 1}`}
                className="w-full h-[240px] object-contain"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

           
          </div>

          {/* Carousel Dots - Centered below image */}
          <div className="flex justify-center gap-1.5 mt-3 mb-2">
            {mobileImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-[#0267AC] w-6' 
                    : 'bg-gray-300 w-1.5 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Desktop Image Section */}
        <motion.div 
          className="hidden md:block"
          initial={{ opacity: 0, scale: 0.98 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="rounded-xl overflow-hidden">
            <img
              src={FrameImage}
              alt="Dental services showcase"
              className="w-full h-[320px] md:h-[450px] lg:h-[660px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutSasha