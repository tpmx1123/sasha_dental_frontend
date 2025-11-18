import React from "react";
import { motion } from "framer-motion";
import FrameBanner from "../../components/assets/ORAL/Frame 1984078438.svg";

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

export default function Ready() {
  return (
    <div className="-mt-4 py-0 md:py-16 px-4 flex justify-center">
      <div className="w-full max-w-[1150px]">
        {/* Banner Section */}
        <motion.div 
          className="relative overflow-hidden w-full h-[180px] md:h-[392px]"
          style={{
            backgroundImage: `url(${FrameBanner})`,
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
          <div className="flex items-center justify-between px-3 md:px-12 py-1 md:py-12 lg:ml-14 h-full">
            {/* Left Side - Text Content */}
            <div className="flex-1 ml-1 md:ml-14 -mt-1 md:-mt-3 pr-2 md:pr-0">
              <motion.h2 
                className="text-white font-bold mb-1 md:mb-5 lg:mb-6 text-[10px] md:text-3xl lg:text-[38px] whitespace-nowrap" 
                style={{letterSpacing: '0.3px'}}
                variants={headingVariants}
              >
                Ready to Refresh Your Smile?
              </motion.h2>
              <motion.p 
                className="text-white mb-2 md:mb-6 text-[10px] md:text-lg lg:text-[24px]" 
                style={{letterSpacing: '0.6px',lineHeight: '1.2'}}
                variants={textVariants}
              >
                Your cleanest, healthiest smile is just one appointment away.
              </motion.p>
              <motion.button 
                className="bg-white text-[#0267AC] font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg text-[9px] md:text-lg lg:text-[24px] px-2 py-1 md:px-6 md:py-3 lg:px-7 lg:py-[18px]"
                variants={buttonVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
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

