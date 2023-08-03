import React from "react";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div
      id="aboutus"
      className="min-h-screen w-full flex flex-col justify-center items-center text-center text-slate-50 px-6 sm:px-16"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/bg7.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold py-4">
        About Us
      </h1>
      <p>
        Established with a passion for providing holistic education, Guransh
        Academy is committed to empowering children with the knowledge and
        skills that go beyond the boundaries of textbooks. We focus on fostering
        a love for learning, instilling values of empathy and respect, and
        developing critical thinking abilities. Our highly trained and
        compassionate educators create a warm and inclusive atmosphere, ensuring
        each child feels valued, encouraged, and supported on their unique
        learning journey.
      </p>
      <br />
      <p>
        Join us at Guransh Academy, where we celebrate the magic of childhood
        and lay the foundation for a bright future. Together, let's embark on a
        transformative educational experience that inspires, nurtures, and
        shapes the leaders of tomorrow.
      </p>
    </div>
  );
};

export default AboutUs;
