import React from "react";
import { motion } from 'framer-motion';
import WhenToGetImg from "../../components/assets/RootCanal/When to Get a Root Canal.svg";
import ArrowIcon from "../../components/assets/RootCanal/ARROW.svg";

export default function WhenToGet() {
  const symptoms = [
    "Persistent or throbbing toothache",
    "Sensitivity to hot and cold that lingers",
    "Swollen, tender, or bleeding gums",
    "Tooth darkening or discoloration",
    "Gum abscess or pimple near the tooth",
    "Pain when chewing or biting"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-6 md:py-12 px-4 bg-white">
      <div className="max-w-[1100px] mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="text-center mb-6 md:mb-8 font-bold text-xl md:text-3xl lg:text-[39px]" 
          style={{color: '#0267AC', letterSpacing: '0.5px'}}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          When to Get a Root Canal
        </motion.h2>

        {/* Two Column Layout */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Left Side - Image */}
          <motion.div 
            className="flex justify-center lg:justify-start "
            variants={imageVariants}
          >
            <img 
              src={WhenToGetImg}
              alt="When to get a root canal"
              className="rounded-full w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[480px] h-auto "
            />
          </motion.div>

          {/* Right Side - Symptoms List */}
          <motion.div 
            className="space-y-3 md:space-y-5 lg:space-y-9 order-1 lg:order-2 md:mt-1"
            variants={containerVariants}
          >
            {symptoms.map((symptom, index) => (
              <motion.div 
                key={index} 
                className="flex items-start"
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {/* Arrow Icon */}
                <div className="flex-shrink-0 mr-3 md:mr-6 mt-0.5 ">
                  <img 
                    src={ArrowIcon}
                    alt="arrow"
                    className="w-4 h-4 md:w-5 md:h-5 lg:w-8 lg:h-8"
                  />
                </div>
                {/* Symptom Text */}
                <span className="text-gray-700 leading-relaxed text-sm md:text-medium lg:text-[24px] font-medium" style={{letterSpacing: '0.5px', lineHeight: '1.8'}}>
                  {symptom}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

