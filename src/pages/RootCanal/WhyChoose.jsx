import React from 'react';
import { motion } from 'framer-motion';
import SkilledIcon from '../../components/assets/skillled.svg';
// import GentleTechIcon from '../../components/assets/RootCanal/gentle tech.svg'; 
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

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.6,
    },
  },
};

export default function WhyChoose() {
  const features = [
    {
      icon: SkilledIcon,
      text: "Advanced Technology"
    },
    {
      icon: SpaLikeIcon,
      text: "Tooth-Saving Focus "
    },
    {
      icon: TrustedIcon,
      text: " Pain-Free Procedure"
    },
    {
        icon: HighQualityIcon,
        text: "High Success Rate"
    }

    // {
    //   icon: GentleTechIcon,
    //   text: " Pain-free, digital precision techniques"
    // },
   

   
  ];

  return (
    <div className="py-16 px-4 bg-white -mt-10">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="text-center mb-8 font-bold text-xl sm:text-3xl lg:text-[38px]" 
          style={{color: '#0267AC', letterSpacing: '0.5px'}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          Why Choose Sasha Luxe?
        </motion.h2>
        
        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-2xl p-5 lg:p-6"
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center">
                {/* Icon */}
                <div className="flex-shrink-0 mr-8 ml-3 lg:ml-5">
                  <img 
                    src={feature.icon} 
                    alt={`Feature ${index + 1}`}
                    className="w-9 h-9 lg:w-16 lg:h-16"
                  />
                </div>
                
                {/* Text */}
                <div className="flex-1">
                  <p className="text-gray-700 font-medium leading-relaxed text-[15px] sm:text-[18px]" style={{letterSpacing: '0.5px'}}>
                    {feature.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.p 
          className="text-center mt-5 lg:mt-12 text-gray-600  leading-relaxed text-[14px] sm:text-[17px] lg:text-[23px]" 
          style={{letterSpacing: '0.7px',lineHeight: '1.9'}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={paragraphVariants}
        >
          We use <strong> rotary instruments, digital X-rays,</strong> and <strong> apex locators </strong> to deliver efficient
          and comfortable root canal procedures, all in a calming, spa-inspired dental setting.
        </motion.p>
      </div>
    </div>
  );
}
