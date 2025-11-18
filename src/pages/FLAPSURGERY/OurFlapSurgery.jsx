import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const OurFlapSurgery = () => {
  // Animation variants for points
  const pointsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const pointItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const data = [
    {
      id: 1,
      title: "Full Mouth Flap Surgery",
      image: "/Full Mouth Flap Surgery.svg",
      paragraph: (
        <>
          A surgical procedure used to treat <strong>advanced periodontitis</strong>, flap surgery
          involves carefully lifting the gums to <strong>access and clean deep periodontal pockets</strong>,
          remove infected tissue, and reshape bone if needed. Once cleaned, the gums are repositioned
          snugly around the teeth to facilitate healing.
        </>
      ),
      points: [
        "Reduces deep gum pockets",
        "Removes plaque, tartar & bacteria below the gum line",
        "Prevents further bone and tooth loss",
        "Re-establishes gum health",
      ],
    },
    {
      id: 2,
      title: "Full Mouth Flap Surgery with Laser",
      image: "/GingivaLaser.svg",
      paragraph: (
        <>
          By incorporating <strong>laser technology</strong>, we enhance traditional flap surgery with{" "}
          <strong>minimally invasive laser debridement</strong>, which disinfects the site, reduces{" "}
          inflammation, and promotes faster healing with <strong>less bleeding and discomfort.</strong>
        </>
      ),
      points: [
        "Laser-assisted disinfection of periodontal pockets",
        "Reduced surgical trauma & swelling",
        "Faster recovery & superior comfort",
        "Better preservation of healthy tissue",
      ],
    },
    {
      id: 3,
      title: "Full Mouth Flap Surgery with Bone Graft",
      image: "/Full bone.svg",
      paragraph: (
        <>
          In cases where gum disease has caused <strong>significant bone loss</strong>, bone grafting is
          performed alongside flap surgery to <strong>regenerate lost jawbone</strong> and support the
          surrounding teeth.
        </>
      ),
      points: [
        "Rebuilds bone support around teeth",
        "Prevents future tooth loss",
        "Strengthens the jaw for long-term stability",
        "Ideal for implant preparation or gum disease recovery",
      ],
    },
    {
      id: 4,
      title: "Full Mouth Flap Surgery with Bone Graft & Laser",
      image: "/Full Mouth.svg",
      paragraph: (
        <>
          This advanced procedure combines <strong>laser-assisted flap surgery</strong> with
          <strong>guided bone regeneration</strong> to treat severe gum and bone loss.
        </>
      ),
      points: [
        "Highest level of precision & disinfection",
        "Superior healing with reduced downtime",
        "Enhances graft success & tissue regeneration",
        "Minimally invasive technique",
      ],
    },
  ];

  return (
    <MainContainer>
      <Heading>Our Flap Surgery Options</Heading>

      {data.map((item, i) => (
        <MotionCard
          key={item.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
          whileHover={{ y: -6, boxShadow: "0 8px 18px rgba(0,0,0,0.12)" }}
        >
          <Image src={item.image} alt={item.title} />
          <Content>
            <Title>{item.title}</Title>
            <Paragraph>{item.paragraph}</Paragraph>
            <Points
              as={motion.ul}
              variants={pointsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {item.points.map((point, index) => (
                <Point
                  key={index}
                  as={motion.li}
                  variants={pointItemVariants}
                >
                  <PointIcon src={"/arrow.svg"} alt="icon" /> {point}
                </Point>
              ))}
            </Points>
          </Content>
        </MotionCard>
      ))}
    </MainContainer>
  );
};

export default OurFlapSurgery;

/* ✅ Container */
const MainContainer = styled.div`
  width: 1105px;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;

  @media(max-width: 600px) {
    width: 100%;
    margin: 40px auto;
    padding: 0 16px;
    gap: 50px;
  }
`;

const Heading = styled.h2`
  font-weight: 700;
  font-size: 38px;
  color: #0267ac;
  text-align: center;

  @media(max-width: 600px) {
    font-size: 26px;
    margin-bottom: -10px;
  }
`;

const MotionCard = styled(motion.div)`
  width: 1105px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  transition: all 0.4s ease-in-out;

  @media(max-width: 600px) {
    display: grid;
    grid-template-areas:
      "title"
      "image"
      "para"
      "points";
    gap: 16px;
    width: 100%;
  }
`;

const Image = styled.img`
  width: 280px;
  height: 290px;
  border-radius: 15px;
  object-fit: cover;

  @media(max-width: 600px) {
    grid-area: image;
    width: 75%;
    height: auto;
    margin: 0 auto;
    display: block;
  }
`;

const Content = styled.div`
  flex: 1;
  height: 290px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media(max-width: 600px) {
    display: contents;
  }
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 26px;
  color: #0267ac;

  @media(max-width: 600px) {
    grid-area: title;
    text-align: center;
    font-size: 22px;
  }
`;

const Paragraph = styled.p`
  font-size: 19px;
  line-height: 34px;
  color: #392d44;

  @media(max-width: 600px) {
    grid-area: para;
    text-align: left;
    font-size: 15px;
    line-height: 28px;
  }
`;

const Points = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media(max-width: 600px) {
    grid-area: points;
    padding-left: 0;
    width: 100%;
  }
`;

const Point = styled.li`
  display: flex;
  gap: 10px;
  font-size: 18px;
  color: #392d44;

  @media(max-width: 600px) {
    font-size: 15px;
  }
`;

const PointIcon = styled.img`
  width: 20px;
  height: 20px;
`;
