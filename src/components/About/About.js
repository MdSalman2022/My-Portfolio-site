import React from 'react';
import './About.css'
import { IoLogoHtml5 } from 'react-icons/io';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const About = () => {
    return (
        <div className='container mx-auto lg:px-32 lg:py-20 p-5 mb-20' id="about" >
            <div className='hero-content flex-col lg:flex-row gap-5 items-center justify-center' data-aos="fade-up" data-aos-duration="1000">
                <div className='col-span-5 ' >
                    <h1 className='text-3xl text-primary font-bold py-2 border-b-4 border-primary w-48'>//ABOUT ME</h1>
                    <p className='text-lg text-secondary font-bold lg:leading-8 lg:tracking-wider py-10'>
                        <div className="starting border border-1 border-primary w-24 inline-block "></div> Hello, I'm Salman, a <span className="text-primary">Frontend Web developer</span>, Who likes to provide solutions for people's projects and business which it is a challenge that i enjoy overcoming. I am a passionate person who pursues his dream, works hard and results oriented. As a metter of fact, I constantly work on improving myself seeking to achieve the best version of myself.
                        <br />
                        My interest in web development started in 2020. I started to browse tech stack that has been used on web development. And i decided to start learning MERN Stack. Fast-forward to today, and i've created 8 Full stack Projects using <span className="text-primary">ReactJS</span>,<span className="text-primary">NodeJS</span>, <span className="text-primary">ExpressJS</span>, <span className="text-primary">MongoDB</span>,<span className="text-primary"> Firebase</span>  and more technology has been used on purpose.
                        <br />
                        Before starting web development i had interest in Design. So after having the the idea of colors, user experience, user interface it really helped me to make my projects more user friendly.
                    </p>
                </div>
                <div className="avatar col-span-1" data-aos="fade-up" data-aos-duration="1000">
                    <div className="w-52 rounded-full">
                        <img src="https://i.ibb.co/5GcFJsm/Salman.jpg" alt="Salman" border="0"></img>
                    </div>
                </div>
            </div>
            {/* Skills  */}
            <div>
                <h1 className='text-3xl text-primary font-bold py-2 border-b-4 border-primary w-52 lg:text-left' data-aos="zoom-in" data-aos-duration="300">//My Skills</h1>
                <br />
                <div className="grid lg:grid-cols-5 grid-cols-2 text-8xl  justify-center text-secondary justify-items-center lg:gap-20 gap-2 lg:pt-10 pt-2" data-aos="zoom-in" data-aos-duration="800">
                    <div className='hover:text-red-400  duration-500'><IoLogoHtml5 /></div>
                    <div className='hover:text-blue-600 duration-500'><SiCss3 /></div>
                    <div className='hover:text-blue-400 duration-500'><SiTailwindcss /></div>
                    <div className='hover:text-purple-600 duration-500'><SiBootstrap /></div>
                    <div className='hover:text-yellow-500 duration-500'><SiJavascript /></div>
                    <div className='hover:text-[#61dafb] duration-500'><SiReact /></div>
                    <div className='hover:text-[#00ED64] duration-500'><SiMongodb /></div>
                    <div className='hover:text-yellow-500 duration-500'><SiFirebase /></div>
                    <div className='hover:text-[#026e00] duration-500'><FaNodeJs /></div>
                    <div className='hover:text-primary duration-500'><FaGithub /></div>
                </div>
            </div>
        </div>
    );
};

export default About;