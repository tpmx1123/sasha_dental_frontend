import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const FLAPcleients = () => {
  const testimonials = [
    {
      id: 1,
      name: "Karan S.",
      text: "I was diagnosed with severe gum disease, and Sasha Luxe recommended flap surgery with bone grafting. The entire process was smooth, and I feel like my mouth has been completely restored.",
      hasOpeningQuote: true,
    },
    {
      id: 2,
      name: "Priya T.",
      text: "I was nervous about gum surgery, but the laser procedure made a huge difference—less bleeding, less pain, and I was back to work in two days.",
      hasOpeningQuote: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Wrapper>
      <MainContainer>
        {/* Heading */}
        <MotionHeading
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Clients Love
        </MotionHeading>

        {/* Paragraph */}
        <MotionParagraph
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Some best words from our beloved clients. It's always encouraging to
          know that our clients loved our services as it keeps us going even
          more enthusiastically.
        </MotionParagraph>

        {/* Main Section */}
        <MainSection
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left: Testimonials */}
          <TestimonialsContainer>
            <TestimonialsGrid>
              {testimonials.map((testimonial) => (
                <MotionTestimonialCard
                  key={testimonial.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  {testimonial.hasOpeningQuote && (
                    <OpeningQuote
                      src="/firstquote.svg"
                      alt="opening quote"
                    />
                  )}
                  <StarsIcon src="/stars.svg" alt="stars" />
                  <TestimonialText>{testimonial.text}</TestimonialText>
                  <TestimonialName>{testimonial.name}</TestimonialName>
                </MotionTestimonialCard>
              ))}
            </TestimonialsGrid>
            {/* Desktop-aligned button, directly under testimonials */}
            <DesktopButton
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Click More
            </DesktopButton>
          </TestimonialsContainer>
          
          {/* Right: Video/Image Section */}
          <MotionVideoContainer
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <VideoImage src="/ourclient.svg" alt="Client Video" />
            <PlayButton
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <PlayTriangle />
            </PlayButton>
            <ClosingQuote src="/quotes.svg" alt="closing quote" />
          </MotionVideoContainer>
        </MainSection>
        
        {/* Mobile: button at bottom, centered */}
        <MobileButton
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Click More
        </MobileButton>
      </MainContainer>
      <Spacer />
    </Wrapper>
  );
};

/* Styled Components */
const Wrapper = styled.div`
  background-color: #FFFFFF;
`;

const MainContainer = styled.div`
  width: 100%;
  min-height: 552px;
  background: linear-gradient(90deg, #F1F9FD 0%, #FFFFFF 550%);
  border-radius: 7.48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 40px 16px;
  box-sizing: border-box;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 60px 16px;
  }
`;

const MotionHeading = motion(styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: clamp(24px, 4vw, 32.93px);
  line-height: clamp(36px, 6vw, 49.4px);
  color: #0267AC;
  margin: 0 0 8px 0;
  width: 100%;
  max-width: 1108px;

  @media (min-width: 768px) {
    text-align: left;
  }
`);

const MotionParagraph = motion(styled.p`
  width: 100%;
  max-width: 1107.69px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: clamp(14px, 2.5vw, 17.96px);
  line-height: clamp(22px, 4vw, 29.94px);
  color: #392D44;
  margin: 0 0 24px 0;
  padding: 0 8px;

  @media (min-width: 768px) {
    text-align: left;
    margin: 0 0 32px 0;
    padding: 0;
  }
`);

const MainSection = motion(styled.div`
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
`);

const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 605px;
  flex: 1 1 100%;
`;

const TestimonialsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 16px;
  }
`;

const MotionTestimonialCard = motion(styled.div`
  width: 100%;
  max-width: 294px;
  min-height: 210px;
  height: auto;
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
    padding: 20px;
    height: 210px;
  }
`);

const OpeningQuote = styled.img`
  position: absolute;
  width: 52px;
  height: 39px;
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
  width: 70px;
  height: 14px;
  margin-top: 24px;
  margin-bottom: 6px;
  align-self: flex-start;

  @media (min-width: 768px) {
    width: 80px;
    height: 16px;
    margin-top: 30px;
    margin-bottom: 8px;
  }
`;

const TestimonialText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: clamp(9px, 1.5vw, 10px);
  line-height: clamp(16px, 2.5vw, 19px);
  color: #392D44;
  margin: 0 0 20px 0;
  text-align: justify;

  @media (min-width: 768px) {
    margin: 0 0 27px 0;
  }
`;

const TestimonialName = styled.strong`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: clamp(10px, 1.5vw, 11px);
  color: #392D44;
  align-self: flex-start;
`;

const DesktopButton = motion(styled.button`
  margin-top: 24px;
  width: 136.19px;
  height: 45.39px;
  background-color: #0267AC;
  color: #FFFFFF;
  border: none;
  border-radius: 7.48px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: clamp(18px, 2.5vw, 22.94px);
  line-height: 30.59px;
  cursor: pointer;
  align-self: flex-start;
  display: none;

  @media (min-width: 601px) {
    display: block;
    margin-top: 28px;
  }
`);

const MobileButton = motion(styled.button`
  margin-top: 32px;
  width: 136.19px;
  height: 45.39px;
  background-color: #0267AC;
  color: #FFFFFF;
  border: none;
  border-radius: 7.48px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: clamp(18px, 2.5vw, 22.94px);
  line-height: 30.59px;
  cursor: pointer;
  align-self: center;
  display: block;

  @media (min-width: 601px) {
    display: none;
  }
`);

const MotionVideoContainer = motion(styled.div`
  width: 100%;
  max-width: 446.08px;
  height: 200px;
  border-radius: 12px;
  overflow: visible;
  position: relative;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  flex: 1 1 400px;
  margin: 0 auto;

  @media (min-width: 768px) {
    height: 270px;
  }
`);

const VideoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

const PlayButton = motion(styled.div`
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
`);

const PlayTriangle = styled.div`
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
  bottom: -16px;
  right: 10px;
  transform: rotate(0deg);
  opacity: 1;

  @media (min-width: 768px) {
    width: 63.33px;
    height: 47.7px;
    bottom: -20px;
  }
`;

const Spacer = styled.div`
  height: 60px;
  background-color: #FFFFFF;
  width: 100%;

  @media (min-width: 768px) {
    height: 80px;
  }
`;

export default FLAPcleients;
