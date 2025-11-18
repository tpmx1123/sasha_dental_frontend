import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FrequentlyQuestionsImage from '../../assets/Frequently Asked.svg';

export default function Frequently() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is the procedure painful?",
      answer: " Mild discomfort is common during adjustments or new aligners, but it fades quickly."
    },
    {
      question: " How long does treatment take?",
      answer: " It varies based on the case—typically 6 months to 2 years."
    },
    {
      question: "Can I eat normally with braces or aligners?",
      answer: " Yes—with care. Braces require avoiding sticky/hard foods, while aligners can be removed before meals."
    }
  ];

  // Animation variants
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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const faqVariants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 bg-white mt-3 lg:-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="text-center mb-4 sm:mb-6 md:mb-8 font-bold" 
          style={{color: '#0267AC', fontSize: 'clamp(20px, 4vw, 39px)', letterSpacing: '0.5px'}}
          variants={itemVariants}
        >
          Frequently Asked Questions
        </motion.h2>
        
        {/* FAQ Content */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-4 items-start lg:-ml-19"
          variants={containerVariants}
        >
          {/* Left Side - Image */}
          <motion.div 
            className="flex justify-center order-1 lg:order-1 mb-4 lg:mb-0 lg:justify-start"
            variants={imageVariants}
          >
            <motion.img 
              src={FrequentlyQuestionsImage} 
              alt="Frequently Asked Questions illustration"
              className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[400px] h-auto"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
            />
          </motion.div>
          
          {/* Right Side - FAQ Items */}
          <motion.div 
            className="space-y-3 sm:space-y-4 order-2 lg:order-2 lg:-ml-28"
            variants={containerVariants}
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm"
                variants={faqVariants}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <div 
                  className="flex items-start cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  {/* Toggle Icon (+ / -) */}
                  <motion.div 
                    className="flex-shrink-0 mr-3"
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-gray-700 text-lg sm:text-xl font-bold">
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </motion.div>
                  
                  {/* Question and Answer */}
                  <div className="flex-1">
                    <h3 className="text-gray-800 font-bold mb-2 sm:mb-3" style={{fontSize: 'clamp(14px, 2.5vw, 16px)', letterSpacing: '0.5px'}}>
                      {faq.question}
                    </h3>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-600 leading-relaxed overflow-hidden" 
                          style={{fontSize: 'clamp(12px, 2vw, 14px)', letterSpacing: '0.3px'}}
                        >
                          {faq.answer}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div 
              className="mt-4 sm:mt-6 md:mt-8 lg:mt-10"
              variants={itemVariants}
            >
              <motion.a 
                href="#" 
                className="inline-flex text-blue-600 hover:text-blue-800 font-bold transition-colors"
                style={{fontSize: 'clamp(16px, 2.5vw, 24px)', letterSpacing: '0.5px'}}
                whileHover={{ 
                  x: 5,
                  transition: { duration: 0.2 }
                }}
              >
                Read More
                <motion.span 
                  className="ml-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                  whileHover={{ 
                    x: 3,
                    transition: { duration: 0.2 }
                  }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}