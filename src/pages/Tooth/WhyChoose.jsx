import React from 'react';
import { motion } from 'framer-motion';
import SkilledIcon from '../../components/assets/skillled.svg';
import GentleTechIcon from '../../components/assets/gentle tech.svg';
import TrustedIcon from '../../components/assets/trusted.svg';
import HighQualityIcon from '../../components/assets/high quality.svg';
import SpaLikeIcon from '../../components/assets/spa like.svg';

export default function WhyChoose() {
  const container = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.1,
        duration: 0.5
      } 
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };
  const features = [
    {
      icon: SkilledIcon,
      text: (
        <>
          <strong>Expert Surgical Hands</strong> – Skilled clinicians with precision techniques
        </>
      )
    },
    {
      icon: GentleTechIcon,
      text: (
        <>
          <strong>Sterile & Safe</strong> – Strict infection control and patient safety
        </>
      )
    },
    {
      icon: TrustedIcon,
      text: (
        <>
          <strong>Tooth-Specific Care</strong> – Focused,conservative approach
        </>
      )
    },
    {
      icon: HighQualityIcon,
      text: (
        <>
          <strong>Comprehensive Aftercare</strong> – We guide you every step of the way
        </>
      )
    },
    {
      icon: SpaLikeIcon,
      text: (
        <>
          <strong>Gentle Recovery</strong> – Minimal discomfort, fast healing
        </>
      )
    }
  ];

  return (
    <div className="py-16 px-4 bg-white -mt-10">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="text-center mb-8 font-bold text-xl sm:text-3xl lg:text-[38px]" 
          style={{color: '#0267AC', letterSpacing: '0.5px'}}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Why Choose Sasha Luxe?
        </motion.h2>
        
        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={fadeUp}
              className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-2xl p-5 lg:p-6 hover:shadow-md transition-shadow"
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex items-center">
                {/* Icon */}
                <div className="flex-shrink-0 mr-8 ml-3 lg:ml-5">
                  <motion.img 
                    src={feature.icon} 
                    alt={`Feature ${index + 1}`}
                    className="w-7 h-7 lg:w-16 lg:h-16"
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  />
                </div>
                
                {/* Text */}
                <div className="flex-1">
                  <motion.p 
                    className="text-gray-700 font-medium leading-relaxed text-[12px] lg:text-[17px]" 
                    style={{letterSpacing: '0.5px'}}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  >
                    {feature.text}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
       
      </div>
    </div>
  );
}
