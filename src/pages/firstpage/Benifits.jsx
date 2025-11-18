import React from 'react';
import { motion } from 'framer-motion';
import ArrowIcon from '../../components/assets/arrow.svg';

export default function Benefits() {
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
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-16 px-4 -mt-7 lg:-mt-6 ">
      <div className="">
        {/* Main Heading */}
        <motion.h2 
          className="text-center mb-8 font-bold text-[20px] lg:text-[36px]" 
          style={{color: '#0267AC'}}
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Benefits of Restorative Treatment
        </motion.h2>
        
        {/* Benefits Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-full py-8 md:py-16 px-4 md:px-10 mx-auto" 
          style={{backgroundColor: '#EBF7FF'}}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Column */}
          <motion.div 
            className="space-y-4 md:space-y-8 ml-0 md:ml-40"
            variants={containerVariants}
          >
            <motion.div 
              className="flex items-start"
              variants={itemVariants}
            >
              <motion.img 
                src={ArrowIcon} 
                alt="Arrow icon"
                className="w-5 h-5 md:w-8 md:h-8 mr-3 md:mr-8 flex-shrink-0 mt-1 md:mt-0"
                variants={iconVariants}
              />
              <span className='text-sm md:text-[16px] lg:text-[23px] leading-relaxed' style={{color: '#392D44', letterSpacing: '0.5px'}}>
                Natural-looking, long-lasting results
              </span>
            </motion.div>
            
            <motion.div 
              className="flex items-start"
              variants={itemVariants}
            >
              <motion.img 
                src={ArrowIcon} 
                alt="Arrow icon"
                className="w-5 h-5 md:w-8 md:h-8 mr-3 md:mr-8 flex-shrink-0 mt-1 md:mt-0"
                variants={iconVariants}
              />
              <span className='text-sm md:text-base lg:text-[23px] leading-relaxed' style={{color: '#392D44', letterSpacing: '0.5px'}}>
                Restores bite strength and tooth function
              </span>
            </motion.div>
            
            <motion.div 
              className="flex items-start"
              variants={itemVariants}
            >
              <motion.img 
                src={ArrowIcon} 
                alt="Arrow icon"
                className="w-5 h-5 md:w-8 md:h-8 mr-3 md:mr-8 flex-shrink-0 mt-1 md:mt-0"
                variants={iconVariants}
              />
              <span className='text-sm md:text-base lg:text-[23px] leading-relaxed' style={{color: '#392D44', letterSpacing: '0.5px'}}>
                Personalized approach for every smile
              </span>
            </motion.div>
          </motion.div>
          
          {/* Right Column */}
          <motion.div 
            className="space-y-4 md:space-y-8"
            variants={containerVariants}
          >
            <motion.div 
              className="flex items-start"
              variants={itemVariants}
            >
              <motion.img 
                src={ArrowIcon} 
                alt="Arrow icon"
                className="w-5 h-5 md:w-8 md:h-8 mr-3 md:mr-8 flex-shrink-0 mt-1 md:mt-0"
                variants={iconVariants}
              />
              <span className='text-sm md:text-base lg:text-[23px] leading-relaxed' style={{color: '#392D44', letterSpacing: '0.5px'}}>
                Prevents further tooth decay or damage
              </span>
            </motion.div>
            
            <motion.div 
              className="flex items-start"
              variants={itemVariants}
            >
              <motion.img 
                src={ArrowIcon} 
                alt="Arrow icon"
                className="w-5 h-5 md:w-8 md:h-8 mr-3 md:mr-8 flex-shrink-0 mt-1 md:mt-0"
                variants={iconVariants}
              />
              <span className='text-sm md:text-base lg:text-[23px] leading-relaxed' style={{color: '#392D44', letterSpacing: '0.5px'}}>
                Minimally invasive techniques
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
