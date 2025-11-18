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

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
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

const itemVariants = {
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

export default function Technology() {
  const technologies = [
    "Ultrasonic scalers for deep tartar removal",
    "Air-flow polishing systems for enamel-safe stain removal",
    "Intraoral cameras to visually show you your teeth before and after treatment",
    "Digital X-rays for low-radiation diagnostics and comprehensive care planning"
  ];

  return (
    <div className="py-8 md:py-16 px-4 bg-white lg:-mt-10">
      <div className="max-w-[1225px] mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="text-center mb-5 md:mb-8 font-bold text-xl md:text-3xl lg:text-[35px]" 
          style={{color: '#0267AC'}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          Technology We Use
        </motion.h2>
        
        {/* Introductory Paragraph */}
        <motion.p 
          className=" md:text-left ml-1 mb-6 md:mb-8 text-gray-700 max-w-[1050px] mx-auto text-sm md:text-lg lg:text-[24px]" 
          style={{letterSpacing: '0.3px',lineHeight: '1.8'}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={paragraphVariants}
        >
          At Sasha Luxe Dental, we use advanced dental hygiene equipment to ensure safe, gentle, and effective results:
        </motion.p>
        
        {/* Technology List Container */}
        <motion.div 
          className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-3xl p-4 md:p-6 lg:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="gap-4 md:gap-6 lg:gap-8">
            {technologies.map((tech, index) => (
              <motion.div 
                key={index} 
                className="flex items-start p-3 md:p-4 ml-0 md:ml-12 lg:ml-24"
                variants={itemVariants}
              >
                <div className="flex-shrink-0 mr-3 md:mr-4 mt-0.5 md:mt-1">
                  <div 
                    className="rounded-full flex items-center justify-center"
                  >
                    <img 
                      src={ArrowIcon}
                      alt="arrow"
                      className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 mr-1 md:mr-2"
                    />
                  </div>
                </div>
                <p className="text-gray-700 flex-1 text-sm md:text-base lg:text-[22px]" style={{letterSpacing: '0.5px'}}>
                  {tech}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

