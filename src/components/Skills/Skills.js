import React from 'react';
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

const Skills = () => {
    return (
        <div className='lg:h-[600px] my-20' id="Skills">
            <div className='container mx-auto lg:px-32 lg:py-20 p-5 mb-20'>
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

export default Skills;