

import React from 'react';
import { motion } from 'framer-motion';
import OpeningQuotes from '../../components/assets/_.svg';
import StarsIcon from '../../components/assets/stars.svg';
import ClientVideo from '../../components/assets/ourclient.svg';
import ClosingQuotes from '../../components/assets/quotes.svg';

export default function Clients() {
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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
        delayChildren: 0.2
      }
    }
  };

  const testimonialVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <div className="py-8 md:py-16 px-4" style={{backgroundColor: '#F0F9FF'}}>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="mb-6 md:mb-10 -mt-4 lg:-mt-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="font-bold mb-2 lg:mb-4 text-xl md:text-[38px]" 
            style={{color: '#0267AC', letterSpacing: '0.5px'}}
            variants={headingVariants}
          >
            Our Clients Love
          </motion.h2>
          <motion.p 
            className="text-gray-700 mx-auto ml-0 md:-ml-1 text-xs md:text-[19px]" 
            style={{lineHeight: '1.6'}}
            variants={textVariants}
          >
            Some best words from our beloved clients. It's always encouraging to know that our clients loved our services as it keeps us going even more enthusiastically.
          </motion.p>
        </motion.div>

        {/* Testimonials and Video Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-10 items-start gap-6 md:gap-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          {/* Testimonials Container */}
          <motion.div 
            className="md:col-span-6 flex flex-col md:flex-row gap-4 md:gap-5"
            variants={containerVariants}
          >
            {/* Testimonial 1 */}
            <motion.div 
              className="bg-white rounded-lg p-4 md:p-6 relative w-full md:w-[310px] min-h-[190px] md:h-[280px]"
              variants={testimonialVariants}
            >
              {/* Opening Quotes */}
              <div className="absolute -top-4 md:-top-6">
                <img src={OpeningQuotes} alt="Opening quotes" className="w-12 h-12 md:w-18 md:h-18" />
              </div>
              
              {/* Stars */}
              <div className="mt-2 md:mt-4 mb-3 md:mb-4">
                <img src={StarsIcon} alt="5 stars" className="w-auto h-3 md:h-4" />
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-3 md:mb-4 leading-relaxed text-[10px] md:text-xs" style={{lineHeight: '1.8'}}>
              “I had dark patches on my gums that made me self-conscious.
                  After laser depigmentation at Sasha Luxe, my gums are pink and
                  healthy looking. It was quick and completely painless!”
              </p>
              
              {/* Client Name */}
              <p className="font-bold text-gray-800 text-sm md:text-base">
              Sneha R.
              </p>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div 
              className="bg-white rounded-lg p-4 md:p-6 relative w-full md:w-[294px] min-h-[170px] md:h-[270px]"
              variants={testimonialVariants}
            >
              {/* Stars */}
              <div className="mb-3 md:mb-4  mt-5 lg:mt-4">
                <img src={StarsIcon} alt="5 stars" className="w-auto h-3 md:h-4" />
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-3 md:mb-4 leading-relaxed text-[10px] md:text-xs" style={{lineHeight: '1.8'}}>
              My gum line was uneven, and it really threw off my smile. The
                  laser reshaping was fast, precise, and the healing was a
                  breeze. I love how natural my smile looks now.
              </p>
              
              {/* Client Name */}
              <p className="font-bold text-gray-800 text-sm md:text-base">
              Ravi K.
              </p>
            </motion.div>
          </motion.div>

          {/* Video Section */}
          <motion.div 
            className="md:col-span-4 relative mt-6 md:mt-0"
            variants={videoVariants}
          >
            {/* Video Thumbnail */}
            <div className="relative rounded-lg overflow-hidden w-full">
              <img 
                src={ClientVideo} 
                alt="Client testimonial video" 
                className="w-full h-auto md:w-[460px] md:h-[270px] object-cover"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center cursor-pointer transition-colors"
                  style={{backgroundColor: '#E3B077'}}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5 md:w-8 md:h-8 ml-0.5 md:ml-1" fill="#FFFFFF" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </motion.div>
              </div>
            </div>
            
            {/* Closing Quotes */}
            <div className="absolute -bottom-4 md:-bottom-5 -right-1 md:-right-0.5">
              <img src={ClosingQuotes} alt="Closing quotes" className="w-12 h-12 md:w-18 md:h-18" />
            </div>
          </motion.div>
        </motion.div>

        {/* Click More Button */}
        <motion.div 
          className="flex mt-6 md:mt-8"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.button 
            className="py-2 md:py-2.5 px-5 md:px-7 rounded-lg font-semibold transition-colors hover:opacity-90 text-sm md:text-base" 
            style={{backgroundColor: '#0267AC', color: '#FCC17F'}}
            whileHover="hover"
            whileTap="tap"
          >
            Click More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}


