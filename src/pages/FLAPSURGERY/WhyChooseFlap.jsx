import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const WhyChooseFlap = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cards = [
    { icon: "/PRECISION.svg", text: "Advanced periodontal expertise" },
    { icon: "/MINIMALLY.svg", text: "Cutting-edge Laser technology for better healing" },
    { icon: "/FASTER.svg", text: "Bone regeneration options" },
    { icon: "/AESTHETIC.svg", text: "Comprehensive gum disease care" },
    { icon: "/Comfort-focused.svg", text: "Comfort-focused experience" },
  ];

  return (
    <MainContainer>
      <Heading>Why Choose Sasha Luxe?</Heading>

      <CardsBox>
        <CardsWrapper
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cards.map((item, index) => (
            <CardMotion
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.04, y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <CardIcon src={item.icon} alt={item.text} />
              <CardContent>
                <CardText>{item.text}</CardText>
              </CardContent>
            </CardMotion>
          ))}
        </CardsWrapper>
      </CardsBox>
    </MainContainer>
  );
};

export default WhyChooseFlap;

/* ---------------- Styled Components ---------------- */

const MainContainer = styled.div`
  width: 962px;
  height: 432px;
  border-radius: 16.88px;
  margin: 60px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: visible;

  @media(max-width: 600px) {
    width: 100%;
    height: auto;
    padding: 0 12px;
    overflow: visible;
  }
`;

const Heading = styled.h1`
  width: 480px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 36px;
  color: #0267ac;
  margin-bottom: 20px;

  @media(max-width: 600px) {
    width: 100%;
    font-size: 24px;
  }
`;

const CardsBox = styled.div`
  width: 962px;
  height: 355px;
  background: #fdfdfdff;
  border-radius: 16.88px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;

  @media(max-width: 600px) {
    width: 100%;
    height: auto;
    padding: 20px 0;
    overflow: visible;
  }
`;

const CardsWrapper = styled.div`
  width: 962px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  overflow: visible;

  @media(max-width: 600px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    overflow: visible;
  }
`;

/* ✅ REAL FRAMER MOTION USED */
const CardMotion = styled(motion.div)`
  width: 471px;
  height: 105px;
  border-radius: 16.88px;
  display: flex;
  align-items: center;
  gap: 22px;
  padding-left: 28px;
  background: linear-gradient(90deg, #F1F9FD 0%, #FFFFFF 1500%);
  cursor: pointer;

  @media(max-width: 600px) {
    width: 100%;
    height: auto;
    padding: 14px 18px;
    gap: 16px;
  }
`;

const CardIcon = styled.img`
  width: 50px;
  height: 50px;

  @media(max-width: 600px) {
    width: 40px;
    height: 40px;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #392d44;
  margin: 0;

  @media(max-width: 600px) {
    font-size: 16px;
    line-height: 1.3;
  }
`;
