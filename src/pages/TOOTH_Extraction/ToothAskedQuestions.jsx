import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "   Is tooth extraction painful ?",
    answerLine1:
      " No. We use local anesthesia and offer gentle techniques to keep you comfortable throughout.",
   },
  {
    question: "How long does it take to recover?",
    answerLine1:
      "  Most patients recover within a few days, depending on the type of extraction.",
   },
  {
    question: "  Are the results permanent?",
    answerLine1:
      "   Not always—but if they're impacted, infected, or crowding your other teeth, surgical removal ",
    answerLine2: "is often recommended.",
  },
 
];

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
  hidden: { opacity: 0, x: -30, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
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

const FrequentlyAskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <MainContainer>
      <MotionHeading
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleVariants}
      >
        Frequently Asked Questions
      </MotionHeading>

      <ContentWrapper
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <MotionImage
          src="/Frequently Asked.svg"
          alt="FAQ Illustration"
          variants={imageVariants}
        />

        <FAQContainer>
          {faqData.map((item, index) => (
            <MotionCard
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <QuestionRow 
                onClick={() => toggleFAQ(index)}
                style={{ cursor: 'pointer' }}
              >
                <PlusIcon
                  as={motion.div}
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {openIndex === index ? '−' : '+'}
                </PlusIcon>
                <QuestionText>{item.question}</QuestionText>
              </QuestionRow>

              <AnimatePresence>
                {openIndex === index && (
                  <AnswerText
                    as={motion.div}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    {item.answerLine1}
                    {item.answerLine2 && (
                      <>
                        <br />
                        {item.answerLine2}
                      </>
                    )}
                  </AnswerText>
                )}
              </AnimatePresence>
            </MotionCard>
          ))}

          <MotionReadMore variants={readMoreVariants}>
            <ReadMore>Read More →</ReadMore>
          </MotionReadMore>
        </FAQContainer>
      </ContentWrapper>
    </MainContainer>
  );
};

// Styled Components
const MainContainer = styled.div`
  width: 100%;
  max-width: 1133.09px;
  margin: 20px auto 0;
  background-color: #FFFFFF;
  opacity: 1;
  padding: 25px 24px;
  box-sizing: border-box;
`;

const Heading = styled.h1`
  width: 100%;
  max-width: 535px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: clamp(24px, 3vw, 36px);
  line-height: 1.3;
  color: #0267AC;
  text-align: center;
  margin: 0 auto 25px auto;
`;

const MotionHeading = motion(Heading);

const ContentWrapper = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 100%;
  max-width: 310.72px;
  height: auto;
  object-fit: cover;
  margin-top: 10px;
`;

const MotionImage = motion(Image);

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  min-width: 280px;
`;

const Card = styled.div`
  width: 100%;
  border-radius: 16.88px;
  color: #392D44;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px 30px;
  box-sizing: border-box;
  background: linear-gradient(90deg, #F0F4FF 0%, #FFFFFF 550%);
`;

const MotionCard = motion(Card);

const QuestionRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const PlusIcon = styled.div`
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  color: #392D44;
  font-size: 16px;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
`;

const QuestionText = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: clamp(14px, 2vw, 16px);
  line-height: 24.07px;
  color: #392D44;
  margin: 0;
`;

const AnswerText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: clamp(11px, 2vw, 12.03px);
  line-height: 18.05px;
  color: #392D44;
  margin: 0;
  padding-left: 28px;
`;

const ReadMoreWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 15px;
  padding-left: 5px;
`;

const ReadMore = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: clamp(18px, 2vw, 22.94px);
  line-height: 30.59px;
  color: #0267AC;
`;

const MotionReadMore = motion(ReadMoreWrapper);

export default FrequentlyAskedQuestions;
