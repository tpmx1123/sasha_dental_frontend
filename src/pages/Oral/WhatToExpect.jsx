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

export default function WhatToExpect() {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We perform a thorough dental exam to understand your needs and goals."
    },
    {
      number: "02",
      title: "Scaling and Cleaning",
      description: "A 30-60 minute session focused on removing tartar and polishing your teeth."
    },
    {
      number: "03",
      title: "Personalized Aftercare Guidance",
      description: "Our team provides brushing, flossing, and lifestyle recommendations tailored to your oral health."
    },
    {
      number: "04",
      title: "Optional Add-Ons",
      description: "Ask about fluoride treatment, stain protection, or future treatment planning."
    }
  ];

  return (
    <div className="py-8 md:py-16 px-4 bg-white -mt-7">
      <div className="max-w-[1180px] mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="text-center mb-6 md:mb-12 font-bold text-xl md:text-3xl lg:text-[36px]" 
          style={{color: '#0267AC'}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          What to Expect During Your Visit
        </motion.h2>
        
        {/* Steps Grid - 4 cards in a row */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-2xl p-3 md:p-4 shadow-lg w-full h-auto md:w-[270px] md:h-[255px]"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
               {/* Number */}
              <div className="ml-2 md:ml-4">
                <span className="font-bold bg-gradient-to-br from-blue-60 to-blue-50 text-2xl md:text-3xl lg:text-[48px]" style={{color: '#A9CBE3'}}>
                  {step.number}
                </span>
              </div>
              
              {/* Title */}
              <h3 className="font-bold ml-2 md:ml-4 mb-2 text-base md:text-lg lg:text-[20px]" style={{color: '#392D44'}}>
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="leading-relaxed ml-2 md:ml-4 text-xs md:text-sm lg:text-[16px]" style={{color: '#392D44',letterSpacing: '0.5px',lineHeight: '1.3'}}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

