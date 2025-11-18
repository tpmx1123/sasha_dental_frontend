import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

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

const slideVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const slideVariantsRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const imageVariantsRight = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

const contentVariants = {
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

const contentVariantsLeft = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

const pointsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const pointVariants = {
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

const ToothServices = () => {
  return (
    <MainContainer>
      <MotionHeading
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleVariants}
      >
        Our Extraction Services
      </MotionHeading>

      {/* SLIDE 1 */}
      <MotionSlide
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideVariants}
      >
        <MotionLeftImage1 
          src="/Extraction Per Tooth.svg" 
          alt="Extraction Per Tooth"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={imageVariants}
        />
        <MotionRightContent 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={contentVariants}
        >
          <MotionServiceTitle>Extraction Per Tooth</MotionServiceTitle>
          <LeftImage1Mobile src="/Extraction Per Tooth.svg" alt="Extraction Per Tooth" />
          <MotionServiceParagraph>
            This is a standard, non-surgical procedure to remove a visible tooth that's damaged, decayed,
            or beyond saving. Whether it's due to trauma, infection, or overcrowding, our gentle approach
            ensures a quick and comfortable recovery.
          </MotionServiceParagraph>
          <MotionIdealHeading>Ideal For:</MotionIdealHeading>
          <MotionPoints_Exact 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={pointsVariants}
          >
            <MotionPoint_Exact variants={pointVariants}>
              <PointIcon src="/arrow.svg" alt="" />
              Severely decayed teeth
            </MotionPoint_Exact>
            <MotionPoint_Exact variants={pointVariants}>
              <PointIcon src="/arrow.svg" alt="" />
              Teeth affected by gum disease
            </MotionPoint_Exact>
            <MotionPoint_Exact variants={pointVariants}>
              <PointIcon src="/arrow.svg" alt="" />
              Preparation for orthodontic treatment
            </MotionPoint_Exact>
          </MotionPoints_Exact>
        </MotionRightContent>
      </MotionSlide>

      {/* SLIDE 2 */}
      <MotionSlide
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideVariantsRight}
      >
        <MotionRightContent 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={contentVariants}
        >
          <MotionServiceTitle>Extraction of Molar</MotionServiceTitle>
          <SlideLargeImageMobile src="/molar.svg" alt="Extraction of Molar" />
          <MotionServiceParagraph>
            Molars, located at the back of your mouth, can be challenging to remove due to their size and
            location. We perform careful molar extractions with precision to reduce discomfort and prevent
            complications.
          </MotionServiceParagraph>
          <MotionIdealHeading>Why Clients Trust Us for Molar Extractions:</MotionIdealHeading>
          <MotionPoints_Exact 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={pointsVariants}
          >
            <MotionPoint_Exact variants={pointVariants}>
              <PointIcon src="/arrow.svg" alt="" />
              Pain-controlled and efficient procedure
            </MotionPoint_Exact>
            <MotionPoint_Exact variants={pointVariants}>
              <PointIcon src="/arrow.svg" alt="" />
              Minimal swelling or downtime
            </MotionPoint_Exact>
            <MotionPoint_Exact variants={pointVariants}>
              <PointIcon src="/arrow.svg" alt="" />
              Expert post-extraction care
            </MotionPoint_Exact>
          </MotionPoints_Exact>
        </MotionRightContent>
        <MotionSlideLargeImage 
          src="/molar.svg" 
          alt="Extraction of Molar"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={imageVariantsRight}
        />
      </MotionSlide>

      {/* SLIDE 3 - Desktop: image left, content right */}
      <MotionSlideReverse
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideVariants}
      >
        <MotionSlideLargeImage 
          src="/Extraction Surgical.svg" 
          alt="Post Extraction Care"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={imageVariants}
        />
        <MotionRightContentThird 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={contentVariantsLeft}
        >
          <MotionServiceTitle>Extraction Surgical (Wisdom Tooth)</MotionServiceTitle>
          <SlideLargeImageMobile src="/Extraction Surgical.svg" alt="Post Extraction Care" />
          <MotionServiceParagraph>
            Impacted or partially erupted wisdom teeth often require <strong>surgical extraction </strong>to
            Prevent infection, crowding, or discomfort. We specialize in <strong>Extraction Surgical</strong>
            <strong> (Wisdom Tooth)</strong> procedures that are safe, effective, and minimally invasive.
          </MotionServiceParagraph>
          <MotionIdealHeading>Why It's Often Needed:</MotionIdealHeading>
          <MotionPoints_Exact 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={pointsVariants}
          >
            <MotionPoint_Exact variants={pointVariants}>
              <PointIcon src="/arrow.svg" alt="" />
              Wisdom teeth growing sideways or impacted
            </MotionPoint_Exact>
            <MotionPoint_Exact variants={pointVariants}>
              <PointIcon src="/arrow.svg" alt="" />
              Pain, swelling, or gum inflammation
            </MotionPoint_Exact>
            <MotionPoint_Exact variants={pointVariants}>
              <PointIcon src="/arrow.svg" alt="" />
              Preventive removal to avoid future complications
            </MotionPoint_Exact>
          </MotionPoints_Exact>
        </MotionRightContentThird>
      </MotionSlideReverse>
    </MainContainer>
  );
};

export default ToothServices;

/* ---------------------- STYLED COMPONENTS ---------------------- */

const MainContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0px 20px 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 40px;
  color: #0267ac;
  text-align: center;
  margin-bottom: 60px;
  align-self: center;

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 28px;
    font-size: 24px;
  }
`;

const MotionHeading = motion(Heading);

const Slide = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 18px;
    margin-bottom: 42px;
    align-items: stretch;
  }
`;

/* For Slide 3 on desktop, reverse image/content (image left, content right) */
const SlideReverse = styled(Slide)`
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MotionSlide = motion(Slide);
const MotionSlideReverse = motion(SlideReverse);

const LeftImage1 = styled.img`
  width: 317px;
  height: 284px;
  border-radius: 20px;
  object-fit: cover;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LeftImage1Mobile = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 18px;
    object-fit: cover;
    margin: 12px 0 14px 0;
  }
`;

const SlideLargeImage = styled.img`
  width: 360px;
  height: 320px;
  border-radius: 20px;
  object-fit: cover;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MotionLeftImage1 = motion(LeftImage1);
const MotionSlideLargeImage = motion(SlideLargeImage);

const SlideLargeImageMobile = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 18px;
    object-fit: cover;
    margin: 12px 0 14px 0;
  }
`;

const RightContent = styled.div`
  width: 755px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: flex-start;
    padding: 0;
    margin: 0;
    gap: 11px;
  }
`;

const RightContentThird = styled(RightContent)`
  padding-top: 8px;
`;

const MotionRightContent = motion(RightContent);
const MotionRightContentThird = motion(RightContentThird);

const ServiceTitle_Exact = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 25.69px;
  color: #0267ac;
  margin: 0;

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
    font-size: 21px;
    margin-bottom: 5px;
  }
`;

const ServiceParagraph_Exact = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  line-height: 34px;
  color: #392d44;
  margin: 0;

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
    line-height: 24px;
  }
`;

const MotionServiceTitle = motion(ServiceTitle_Exact);
const MotionServiceParagraph = motion(ServiceParagraph_Exact);

const IdealHeading = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 20px;
  color: #0267ac;
  margin: 5px 0 4px 0;

  @media (max-width: 768px) {
    text-align: left;
    margin-bottom: 3px;
    width: 100%;
    font-size: 18px;
  }
`;

const Points_Exact = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;

  @media (max-width: 768px) {
    text-align: left;
    margin-top: 0;
    padding-left: 0;
  }
`;

const MotionIdealHeading = motion(IdealHeading);
const MotionPoints_Exact = motion(Points_Exact);

const Point_Exact = styled.li`
  display: flex;
  align-items: center;
  gap: 14px;
  font-family: "Montserrat", sans-serif;
  font-size: 19px;
  color: #392d44;

  @media (max-width: 768px) {
    justify-content: flex-start;
    text-align: left;
    font-size: 16px;
    margin-bottom: 5px;
  }
`;

const MotionPoint_Exact = motion(Point_Exact);

const PointIcon = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

