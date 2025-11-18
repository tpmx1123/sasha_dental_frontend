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

const paragraphVariants = {
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

const What = () => {
  return (
    <SectionWrapper>
      <MotionHeading
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleVariants}
      >
        What Is a Tooth Extraction?
      </MotionHeading>

      <MotionParagraph
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={paragraphVariants}
      >
        Tooth extraction is a routine dental procedure used to remove teeth that are damaged, decayed,
        <br />
        infected, or causing crowding. <strong>At Sasha Luxe,</strong> we ensure every extraction—whether simple or
        <br />
        surgical—is performed with expert care and your comfort in mind.
      </MotionParagraph>

      <MotionParagraph
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={paragraphVariants}
      >
        Our experienced team uses advanced techniques and pain management to ensure a smooth,
        <br />
        stress-free experience from start to finish.
      </MotionParagraph>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  width: 100%;
  max-width: 1105px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 60px;
  padding: 0 16px;
  box-sizing: border-box;

  @media (min-width: 769px) {
    width: 1105px;
    padding: 0;
    margin-top: 80px;
    margin-bottom: 100px;
  }

  @media (min-width: 1201px) {
    width: 1105px;
  }
`;

const Heading = styled.h2`
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: clamp(24px, 5vw, 39px);
  line-height: 120%;
  color: #0267ac;
  margin-bottom: 25px;

  @media (min-width: 769px) {
    font-size: 39px;
    line-height: 100%;
    margin-bottom: 35px;
  }
`;

const MotionHeading = motion(Heading);

const Paragraph = styled.p`
  width: 100%;
  max-width: 1105px;
  font-family: "Montserrat", sans-serif;
  font-size: clamp(16px, 3.5vw, 26px);
  line-height: clamp(28px, 5vw, 45px);
  color: #392d44;
  text-align: left;
  margin-bottom: 18px;
  padding: 0 4px;

  strong {
    font-weight: 700;
  }

  /* ✅ Hide <br> for mobile to avoid weird line breaks */
  br {
    display: none;

    @media (min-width: 769px) {
      display: block;
    }
  }

  @media (min-width: 769px) {
    font-size: 24px;
    line-height: 45px;
    margin-bottom: 25px;
    padding: 0;
  }
`;

const MotionParagraph = motion(Paragraph);

export default What;
