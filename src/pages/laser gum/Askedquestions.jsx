import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const faqData = [
  {
    question: " Is laser gum treatment painful?",
    answerLine1:
      " Not at all. Laser procedures are virtually pain-free. Most patients report only mild sensitivity",
    answerLine2: "during and after treatment.",
  },
  {
    question: " How long does healing take?",
    answerLine1:
      " Laser procedures heal significantly faster than traditional methods—usually within a few days.",
  },
  {
    question: " Are the results permanent?",
    answerLine1:
      " Yes, especially for depigmentation and contouring. Proper oral care ensures long-lasting results.",
  },
  {
    question: "Can I combine treatments?",
    answerLine1:
      " Absolutely. Many patients combine laser depigmentation and reshaping for a total smile enhancement.",
  },
];

const Askedquestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1133.09px",
        margin: "0 auto",
        backgroundColor: "#FFFFFF",
        padding: "10px 24px 25px 24px",
        boxSizing: "border-box",
      }}
    >
      {/* ✅ MOBILE RESPONSIVE HEADING FIX */}
      <style>
        {`
          @media (max-width: 600px) {
            .faq-heading {
              font-size: 24px !important; 
              line-height: 1.2 !important;
              white-space: normal !important;
              text-align: center !important;
            }
            .faq-image {
              max-width: 220px !important;
            }
          }
        `}
      </style>

      {/* Heading */}
      <motion.h1
        className="faq-heading"
        style={{
          maxWidth: "100%",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700,
          fontSize: "36px", // desktop untouched
          lineHeight: "1.3",
          color: "#0267AC",
          textAlign: "center",
          margin: "0 auto 20px auto",
          whiteSpace: "normal", // ✅ allow wrapping
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleVariants}
      >
        Frequently Asked Questions
      </motion.h1>

      {/* Main content */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "32px",
          flexWrap: "wrap",
        }}
      >
        {/* Left Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
        >
          <img
            src="/Frequently Asked.svg"
            alt="FAQ Illustration"
            className="faq-image"
            style={{
              width: "100%",
              maxWidth: "300px",
              height: "auto",
              objectFit: "cover",
              marginTop: "20px",
            }}
          />
        </motion.div>

        {/* Right FAQ Cards */}
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            flex: 1,
            minWidth: "300px",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              style={{
                borderRadius: "16.88px",
                color: "#392D44",
                display: "flex",
                flexDirection: "column",
                padding: "18px 24px",
                background: "linear-gradient(90deg, #F0F4FF 0%, #FFFFFF 350%)",
                cursor: "pointer",
              }}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              onClick={() => toggleFAQ(index)}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "6px",
                }}
              >
                <motion.div
                  style={{
                    width: "14px",
                    height: "14px",
                    marginRight: "10px",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {openIndex === index ? '−' : '+'}
                </motion.div>

                <h3 className=" text-[13px] lg:text-[16.04px]"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  {item.question}
                </h3>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className=" text-[10px] lg:text-[12.03px]"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 400,
                      fontSize: "12.03px",
                      lineHeight: "18.05px",
                      margin: 0,
                      paddingLeft: "28px",
                      overflow: "hidden",
                    }}
                  >
                    {item.answerLine1}
                    {item.answerLine2 && (
                      <>
                        <br />
                        {item.answerLine2}
                      </>
                    )}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          <motion.div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "12px",
              paddingLeft: "5px",
            }}
            variants={readMoreVariants}
          >
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Askedquestions;
