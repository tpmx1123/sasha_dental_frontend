import React from "react";
import { motion } from "framer-motion";

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
      staggerChildren: 0.2,
      delayChildren: 0.1,
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

export default function WhatIsOral() {
  return (
    <div className="py-8 md:py-16 px-4 bg-white">
      <div className="max-w-[1180px] mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="text-center mb-3 md:mb-5 font-bold text-xl md:text-3xl lg:text-[40px]" 
          style={{color: '#0267AC'}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          What Is Oral Prophylaxis?
        </motion.h2>
        
        {/* Content */}
        <motion.div 
          className="space-y-3 md:space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.p 
            className="text-left leading-relaxed text-gray-600 text-sm md:text-lg lg:text-[24px]" 
            style={{lineHeight: '2'}}
            variants={paragraphVariants}
          >
            Oral Prophylaxis commonly known as dental scaling and polishing is a preventive dental procedure that removes hardened plaque (tartar), biofilm, and surface stains from your teeth and along the gum line.
          </motion.p>
          
          <motion.p 
            className="text-left leading-relaxed text-gray-600 text-sm md:text-lg lg:text-[24px]" 
            style={{lineHeight: '2'}}
            variants={paragraphVariants}
          >
            At Sasha Luxe Dental, we elevate this essential service into a premium, spa-like experience. Our goal is not only to improve your oral hygiene but to reset your entire smile making it brighter, healthier, and better prepared for cosmetic or restorative treatments.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

