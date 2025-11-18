import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const ContentSection = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="bg-white py-8 md:py-12 lg:py-16 -mt-13 lg:-mt-7"
      initial={prefersReducedMotion ? false : 'hidden'}
      whileInView={prefersReducedMotion ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="lg:max-w-[1200px] mx-auto px-5 sm:px-5 md:px-8">
        
        {/* What Is Teeth Whitening Section */}
        <motion.div 
          className="mb-12 md:mb-16 lg:mb-20"
          variants={containerVariants}
        >
          {/* Main Heading - Centered */}
          <motion.h2 
            className="text-center mb-2 md:mb-10 text-[20px] lg:text-[42px] lg:mb-12"
            style={{ 
              color: '#0267AC',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              // fontSize: '42px',
              // lineHeight: '100%',
              letterSpacing: '0%'
            }}
            variants={headingVariants}
          >
            What Is Teeth Whitening?
          </motion.h2>

          {/* Content Paragraphs - Left Aligned */}
          <motion.div 
            className="space-y-4 md:space-y-8 "
            variants={contentVariants}
          >
            {/* First Paragraph */}
            <motion.p 
              className=" text-left text-[14px] lg:text-[24px] leading-[29px] md:leading-[45px] "
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                // fontSize: '24px',
                letterSpacing: '0.6px',
                color: '#392D44'
              }}
              variants={contentVariants}
            >
              <strong >Teeth whitening</strong> is a safe, non-invasive cosmetic dental <strong >treatment</strong> designed to remove stains, discoloration, and dullness from the enamel—revealing a visibly <strong >whiter, brighter smile</strong>. At <strong >Sasha Luxe</strong>, we offer premium in-clinic solutions that deliver fast results with minimal sensitivity.
            </motion.p>

            {/* Second Paragraph */}
            <motion.p 
              className=" text-left text-[14px] lg:text-[24px] leading-[29px] md:leading-[45px] "
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                // fontSize: '24px',
                letterSpacing: '0.6%',
                color: '#392D44'
              }}
              variants={contentVariants}
            >
              Whether you're dealing with yellowing from coffee, tea, smoking, or just natural aging, our <strong>professional teeth whitening treatments</strong> are designed for comfort, safety, and results.
            </motion.p>
          </motion.div>
        </motion.div>

       

      </div>
    </motion.div>
  );
};

export default ContentSection;
