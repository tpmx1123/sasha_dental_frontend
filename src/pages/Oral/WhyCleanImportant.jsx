import React from "react";
import { motion } from "framer-motion";
import ProfessionalTeethImg from "../../components/assets/ORAL/Professional Teeth.svg";
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

const imageVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const contentContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function WhyCleanImportant() {
  return (
    <div className="py-8 md:py-16 px-4 bg-white -mt-6">
      <div className="max-w-[1180px] mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="text-center font-bold text-xl md:text-3xl mb-5 lg:text-[40px]" 
          style={{color: '#0267AC'}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          Why Is Professional Teeth Cleaning Important?
        </motion.h2>
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-0 ">
          {/* Left Side - Image */}
          <motion.div 
            className="flex justify-center lg:justify-start order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <img 
              src={ProfessionalTeethImg} 
              alt="Professional teeth cleaning procedure"
              className="rounded-2xl w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px] h-auto"
            />
          </motion.div>
          
          {/* Right Side - Content */}
          <motion.div 
            className="space-y-3 md:space-y-5 lg:-ml-44 lg:-mt-5 order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={contentContainerVariants}
          >
            {/* Introductory Paragraph */}
            <motion.p 
              className=" md:text-left leading-relaxed text-gray-700 text-sm md:text-base lg:text-[20px]" 
              style={{letterSpacing: '0.5px'}}
              variants={paragraphVariants}
            >
              Even with daily brushing and flossing, plaque can build up in hard-to-reach areas and harden into tartar. Left untreated, it can lead to:
            </motion.p>
            
            {/* Bulleted List */}
            <motion.ul 
              className="space-y-3 md:space-y-4 mt-2"
              variants={listVariants}
            >
              <motion.li 
                className="flex items-start"
                variants={listItemVariants}
              >
                <img 
                  src={ArrowIcon} 
                  alt="arrow"
                  className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0"
                />
                <span className="leading-relaxed text-gray-700 text-sm md:text-base lg:text-[20px]" style={{letterSpacing: '0.5px',lineHeight: '1.8'}}>
                  Gum disease (gingivitis or periodontitis)
                </span>
              </motion.li>
              
              <motion.li 
                className="flex items-start"
                variants={listItemVariants}
              >
                <img 
                  src={ArrowIcon} 
                  alt="arrow"
                  className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0"
                />
                <span className="leading-relaxed text-gray-700 text-sm md:text-base lg:text-[20px]" style={{lineHeight: '1.8'}}>
                  Tooth decay and cavities
                </span>
              </motion.li>
              
              <motion.li 
                className="flex items-start"
                variants={listItemVariants}
              >
                <img 
                  src={ArrowIcon} 
                  alt="arrow"
                  className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0"
                />
                <span className="leading-relaxed text-gray-700 text-sm md:text-base lg:text-[20px]" style={{lineHeight: '1.8'}}>
                  Bad breath (halitosis)
                </span>
              </motion.li>
              
              <motion.li 
                className="flex items-start"
                variants={listItemVariants}
              >
                <img 
                  src={ArrowIcon} 
                  alt="arrow"
                  className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0"
                />
                <span className="leading-relaxed text-gray-700 text-sm md:text-base lg:text-[20px]">
                  Yellowing and staining of teeth
                </span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

