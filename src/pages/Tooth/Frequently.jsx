import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FrequentlyQuestionsImage from '../../components/assets/Frequently Questions.svg';

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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
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
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const readMoreVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: 0.6,
    },
  },
};

export default function Frequently() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is it painful?",
      answer: "No. Procedures are done under local anesthesia. Most patients report only mild soreness afterward, managed easily with medication."


    },
    {
      question: "How long does recovery take?",
      answer: " Initial healing usually takes 3–7 days. Full bone or soft tissue healing may take a few weeks, depending on the procedure."
 

    },
    {
      question: "Will I need stitches?",
      answer: "Some procedures require dissolvable sutures, while others may not need any at all.  Your dentist will explain in advance."


    }
  ];

  return (
    <div className="py-8 md:py-16 px-4 bg-white -mt-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="text-center mb-6 md:mb-8 font-bold text-xl md:text-3xl lg:text-[39px]" 
          style={{color: '#0267AC', letterSpacing: '0.5px'}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          Frequently Asked Questions
        </motion.h2>
        
        {/* Image for Mobile - After Heading */}
        <motion.div 
          className="flex justify-center mb-8 lg:hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
        >
          <img 
            src={FrequentlyQuestionsImage} 
            alt="Frequently Asked Questions illustration"
            className="w-64 h-64"
          />
        </motion.div>
        
        {/* FAQ Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start lg:-ml-40">
          {/* Left Side - Image (Desktop Only) */}
          <motion.div 
            className="hidden lg:flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <img 
              src={FrequentlyQuestionsImage} 
              alt="Frequently Asked Questions illustration"
              className="w-120 h-120"
            />
          </motion.div>
          
          {/* Right Side - FAQ Items */}
          <motion.div 
            className="space-y-3 lg:-ml-36 lg:-mt-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-2xl p-4 md:p-6 shadow-sm"
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div 
                  className="flex items-start cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  {/* Toggle Icon (+ / -) */}
                  <motion.div 
                    className="flex-shrink-0 mr-2 md:mr-3 -mt-0.5 md:-mt-1"
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-gray-700 text-lg md:text-xl font-bold">
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </motion.div>
                  
                  {/* Question and Answer */}
                  <div className="flex-1">
                    <h3 className="text-gray-800 font-bold mb-2 md:mb-3 text-sm md:text-base lg:text-[16px]" style={{letterSpacing: '0.5px'}}>
                      {faq.question}
                    </h3>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-600 leading-relaxed overflow-hidden text-xs md:text-sm lg:text-[14px]" 
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

            <motion.div 
              className="mt-6 md:mt-10"
              variants={readMoreVariants}
            >
              <motion.a 
                href="#" 
                className="inline-flex text-blue-600 font-bold text-base md:text-xl lg:text-[24px]" 
                style={{letterSpacing: '0.5px'}}
                whileHover={{ color: '#0056a3', x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Read More
                <span className="ml-2 text-2xl md:text-3xl lg:text-4xl">→</span>
              </motion.a>
            </motion.div>
          </motion.div>
          
        </div>
        
      
      </div>
    </div>
  );
}
