import React from "react";
import styled from "styled-components";

const ImplantInfoSection = () => {
  return (
    <SectionWrapper>
      <Paragraph>
        At <strong>Sasha Luxe</strong>, we offer world-class <strong>dental implant solutions</strong> using
        global-leading systems—<Bold>Osstem</Bold>, <strong>Dentium, Zimmer, and Nobel Biocare</strong> to restore
        your smile with unmatched precision, comfort, and durability.
      </Paragraph>

      <Paragraph>
        Whether you're replacing one tooth or restoring your entire smile, our implant crowns are designed
        to blend beautifully, function flawlessly, and last for decades.
      </Paragraph>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 30 auto;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  color: #392D44;
  display: flex;
  flex-direction: column;
  padding: 50px 20px 0;

  /* Desktop position alignment (UNCHANGED) */
  @media (min-width: 1280px) {
    padding-left: 160px;
  }
`;

const Paragraph = styled.p`
  width: 100%;
  max-width: 1140px;
  margin-bottom: 25px;
  color: #392D44;
  white-space: normal;

  /* ✅ Mobile ONLY — Left align & proper spacing */
  font-size: 15px;
  line-height: 26px;
  text-align: left;   /* <-- changed from center */
  display: block;

  /* ✅ Tablet (UNCHANGED) */
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 32px;
  }

  /* ✅ Desktop (UNCHANGED) */
  @media (min-width: 1024px) {
    text-align: left;
    white-space: normal;
    font-size: 24px;
    line-height: 48px;
  }
`;

const Bold = styled.span`
  font-weight: 700;
  color: #392D44;
`;

export default ImplantInfoSection;
