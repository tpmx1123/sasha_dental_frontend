import React from "react";
import { motion } from 'framer-motion';
import ArrowIcon from "../../components/assets/RootCanal/ARROW.svg";

export default function BenefitsOfRootCanal() {
  const benefits = [
    "Avoid hard foods for a few days",
    "Attend follow-up appointments",
    "Maintain oral hygiene",
    "Use prescribed medications if needed"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-6 md:py-12 px-4 bg-white">
      <div className="max-w-[1040px] mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="text-center mb-6 md:mb-8 lg:mb-12 font-bold text-xl md:text-3xl lg:text-[40px]" 
          style={{color: '#0267AC'}}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Aftercare Tips
        </motion.h2>

        {/* Benefits Grid - 3 cards left, 2 cards right */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Left column: first 2 cards */}
          <motion.div className="flex flex-col gap-3 md:gap-6" variants={containerVariants}>
            {benefits.slice(0, 2).map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-[#EBF6FE] rounded-2xl p-3 md:p-6 lg:p-8 flex items-center hover:scale-105 transition-all duration-300 ease-in-out h-[75px] md:h-[96px] lg:h-[96px]"
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {/* Dark Blue Circular Arrow Icon */}
                <div className="flex-shrink-0 mr-4 md:mr-6 lg:mr-8 lg:ml-6">
                  <img 
                    src={ArrowIcon}
                    alt="arrow"
                    className="w-6 h-6 md:w-10 md:h-10 lg:w-8 lg:h-8"
                  />
                </div>
                {/* Benefit Text */}
                <p className="text-gray-800 font-medium text-sm md:text-base lg:text-[18px]" style={{letterSpacing: '0.5px'}}>
                  {benefit}
                </p>
              </motion.div>
            ))
          }
          </motion.div>

          {/* Right column: next 2 cards */}
          <motion.div className="flex flex-col gap-3 md:gap-6" variants={containerVariants}>
            {benefits.slice(2).map((benefit, index) => (
              <motion.div
                key={`right-${index}`}
                className="bg-[#EBF6FE] rounded-2xl p-3 md:p-6 lg:p-8 flex items-center hover:scale-105 transition-all duration-300 ease-in-out h-[75px] md:h-[96px] lg:h-[96px]"
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {/* Dark Blue Circular Arrow Icon */}
                <div className="flex-shrink-0 mr-4 md:mr-6 lg:mr-8 lg:ml-6">
                  <img 
                    src={ArrowIcon}
                    alt="arrow"
                    className="w-6 h-6 md:w-10 md:h-10 lg:w-8 lg:h-8"
                  />
                </div>
                {/* Benefit Text */}
                <p className="text-gray-800 font-medium text-sm md:text-base lg:text-[18px]" style={{letterSpacing: '0.5px'}}>
                  {benefit}
                </p>
              </motion.div>
            ))
          }
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

