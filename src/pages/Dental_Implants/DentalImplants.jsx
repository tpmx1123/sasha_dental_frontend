import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const DentalImplants = () => {
  return (
    <Container>
      <MotionTitle
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleVariants}
      >
        What Are Dental Implants?
      </MotionTitle>

      <MotionParagraph
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={paragraphVariants}
      >
        A <Bold>Dental Implant</Bold> is a titanium post surgically placed in your jawbone to act as an artificial root for a 
        missing tooth. A <Bold>custom-crafted crown</Bold> is then attached to restore the appearance and function of 
        your natural tooth.
      </MotionParagraph>

      <CardsWrapper
        variants={wrapperVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {cardsData.map((card, index) => (
          <Card
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <CardImage src={card.image} alt="icon" />
            <CardText>{card.text}</CardText>
          </Card>
        ))}
      </CardsWrapper>
    </Container>
  );
};

/* Data Array */
const cardsData = [
  { image: "/PERMANENT.svg", text: "Permanent & secure tooth replacement" },
  { image: "/PREVENTS.svg", text: "Prevents bone loss and facial sagging" },
  { image: "/NO SLIPPING.svg", text: "No slipping or discomfort" },
  { image: "/EAT, SPEAK.svg", text: "Eat, speak & smile confidently" }
];

/* Motion Variants */
const titleVariants = {
  hidden: { opacity: 0, y: -30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.2
    }
  }
};

const wrapperVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

/* ✅ UPDATED SPACING ONLY (Reduced Gap) */
const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 50px auto 0 auto; /* reduced from 100px */
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  text-align: center;
  padding-bottom: 100px;
  margin-top: 60px;

  @media (max-width: 768px) {
    padding: 40px 20px;
    margin-top: 20px; /* reduced spacing in mobile */
  }
`;

const Title = styled.h2`
  width: 515px;
  font-weight: 700;
  font-size: 36px;
  color: #0267ac;
  margin-bottom: 15px;
  margin-top: -50px;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 24px;
    text-align: center;
  }
`;

const MotionTitle = motion(Title);

const Paragraph = styled.p`
  width: 1105px;
  font-size: 24px;
  color: #392d44;
  line-height: 45px;
  margin-bottom: 40px;
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
    line-height: 26px;
    text-align: left;
    white-space: normal;
  }
`;

const MotionParagraph = motion(Paragraph);

const Bold = styled.span`
  font-weight: 700;
  color: #392d44;
`;

const CardsWrapper = styled(motion.div)`
  width: 1076px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 18px;
  }
`;

const Card = styled(motion.div)`
  width: 259.75px;
  height: 203.4px;
  background: #f1f9fd;
  border-radius: 26.42px;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.25s ease;

  &:hover {
    box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.18);
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

const CardImage = styled.img`
  width: 76px;
  height: 76px;
  margin-bottom: 12px;
`;

const CardText = styled.p`
  font-size: 17.6px;
  line-height: 26px;
  color: #333333;
  width: 190px;
  margin: 0;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;

export default DentalImplants;
