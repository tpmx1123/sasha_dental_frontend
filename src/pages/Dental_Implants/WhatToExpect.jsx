import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

// Animation Variants
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

const columnVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const columnVariantsRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const subHeadingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const WhatToExpect = () => {
  const InfoCard = ({ text }) => (
    <Card
      as={motion.div}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.25 }}
    >
      <CardIcon src="/arrow.svg" alt="icon" />
      <CardText>{text}</CardText>
    </Card>
  );

  return (
    <Wrapper>
      <MotionHeading
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleVariants}
      >
        What to Expect
      </MotionHeading>

      <MotionContentRow
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <MotionColumn variants={columnVariants}>
          <MotionSubHeading variants={subHeadingVariants}>
            Before the Procedure
          </MotionSubHeading>
          <InfoCard text={`Detailed consultation & 3D\nCBCT scan`} />
          <InfoCard text={`Customized digital treatment\nplan`} />
          <InfoCard text={`Health clearance (medical\nhistory review)`} />
          <InfoCard text={`Pre-op instructions\n(e.g., fasting, medications)`} />
        </MotionColumn>

        <MotionColumn variants={columnVariantsRight}>
          <MotionSubHeading variants={subHeadingVariants}>
            After the Procedure
          </MotionSubHeading>
          <InfoCard text={` Apply cold packs to reduce\nswelling`} />
          <InfoCard text={` Take prescribed\nantibiotics & pain relief`} />
          <InfoCard text={` Stick to soft foods for 3–5 days`} />
          <InfoCard text={` Avoid smoking, alcohol &\nstrenuous activity`} />
          <InfoCard text={` Maintain oral hygiene without \ndisturbing the surgical area`} />
          <InfoCard text={` Follow up for suture removal \nand healing assessment`} />
        </MotionColumn>
      </MotionContentRow>
    </Wrapper>
  );
};

export default WhatToExpect;

/* -------------------------------- STYLES -------------------------------- */

const Wrapper = styled.div`
  width: 962px;
  margin: 10px auto;
  background-color: #ffffff;
  padding: 24px;
  border-radius: 16.88px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 95%;
    margin: 10px auto;
    padding: 20px 16px;
  }
`;

const Heading = styled.h1`
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  font-size: 44px;
  color: #0267ac;
  text-align: center;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: clamp(24px, 6vw, 34px);
    margin-bottom: 24px;
  }
`;

const MotionHeading = motion(Heading);

const ContentRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 48px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 28px;
  }
`;

const MotionContentRow = motion(ContentRow);

const Column = styled.div`
  width: 471px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MotionColumn = motion(Column);

const SubHeading = styled.h2`
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  font-size: 27px;
  color: #0267ac;
  text-transform: uppercase;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: clamp(18px, 4vw, 27px);
    margin-bottom: 20px;
  }
`;

const MotionSubHeading = motion(SubHeading);

const Card = styled.div`
  width: 471px;
  min-height: 110px;
  border-radius: 16.88px;
  background-color: #f1f9fd;
  display: flex;
  align-items: center;
  padding: 16px 24px;
  box-sizing: border-box;
  margin-bottom: 16px;
  transition: transform 0.25s ease;

  @media (max-width: 1024px) {
    width: 100%;
    min-height: 120px;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-height: auto;
    padding: 14px 16px;
    margin-bottom: 12px;
  }
`;

const CardIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 32px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
`;

const CardText = styled.p`
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  color: #000000;
  white-space: pre-line;
  margin: 0;
  flex: 1;

  @media (max-width: 768px) {
    font-size: clamp(14px, 3.5vw, 17px);
    text-align: left;
    line-height: 140%;
  }
`;
