import React from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../../components/assets/ORAL/arrow.svg";

// Animation Variants
const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Benefits() {
  const benefits = [
    "Removes harmful plaque and tartar",
    "Visibly brightens teeth by removing surface stains",
    "Freshens breath and improves oral hygiene",
    "Prevents gum disease and tooth loss",
    "Boosts the longevity of cosmetic dental work",
    "Quick, non-invasive, and typically pain-free"
  ];

  return (
    <div className="py-8 md:py-16 px-4 bg-white">
      <div className="max-w-[1000px] mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="text-center mb-6 md:mb-12 font-bold text-xl md:text-3xl lg:text-[40px]" 
          style={{color: '#0267AC'}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          Benefits of Oral Prophylaxis
        </motion.h2>
        
        {/* Benefits Grid - 2 columns, 3 rows */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-[#0267AC] rounded-2xl p-4 md:p-6 flex items-center"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {/* Arrow Icon */}
              <div className="flex-shrink-0 mr-4 md:mr-6 lg:mr-8 ml-2 md:ml-5 lg:ml-7">
                <img 
                  src={ArrowIcon} 
                  alt="arrow"
                  className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
                  style={{filter: 'brightness(0) invert(1)'}}
                />
              </div>
              
              {/* Text */}
              <p className="text-white text-sm md:text-base lg:text-[22px]" style={{letterSpacing: '0.5px'}}>
                {benefit}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

