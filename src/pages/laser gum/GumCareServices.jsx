import React from "react";
import styled from "styled-components";
import { motion, useReducedMotion } from "framer-motion";

const GumCareServices = () => {
  const icon = "/ARROW LASER.svg";
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
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

  const slideVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.9, x: shouldReduceMotion ? 0 : -30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariantsRight = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.9, x: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut",
      },
    },
  };

  const contentVariantsLeft = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <MainContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <Heading as={motion.h1} variants={headingVariants}>
        Our Laser &amp; Gum Care Services
      </Heading>

      {/* SLIDE 1 — Image Left / Content Right */}
      <Slide
        as={motion.div}
        variants={slideVariants}
      >
        <LeftImage
          as={motion.img}
          src="/Gingival.svg"
          alt="Gingival Depigmentation"
          variants={imageVariants}
        />
        <RightContent
          as={motion.div}
          variants={contentVariants}
        >
          <ServiceTitle>Gingival Depigmentation</ServiceTitle>
          <ServiceParagraph>
            Target dark or patchy gum pigmentation caused by excess melanin or lifestyle factors.
            This cosmetic procedure gently removes discolored tissue to reveal even toned, pink gums.
          </ServiceParagraph>
          <Points>
            <Point as={motion.li} variants={itemVariants}>
              <PointIcon src={icon} alt="icon" /> Aesthetic gum lightening
            </Point>
            <Point as={motion.li} variants={itemVariants}>
              <PointIcon src={icon} alt="icon" /> Ideal for darker-toned gums
            </Point>
            <Point as={motion.li} variants={itemVariants}>
              <PointIcon src={icon} alt="icon" /> Lasting cosmetic improvement
            </Point>
          </Points>
        </RightContent>
      </Slide>

      {/* SLIDE 2 — Content Left / Image Right */}
      <Slide
        as={motion.div}
        variants={slideVariants}
      >
        <LeftContent
          as={motion.div}
          variants={contentVariantsLeft}
        >
          <ServiceTitle>Gingival Depigmentation with Laser</ServiceTitle>
          <ServiceParagraph>
            Using <strong>diode or soft-tissue lasers</strong>, we precisely remove pigmented gum tissue <br />
            with <strong>minimal bleeding, no sutures, and rapid healing</strong>.
          </ServiceParagraph>
          <Points>
            <Point as={motion.li} variants={itemVariants}>
              <PointIcon src={icon} alt="icon" /> Non-surgical & virtually painless
            </Point>
            <Point as={motion.li} variants={itemVariants}>
              <PointIcon src={icon} alt="icon" /> Uniform, natural-looking gum tone
            </Point>
            <Point as={motion.li} variants={itemVariants}>
              <PointIcon src={icon} alt="icon" /> Quick recovery, long-lasting results
            </Point>
          </Points>
        </LeftContent>
        <RightImage
          as={motion.img}
          src="/GingivaLaser.svg"
          alt="Laser Crown Lengthening"
          variants={imageVariantsRight}
        />
      </Slide>

      {/* SLIDE 3 */}
      <Slide
        as={motion.div}
        variants={slideVariants}
      >
        <LeftImage
          as={motion.img}
          src="/GUM RESHAPING.svg"
          alt="Gum Reshaping / Contouring Per Tooth"
          variants={imageVariants}
        />
        <RightContent
          as={motion.div}
          variants={contentVariants}
        >
          <ServiceTitle>Gum Reshaping / Contouring Per Tooth</ServiceTitle>
          <ServiceParagraph>
            Correct uneven gum lines, excess gum display, or overgrown soft tissue. This <br />
            procedure redefines your gingival architecture for a more symmetrical and <br />
            attractive smile.
          </ServiceParagraph>
          <Points>
            <Point as={motion.li} variants={itemVariants}>
              <PointIcon src={icon} alt="icon" /> Ideal for gummy smiles
            </Point>
            <Point as={motion.li} variants={itemVariants}>
              <PointIcon src={icon} alt="icon" /> Enhances tooth proportions
            </Point>
            <Point as={motion.li} variants={itemVariants}>
              <PointIcon src={icon} alt="icon" /> Aesthetic smile design
            </Point>
          </Points>
        </RightContent>
      </Slide>

      {/* SLIDE 4 */}
      <Slide
        as={motion.div}
        variants={slideVariants}
      >
        <LeftContent
          as={motion.div}
          variants={contentVariantsLeft}
        >
          <ServiceTitle>Gum Reshaping / Contouring Per Tooth with Laser</ServiceTitle>
          <ServiceParagraph>
            Laser contouring offers a <strong>bloodless, stitch-free solution</strong> with precision control <br />
            and minimal trauma. Perfect for single-tooth adjustments or as part of a smile <br />
            makeover.
          </ServiceParagraph>
          <Points>
            <Point as={motion.li} variants={itemVariants}>
              <PointIcon src={icon} alt="icon" /> Minimal post-op swelling
            </Point>
            <Point as={motion.li} variants={itemVariants}>
              <PointIcon src={icon} alt="icon" /> Seamless gum margins
            </Point>
            <Point as={motion.li} variants={itemVariants}>
              <PointIcon src={icon} alt="icon" /> Faster, cleaner healing
            </Point>
          </Points>
        </LeftContent>
        <RightImage
          as={motion.img}
          src="/GUMreshape.svg"
          alt="Laser Crown Lengthening"
          variants={imageVariantsRight}
        />
      </Slide>

      {/* SLIDE 5 */}
      <Slide
        as={motion.div}
        variants={slideVariants}
      >
        <LeftImage
          as={motion.img}
          src="/Full Mouth.svg"
          alt="Curettage – Full Mouth"
          variants={imageVariants}
        />
        <RightContent
          as={motion.div}
          variants={contentVariants}
        >
          <ServiceTitle>Curettage – Full Mouth</ServiceTitle>
          <ServiceParagraph>
            A therapeutic procedure to remove <strong>infected gingival epithelium</strong> in periodontal <br />
            pockets. Promotes gum reattachment and reduces inflammation in moderate to <br />
            advanced gum disease.
          </ServiceParagraph>
          <Points>
            <Point as={motion.li} variants={itemVariants}>
              <PointIcon src={icon} alt="icon" /> Treats chronic periodontitis
            </Point>
            <Point as={motion.li} variants={itemVariants}>
              <PointIcon src={icon} alt="icon" /> Improves periodontal health
            </Point>
            <Point as={motion.li} variants={itemVariants}>
              <PointIcon src={icon} alt="icon" /> Supports long-term gum stability
            </Point>
          </Points>
        </RightContent>
      </Slide>

      {/* SLIDE 6 */}
      <Slide
        as={motion.div}
        variants={slideVariants}
      >
        <LeftContent
          as={motion.div}
          variants={contentVariantsLeft}
        >
          <ServiceTitle>Curettage – Full Mouth with Laser</ServiceTitle>
          <ServiceParagraph>
            Laser-assisted full-mouth curettage targets diseased tissue and bacteria more <br />
            effectively, promoting faster healing and enhanced regeneration.
          </ServiceParagraph>
          <Points>
            <Point as={motion.li} variants={itemVariants}>
              <PointIcon src={icon} alt="icon" /> Superior bacterial control
            </Point>
            <Point as={motion.li} variants={itemVariants}>
              <PointIcon src={icon} alt="icon" /> Less invasive than traditional methods
            </Point>
            <Point as={motion.li} variants={itemVariants}>
              <PointIcon src={icon} alt="icon" /> Reduced discomfort and bleeding
            </Point>
          </Points>
        </LeftContent>
        <RightImage
          as={motion.img}
          src="/CurettageLaser-1.svg"
          alt="Laser Crown Lengthening"
          variants={imageVariantsRight}
        />
      </Slide>

      {/* SLIDE 7 */}
      <Slide
        as={motion.div}
        variants={slideVariants}
      >
        <LeftImage
          as={motion.img}
          src="/Curettage – Per Tooth.svg"
          alt="Curettage – Per Tooth"
          variants={imageVariants}
        />
        <RightContent
          as={motion.div}
          variants={contentVariants}
        >
          <ServiceTitle>Curettage – Per Tooth</ServiceTitle>
          <ServiceParagraph>
            Focused periodontal therapy to treat isolated areas of inflammation or infection. <br />
            Ideal for early-stage gum disease or site-specific deep pockets.
          </ServiceParagraph>
          <Points>
            <Point as={motion.li} variants={itemVariants}>
              <PointIcon src={icon} alt="icon" /> Preserves healthy surrounding tissue
            </Point>
            <Point as={motion.li} variants={itemVariants}>
              <PointIcon src={icon} alt="icon" /> Boosts local healing
            </Point>
            <Point as={motion.li} variants={itemVariants}>
              <PointIcon src={icon} alt="icon" /> Quick, targeted intervention
            </Point>
          </Points>
        </RightContent>
      </Slide>

      {/* SLIDE 8 */}
      <Slide
        as={motion.div}
        variants={slideVariants}
      >
        <LeftContent
          as={motion.div}
          variants={contentVariantsLeft}
        >
          <ServiceTitle>Curettage – Per Tooth with Laser</ServiceTitle>
          <ServiceParagraph>
            Precision laser technology enhances per-tooth curettage by gently debriding the <br />
            soft tissue and eliminating harmful bacteria without harming surrounding <br />
            structures.
          </ServiceParagraph>
          <Points>
            <Point as={motion.li} variants={itemVariants}>
              <PointIcon src={icon} alt="icon" /> Effective on localized pockets
            </Point>
            <Point as={motion.li} variants={itemVariants}>
              <PointIcon src={icon} alt="icon" /> Pain-free, suture-free treatment
            </Point>
            <Point as={motion.li} variants={itemVariants}>
              <PointIcon src={icon} alt="icon" /> Immediate return to daily activities
            </Point>
          </Points>
        </LeftContent>
        <RightImage
          as={motion.img}
          src="/Curettage with Laser.svg"
          alt="Laser Crown Lengthening"
          variants={imageVariantsRight}
        />
      </Slide>
    </MainContainer>
  );
};

/* ---------------------- STYLED COMPONENTS ---------------------- */

const MainContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 50px 20px 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  width: 100%;
  max-width: 583px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 38px;
  color: #0267ac;
  text-align: center;
  margin: 70px 0 60px 0;

  @media (max-width: 768px) {
    font-size: 20px;
    margin: 2px 0 30px 0;
  }
`;

const Slide = styled.div`
  width: 100%;
  max-width: 1100px;
  min-height: 284px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  gap: 40px;

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    margin-bottom: 40px;
    align-items: stretch; /* Allow children to stretch full width */
  }

  @media (max-width: 576px) {
    gap: 20px;
    margin-bottom: 30px;
  }
`;

const LeftImage = styled.img`
  width: 317px;
  height: 276px;
  border-radius: 25px;
  background-color: #eeebef;
  object-fit: cover;

  @media (max-width: 992px) {
    width: 80%;
    height: auto;
    order: 2; /* Display image after title, before paragraph on mobile */
    margin: 0 auto;
    display: block;
  }

  @media (max-width: 576px) {
    width: 90%;
    margin: 0 auto;
    display: block;
  }
`;

const RightImage = styled(LeftImage)`
  @media (max-width: 992px) {
    order: 2; /* Display image after title, before paragraph on mobile */
    margin: 0 auto;
    display: block;
  }
`;

const RightContent = styled.div`
  width: 755px;
  display: flex;
  flex-direction: column;

  @media (max-width: 992px) {
    width: 100%;
    display: contents; /* Remove wrapper to allow flex order on children */
  }
`;

const LeftContent = styled(RightContent)`
  @media (max-width: 992px) {
    display: contents; /* Remove wrapper to allow flex order on children */
  }
`;

const ServiceTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 41.29px;
  color: #0267ac;
  margin-bottom: 6px;
  text-align: left;

  @media (max-width: 992px) {
    font-size: 24px;
    order: 1; /* Display title first on mobile */
    width: 100%;
    text-align: center;
  }

  @media (max-width: 576px) {
    font-size: 16px;
    text-align: center;
  }
`;

const ServiceParagraph = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 19px;
  line-height: 34.87px;
  color: #392d44;
  margin-bottom: 8px;
  text-align: left;

  br {
    display: block;
  }

  @media (max-width: 992px) {
    font-size: 16px;
    line-height: 30px;
    order: 3; /* Display paragraph after image on mobile */
    width: 100%;
    margin-bottom: 3px;
    
    br {
      display: none;
    }
  }

  @media (max-width: 576px) {
    font-size: 14px;
    line-height: 26px;
    margin-top:-8px;
    margin-bottom: 2px;
    br {
      display: none;
    }
  }
`;

const Points = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    order: 4; /* Display points last on mobile */
  }
`;

const Point = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 19px;
  line-height: 34.87px;
  color: #392d44;

  @media (max-width: 992px) {
    font-size: 14px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

const PointIcon = styled.img`
  width: 20px;
  height: 20px;
  opacity: 1;

  @media (max-width: 576px) {
    width: 16px;
    height: 16px;
  }
`;

export default GumCareServices;
