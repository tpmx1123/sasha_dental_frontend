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
  hidden: { opacity: 0, y: -30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
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

const testimonials = [
  {
    quote: "/firstquote.svg",
    text: "I had lost a front tooth in an accident, and it really affected my confidence. The team at Sasha Luxe recommended a Nobel Active implant. From day one, they made me feel comfortable and informed. The final crown looks exactly like my natural tooth. I can smile without thinking twice now.",
    name: "Karan S.",
  },
  {
    quote: null,
    text: "I got two Osstem implants at Sasha Luxe, and I honestly forgot they aren't my real teeth. No pain, no hassle just great service and even better results. Highly recommended!",
    name: "Priya T.",
  },
];

const OurClientsLove = () => {
  return (
    <OuterContainer>
      <MainContainer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Heading */}
        <MotionHeading
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
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
          Some best words from our beloved clients. It's always encouraging to know
          that our clients loved our services as it keeps us going even more
          enthusiastically.
        </MotionParagraph>

        {/* Main Section */}
        <MainSection variants={itemVariants}>
          {/* Left: Testimonials */}
          <TestimonialsContainer>
            <TestimonialsWrapper>
              {testimonials.map((testimonial, index) => (
                <MotionTestimonialCard key={index} variants={itemVariants}>
                  {testimonial.quote && (
                    <QuoteIcon src={testimonial.quote} alt="opening quote" />
                  )}
                  <StarsIcon src="/stars.svg" alt="stars" />
                  <TestimonialText className={index === 1 ? "second-testimonial" : ""}>
                    {testimonial.text}
                  </TestimonialText>
                  <TestimonialName>{testimonial.name}</TestimonialName>
                </MotionTestimonialCard>
              ))}
            </TestimonialsWrapper>

            {/* Desktop-Only Button */}
            <DesktopButton
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Click More
            </DesktopButton>
          </TestimonialsContainer>

          {/* Right Side Video */}
          <MotionVideoContainer variants={scaleVariants}>
            <VideoImage src="/ourclient.svg" alt="Client Video" />
            <PlayButton>
              <PlayIcon></PlayIcon>
            </PlayButton>
            <ClosingQuote src="/quotes.svg" alt="closing quote" />
          </MotionVideoContainer>
        </MainSection>

        {/* Mobile Button */}
        <MobileButton
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Click More
        </MobileButton>
      </MainContainer>
    </OuterContainer>
  );
};

/* Styled Components */
const OuterContainer = styled.div`
  background-color: #FFFFFF;
`;

const MainContainer = styled(motion.div)`
  width: 100%;
  min-height: 552px;
  background: linear-gradient(90deg, #F1F9FD 0%, #FFFFFF 550%);
  border-radius: 7.48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 60px 0;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: auto;
    padding: 40px 16px;
  }
`;

const Heading = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 32.93px;
  line-height: 49.4px;
  color: #0267AC;
  margin: 0 0 8px 0;
  width: 1108px;
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
    font-size: clamp(20px, 5vw, 32.93px);
    line-height: clamp(30px, 7vw, 49.4px);
  }
`;

const MotionHeading = motion(Heading);

const Paragraph = styled.p`
  width: 1107.69px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 17.96px;
  line-height: 29.94px;
  color: #392D44;
  margin: 0 0 32px 0;
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
    font-size: clamp(14px, 3.5vw, 17.96px);
    line-height: clamp(22px, 4.5vw, 29.94px);
    margin: 0 0 24px 0;
    padding: 0 12px;
  }
`;

const MotionParagraph = motion(Paragraph);

const MainSection = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 1108.12px;
  height: auto;
  position: relative;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 20px;
    align-items: center;
  }
`;

const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 605px;

  @media (max-width: 768px) {
    width: 100%;
    gap: 16px;
  }
`;

const TestimonialsWrapper = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
`;

const TestimonialCard = styled.div`
  width: 294px;
  height: 270px;
  background-color: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
    height: auto;
    min-height: auto;
    padding: 16px;
  }
`;

const MotionTestimonialCard = motion(TestimonialCard);

const QuoteIcon = styled.img`
  position: absolute;
  width: 65.52px;
  height: 49.35px;
  top: -25px;
  left: 12px;
  opacity: 1;

  @media (max-width: 768px) {
    width: 50px;
    height: 38px;
    top: -20px;
  }
`;

const StarsIcon = styled.img`
  width: 80px;
  height: 16px;
  margin-top: 30px;
  margin-bottom: 8px;
  align-self: flex-start;

  @media (max-width: 768px) {
    width: 60px;
    height: 12px;
    margin-top: 20px;
  }
`;

const TestimonialText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 10px;
  line-height: 18.4px;
  color: #392D44;
  text-align: justify;
  margin: 0 0 12px 0;

  &.second-testimonial {
    margin: 0 0 55px 0;

    @media (max-width: 768px) {
      margin: 0 0 20px 0;
    }
  }

  @media (max-width: 768px) {
    font-size: clamp(9px, 2.2vw, 10px);
    line-height: clamp(16px, 3.5vw, 18.4px);
    margin: 0 0 12px 0;
  }
`;

const TestimonialName = styled.strong`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #392D44;
  align-self: flex-start;

  @media (max-width: 768px) {
    font-size: clamp(14px, 3.5vw, 17px);
  }
`;

const VideoContainer = styled.div`
  width: 446.08px;
  height: 270px;
  border-radius: 12px;
  overflow: visible;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
    height: auto;
    min-height: 200px;
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
  width: 50px;
  height: 50px;
  background-color: #F3B81F;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const PlayIcon = styled.div`
  width: 0;
  height: 0;
  border-left: 12px solid white;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  margin-left: 4px;

  @media (max-width: 768px) {
    border-left: 10px solid white;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    margin-left: 3px;
  }
`;

const ClosingQuote = styled.img`
  position: absolute;
  width: 63.33px;
  height: 47.7px;
  bottom: -20px;
  right: 10px;
  opacity: 1;

  @media (max-width: 768px) {
    width: 50px;
    height: 38px;
    bottom: -15px;
  }
`;

const DesktopButton = styled(motion.button)`
            width: 136.19px;
            height: 45.39px;
            background-color: #0267AC;
  color: #FFFFFF;
            border: none;
            border-radius: 7.48px;
  font-family: "Roboto", sans-serif;
            font-weight: 500;
            font-size: 22.94px;
            line-height: 30.59px;
            cursor: pointer;
            margin-top: 16px;
            text-align: left;
            // margin-left: 9px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileButton = styled(motion.button)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 90%;
    max-width: 150px;
    height: 45px;
    background-color: #0267AC;
    color: #FFFFFF;
    border: none;
    border-radius: 7.48px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: clamp(18px, 4.5vw, 22.94px);
    line-height: 30.59px;
    cursor: pointer;
    margin-top: 24px;
    margin-left: 0;
    text-align: center;
    align-self: flex-start;
  }
`;

export default OurClientsLove;
