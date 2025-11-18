import React from 'react';
import { motion } from 'framer-motion';
import SkilledIcon from '../../components/assets/skillled.svg';
import GentleTechIcon from '../../components/assets/gentle tech.svg';
import TrustedIcon from '../../components/assets/trusted.svg';
import HighQualityIcon from '../../components/assets/high quality.svg';
import SpaLikeIcon from '../../components/assets/spa like.svg';

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

export default function WhyChoose() {
  const features = [
    {
      icon: SkilledIcon,
      text: " Experienced clinicians trained in preventive and cosmetic dentistry"

    },
    {
      icon: GentleTechIcon,
      text: "utique dental setting with a calm, spa-inspired environment"

    },
    {
      icon: TrustedIcon,
      text: "Integrated care with whitening, veneers, implants, and orthodontics"

    },
    {
      icon: HighQualityIcon,
      text: "sonalized treatment plans tailored to your health and lifestyle"

    },
    {
      icon: SpaLikeIcon,
      text: "Advanced technology and evidence-based techniques for precision"


    }
  ];

  return (
    <div className="py-8 md:py-16 px-4 bg-white -mt-10">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="text-center mb-4 md:mb-5 font-bold text-xl md:text-3xl lg:text-[38px]" 
          style={{color: '#0267AC', letterSpacing: '0.5px'}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          Why Choose Sasha Luxe Dental?
        </motion.h2>
        
        <motion.p 
          className="text-left text-gray-700 mb-6 md:mb-8 ml-0 md:ml-12 lg:ml-24 text-sm md:text-base lg:text-[24px]" 
          style={{letterSpacing: '0.7px', lineHeight: '1.8', color: '#374151',maxWidth: '950px'}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={paragraphVariants}
        >
          We offer more than just a basic dental cleaning—we provide a full-service, patient-focused experience designed to maximize both comfort and results.
        </motion.p>
        
        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-2xl p-4 md:p-6"
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center">
                {/* Icon */}
                <div className="flex-shrink-0 mr-4 md:mr-6 lg:mr-8 ml-0 md:ml-3 lg:ml-5">
                  <img 
                    src={feature.icon} 
                    alt={`Feature ${index + 1}`}
                    className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                  />
                </div>
                
                {/* Text */}
                <div className="flex-1">
                  <p className="text-gray-700 font-medium leading-relaxed text-sm md:text-base lg:text-[18px]" style={{letterSpacing: '0.5px'}}>
                    {feature.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
