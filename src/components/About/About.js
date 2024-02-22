import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import profile from "../../assets/images/profile.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <div className="container lg:px-16 lg:py-20 p-5 mb-20 mx-auto " id="About">
      <div
        className="hero-content flex-col lg:flex-row gap-5 items-center justify-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="col-span-5 ">
          <div className="flex flex-col mb-5">
            <p className="text-3xl text-primary font-bold py-2">//About Me</p>
            <span
              ref={ref}
              className={`transition-all duration-1000 delay-100 ${
                isInView ? "w-52" : "w-0"
              } h-1 bg-primary`}
            ></span>
          </div>
          <p className="text-lg text-secondary font-bold lg:leading-8 lg:tracking-wider py-10">
            <div className="starting border border-1 border-primary w-24 inline-block "></div>{" "}
            Hello, I'm Salman, a{" "}
            <span className="text-primary">Frontend Web developer</span>, Who
            likes to provide solutions for people's projects and business which
            it is a challenge that i enjoy overcoming. I am a passionate person
            who pursues his dream, works hard and results oriented. As a metter
            of fact, I constantly work on improving myself seeking to achieve
            the best version of myself.
            <br />
            My interest in web development started in 2020. I started to browse
            tech stack that has been used on web development. And i decided to
            start learning MERN Stack. Fast-forward to today, and i've created 8
            Full stack Projects using{" "}
            <span className="text-primary">ReactJS</span>,
            <span className="text-primary">NodeJS</span>,{" "}
            <span className="text-primary">ExpressJS</span>,{" "}
            <span className="text-primary">MongoDB</span>,
            <span className="text-primary"> Firebase</span> and more technology
            has been used on purpose.
            <br />
            Before starting web development i had interest in Design. So after
            having the the idea of colors, user experience, user interface it
            really helped me to make my projects more user friendly.
          </p>
        </div>
        <div
          className="avatar col-span-1"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="w-52 rounded-full">
            <img src={profile} alt="Salman" border="0"></img>
          </div>
        </div>
      </div>
      {/* Skills  */}
    </div>
  );
};

export default About;
