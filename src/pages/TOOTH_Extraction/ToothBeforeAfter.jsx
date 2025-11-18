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

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const WhatToExpect = () => {
  // Reusable Card Component
  const InfoCard = ({ text, variants }) => (
    <MotionStyledCard
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image */}
      <CardIcon
        src="/arrow.svg"
        alt="Feature Icon"
      />

      {/* Text */}
      <CardText>
        {text}
      </CardText>
    </MotionStyledCard>
  );

  return (
    <MainContainer>
      {/* Main Heading */}
      <MotionHeading
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleVariants}
      >
        Before & After Care
      </MotionHeading>

      {/* Two Columns Layout */}
      <FlexWrapper>
        {/* BEFORE THE PROCEDURE */}
        <MotionSectionContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <MotionSectionHeading variants={headingVariants}>
            Before Your Appointment
          </MotionSectionHeading>

          <InfoCard text={`Avoid eating or drinking 6 hours   \nbefore surgical extractions`} variants={cardVariants} />
          <InfoCard text={`  Inform us of any medications \nor medical conditions)`} variants={cardVariants} />
          <InfoCard text={` Arrange for a ride home\n(especially after wisdom\ntooth removal)`} variants={cardVariants} />
          <InfoCard text={`Follow your personalized\nrecovery plan`} variants={cardVariants} />
        </MotionSectionContainer>

        {/* AFTER THE PROCEDURE */}
        <MotionSectionContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <MotionSectionHeadingAfter variants={headingVariants}>
            After care
          </MotionSectionHeadingAfter>

          <InfoCard text={` Bite gently on gauze to stop\nbleeding`} variants={cardVariants} />
          <InfoCard text={`Apply ice to reduce\nswelling`} variants={cardVariants} />
          <InfoCard text={`Eat soft foods and avoid straws`} variants={cardVariants} />
          <InfoCard text={` Use prescribed \nmouthwash or rinses`} variants={cardVariants} />
        </MotionSectionContainer>
      </FlexWrapper>
    </MainContainer>
  );
};

/* Styled Components */
const MainContainer = styled.div`
  width: 90%;
  max-width: 962px;
  margin: 0px auto;
  border-radius: 16.88px;
  background-color: #FFFFFF;
  padding: 20px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

const Heading = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: clamp(24px, 4vw, 36px);
  color: #0267AC;
  text-align: center;
  margin: 0 auto 24px;

  @media (min-width: 768px) {
    margin: 0 auto 32px;
  }
`;

const MotionHeading = motion(Heading);

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;

const SectionContainer = styled.div`
  flex: 1 1 300px;
  max-width: 471px;
  width: 100%;

  @media (max-width: 767px) {
    max-width: 100%;
  }
`;

const MotionSectionContainer = motion(SectionContainer);

const SectionHeading = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: clamp(18px, 2.5vw, 27px);
  color: #0267AC;
  text-transform: uppercase;
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 24px;
    text-align: left;
  }
`;

const SectionHeadingAfter = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: clamp(18px, 2.5vw, 27px);
  color: #0267AC;
  text-transform: uppercase;
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 24px;
    text-align: left;
    padding-left: 12px;
  }
`;

const MotionSectionHeading = motion(SectionHeading);
const MotionSectionHeadingAfter = motion(SectionHeadingAfter);

const StyledCard = styled.div`
  width: 100%;
  max-width: 471px;
  min-height: auto;
  border-radius: 16.88px;
  background-color: #F1F9FD;
  display: flex;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
  margin-bottom: 12px;
  cursor: pointer;

  @media (min-width: 768px) {
    min-height: 102px;
    padding: 0 24px;
    margin-bottom: 16px;
  }
`;

const MotionStyledCard = motion(StyledCard);

const CardIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 16px;
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
    margin-right: 24px;
  }
`;

const CardText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: clamp(14px, 2.2vw, 20px);
  line-height: 130%;
  color: #000000;
  margin: 0;
  white-space: pre-line;
`;

export default WhatToExpect;
