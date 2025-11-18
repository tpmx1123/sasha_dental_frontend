import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const Veneer = () => {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
        delayChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 40,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut"
      }
    },
    hover: shouldReduceMotion ? {} : {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const veneerCards = [
    {
      id: 1,
      title: "Zirconium Veneer",
      description: "Durable, stain-resistant, and ideal for long-term corrections without compromising strength."
    },
    {
      id: 2,
      title: "Emax Veneer",
      description: "The gold standard in cosmetic dentistry. Ultra-thin and luminous ideal for reshaping, whitening, or closing gaps without bulk."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto  px-4 sm:px-6 md:px-12 overflow-x-hidden">
      {/* What Is a Veneer Section */}
      <motion.div 
        className="bg-white py-8 sm:py-10 md:py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.h2 
          className="font-bold text-[#0067AC] text-center mb-6 sm:mb-7 text-2xl sm:text-4xl md:text-[41px]"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
          variants={headingVariants}
        >
          What Is a Veneer?
        </motion.h2>

        {/* Content */}
        <motion.div 
          className="flex justify-center"
          variants={contentVariants}
        >
          <div className="max-w-[1150px] w-full">
            <p 
              className="text-sm md:text-xl lg:text-[23px] text-gray-700 font-normal mx-auto text-left px-4 sm:px-6"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                letterSpacing: '0.9px',
                lineHeight: '1.8'
              }}
            >
              A <strong className="font-bold">dental veneer</strong> is a thin, custom-crafted shell bonded to the front of the tooth to enhance color, shape, alignment, or size. It's a minimally invasive option for a smile makeover.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Our Veneers for Smile Perfection Section */}
      <motion.div 
        className="py-12 sm:py-14 md:py-16 -mt-6 sm:-mt-8 md:-mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.h2 
          className="font-bold text-[#0067AC] text-center mb-8 sm:mb-10 md:mb-12 text-2xl sm:text-4xl md:text-[41px] px-4"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
          variants={headingVariants}
        >
          Our Veneers for Smile Perfection
        </motion.h2>

        {/* Veneer Cards */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 justify-center items-center max-w-[1150px] mx-auto px-4 sm:px-6">
          {veneerCards.map((veneer, index) => (
            <motion.div
              key={veneer.id}
              className="p-8 sm:p-12 md:p-16 rounded-3xl shadow-lg w-full md:w-[515px] h-auto md:h-[316px] flex flex-col justify-center transition-shadow duration-300"
              style={{
                background: 'linear-gradient(180deg, rgb(186, 213, 234) 0%, #FFFFFF 100%)',
                minHeight: '280px'
              }}
              variants={cardVariants}
              whileHover={cardVariants.hover}
            >
              <motion.h3 
                className="text-xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  transition: {
                    delay: shouldReduceMotion ? 0 : index * 0.1 + 0.2,
                    duration: shouldReduceMotion ? 0 : 0.4
                  }
                }}
                viewport={{ once: true }}
              >
                {veneer.title}
              </motion.h3>
              <motion.p 
                className="text-gray-700 text-[14px] sm:text-lg md:text-xl lg:text-[21px] leading-relaxed"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  letterSpacing: '0.5px',
                  lineHeight: '1.6'
                }}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  transition: {
                    delay: shouldReduceMotion ? 0 : index * 0.1 + 0.3,
                    duration: shouldReduceMotion ? 0 : 0.4
                  }
                }}
                viewport={{ once: true }}
              >
                {veneer.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Veneer;
