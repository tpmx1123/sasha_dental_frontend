import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const WhatIsFlap = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <MainContainer>
      <ContentWrapper>
        <MotionHeading
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          What Is Flap Surgery?
        </MotionHeading>

        <MotionContentWrapper
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <MotionParagraph1 variants={itemVariants}>
            <strong>Flap surgery</strong> (also known as <strong>periodontal flap surgery</strong>) is a specialized
            dental procedure used to <strong>treat advanced gum disease</strong> (periodontitis) by
            <strong> cleaning the roots of teeth and the surrounding bone beneath the gums.</strong> It's
            performed when deep periodontal pockets, bone loss, or persistent gum inflammation
            cannot be managed with non-surgical methods like scaling and root planing.
          </MotionParagraph1>

          <MotionParagraph2 variants={itemVariants}>
            At <strong>Sasha Luxe,</strong> we specialize in Full Mouth Flap Surgery to treat moderate to
            severe periodontal disease by removing deep-seated infection, regenerating lost
            structures, and restoring gum health. For optimal results and enhanced comfort, we also
            offer laser-assisted flap procedures and bone grafting options to rebuild lost jawbone
            and support long-term oral stability.
          </MotionParagraph2>
        </MotionContentWrapper>
      </ContentWrapper>
    </MainContainer>
  );
};

/* ✅ Main Container */
const MainContainer = styled.div`
  width: 100%;
  max-width: 1105px;
  margin: 30px auto 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    margin: 50px auto 0 auto;
    padding: 0 20px;
  }
`;

/* ✅ Content Wrapper */
const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* ✅ Motion Heading */
const MotionHeading = motion(styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: clamp(24px, 4vw, 39px);
  color: #0267ac;
  margin-bottom: 20px;
  text-align: center;
  padding: 0 10px;

  @media (min-width: 768px) {
    margin-bottom: 25px;
    padding: 0;
  }
`);

/* ✅ Motion Content Wrapper */
const MotionContentWrapper = motion(styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`);

/* ✅ Motion Paragraph 1 */
const MotionParagraph1 = motion(styled.p`
  width: 100%;
  max-width: 1300px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: clamp(14px, 2.4vw, 24px);
  line-height: clamp(26px, 5vw, 46px);
  color: #392d44;
  text-align: left;
  padding: 0 4px;

  @media (min-width: 768px) {
    padding: 0;
    white-space: normal;
  }

  /* ✅ Remove manual line breaks on mobile */
  @media (max-width: 767px) {
    white-space: normal;
    text-align: left;
  }
`);

/* ✅ Motion Paragraph 2 */
const MotionParagraph2 = motion(styled.p`
  width: 100%;
  max-width: 1105px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: clamp(14px, 2.4vw, 24px);
  line-height: clamp(26px, 5vw, 46px);
  color: #392d44;
  margin-top: 20px;
  text-align: left;
  padding: 0 4px;

  @media (min-width: 768px) {
    margin-top: 25px;
    padding: 0;
    white-space: normal;
  }

  /* ✅ Remove manual line breaks on mobile */
  @media (max-width: 767px) {
    white-space: normal;
    text-align: left;
  }
`);

export default WhatIsFlap;
