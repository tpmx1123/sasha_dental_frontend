import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const ExpectFlap = () => {
  // Reusable card component with hover + fade-in animation
  const InfoCard = ({ text }) => (
    <StyledMotionCard
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 280, damping: 18 }}
    >
      {/* Icon */}
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
    <MainContainer>
      {/* Heading */}
      <MotionHeading
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        What to Expect
      </MotionHeading>

      {/* FLEX WRAP LAYOUT */}
      <FlexWrapper>
        {/* BEFORE SURGERY */}
        <SectionContainer>
          <SectionHeading
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Before Surgery
          </SectionHeading>

          <InfoCard text="Full-mouth periodontal charting & 3D imaging" />
          <InfoCard text="Medical history and risk assessment" />
          <InfoCard text="Custom treatment plan with grafting options" />
          <InfoCard text="Pre-op antibiotics or antiseptic rinse (if required)" />
        </SectionContainer>

        {/* AFTER SURGERY */}
        <SectionContainer>
          <SectionHeadingAfter
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            After Surgery
          </SectionHeadingAfter>

          <InfoCard text="Mild swelling or sensitivity may occur" />
          <InfoCard text="Use cold compresses & take prescribed medications" />
          <InfoCard text="Soft food diet for 3–5 days" />
          <InfoCard text="Avoid smoking or brushing aggressively near gum area" />
          <InfoCard text="Follow-up visits for healing evaluation" />
        </SectionContainer>
      </FlexWrapper>
    </MainContainer>
  );
};

/* Styled Components */
const MainContainer = styled.div`
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
`;

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

const SectionContainer = styled.div`
  flex: 1 1 300px;
  max-width: 471px;
  width: 100%;

  @media (max-width: 767px) {
    max-width: 100%;
  }
`;

const SectionHeading = motion(styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: clamp(18px, 2.5vw, 27px);
  color: #0267AC;
  text-transform: uppercase;
  margin-bottom: 20px;
  text-align: left;

  @media (min-width: 768px) {
    margin-bottom: 24px;
    text-align: left;
  }
`);

const SectionHeadingAfter = motion(styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: clamp(18px, 2.5vw, 27px);
  color: #0267AC;
  text-transform: uppercase;
  margin-bottom: 20px;
  text-align: left;

  @media (min-width: 768px) {
    margin-bottom: 24px;
    text-align: left;
    padding-left: 12px;
  }
`);

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
  cursor: pointer;

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
  transition: transform 0.3s ease;

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
  white-space: normal;
`;

export default ExpectFlap;
