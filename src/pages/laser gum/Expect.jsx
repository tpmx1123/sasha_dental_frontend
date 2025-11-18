import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Expect = () => {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Reusable card component
  const InfoCard = ({ text }) => (
    <StyledMotionCard
      variants={fadeUp}
      whileHover={{ scale: 1.03 }}
    >
      {/* Image */}
      <IconImage
        src="/arrow.svg"
        alt="Feature Icon"
      />

      {/* Text */}
      <CardText>
        {text}
      </CardText>
    </StyledMotionCard>
  );

  return (
    <MotionContainer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Main Heading */}
      <MotionHeading variants={fadeUp}>
        What to Expect
      </MotionHeading>

      {/* Two Columns Layout */}
      <FlexWrapper>
        {/* BEFORE THE PROCEDURE SECTION */}
        <SectionContainer variants={fadeUp}>
          <SectionHeading>
            Before the Procedure
          </SectionHeading>

          <InfoCard text={`Clinical evaluation & gum health\nassessment`} />
          <InfoCard text={`Digital smile design (for\ncosmetic reshaping)`} />
          <InfoCard text={`Medical history & risk review`} />
          <InfoCard text={`Pre-procedure care instructions`} />
        </SectionContainer>

        {/* AFTER THE PROCEDURE SECTION */}
        <SectionContainer variants={fadeUp}>
          <SectionHeadingAfter>
            After the Procedure
          </SectionHeadingAfter>

          <InfoCard text={`Mild swelling or tenderness\nmay occur`} />
          <InfoCard text={`Avoid spicy or hard foods\nfor 2–3 days`} />
          <InfoCard text={`Maintain excellent oral hygiene`} />
          <InfoCard text={`Use prescribed\nmouthwash or rinses`} />
          <InfoCard text={`Attend follow-up to assess\nhealing`} />
        </SectionContainer>
      </FlexWrapper>
    </MotionContainer>
  );
};

/* Styled Components */
const MotionContainer = motion(styled.div`
  width: 90%;
  max-width: 962px;
  margin: 40px auto;
  border-radius: 16.88px;
  background-color: #FFFFFF;
  padding: 20px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    margin: 80px auto;
    padding: 24px;
  }
`);

const MotionHeading = motion(styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: clamp(24px, 4vw, 36px);
  color: #0267AC;
  text-align: center;
  margin: 0 auto 24px;

  @media (min-width: 768px) {
    margin: 0 auto 32px;

  }
`);

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

const SectionContainer = motion(styled.div`
  flex: 1 1 300px;
  max-width: 471px;
  width: 100%;

  @media (max-width: 767px) {
    max-width: 100%;
  }
`);

const SectionHeading = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: clamp(18px, 2.5vw, 27px);
  color: #0267AC;
  text-transform: uppercase;
  margin-bottom: 20px;
  // text-align: center;

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
  // text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 24px;
    text-align: left;
    padding-left: 12px;
  }
`;

const StyledMotionCard = motion(styled.div`
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
  transition: 0.3s ease;

  @media (min-width: 768px) {
    min-height: 102px;
    padding: 0 24px;
    margin-bottom: 16px;
  }
`);

const IconImage = styled.img`
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

export default Expect;
