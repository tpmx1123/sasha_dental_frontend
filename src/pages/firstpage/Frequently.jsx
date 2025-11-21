import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FrequentlyQuestionsImage from '../../components/assets/Frequently Questions.svg';

export default function Frequently() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Are composite fillings better than metal fillings?",
      answer: "Yes for most patients, composite fillings offer better aesthetics and preserve more natural tooth structure compared to amalgam (silver) fillings."
    },
    {
      question: "How long do composite veneers last?",
      answer: "With proper care, composite veneers can last 5-7 years, and can be easily repaired or refreshed."
    },
    {
      question: "Is GIC good for permanent fillings?",
      answer: "GIC is commonly used in non-load-bearing areas and for temporary or pediatric restorations. It's also a great choice when fluoride protection is a priority."
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const faqVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      x: 5,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="py-8 md:py-16 px-4 bg-white -mt-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="text-center mb-6 md:mb-8 font-bold text-xl md:text-[39px]" 
          style={{color: '#0267AC', letterSpacing: '0.5px'}}
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Frequently Asked Questions
        </motion.h2>
        
        {/* FAQ Content */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start ml-0 lg:-ml-40"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Side - Image */}
          <motion.div 
            className="flex justify-center mb-6 lg:mb-0"
            variants={imageVariants}
          >
            <img 
              src={FrequentlyQuestionsImage} 
              alt="Frequently Asked Questions illustration"
              className="w-64 h-64 max-w-xs md:max-w-md lg:w-auto lg:h-auto"
            />
          </motion.div>
          
          {/* Right Side - FAQ Items */}
          <motion.div 
            className="space-y-3 md:space-y-4 ml-0 lg:-ml-36 mt-0 lg:-mt-2"
            variants={containerVariants}
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm"
                variants={faqVariants}
              >
                <div 
                  className="flex items-start cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  {/* Toggle Icon (+ / -) */}
                  <motion.div 
                    className="flex-shrink-0 mr-2 md:mr-3 -mt-1"
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-gray-700 text-lg md:text-xl font-bold">
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </motion.div>
                  
                  {/* Question and Answer */}
                  <div className="flex-1">
                    <h3 className="text-gray-800 font-bold mb-2 md:mb-3 text-[12px] md:text-base" style={{letterSpacing: '0.5px'}}>
                      {faq.question}
                    </h3>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-600 leading-relaxed overflow-hidden text-[10px] md:text-sm" 
                          style={{letterSpacing: '0.3px'}}
                        >
                          {faq.answer}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
        </motion.div>
      </div>
    </div>
  );
}
