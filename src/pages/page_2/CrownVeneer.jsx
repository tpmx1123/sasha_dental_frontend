import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import ScheduleIcon from '../../components/assets/Page2/SCHEDULE.svg';
import AvoidHardIcon from '../../components/assets/Page2/AVOID HARD.svg';
import BrushFlossIcon from '../../components/assets/Page2/BRUSH AND FLOSS.svg';
import UseNonIcon from '../../components/assets/Page2/USE NON.svg';

export default function CrownVeneerCareTips() {
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
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : -30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 50,
      scale: 0.8,
      rotateY: shouldReduceMotion ? 0 : -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: shouldReduceMotion ? {} : {
      y: -12,
      scale: 1.05,
      rotateY: 5,
      rotateX: 5,
      boxShadow: "0 20px 40px rgba(2, 103, 172, 0.25)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -180,
      y: -20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: shouldReduceMotion ? 0 : 0.2
      }
    },
    hover: {
      scale: shouldReduceMotion ? 1 : 1.2,
      rotate: shouldReduceMotion ? 0 : [0, -10, 10, -10, 0],
      y: shouldReduceMotion ? 0 : -5,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.4,
        delay: shouldReduceMotion ? 0 : 0.3
      }
    },
    hover: {
      x: shouldReduceMotion ? 0 : 3,
      transition: { duration: 0.2 }
    }
  };

  const careTips = [
    {
      id: 1,
      icon: BrushFlossIcon,
      title: "Brush and floss daily with care",
      color: "#0267AC"
    },
    {
      id: 2,
      icon: AvoidHardIcon,
      title: "Avoid hard bites and staining foods",
      color: "#0267AC"
    },
    {
      id: 3,
      icon: ScheduleIcon,
      title: "Schedule check-ups every 6 months",
      color: "#0267AC"
    },
    {
      id: 4,
      icon: UseNonIcon,
      title: "Use non-abrasive toothpaste for veneers",
      color: "#0267AC"
    }
  ];

  return (
    <div 
      className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 overflow-x-hidden"
      style={{backgroundColor: '#EBF7FF'}}
    >
      <div className="max-w-[1180px] -mt-4 sm:-mt-5 mx-auto">
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
          Crown & Veneer Care Tips
        </motion.h2>
        
        {/* Care Tips Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {careTips.map((tip, index) => (
            <motion.div
              key={tip.id}
              className="flex flex-col bg-white rounded-3xl p-6 sm:p-7 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden"
              style={{
                perspective: "1000px"
              }}
              variants={cardVariants}
              whileHover={cardVariants.hover}
            >
              {/* Animated background gradient on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${tip.color}15 0%, ${tip.color}05 100%)`,
                  borderRadius: '24px'
                }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              
              {/* Icon Container */}
              <motion.div 
                className="mb-4 sm:mb-5 md:mb-6 relative z-10"
                variants={iconVariants}
                whileHover={iconVariants.hover}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center">
                  <motion.img 
                    src={tip.icon} 
                    alt={`${tip.title} icon`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                    whileHover={{
                      filter: "drop-shadow(0 4px 8px rgba(2, 103, 172, 0.3))"
                    }}
                  />
                </div>
              </motion.div>
              
              {/* Text Content */}
              <motion.h3 
                className="relative z-10 text-sm sm:text-base md:text-lg lg:text-[19px] font-medium leading-relaxed"
                style={{
                  color: '#392D44',
                  letterSpacing: '0.5px',
                  fontFamily: 'Montserrat, sans-serif',
                  lineHeight: '1.5'
                }}
                variants={textVariants}
                whileHover={textVariants.hover}
              >
                {tip.title}
              </motion.h3>

              {/* Decorative element - animated line */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
