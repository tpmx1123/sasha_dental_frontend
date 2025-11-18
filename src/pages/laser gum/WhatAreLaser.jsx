import React from "react";
import styled from "styled-components";
import { motion, useReducedMotion } from "framer-motion";

const WhatAreLaser = () => {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: "easeOut",
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <SectionContainer>
      <ContentWrapper
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Heading as={motion.h1} variants={headingVariants}>
          What Are Laser Gum Treatments?
        </Heading>

        <Paragraph1 as={motion.p} variants={paragraphVariants}>
          Laser gum treatments involve the use of dental lasers (typically diode or soft tissue lasers) to <br />
          reshape, remove, disinfect, or lighten gum tissue. The laser energy allows dentists to perform soft-
          <br />
          tissue procedures with less bleeding, less swelling, and minimal discomfort.
        </Paragraph1>

        <Paragraph2 as={motion.p} variants={paragraphVariants}>
          At <strong>Sasha Luxe</strong>, we offer cutting-edge <strong>laser dentistry solutions</strong> for gum reshaping and periodontal <br />
          care. Our <strong>minimally invasive laser treatments</strong> deliver <strong>faster healing, superior precision, and</strong> <br />
          <strong>beautiful aesthetic results</strong> with little to no discomfort.
        </Paragraph2>
      </ContentWrapper>
    </SectionContainer>
  );
};

// 🔹 Outer container (centered)
const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: transparent;
  margin-top: 70px;
  padding: 0 16px;
`;

// 🔹 Content wrapper
const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1105px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 768px) {
    padding: 0 8px;
  }

  @media (max-width: 480px) {
    padding: 0 4px;
  }
`;

// 🔹 Heading
const Heading = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 120%;
  color: #0267ac;
  text-align: center;
  margin: 0 auto 40px auto;
  width: 100%;
  max-width: 641px;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 110%;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    margin-top: -20px;
    font-size: 19px;
    margin-bottom: 15px;
  }
`;

// 🔹 Paragraph 1
const Paragraph1 = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 45px;
  color: #392d44;
  text-align: left;
  width: 100%;
  max-width: 1105px;
  margin: 0 0 20px 0;

  br {
    display: block;
  }

  @media (max-width: 992px) {
    font-size: 20px;
    line-height: 38px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 34px;
    
    br {
      display: none;
    }
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 28px;
    text-align: left;
    
    br {
      display: none;
    }
  }
`;

// 🔹 Paragraph 2
const Paragraph2 = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 45px;
  color: #392d44;
  text-align: left;
  width: 100%;
  max-width: 1105px;
  margin: 0;

  br {
    display: block;
  }

  strong {
    font-weight: 700;
  }

  @media (max-width: 992px) {
    font-size: 20px;
    line-height: 38px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 34px;
    
    br {
      display: none;
    }
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 28px;
    text-align: left;
    
    br {
      display: none;
    }
  }
`;

export default WhatAreLaser;
