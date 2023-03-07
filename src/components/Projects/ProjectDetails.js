import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {

    const projects = useLoaderData();

    const { img, codelink, title, technologies, sitelink, desc } = projects;


    return (
        <div className='container mx-auto h-full  my-10'>

            <div className="flex justify-center">
                <Link to="/"><button className="btn btn-primary rounded-3xl">Back to Home</button></Link>

            </div>
            <div className="carousel w-full max-w-4xl mx-auto rounded-lg my-5">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img[1]} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img[2]} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img[3]} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <h1 className="text-3xl text-center text-secondary">{title}</h1>
            <div className='text-secondary flex flex-wrap justify-center gap-2'>
                {technologies.map(tech => <div className="badge badge-outline my-5">{tech}</div>)}
            </div>
            <div className='text-center mt-2'>
                <button className="btn mr-2 text-neutral rounded-lg  btn-outline btn-primary border-2 border-primary transition-colors duration-500"><a href={sitelink} target="_blank">Live Site</a></button>
                <button className="btn text-neutral rounded-lg  btn-outline btn-primary border-2 border-primary transition-colors duration-500"><a href={codelink} target="_blank">Code Link</a></button>
            </div>
            <p className="text-lg text-center mb-32 mt-5 text-secondary">
                {desc}
            </p>
        </div>
    );
};

export default ProjectDetails;