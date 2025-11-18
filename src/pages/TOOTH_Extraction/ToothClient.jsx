import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const slideInVariants = {
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

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Clients = () => {
  return (
    <OuterContainer>
      <MainContainer>
        {/* Heading */}
        <MotionHeading
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInVariants}
        >
          Our Clients Love
        </MotionHeading>

        {/* Paragraph */}
        <MotionParagraph
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          Some best words from our beloved clients. It's always encouraging to
          know that our clients loved our services as it keeps us <br className="desktop-break" /> going even
          more enthusiastically.
        </MotionParagraph>

        {/* Main Section */}
        <MotionMainSection
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Left: Testimonials */}
          <TestimonialsContainer>
            <TestimonialsWrapper>
              {/* Testimonial 1 */}
              <MotionTestimonialCard variants={itemVariants}>
                <QuoteIcon src="/firstquote.svg" alt="opening quote" />
                <StarsIcon src="/stars.svg" alt="stars" />
                <TestimonialText>
                  I "I had dark patches on my gums that made me 
                  self-conscious. After laser depigmentation at 
                  Sasha Luxe, my gums are pink and healthy
                  looking. It was quick and completely painless!"
                </TestimonialText>
                <TestimonialName>Sneha R.</TestimonialName>
              </MotionTestimonialCard>

              {/* Testimonial 2 */}
              <MotionTestimonialCard variants={itemVariants}>
                <StarsIcon src="/stars.svg" alt="stars" />
                <TestimonialText className="second-testimonial">
                  My gum line was uneven, and it really threw off 
                  my smile. The laser reshaping was fast, precise, 
                  and the healing was a breeze. I love how natural 
                  my smile looks now
                </TestimonialText>
                <TestimonialName>Ravi K.</TestimonialName>
              </MotionTestimonialCard>
            </TestimonialsWrapper>
            
            {/* Button placed below the testimonials - Desktop only */}
            <DesktopButtonWrapper>
              <MotionClickMoreButton
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Click More
              </MotionClickMoreButton>
            </DesktopButtonWrapper>
          </TestimonialsContainer>

          {/* Right: Video/Image Section */}
          <VideoWrapper>
            <MotionVideoContainer variants={scaleVariants}>
              <VideoImage src="/ourclient.svg" alt="Client Video" />

              <PlayButton>
                <PlayIcon></PlayIcon>
              </PlayButton>

              <ClosingQuote src="/quotes.svg" alt="closing quote" />
            </MotionVideoContainer>
            
            {/* Button placed after video/image - Mobile only */}
            <MobileButtonWrapper>
              <MotionClickMoreButton
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Click More
              </MotionClickMoreButton>
            </MobileButtonWrapper>
          </VideoWrapper>
        </MotionMainSection>
      </MainContainer>

      <FooterSpacer></FooterSpacer>
    </OuterContainer>
  );
};

/* Styled Components */
const OuterContainer = styled.div`
  background-color: #FFFFFF;
`;

const MainContainer = styled.div`
  width: 100%;
  min-height: auto;
  background: linear-gradient(90deg, #F1F9FD 0%, #FFFFFF 550%);
  border-radius: 7.48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 30px 16px;
  box-sizing: border-box;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 552px;
    padding: 60px 16px;
  }
`;

const Heading = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: clamp(20px, 4vw, 32.93px);
  line-height: clamp(30px, 5vw, 49.4px);
  color: #0267AC;
  margin: 0 0 8px 0;
  width: 100%;
  max-width: 1108px;


  @media (min-width: 768px) {
    text-align: left;
  }
`;

const MotionHeading = motion(Heading);

const Paragraph = styled.p`
  width: 100%;
  max-width: 1107.69px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: clamp(14px, 2.5vw, 17.96px);
  line-height: clamp(22px, 3.5vw, 29.94px);
  color: #392D44;
  margin: 0 0 24px 0;
  // text-align: center
  padding: 0 12px;

  .desktop-break {
    display: none;
  }

  @media (min-width: 768px) {
    text-align: left;
    margin: 0 0 32px 0;
    padding: 0;

    .desktop-break {
      display: block;
    }
  }
`;

const MotionParagraph = motion(Paragraph);

const MainSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1108.12px;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 24px;
  }
`;

const MotionMainSection = motion(MainSection);

const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 605px;
  flex: 1 1 100%;
`;

const TestimonialsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
  justify-content: center;
`;

const TestimonialCard = styled.div`
  width: 100%;
  max-width: 294px;
  min-height: auto;
  background-color: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  position: relative;
  flex: 1 1 280px;

  @media (min-width: 768px) {
    height: 200px;
    padding: 20px;
  }
`;

const MotionTestimonialCard = motion(TestimonialCard);

const QuoteIcon = styled.img`
  position: absolute;
  width: 50px;
  height: 38px;
  top: -20px;
  left: 12px;
  opacity: 1;

  @media (min-width: 768px) {
    width: 65.52px;
    height: 49.35px;
    top: -25px;
  }
`;

const StarsIcon = styled.img`
  width: 60px;
  height: 12px;
  margin-top: 20px;
  margin-bottom: 8px;
  align-self: flex-start;

  @media (min-width: 768px) {
    width: 80px;
    height: 16px;
    margin-top: 30px;
  }
`;

const TestimonialText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: clamp(9px, 1.5vw, 10px);
  line-height: clamp(15px, 2.5vw, 19px);
  color: #392D44;
  margin: 0 0 16px 0;
  text-align: justify;

  @media (min-width: 768px) {
    margin: 0 0 27px 0;

    &.second-testimonial {
      margin: 0 0 30px 0;
    }
  }
`;

const TestimonialName = styled.strong`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: clamp(10px, 1.5vw, 11px);
  color: #392D44;
  align-self: flex-start;
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 446.08px;
  height: auto;
  min-height: 200px;
  border-radius: 12px;
  overflow: visible;
  position: relative;

  @media (min-width: 768px) {
    height: 270px;
  }
`;

const MotionVideoContainer = motion(VideoContainer);

const VideoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background-color: #F3B81F;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const PlayIcon = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid white;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  margin-left: 3px;

  @media (min-width: 768px) {
    border-left: 12px solid white;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    margin-left: 4px;
  }
`;

const ClosingQuote = styled.img`
  position: absolute;
  width: 50px;
  height: 38px;
  bottom: -15px;
  right: 10px;
  transform: rotate(0deg);
  opacity: 1;

  @media (min-width: 768px) {
    width: 63.33px;
    height: 47.7px;
    bottom: -20px;
  }
`;

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 446.08px;
  flex: 1 1 400px;
  margin: 0 auto;
`;

const DesktopButtonWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const MobileButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 24px;
  width: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`;

const ClickMoreButton = styled.button`
  margin-top: 0;
  width: 120px;
  height: 40px;
  background-color: #0267AC;
  color: #FFFFFF;
  border: none;
  border-radius: 7.48px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: clamp(16px, 3vw, 22.94px);
  line-height: clamp(22px, 4vw, 30.59px);
  cursor: pointer;
  align-self: center;
  display: block;

  @media (min-width: 768px) {
    margin-top: 28px;
    width: 136.19px;
    height: 45.39px;
    align-self: flex-start;
  }
`;

const MotionClickMoreButton = motion(ClickMoreButton);

const FooterSpacer = styled.div`
  height: 40px;
  background-color: #FFFFFF;
  width: 100%;

  @media (min-width: 768px) {
    height: 80px;
  }
`;

export default Clients;
