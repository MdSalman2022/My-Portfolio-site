import React, { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
// import Typewriter from 'typewriter-effect/dist/core';
import Typewriter from 'typewriter-effect';
var Scroll = require('react-scroll');
var Element = Scroll.Element;
var scroller = Scroll.scroller;


const Banner = () => {

    const [state] = useState({
        title: "Hi,",
        titleTwo: "I'm Salman"
    });

    return (
        <div className="hero h-96 lg:my-60 " id="Home">
            <div className="hero-content text-center w-full">
                <div>
                    <p className="py-6 text-primary text-2xl lg:text-3xl">Hi there,</p>
                    <h1 className="text-3xl lg:text-7xl font-bold text-secondary">I am <span className="text-primary">Salman</span></h1>
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
                                ],
                            }}
                        />
                    </h1>
                    <a role="button" tabindex="0" className="btn btn-outline btn-primary" href="https://drive.google.com/uc?export=download&id=1eqSnAf3uOvLVfX9b8uYcLiTT9b6ziKa6"><FiDownload className='text-xl' /> &nbsp; Download Resume</a>
                </div>
            </div >
        </div >
    );
};

export default Banner;