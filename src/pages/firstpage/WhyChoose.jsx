import React from 'react';
import { motion } from 'framer-motion';
import SkilledIcon from '../../components/assets/skillled.svg';
import GentleTechIcon from '../../components/assets/gentle tech.svg';
import TrustedIcon from '../../components/assets/trusted.svg';
import HighQualityIcon from '../../components/assets/high quality.svg';
import SpaLikeIcon from '../../components/assets/spa like.svg';

export default function WhyChoose() {
  const features = [
    {
      icon: SkilledIcon,
      text: "Skilled cosmetic and restorative dental team"
    },
    {
      icon: GentleTechIcon,
      text: "Gentle techniques with a focus on patient comfort"
    },
    {
      icon: TrustedIcon,
      text: "Trusted by families, professionals, and cosmetic clients"
    },
    {
      icon: HighQualityIcon,
      text: "High-quality materials including GIC and advanced composite resins"
    },
    {
      icon: SpaLikeIcon,
      text: "Spa-like, stress-free environment"
    }
  ];

  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

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

  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };


  return (
    <div className="py-8 md:py-16 px-4 bg-white -mt-10 overflow-visible">
      <div className="max-w-5xl mx-auto overflow-visible">
        {/* Main Heading */}
        <motion.h2 
          className="text-center mb-8 md:mb-12 font-bold text-xl md:text-[38px]" 
          style={{color: '#0267AC', letterSpacing: '0.5px'}}
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Why Choose Sasha Luxe?
        </motion.h2>
        
        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 overflow-visible"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-md transition-shadow"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-start md:items-center">
                {/* Icon */}
                <div className="flex-shrink-0 mr-4 md:mr-8 ml-0 md:ml-5">
                  <img 
                    src={feature.icon} 
                    alt={`Feature ${index + 1}`}
                    className="w-9 h-9 md:w-14 md:h-14"
                  />
                </div>
                
                {/* Text */}
                <div className="flex-1">
                  <p className="text-gray-700 font-medium leading-relaxed text-xs md:text-[18px]" style={{letterSpacing: '0.5px'}}>
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
