import React from 'react';
import { motion } from 'framer-motion';
import OpeningQuotes from '../../assets/_.svg';
import StarsIcon from '../../assets/stars.svg';
import ClientVideo from '../../assets/ourclient.svg';
import ClosingQuotes from '../../assets/quotes.svg';


export default function OurClient() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
    hover: { y: -4, boxShadow: '0 12px 30px rgba(2, 103, 172, 0.12)', transition: { duration: 0.2 } }
  };

  const videoVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.1 } }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    hover: { scale: 1.03 }
  };

  return (
    <motion.div className="py-8 md:py-16 px-4" style={{backgroundColor: '#F0F9FF'}}
      initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div className="mb-6 md:mb-10 -mt-0 md:-mt-8" variants={headerVariants}>
          <h2 className="font-bold mb-2 text-2xl md:text-[38px]" style={{color: '#0267AC', letterSpacing: '0.5px'}}>
            Our Clients Love
          </h2>
          <p className="text-gray-700 mx-auto text-sm md:text-[19px] -ml-1" style={{lineHeight: '1.6'}}>
          Some best words from our beloved clients. It’s always encouraging to know that our clients loved our services as it keeps us 
          going even more enthusiastically.
          </p>
        </motion.div>

        {/* Testimonials and Video Section */}
        <motion.div className="grid grid-cols-1 md:grid-cols-10 items-start" variants={containerVariants}>
          
          {/* Testimonials Container */}
          <div className="md:col-span-6 flex flex-col md:flex-row gap-5">
            {/* Testimonial 1 */}
            <motion.div className="bg-white rounded-lg p-4 md:p-6 relative w-full md:w-[310px] h-auto md:h-[210px]"
              variants={cardVariants} whileHover="hover"
            >
              {/* Opening Quotes */}
              <div className="absolute -top-4 md:-top-6">
                <img src={OpeningQuotes} alt="Opening quotes" className="w-12 h-12 md:w-18 md:h-18" />
              </div>
              
              {/* Stars */}
              <div className="mt-2 md:mt-4 mb-2 md:mb-4">
                <img src={StarsIcon} alt="5 stars" className="w-auto h-3 md:h-4" />
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-3 md:mb-4 leading-relaxed text-xs md:text-[12px]" style={{lineHeight: '1.8'}}>
              I chose Invisalign® at Sasha Luxe, and I couldn’t 
be happier. The trays were comfortable, and no 
one even noticed I was wearing them.


              </p>
              
              {/* Client Name */}
              <p className="font-bold text-gray-800 text-sm md:text[16px]">
                Nikita M.
              </p>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div className="bg-white rounded-lg p-4 md:p-6 relative w-full md:w-[294px] h-auto md:h-[210px]"
              variants={cardVariants} whileHover="hover"
            >
              {/* Stars */}
              <div className="mb-2 md:mb-4 mt-2 md:mt-4">
                <img src={StarsIcon} alt="5 stars" className="w-auto h-3 md:h-4" />
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-3 md:mb-4 leading-relaxed text-xs md:text-[12px]" style={{lineHeight: '1.8'}}>
              I had crowded teeth and got braces here. 
Everything was super professional. My smile is 
totally transformed
 

              </p>
              
              {/* Client Name */}
              <p className="font-bold text-gray-800 text-sm md:text-[16px]">
                Rohit B.
              </p>
            </motion.div>
          </div>

          {/* Video Section */}
          <motion.div className="md:col-span-4 relative mt-8 md:mt-0" variants={videoVariants}>
            {/* Video Thumbnail */}
            <motion.div className="relative rounded-lg overflow-hidden w-full max-w-full md:max-w-none"
              whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}
            >
              <img 
                src={ClientVideo} 
                alt="Client testimonial video" 
                className="w-full h-auto md:w-[460px] md:h-[270px]"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center cursor-pointer transition-colors"
                  style={{backgroundColor: '#E3B077'}}
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <svg className="w-6 h-6 md:w-8 md:h-8 ml-1" fill="#FFFFFF" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Closing Quotes */}
            <div className="absolute -bottom-3 md:-bottom-5 -right-0.5 hidden md:block">
              <img src={ClosingQuotes} alt="Closing quotes" className="w-12 h-12 md:w-18 md:h-18" />
            </div>
            
          </motion.div>
        </motion.div>

        {/* Click More Button */}
        <motion.div className="flex mt-8 md:mt-0" variants={buttonVariants}>
          <motion.button className="py-2.5 px-7 rounded-lg font-semibold transition-colors hover:opacity-90 text-sm md:text-[17px]" style={{backgroundColor: '#0267AC', color: '#FFFFFF'}}
            whileHover="hover"
          >
            Click More
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}