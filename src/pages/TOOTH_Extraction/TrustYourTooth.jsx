import React from "react";
import { motion } from "framer-motion";
import RootCanalsReady from "../../../public/Trust Your Smile.svg";

// Animation Variants
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

const headingVariants = {
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

const textVariants = {
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

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function TrustYourTooth() {
  return (
    <div className="-mt-4 py-0 md:py-16 px-4 flex justify-center">
      <div className="w-full max-w-[1150px]">
        {/* Banner Section */}
        <motion.div 
          className="relative overflow-hidden w-full h-[180px] md:h-[500px]"
          style={{
            backgroundImage: `url(${RootCanalsReady})`,
            backgroundSize: 'contain',
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
            borderRadius: '40px'
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Content Overlay */}
          <div className="flex items-center justify-between px-3 md:px-12 py-1 md:py-12 h-full">
            {/* Left Side - Text Content */}
            <div className="flex-1 ml-1 md:ml-14 -mt-1 md:-mt-3 pr-2 md:pr-0">
              <motion.h2 
                className="font-bold mb-1 md:mb-5 lg:mb-6 text-[10px] md:text-3xl lg:text-[33px] whitespace-nowrap" 
                style={{letterSpacing: '0.3px'}}
                variants={headingVariants}
              >
                <span className="text-white">Trust Your Smile  </span>
                <span 
                  className="inline-block"
                  style={{ 
                    color: '#FFB366',
                    textShadow: '0 0 8px rgba(255, 179, 102, 0.4)'
                  }}
                >
                 to Gentle Hands
                </span>
              </motion.h2>
              <motion.p 
                className="text-white mb-1 md:mb-6 text-[6px] md:text-lg lg:text-[20px] lg:w-[520px]" 
                style={{letterSpacing: '1.2px',lineHeight: '1.5'}}
                variants={textVariants}
              >
           From Extraction per Tooth to Extraction of Molar and 
           Extraction Surgical (Wisdom Tooth) Sasha Luxe ensures a 
           seamless experience with lasting relief.
              </motion.p>
              <motion.button 
                className="bg-white text-[#0267AC] font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg text-[6px] md:text-lg lg:text-[25px] px-2 py-1 md:px-6 md:py-3 lg:px-7 lg:py-[18px]"
                style={{letterSpacing: '1px'}}
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Consultation
              </motion.button>
            </div>

            {/* Right Side - Image (will be handled by SVG background) */}
            <div className="w-1/2 md:w-1/3"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

