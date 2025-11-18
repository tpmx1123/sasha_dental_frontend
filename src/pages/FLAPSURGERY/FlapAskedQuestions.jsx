import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "  What is flap surgery used for ?",
    answerLine1:
      "  It is used to treat advanced gum disease by allowing deep cleaning of the roots and bone,",
    answerLine2: "removing diseased tissue, and repositioning healthy gums.",
  },
  {
    question: "  Is flap surgery painful?",
    answerLine1:
      "  No. The procedure is performed under local anesthesia, and post-operative discomfort is ",
    answerLine2: "minimal, especially when lasers are used.",
  },
  {
    question: "  When is bone grafting necessary?",
    answerLine1:
      "  Bone grafts are recommended when there has been bone loss due to periodontitis, especially ",
    answerLine2: "if tooth stability is at risk or future implants are planned.",
  },
  {
    question: " Is laser flap surgery better than conventional?",
    answerLine1: (
      <>
        Laser-assisted flap surgery provides <strong>better healing</strong>,{" "}
        <strong>reduced discomfort</strong>, and <strong>enhanced</strong>{" "}
      </>
    ),
    answerLine2: (
      <>
        <strong>bacterial reduction</strong> making it the preferred choice for many patients.
      </>
    ),
  },
];

const FlapAskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      style={{
        width: "100%",
        maxWidth: "1133.09px",
        margin: "20px auto 0",
        backgroundColor: "#FFFFFF",
        padding: "25px 24px",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          maxWidth: "535px",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700,
          fontSize: "clamp(22px, 3vw, 36px)",
          color: "#0267AC",
          textAlign: "center",
          margin: "0 auto 25px auto",
        }}
      >
        Frequently Asked Questions
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        <motion.img
          src="/Frequently Asked.svg"
          alt="FAQ Illustration"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.04 }}
          style={{
            maxWidth: "270px",
            marginTop: "20px",
            cursor: "pointer",
            transition: "transform 0.22s ease-out",
          }}
        />

        <motion.div 
          style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.025 }}
              style={{
                borderRadius: "16.88px",
                color: "#392D44",
                padding: "20px 30px",
                background: "linear-gradient(90deg, #F0F4FF 0%, #FFFFFF 550%)",
                cursor: "pointer",
                transition: "transform 0.18s ease-out",
              }}
              onClick={() => toggleFAQ(index)}
            >
              <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                <motion.div
                  style={{
                    width: "14px",
                    height: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "10px",
                    color: "#392D44",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {openIndex === index ? '−' : '+'}
                </motion.div>

                <h3
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(14px, 2vw, 16px)",
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
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(11px, 2vw, 12.03px)",
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
            variants={cardVariants}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 340, damping: 16 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "15px",
              paddingLeft: "5px",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 500,
                fontSize: "clamp(18px, 2vw, 22.94px)",
                color: "#0267AC",
              }}
            >
              Read More →
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FlapAskedQuestions;
