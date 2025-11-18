import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SkilledIcon from '../../components/assets/skillled.svg';
import GentleTechIcon from '../../components/assets/gentle tech.svg';
import TrustedIcon from '../../components/assets/trusted.svg';
import HighQualityIcon from '../../components/assets/high quality.svg';
import SpaLikeIcon from '../../components/assets/spa like.svg';

export default function WhyChoose() {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
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
      y: -8,
      scale: 1.02,
      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: shouldReduceMotion ? 0 : 0.1
      }
    },
    hover: {
      scale: shouldReduceMotion ? 1 : 1.15,
      rotate: shouldReduceMotion ? 0 : 10,
      transition: { duration: 0.2 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.4,
        delay: shouldReduceMotion ? 0 : 0.2
      }
    },
    hover: {
      x: shouldReduceMotion ? 0 : 5,
      transition: { duration: 0.2 }
    }
  };

  const features = [
    {
      icon: HighQualityIcon,
      text: "Custom-crafted, natural-looking results"
    },
    {
      icon: GentleTechIcon,
      text: "Pain-free, digital precision techniques"
    },
    {
      icon: TrustedIcon,
      text: "Long-lasting materials with warranties"
    },
    {
      icon: SkilledIcon,
      text: "Skilled cosmetic dentists with years of experience"
    },
    {
      icon: SpaLikeIcon,
      text: "Seamless smile transformations in a luxury setting"
    }
  ];

  return (
    <div className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 bg-white -mt-6 sm:-mt-8 md:-mt-10 overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="text-center mb-5 sm:mb-10 md:mb-12 font-bold text-[22px] sm:text-3xl md:text-4xl lg:text-[38px]"
          style={{
            color: '#0267AC', 
            letterSpacing: '0.5px',
            fontFamily: 'Montserrat, sans-serif'
          }}
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          Why Choose Sasha Luxe?
        </motion.h2>
        
        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-5 sm:p-6 hover:shadow-lg transition-shadow duration-300 border border-blue-100"
              variants={cardVariants}
              whileHover={cardVariants.hover}
            >
              <div className="flex items-center gap-4 sm:gap-6">
                {/* Icon */}
                <motion.div 
                  className="flex-shrink-0"
                  variants={iconVariants}
                  whileHover={iconVariants.hover}
                >
                  <div className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full p-2 ">
                    <img 
                      src={feature.icon} 
                      alt={`Feature ${index + 1}`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </motion.div>
                
                {/* Text */}
                <motion.div 
                  className="flex-1"
                  variants={textVariants}
                  whileHover={textVariants.hover}
                >
                  <p 
                    className="text-gray-700 font-medium leading-relaxed text-[14px] sm:text-lg md:text-[18px]"
                    style={{
                      letterSpacing: '0.5px',
                      fontFamily: 'Montserrat, sans-serif',
                      lineHeight: '1.6'
                    }}
                  >
                    {feature.text}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
