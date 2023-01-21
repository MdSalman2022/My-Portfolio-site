import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Projects = () => {

    const [projects, setProjects] = useState('')

    useEffect(() => {
        fetch('https://salman-reactdev.vercel.app/projects/')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    console.log(projects);

    return (
        <div className='lg:px-32 lg:py-10 p-5 container mx-auto' id="Projects">
            <h1 className='text-3xl text-primary font-bold py-2 border-b-4 border-primary w-48'>//Projects</h1>
            <div className="grid lg:grid-cols-3 gap-10 py-5 grid-cols-1 justify-items-center" >
                {projects &&
                    projects?.map(project =>
                        <div className="card w-full bg-neutral border-2 text-secondary border-primary shadow-xl " data-aos="fade-right" data-aos-duration="1000">
                            <figure><img src={project.img[0]} alt="projects" /></figure>
                            <div className="card-body ">
                                <h2 className="card-title">
                                    {project?.title}
                                </h2>
                                <div className="card-actions flex justify-start">
                                    <div>
                                        {project.technologies.map(tech => <div className="badge badge-outline">{tech}</div>)}

                                    </div>
                                    <button className="btn-sm text-neutral rounded-lg  btn-outline btn-primary border-2 border-primary transition-colors duration-500"><a href={project.sitelink} target="_blank">Live Site</a></button>
                                    <button className="btn-sm text-neutral rounded-lg  btn-outline btn-primary border-2 border-primary transition-colors duration-500"><a href={project.codelink} target="_blank">Code Link</a></button>
                                </div>
                                <div className="flex justify-end">
                                    <Link to={`/projects/${project._id}`}><button className="btn text-neutral rounded-lg  btn-outline btn-primary border-2 border-primary transition-colors duration-500">Details</button></Link>
                                </div>
                            </div>
                        </div>
                    )}

                <button className="btn btn-primary lg:col-span-3 w-44">See More</button>
            </div>
        </div>
    );
};

export default Projects;