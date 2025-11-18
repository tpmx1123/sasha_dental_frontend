import React from 'react';
import { motion } from 'framer-motion';
import OpeningQuotes from '../../components/assets/_.svg';
import StarsIcon from '../../components/assets/stars.svg';
import ClientVideo from '../../components/assets/ourclient.svg';
import ClosingQuotes from '../../components/assets/quotes.svg';

export default function OurClient() {
  const testimonials = [
    {
      id: 1,
      text: "I got Emax veneers done for my wedding and I couldn't be happier. They look so natural, and people still ask me who did my smile.",
      name: "Tanvi K.",
      hasOpeningQuote: true
    },
    {
      id: 2,
      text: "After a root canal, I needed a crown that wouldn't stand out. Sasha Luxe recommended a 10-year zirconia crown and it's perfect. No pain, no awkwardness just a perfect tooth.",
      name: "Ankit S.",
      hasOpeningQuote: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="py-8 md:py-12 lg:py-16 px-4" style={{backgroundColor: '#F0F9FF'}}>
      <div className="max-w-6xl mx-auto mt-2 md:mt-4">
        {/* Header Section */}
        <motion.div 
          className="mb-6 md:mb-10 -mt-4 md:-mt-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-bold mb-2  md:text-left" style={{color: '#0267AC', fontSize: 'clamp(28px, 4.5vw, 38px)', letterSpacing: '0.5px'}}>
            Our Clients Love
          </h2>
          <p className="text-gray-700 mx-auto md:text-left md:-ml-1 px-2 md:px-0" style={{fontSize: 'clamp(14px, 2.5vw, 19px)', lineHeight: '1.6'}}>
            Some best words from our beloved clients. It's always encouraging to know that our clients loved our services as it keeps us going even more enthusiastically.
          </p>
        </motion.div>

        {/* Testimonials and Video Section */}
        <div className="grid grid-cols-1 md:grid-cols-10 items-start gap-6 md:gap-0">
          
          {/* Testimonials Container */}
          <motion.div 
            className="md:col-span-6 flex flex-col md:flex-row gap-5 mt-4 md:mt-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                className={`bg-white rounded-lg p-4 md:p-6 relative w-full ${index === 0 ? 'md:w-[310px] md:h-[230px]' : 'md:w-[294px] md:h-[230px]'}`}
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                {/* Opening Quotes */}
                {testimonial.hasOpeningQuote && (
                  <div className="absolute -top-4 md:-top-6">
                    <img src={OpeningQuotes} alt="Opening quotes" className="w-14 h-14 md:w-18 md:h-18" />
                  </div>
                )}
                
                {/* Stars */}
                <div className={`${testimonial.hasOpeningQuote ? 'mt-4' : 'mt-3'} mb-4`}>
                  <img src={StarsIcon} alt="5 stars" className="w-auto h-4" />
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-700 mb-4 leading-relaxed" style={{fontSize: 'clamp(12px, 1.5vw, 11px)', lineHeight: '1.8'}}>
                  {testimonial.text}
                </p>
                
                {/* Client Name */}
                <p className="font-bold text-gray-800" style={{fontSize: 'clamp(14px, 2vw, 16px)'}}>
                  {testimonial.name}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Video Section */}
          <motion.div 
            className="md:col-span-4 relative mt-6 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Video Thumbnail */}
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={ClientVideo} 
                alt="Client testimonial video" 
                className="w-full h-auto md:w-[460px] md:h-[270px]"
              />
              {/* Play Button Overlay */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center cursor-pointer transition-colors"
                  style={{backgroundColor: '#E3B077'}}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6 md:w-8 md:h-8 ml-1" fill="#FFFFFF" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Closing Quotes */}
            <div className="absolute -bottom-3 md:-bottom-5 -right-0 md:-right-0.5">
              <img src={ClosingQuotes} alt="Closing quotes" className="w-14 h-14 md:w-18 md:h-18" />
            </div>
            
          </motion.div>
        </div>

        {/* Click More Button */}
        <motion.div 
          className="flex justify-center md:justify-start mt-8 md:mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.button 
            className="py-2.5 px-7 rounded-lg font-semibold transition-colors hover:opacity-90" 
            style={{backgroundColor: '#0267AC', fontSize: 'clamp(15px, 2.2vw, 17px)', color: '#FFFFFF'}}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Click More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

