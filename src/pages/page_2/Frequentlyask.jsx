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
      question: " What's the difference between a crown and a veneer?",
      answer: "A crown covers the entire tooth and is used to restore strength and function—often after damage or root canal treatment. A veneer is a thin shell placed only on the front surface of the tooth, mainly for cosmetic improvements like whitening, reshaping, or closing gaps."

    },
    {
      question: "Are crowns and veneers permanent?",
      answer: "Yes. Both crowns and veneers are considered long-term restorations, usually lasting 10–15 years or more with proper care. They may eventually need replacement due to wear, damage, or gum changes, but they're designed for lasting beauty and durability."

    },
    {
      question: " Will my crown or veneer look natural?",
      answer: " Absolutely. At Sasha Luxe, we use high-quality materials like Emax and Zirconia that are color matched to your natural teeth. These restorations reflect light like real enamel, making them virtually indistinguishable from surrounding teeth."



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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
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

  return (
    <div className="py-8 md:py-12 lg:py-16 px-4 bg-white -mt-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="text-center mb-6 md:mb-8 font-bold" 
          style={{color: '#0267AC', fontSize: 'clamp(24px, 5vw, 39px)', letterSpacing: '0.5px'}}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        
        {/* FAQ Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start lg:-ml-40">
          {/* Left Side - Image */}
          <motion.div 
            className="flex justify-center mb-6 lg:mb-0"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img 
              src={FrequentlyQuestionsImage} 
              alt="Frequently Asked Questions illustration"
              className=" w-60 h-60 lg:max-w-none lg:w-80 lg:h-80"
            />
          </motion.div>
          
          {/* Right Side - FAQ Items */}
          <motion.div 
            className="space-y-3 lg:-ml-36 lg:-mt-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-2xl p-4 md:p-5 shadow-sm"
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div 
                  className="flex items-start ml-0 md:ml-2 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  {/* Toggle Icon (+ / -) */}
                  <motion.div 
                    className="flex-shrink-0 mr-3 -mt-1"
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-gray-700 text-lg md:text-xl font-medium">
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </motion.div>
                  
                  {/* Question and Answer */}
                  <div className="flex-1">
                    <h3 className="text-gray-800 font-bold mb-2 md:mb-3" style={{fontSize: 'clamp(13px, 3vw, 16px)', letterSpacing: '0.5px'}}>
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
                          style={{fontSize: 'clamp(11px, 2.5vw, 13px)', letterSpacing: '0.3px'}}
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
              className="mt-6 md:mt-10"
              variants={itemVariants}
            >
              <motion.a 
                href="#" 
                className="inline-flex text-blue-600 hover:text-blue-800 font-bold transition-colors"
                style={{fontSize: 'clamp(18px, 4vw, 24px)', letterSpacing: '0.5px'}}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Read More
                <span className="ml-2 text-2xl md:text-4xl">→</span>
              </motion.a>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}
