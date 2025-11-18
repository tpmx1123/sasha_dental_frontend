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

const sectionHeadingVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const columnVariants = {
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
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const cardVariantsRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function BeforeAfter() {
  const beforeInstructions = [
    "Brush and floss gently",
    "Avoid food 1 hour before your visit",
    "Inform us of any medical conditions or sensitivities",
    "Stay well hydrated"
  ];

  const afterInstructions = [
    "Avoid hot beverages, smoking, and dark-colored foods for 24 hours",
    "Use a soft-bristled toothbrush",
    "Minor sensitivity may occur— rinse with warm salt water if needed",
    "Follow any personalized care instructions provided"
  ];

  return (
    <div className="py-8 md:py-16 px-4 bg-white">
      <div className="max-w-[1000px] mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="text-center mb-6 md:mb-13 lg:mb-16 font-bold text-xl md:text-3xl lg:text-[40px]" 
          style={{color: '#0267AC'}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          Before and After Your Appointment
        </motion.h2>
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 -mt-6">
          {/* Left Column - BEFORE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={columnVariants}
          >
            <motion.h3 
              className="font-bold mb-3 md:mb-4 text-lg md:text-2xl lg:text-[32px]" 
              style={{color: '#0267AC'}}
              variants={sectionHeadingVariants}
            >
              BEFORE:
            </motion.h3>
            <div className="space-y-3 md:space-y-4">
              {beforeInstructions.map((instruction, index) => (
                <motion.div 
                  key={index}
                  className="bg-blue-50 rounded-2xl p-3 md:p-4 lg:p-5 flex items-center w-full h-auto md:w-[471px] md:h-[102px]"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Circular Icon */}
                  <div className="flex-shrink-0 mr-4 md:mr-6 lg:mr-9 ml-2 md:ml-4 lg:ml-8">
                    <div 
                      className="rounded-full flex items-center justify-center"
                    >
                      <img 
                        src={ArrowIcon}
                        alt="arrow"
                        className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
                      />
                    </div>
                  </div>
                  
                  {/* Text */}
                  <p className="text-gray-700 flex-1 font-medium text-sm md:text-base lg:text-[21px]" style={{letterSpacing: '0.6px', lineHeight: '1.2'}}>
                    {instruction}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - AFTER */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={columnVariants}
          >
            <motion.h3 
              className="font-bold mb-3 md:mb-4 text-lg md:text-2xl lg:text-[32px]" 
              style={{color: '#0267AC'}}
              variants={sectionHeadingVariants}
            >
              AFTER:
            </motion.h3>
            <div className="space-y-3 md:space-y-4">
              {afterInstructions.map((instruction, index) => (
                <motion.div 
                  key={index}
                  className="bg-blue-50 rounded-2xl p-3 md:p-4 lg:p-5 flex items-center w-full h-auto md:w-[471px] md:h-[102px]"
                  variants={cardVariantsRight}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Circular Icon */}
                  <div className="flex-shrink-0 mr-4 md:mr-6 lg:mr-9 ml-2 md:ml-4 lg:ml-8">
                    <div 
                      className="rounded-full flex items-center justify-center"
                    >
                      <img 
                        src={ArrowIcon}
                        alt="arrow"
                        className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
                      />
                    </div>
                  </div>
                  
                  {/* Text */}
                  <p className="text-gray-700 flex-1 font-medium text-sm md:text-base lg:text-[21px]" style={{letterSpacing: '0.6px', lineHeight: '1.2'}}>
                    {instruction}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

