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
        <div className='container mx-auto px-32 py-20'>
            <div>
                <h1 className='text-3xl text-secondary font-bold py-2 border-b-2 border-primary w-40'>ABOUT ME</h1>
                <p className='text-lg text-secondary font-bold leading-8 tracking-wider py-10'>
                    <div className="starting border border-1 border-primary w-24 inline-block "></div> Hello, I'm Salman, a <span className="text-primary">Frontend Web developer</span>, Who likes to provide solutions for people's projects and business which it is a challenge that i enjoy overcoming. I am a passionate person who pursues his dream, works hard and results oriented. As a metter of fact, I constantly work on improving myself seeking to achieve the best version of myself.
                    <br />
                    My interest in web development started in 2020. I started to browse tech stack that has been used on web development. And i decided to start learning MERN Stack. Fast-forward to today, and i've created 5 Full stack Projects using ReactJS, NodeJS, ExpressJS, MongoDB, Firebase and more technology has been used on purpose.
                    <br />
                    Before starting web development i had interest in Design. So after having the the idea of colors, user experience, user interface it helped me to make my projects more user friendly.</p>
            </div>
            <div>
                <h1 className='text-3xl text-secondary font-bold py-2 border-b-2 border-primary w-44'>My Skills</h1>
                <br />
                <div className="grid grid-cols-5 text-8xl justify-center text-secondary justify-items-center gap-20 pt-10 ">
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