import React from "react";

const OurClientsLove = () => {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div
        style={{
          width: "100%",
          minHeight: "552px",
          background: "linear-gradient(90deg, #F1F9FD 0%, #FFFFFF 550%)",
          borderRadius: "7.48px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
          padding: "60px 0",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: "32.93px",
            lineHeight: "49.4px",
            color: "#0267AC",
            margin: "0 0 8px 0",
            width: "1108px",
            textAlign: "left",
          }}
        >
          Our Clients Love
        </h2>

        {/* Paragraph */}
        <p
          style={{
            width: "1107.69px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: "17.96px",
            lineHeight: "29.94px",
            color: "#392D44",
            margin: "0 0 32px 0",
            textAlign: "left",
          }}
        >
          Some best words from our beloved clients. It’s always encouraging to know that our clients loved our services as it keeps us
          going even more enthusiastically.
        </p>

        {/* Main Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "1108.12px",
            height: "auto",
            position: "relative",
          }}
        >
          {/* Left: Testimonials */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "605px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "16px",
                width: "100%",
              }}
            >
              {/* Testimonial 1 */}
              <div
                style={{
                  width: "294px",
                  height: "210px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxSizing: "border-box",
                  position: "relative",
                }}
              >
                {/* Opening Quotes */}
                <img
                  src="/firstquote.svg"
                  alt="opening quote"
                  style={{
                    position: "absolute",
                    width: "65.52px",
                    height: "49.35px",
                    top: "-25px",
                    left: "12px",
                    opacity: 1,
                  }}
                />

                {/* Stars */}
                <img
                  src="/stars.svg"
                  alt="stars"
                  style={{
                    width: "80px",
                    height: "16px",
                    marginTop: "30px",
                    marginBottom: "8px",
                    alignSelf: "flex-start",
                  }}
                />

                {/* Review */}
                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "10px",
                    lineHeight: "18.4px",
                    color: "#392D44",
                    margin: "0 0 12px 0",
                    textAlign: "justify",
                  }}
                >
                  I had lost a front tooth in an accident, and it really affected my confidence. The team at Sasha Luxe recommended a
                  Nobel Active implant. From day one, they made me feel comfortable and informed. The final crown looks exactly like my
                  natural tooth. I can smile without thinking twice now.
                </p>

                {/* Name */}
                <strong
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 700,
                    fontSize: "11px",
                    color: "#392D44",
                    alignSelf: "flex-start",
                  }}
                >
                  Karan S.
                </strong>
              </div>

              {/* Testimonial 2 */}
              <div
                style={{
                  width: "294px",
                  height: "210px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxSizing: "border-box",
                  position: "relative",
                }}
              >
                {/* Stars */}
                <img
                  src="/stars.svg"
                  alt="stars"
                  style={{
                    width: "80px",
                    height: "16px",
                    marginTop: "30px",
                    marginBottom: "10px",
                    alignSelf: "flex-start",
                  }}
                />

                {/* Review */}
                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "10px",
                    lineHeight: "18.4px",
                    color: "#392D44",
                    margin: "0 0 55px 0",
                    textAlign: "justify",
                  }}
                >
                  I got two Osstem implants at Sasha Luxe, and I honestly forgot they aren’t my real teeth. No pain, no hassle just great
                  service and even better results. Highly recommended!
                </p>

                {/* Name */}
                <strong
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 700,
                    fontSize: "11px",
                    color: "#392D44",
                    alignSelf: "flex-start",
                  }}
                >
                  Priya T.
                </strong>
              </div>
            </div>

            {/* Click More Button */}
            <button
              style={{
                marginTop: "10px",
                alignSelf: "flex-start",
                width: "136.19px",
                height: "45.39px",
                backgroundColor: "#0267AC",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "7.48px",
                fontFamily: "Roboto, sans-serif",
                fontWeight: 500,
                fontSize: "22.94px",
                lineHeight: "30.59px",
                cursor: "pointer",
              }}
            >
              Click More
            </button>
          </div>

          {/* Right: SVG / Video Box */}
          <div
            style={{
              width: "446.08px",
              height: "270px",
              borderRadius: "12px",
              overflow: "visible",
              position: "relative",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src="/ourclient.svg"
              alt="Client Video"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />

            {/* Play Button */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "50px",
                height: "50px",
                backgroundColor: "#F3B81F",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "0",
                  height: "0",
                  borderLeft: "12px solid white",
                  borderTop: "7px solid transparent",
                  borderBottom: "7px solid transparent",
                  marginLeft: "4px",
                }}
              ></div>
            </div>

            {/* Closing Quotes */}
            <img
              src="/quotes.svg"
              alt="closing quote"
              style={{
                position: "absolute",
                width: "63.33px",
                height: "47.7px",
                bottom: "-20px",
                right: "10px",
                transform: "rotate(0deg)",
                opacity: 1,
              }}
            />
          </div>
        </div>
      </div>

      {/* White gap below for next component */}
      <div
        style={{
          height: "80px",
          backgroundColor: "#FFFFFF",
          width: "100%",
        }}
      ></div>
    </div>
  );
};

export default OurClientsLove;
