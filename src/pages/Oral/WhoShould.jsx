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

export default function WhoShould() {
  const candidates = [
    "Patients who haven't had a dental cleaning in over six months",
    "Individuals experiencing gum bleeding, sensitivity, or bad breath",
    "Patients preparing for cosmetic work such as whitening or veneers",
    "Braces or aligner wearers who struggle with plaque buildup",
    "Health-conscious individuals focused on long-term dental care"
  ];

  return (
    <div className="py-8 md:py-16 px-4 bg-white -mt-8">
      <div className="max-w-[1180px] mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="text-center mb-4 md:mb-5 lg:mb-8 font-bold text-xl md:text-3xl lg:text-[40px]" 
          style={{color: '#0267AC'}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          Who Should Get Scaling & Polishing?
        </motion.h2>
        
        {/* Introductory Text */}
        <motion.p 
          className="text-center mb-6 md:mb-12 text-gray-700 text-lg md:text-2xl lg:text-[34px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={paragraphVariants}
        >
          This service is ideal for:
        </motion.p>
        
        {/* List */}
        <motion.div 
          className="space-y-4 md:space-y-6 -mt-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {candidates.map((candidate, index) => (
            <motion.div 
              key={index} 
              className="flex items-start ml-0 md:ml-22 lg:ml-44"
              variants={itemVariants}
            >
              {/* Arrow Icon */}
              <div className="flex-shrink-0 mr-3 md:mr-4 lg:mr-6">
                <img 
                  src={ArrowIcon} 
                  alt="arrow"
                  className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
                />
              </div>
              
              {/* Text */}
              <p className="text-gray-700 leading-relaxed flex-1 text-sm md:text-base lg:text-[23px]" style={{letterSpacing: '0.5px'}}>
                {candidate}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

