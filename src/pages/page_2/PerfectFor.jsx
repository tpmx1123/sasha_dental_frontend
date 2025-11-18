import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import ArrowIcon from '../../components/assets/arrow.svg';

export default function Benefits() {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.2
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: shouldReduceMotion ? 0 : -30
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.4,
        ease: "easeOut"
      }
    },
    hover: shouldReduceMotion ? {} : {
      x: 8,
      transition: { duration: 0.2 }
    }
  };

  const arrowVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      scale: shouldReduceMotion ? 1 : 1.2,
      rotate: shouldReduceMotion ? 0 : 15,
      transition: { duration: 0.2 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.3,
        delay: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  const benefits = [
    {
      id: 1,
      text: "Broken or severely worn teeth",
      column: "left"
    },
    {
      id: 2,
      text: "Discolored or mildly misaligned teeth",
      column: "left"
    },
    {
      id: 3,
      text: "Cosmetic smile makeovers",
      column: "left"
    },
    {
      id: 4,
      text: "Post-root canal restorations",
      column: "right"
    },
    {
      id: 5,
      text: "Replacing old or metal-based crowns",
      column: "right"
    }
  ];

  const leftColumnItems = benefits.filter(item => item.column === "left");
  const rightColumnItems = benefits.filter(item => item.column === "right");

  return (
    <div 
      className="py-10 sm:py-12 md:py-14 px-4 sm:px-6 md:px-8 -mt-4 sm:-mt-6 overflow-x-hidden"
      style={{backgroundColor: '#EBF7FF'}}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="text-center font-bold mb-2 sm:mb-10 md:mb-12 text-[24px] sm:text-3xl md:text-4xl lg:text-[36px]"
          style={{
            color: '#0267AC',
            fontFamily: 'Montserrat, sans-serif'
          }}
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          Perfect For:
        </motion.h2>
        
        {/* Benefits Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Left Column */}
          <motion.div 
            className="space-y-6 sm:space-y-7 md:space-y-8"
            variants={containerVariants}
          >
            {leftColumnItems.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                className="flex items-center"
                variants={itemVariants}
                whileHover={itemVariants.hover}
              >
                <motion.div
                  variants={arrowVariants}
                  whileHover={arrowVariants.hover}
                  className="flex-shrink-0 mr-4 sm:mr-6 md:mr-8"
                >
                  <img 
                    src={ArrowIcon} 
                    alt="Arrow icon"
                    className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8"
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>
                <motion.span 
                  className="text-gray-800 font-medium text-base sm:text-lg md:text-xl lg:text-[23px]"
                  style={{
                    color: '#392D44',
                    letterSpacing: '0.5px',
                    fontFamily: 'Montserrat, sans-serif',
                    lineHeight: '1.6'
                  }}
                  variants={textVariants}
                >
                  {benefit.text}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Right Column */}
          <motion.div 
            className="space-y-6 sm:space-y-7 md:space-y-8"
            variants={containerVariants}
          >
            {rightColumnItems.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                className="flex items-center"
                variants={itemVariants}
                whileHover={itemVariants.hover}
              >
                <motion.div
                  variants={arrowVariants}
                  whileHover={arrowVariants.hover}
                  className="flex-shrink-0 mr-4 sm:mr-6 md:mr-8"
                >
                  <img 
                    src={ArrowIcon} 
                    alt="Arrow icon"
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>
                <motion.span 
                  className="text-gray-800 font-medium text-base sm:text-lg md:text-xl lg:text-[23px]"
                  style={{
                    color: '#392D44',
                    letterSpacing: '0.5px',
                    fontFamily: 'Montserrat, sans-serif',
                    lineHeight: '1.6'
                  }}
                  variants={textVariants}
                >
                  {benefit.text}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
