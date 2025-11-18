import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import ComfortFirstIcon from '../components/assets/Comfort-First Experience.svg'
import PrecisionYouIcon from '../components/assets/Precision You Can Trust.svg'
import SmilesForEveryIcon from '../components/assets/Smiles for Every Stage.svg'
import TechnologyWithIcon from '../components/assets/Technology with a Human Touch.svg'

const Explore = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: 'easeOut' } }
  };

  return (
    <motion.div 
      className="bg-white py-20 -mt-20"
      initial={prefersReducedMotion ? false : 'hidden'}
      whileInView={prefersReducedMotion ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Main Heading */}
        <motion.div className="text-center mb-10 lg:mb-10" variants={headingVariants}>
          <h3 className="lg:text-4xl text-2xl font-bold font-sans leading-tight">
            <span style={{ color: '#333333' }}>Explore What Makes </span>
            <span style={{ color: '#0067AC' }}>Sasha Smiles </span>
            <span style={{ color: '#333333' }}>Different</span>
          </h3>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
           {/* Card 1: Precision You Can Trust */}
           <motion.div 
             className="bg-white border border-blue-400 rounded-xl overflow-hidden text-center"
             variants={cardVariants}
             whileHover={{ y: -4, boxShadow: '0 10px 24px rgba(2, 103, 172, 0.15)' }}
             transition={{ type: 'spring', stiffness: 260, damping: 20 }}
           >
             {/* Blue Icon Section */}
             <div className="h-40 flex items-center justify-center" style={{ backgroundColor: '#0E82C6' }}>
               <motion.img 
                 src={PrecisionYouIcon} 
                 alt="Precision You Can Trust" 
                 style={{ width: '120px', height: '120px' }}
                 loading="lazy"
                 decoding="async"
                 fetchpriority="low"
                 width="120"
                 height="120"
                 variants={iconVariants}
                 whileHover={{ scale: 1.05 }}
               />
             </div>
             {/* White Text Section */}
             <div className="mt-2 p-3">
               <h3 className="text-md font-bold mb-3 font-sans" style={{ color: '#0067AC' }}>
                 Precision You Can Trust
               </h3>
               <p className="text-xs leading-relaxed font-sans" style={{ color: '#737B8C' }}>
                 Expert dentists with proven care, combining skill and empathy for lasting results.
               </p>
             </div>
           </motion.div>

          {/* Card 2: Smiles for Every Stage */}
          <motion.div 
            className="bg-white border border-blue-400 rounded-xl overflow-hidden text-center"
            variants={cardVariants}
            whileHover={{ y: -4, boxShadow: '0 10px 24px rgba(2, 103, 172, 0.15)' }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            {/* Blue Icon Section */}
            <div className="h-40 flex items-center justify-center" style={{ backgroundColor: '#0E82C6' }}>
              <motion.img 
                src={SmilesForEveryIcon} 
                alt="Smiles for Every Stage" 
                style={{ width: '120px', height: '120px' }}
                loading="lazy"
                decoding="async"
                fetchpriority="low"
                width="120"
                height="120"
                variants={iconVariants}
                whileHover={{ scale: 1.05 }}
                />
            </div>
            {/* White Text Section */}
            <div className="mt-2 p-3">
              <h3 className="text-md font-bold mb-3 font-sans" style={{ color: '#0067AC' }}>
                Smiles for Every Stage
              </h3>
              <p className="text-xs leading-relaxed font-sans" style={{ color: '#737B8C' }}>
                From children to adults, personalized treatments crafted to fit every life stage.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Technology with a Human Touch */}
          <motion.div 
            className="bg-white border border-blue-400 rounded-xl overflow-hidden text-center"
            variants={cardVariants}
            whileHover={{ y: -4, boxShadow: '0 10px 24px rgba(2, 103, 172, 0.15)' }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            {/* Blue Icon Section */}
            <div className="h-40 flex items-center justify-center" style={{ backgroundColor: '#0E82C6' }}>
              <motion.img 
                src={TechnologyWithIcon} 
                alt="Technology with a Human Touch" 
                style={{ width: '120px', height: '120px' }}
                loading="lazy"
                decoding="async"
                fetchpriority="low"
                width="120"
                height="120"
                variants={iconVariants}
                whileHover={{ scale: 1.05 }}
                />
            </div>
            {/* White Text Section */}
            <div className="mt-2 p-3">
              <h3 className="text-md font-bold mb-3 font-sans" style={{ color: '#0067AC' }}>
                Technology with a Human Touch
              </h3>
              <p className="text-xs leading-relaxed font-sans" style={{ color: '#737B8C' }}>
                Digital precision planning and advanced tools, guided by genuine care.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Comfort-First Experience */}
          <motion.div 
            className="bg-white border border-blue-400 rounded-xl overflow-hidden text-center"
            variants={cardVariants}
            whileHover={{ y: -4, boxShadow: '0 10px 24px rgba(2, 103, 172, 0.15)' }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            {/* Blue Icon Section */}
            <div className="h-40 flex items-center justify-center" style={{ backgroundColor: '#0E82C6' }}>
              <motion.img 
                src={ComfortFirstIcon} 
                alt="Comfort-First Experience" 
                style={{ width: '120px', height: '120px' }}
                loading="lazy"
                decoding="async"
                fetchpriority="low"
                width="120"
                height="120"
                variants={iconVariants}
                whileHover={{ scale: 1.05 }}
                />
            </div>
            {/* White Text Section */}
            <div className="mt-2 p-3">
              <h3 className="text-md font-bold mb-3 font-sans" style={{ color: '#0067AC' }}>
                Comfort-First Experience
              </h3>
              <p className="text-xs leading-relaxed font-sans" style={{ color: '#737B8C' }}>
                A soothing environment and gentle approach that make every visit stress-free.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  )
}

export default Explore