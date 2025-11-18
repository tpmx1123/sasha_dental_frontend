import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const faqData = [
  {
    question: "How long do dental implants last?",
    answerLine1:
      "With proper care, dental implants can last 15 – 25 years or more, making them one of the",
    answerLine2: "longest-lasting dental restorations.",
  },
  {
    question: "Is the implant surgery painful?",
    answerLine1:
      "Not at all. We use local anesthesia or sedation for a completely pain-free experience. Most",
    answerLine2: "patients report only mild discomfort post-surgery.",
  },
  {
    question: "How soon can I get my crown after implant placement?",
    answerLine1:
      "In most cases, we wait 3 – 6 months for the implant to fully integrate with the jawbone.",
    answerLine2:
      "However, immediate loading options are available with Nobel Active implants.",
  },
  {
    question: "Am I a candidate for implants?",
    answerLine1:
      "If you're healthy and have adequate bone support, you're likely a great candidate. If bone loss",
    answerLine2: "has occurred, bone grafting may be recommended.",
  },
];

// Animation Variants
const titleVariants = {
  hidden: { opacity: 0, y: -30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, x: -30 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.6,
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
      duration: 0.5,
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
    <Wrapper
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <MotionHeading
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleVariants}
      >
        Frequently Asked Questions
      </MotionHeading>

      <ContentWrapper>
        <MotionImageWrapper
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
        >
          <FAQImage src="/Frequently Asked.svg" alt="FAQ Illustration" />
        </MotionImageWrapper>

        <CardsContainer>
          {faqData.map((item, index) => (
            <Card
              as={motion.div}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <QuestionRow 
                onClick={() => toggleFAQ(index)}
                style={{ cursor: 'pointer' }}
              >
                <Plus
                  as={motion.div}
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {openIndex === index ? '−' : '+'}
                </Plus>
                <QuestionText>{item.question}</QuestionText>
              </QuestionRow>

              <AnimatePresence>
                {openIndex === index && (
                  <Answer
                    as={motion.div}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    {item.answerLine1}
                    <br />
                    {item.answerLine2}
                  </Answer>
                )}
              </AnimatePresence>
            </Card>
          ))}

          <MotionReadMore
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={readMoreVariants}
          >
            Read More →
          </MotionReadMore>
        </CardsContainer>
      </ContentWrapper>
    </Wrapper>
  );
};

export default FrequentlyAskedQuestions;

/* ------------------- STYLED COMPONENTS ------------------- */

const Wrapper = styled(motion.div)`
  width: 1133px;
  margin: 20px auto;
  padding: 25px 24px;
  background: #ffffff;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 20px 16px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const Heading = styled.h1`
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  font-size: 36px;
  color: #0267ac;
  text-align: center;
  margin-bottom: 20px;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: clamp(20px, 5vw, 24px);
    white-space: normal;
    margin-bottom: 16px;
  }
`;

const MotionHeading = motion(Heading);

const ContentWrapper = styled.div`
  display: flex;
  gap: 60px;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 1025px) {
    margin-top: 80px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0;
  }
`;

const MotionImageWrapper = motion(ImageWrapper);

const FAQImage = styled.img`
  width: 310px;
  height: 310px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: clamp(200px, 50vw, 310px);
    height: clamp(200px, 50vw, 310px);
    max-width: 100%;
  }
`;


const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const Card = styled.div`
  background: linear-gradient(90deg, #f0f4ff 0%, #ffffff 350%);
  border-radius: 16px;
  padding: 20px 40px;
  transition: 0.3s;

  @media (max-width: 768px) {
    padding: 16px 14px;
    border-radius: 12px;
  }
`;

const QuestionRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    margin-bottom: 6px;
  }
`;

const Plus = styled.div`
  margin-right: 10px;
  font-weight: 600;
  font-size: 16px;
  color: #392d44;
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: clamp(14px, 3.5vw, 16px);
    margin-right: 8px;
  }
`;

const QuestionText = styled.h3`
  margin: 0;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  color: #392d44;

  @media (max-width: 768px) {
    font-size: clamp(14px, 3.5vw, 16px);
    line-height: 1.4;
  }
`;

const Answer = styled.p`
  margin: 0;
  font-family: Montserrat, sans-serif;
  font-size: 12px;
  line-height: 18px;
  color: #392d44;
  padding-left: 28px;

  @media (max-width: 768px) {
    font-size: clamp(11px, 2.8vw, 12px);
    line-height: clamp(16px, 4vw, 18px);
    padding-left: 22px;
  }
`;

const ReadMore = styled.div`
  margin-top: 10px;
  font-family: Roboto, sans-serif;
  font-size: 22px;
  font-weight: 500;
  color: #0267ac;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: clamp(16px, 4vw, 22px);
    margin-top: 8px;
    text-align: center;
  }
`;

const MotionReadMore = motion(ReadMore);

