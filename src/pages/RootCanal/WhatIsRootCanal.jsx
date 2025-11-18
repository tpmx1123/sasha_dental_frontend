import React from "react";
import { motion } from "framer-motion";

export default function WhatIsRootCanal() {
  const paragraphs = [
    "Root canal treatment is a dental procedure used to treat infection or inflammation inside a tooth. When the dental pulp (the inner soft tissue) becomes infected due to decay, trauma, or deep cracks, it can cause severe pain or lead to an abscess.",
    "During endodontic treatment, our dentist removes the infected pulp, cleans and disinfects the root canals, and fills them to prevent reinfection. The tooth is then restored with a crown or filling."
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-8 md:py-16 px-4 bg-white">
      <div className="max-w-[1180px] mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="text-center mb-4 md:mb-10 font-bold text-xl md:text-3xl lg:text-[40px]" 
          style={{color: '#0267AC'}}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          What Is Root Canal Treatment?
        </motion.h2>

        {/* Content */}
        <motion.div 
          className="space-y-4 md:space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {paragraphs.map((text, index) => (
            <motion.p 
              key={index}
              className="text-left leading-relaxed text-gray-700 text-sm md:text-lg lg:text-[24px]" 
              style={{lineHeight: '1.9',letterSpacing: '0.7px'}}
              variants={itemVariants}
            >
              {index === 0 ? (
                <>
                  <strong>Root canal treatment</strong> is a dental procedure used to treat infection or inflammation inside a tooth. When the <strong>dental pulp</strong> (the inner soft tissue) becomes infected due to decay, trauma, or deep cracks, it can cause severe pain or lead to an abscess.
                </>
              ) : (
                <>
                  During <strong>endodontic treatment</strong>, our dentist removes the infected pulp, cleans and disinfects the root canals, and fills them to prevent reinfection. The tooth is then restored with a crown or filling.
                </>
              )}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

