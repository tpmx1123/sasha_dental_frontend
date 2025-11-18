import React from "react";
import styled from "styled-components";
import { motion, useReducedMotion } from "framer-motion";

const WhyChooseLaser = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
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

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 32 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.38,
        ease: "easeOut",
        delay: shouldReduceMotion ? 0 : i * 0.08,
      },
    }),
  };

  return (
    <MainContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Heading as={motion.h1} variants={headingVariants}>
        Why Choose Laser Dentistry at Sasha Luxe?
      </Heading>
      <CardsWrapper as={motion.div} variants={containerVariants}>
        {cardsData.map((card, index) => (
          <Card
            as={motion.div}
            key={index}
            custom={index}
            variants={cardVariants}
            whileHover={
              shouldReduceMotion
                ? {}
                : {
                    y: -5,
                    boxShadow: "0 8px 20px rgba(2,103,172,0.13)",
                    backgroundColor: "#e2eff9",
                    transition: { duration: 0.24, ease: "easeOut" },
                  }
            }
          >
            <CardIcon src={card.icon} alt={card.title} />
            <CardContent>
              <CardTitle>{card.title}</CardTitle>
              <CardText>{card.text}</CardText>
            </CardContent>
          </Card>
        ))}
      </CardsWrapper>
    </MainContainer>
  );
};

/* ---------- Card Data ---------- */
const cardsData = [
  {
    icon: "/PRECISION.svg",
    title: "Precision Focused:",
    text: "Preserves healthy tissue",
  },
  {
    icon: "/MINIMALLY.svg",
    title: "Minimally Invasive:",
    text: "No cutting, no stitches",
  },
  {
    icon: "/FASTER.svg",
    title: "Faster Healing:",
    text: "Reduced swelling and no sutures",
  },
  {
    icon: "/AESTHETIC.svg",
    title: "Aesthetic Results:",
    text: "Clean contours, natural color",
  },
  {
    icon: "/SAFE.svg",
    title: "Safe & Sterile:",
    text: "Minimizes infection risk effectively",
  },
];

/* ---------------- Styled Components ---------------- */

const MainContainer = styled.div`
  width: 962px;
  margin: -40px auto 0 auto; /* ↓ Less negative spacing (Reduced Gap) */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0;

  @media (max-width: 1000px) {
    width: 90%;
    margin-top: -20px;
  }

  @media (max-width: 768px) {
    width: 95%;
    margin-top: -15px;
    padding: 0 8px;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-top: -40px;
    padding: 0 12px;
  }
`;

const Heading = styled.h1`
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 36px;
  color: #0267ac;
  margin-bottom: 30px;

  @media (max-width: 1000px) {
    width: 100%;
    font-size: 26px;
    margin-bottom: 18px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 18px;
    padding: 0 8px;
    margin-top: -40px;
  }
`;

const CardsWrapper = styled.div`
  width: 962px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 14px;

  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
    gap: 12px;
  }

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    padding: 0 4px;
  }
`;

const Card = styled.div`
  width: 471px;
  height: 105px;
  background-color: #ebf4fa;
  border-radius: 16.88px;
  display: flex;
  align-items: center;
  gap: 22px;
  padding: 0 14px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(2, 103, 172, 0.07);
  transition: background 0.22s;

  @media (max-width: 1000px) {
    width: 100%;
    height: auto;
    padding: 14px;
  }

  @media (max-width: 768px) {
    padding: 12px;
    gap: 18px;
    border-radius: 14px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    gap: 14px;
    border-radius: 12px;
    min-height: auto;
  }
`;

const CardIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 14px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    margin-left: 8px;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    margin-left: 4px;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #11161a;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
    line-height: 1.3;
  }
`;

const CardText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #392d44;
  margin: 4px 0 0 0;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-top: 3px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-top: 2px;
    line-height: 1.4;
  }
`;

export default WhyChooseLaser;
