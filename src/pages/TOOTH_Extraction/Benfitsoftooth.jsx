import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const BenefitsOfExtractions = () => {
  const arrowIcon = "/arrow.svg";

  const benefits = [
    "Quick, clean removal of problematic teeth",
    "Prevents infection and overcrowding",
    "Promotes oral health and comfort",
    "Local anesthesia for a pain-free experience",
    "Safe recovery guidance and follow-up care",
  ];

  return (
    <Wrapper>
      <MotionHeading
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleVariants}
      >
        Benefits of Professional Extractions at Sasha Luxe
      </MotionHeading>

      <BlueSection>
        <MotionContentBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {benefits.map((item, index) => (
            <MotionListItem key={index} variants={itemVariants}>
              <Icon src={arrowIcon} alt="arrow" />
              <Text>{item}</Text>
            </MotionListItem>
          ))}
        </MotionContentBox>
      </BlueSection>
    </Wrapper>
  );
};

export default BenefitsOfExtractions;

/* ✅ STYLES BELOW */

const Wrapper = styled.div`
  width: 100%;
  background: #fff;
`;

const Heading = styled.h2`
  text-align: center;
  color: #0267ac;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 36px;
  margin: -100px 0 40px;

  @media (max-width: 768px) {
    font-size: 26px;
    margin-bottom: 25px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 18px;
  }
`;

const MotionHeading = motion(Heading);

const BlueSection = styled.div`
  width: 100vw;
  background: rgba(235, 250, 252, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  box-sizing: border-box;
`;

const ContentBox = styled.div`
  width: 536px;
  max-width: 95%;
`;

const MotionContentBox = motion(ContentBox);

const ListItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;

  @media (max-width: 480px) {
    margin-bottom: 14px;
  }
`;

const MotionListItem = motion(ListItem);

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }
`;

const Text = styled.span`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 28px;
  line-height: 45px;
  color: #000;
  flex-wrap: wrap;
  white-space: normal;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 32px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 26px;
  }
`;
