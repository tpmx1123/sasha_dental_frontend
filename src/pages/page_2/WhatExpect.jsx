import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import ArrowIcon from '../../components/assets/arrow.svg';

export default function WhatExpect() {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 30,
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
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
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

  const expectations = [
    {
      id: 1,
      text: "Comprehensive dental consultation",
      column: "left",
      minHeight: 75
    },
    {
      id: 2,
      text: "Minimal-prep, conservative techniques",
      column: "left",
      minHeight: 80
    },
    {
      id: 3,
      text: "Warrantied crowns with detailed aftercare",
      column: "left",
      minHeight: 90
    },
    {
      id: 4,
      text: "Digital scans & precise shade matching",
      column: "right",
      minHeight: 90
    },
    {
      id: 5,
      text: "Pain-free placement in 1-2 visits",
      column: "right",
      minHeight: 90
    }
  ];

  const leftColumnItems = expectations.filter(item => item.column === "left");
  const rightColumnItems = expectations.filter(item => item.column === "right");

  return (
    <div className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 mt-6 sm:mt-8 md:mt-10 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="text-center mb-8 sm:mb-10 md:mb-12 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px]"
          style={{
            color: '#0267AC',
            fontFamily: 'Montserrat, sans-serif'
          }}
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          What to Expect
        </motion.h2>
        
        {/* Expectations Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Left Column */}
          <motion.div 
            className="space-y-4 sm:space-y-5 md:space-y-6"
            variants={containerVariants}
          >
            {leftColumnItems.map((item) => (
              <motion.div
                key={item.id}
                className="flex items-center rounded-2xl p-4 sm:p-5 md:p-6 min-h-[70px] sm:min-h-[75px] md:min-h-[80px]"
                style={{
                  background: 'linear-gradient(180deg, rgb(186, 220, 244) 0%, rgb(232, 239, 247) 100%)'
                }}
                variants={cardVariants}
                whileHover={cardVariants.hover}
              >
                <motion.div
                  variants={arrowVariants}
                  whileHover={arrowVariants.hover}
                  className="flex-shrink-0 mr-4 sm:mr-6 md:mr-9 ml-2 sm:ml-4 md:ml-8"
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
                  className="font-bold text-sm sm:text-base md:text-lg lg:text-[21px]"
                  style={{
                    color: '#392D44',
                    fontFamily: 'Montserrat, sans-serif',
                    letterSpacing: '0.3px',
                    lineHeight: '1.5'
                  }}
                  variants={textVariants}
                >
                  {item.text}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Right Column */}
          <motion.div 
            className="space-y-4 sm:space-y-5 md:space-y-6"
            variants={containerVariants}
          >
            {rightColumnItems.map((item) => (
              <motion.div
                key={item.id}
                className="flex items-center rounded-2xl p-4 sm:p-5 md:p-6 min-h-[70px] sm:min-h-[80px] md:min-h-[90px]"
                style={{
                  background: 'linear-gradient(180deg, rgb(186, 220, 244) 0%, rgb(232, 239, 247) 100%)'
                }}
                variants={cardVariants}
                whileHover={cardVariants.hover}
              >
                <motion.div
                  variants={arrowVariants}
                  whileHover={arrowVariants.hover}
                  className="flex-shrink-0 mr-4 sm:mr-6 md:mr-9 ml-2 sm:ml-4 md:ml-8"
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
                  className="font-bold text-sm sm:text-base md:text-lg lg:text-[21px]"
                  style={{
                    color: '#392D44',
                    fontFamily: 'Montserrat, sans-serif',
                    letterSpacing: '0.5px',
                    lineHeight: '1.5'
                  }}
                  variants={textVariants}
                >
                  {item.text}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
