import React, { useState } from "react";
import toast from "react-hot-toast";
import { FiDownload } from "react-icons/fi";
// import Typewriter from 'typewriter-effect/dist/core';
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
var Scroll = require("react-scroll");

var Element = Scroll.Element;
var scroller = Scroll.scroller;

const Banner = () => {
  const [state] = useState({
    title: "Hi,",
    titleTwo: "I'm Salman",
  });

  return (
    <div className="hero h-96 lg:my-60 " id="Home">
      <motion.div
        className="blob"
        style={{
          position: "fixed",
          top: "50%",
          left: "10%",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "linear-gradient(45deg, #112244, #3A7CA5)",
        }}
        animate={{
          x: ["0%", "20%", "-20%", "0%"],
          y: ["0%", "20%", "-20%", "0%"],
        }}
        transition={{
          x: {
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
          y: {
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
        }}
      />
      <motion.div
        className="blob"
        style={{
          position: "fixed",
          top: "70%",
          right: "10%",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "linear-gradient(160deg, #112244, #3A7CA5)",
        }}
        animate={{
          x: ["0%", "-20%", "20%", "0%"],
          y: ["0%", "-20%", "20%", "0%"],
        }}
        transition={{
          x: {
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
          y: {
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
        }}
      />
      <div className="hero-content text-center w-full">
        <div>
          <p className="py-6 text-primary text-2xl lg:text-3xl">Hi there,</p>
          <h1 className="text-3xl lg:text-7xl font-bold text-secondary">
            I am <span className="text-primary">Salman</span>
          </h1>
          <h1 className="text-3xl lg:text-7xl font-bold text-secondary opacity-80 p-5 lg:pt-10 ">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 80,
                pauseFor: 1500,
                strings: [
                  "I build things for the web.",
                  "I can redesign your site.",
                  "I can create fully responsive site",
                  "I can manage full stack project",
                  "I specialize in modern web technologies.",
                  "I can optimize your site for performance.",
                  "I can make your site accessible to all users.",
                  "I can help you build a strong web presence.",
                  "I can integrate your site with various APIs.",
                  "I can create custom web applications.",
                  "I can help you with both frontend and backend development.",
                  "I can help you turn your ideas into reality.",
                  "I can help you improve your site's SEO.",
                  "I can help you build scalable web applications.",
                  "I can help you maintain and update your site.",
                  "I can help you troubleshoot and fix bugs.",
                  "I can help you with database design and management.",
                  "I can help you with server setup and deployment.",
                  "I can help you with version control and workflow management.",
                  "I can help you with test-driven development.",
                ],
              }}
            />
          </h1>
          <a
            role="button"
            tabindex="0"
            className="btn btn-outline btn-primary"
            href="https://drive.google.com/uc?export=download&id=14RPXnfChl_PWfnZf9aTcJjI4c3SfFGoT"
            onClick={() =>
              toast.success("Thank you for showing interest in my resume!")
            }
          >
            <FiDownload className="text-xl" /> &nbsp; Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
