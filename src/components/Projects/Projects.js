import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {


    return (
        <div className='lg:px-32 lg:py-10 p-5 container mx-auto' id="projects">
            <h1 className='text-3xl text-primary font-bold py-2 border-b-4 border-primary w-48'>//Projects</h1>
            <div className="grid lg:grid-cols-3 gap-10 py-5 grid-cols-1 justify-items-center" >
                <div className="card w-full bg-neutral border-2 text-secondary border-primary shadow-xl " data-aos="fade-right" data-aos-duration="1000">
                    <figure><img src="https://i.ibb.co/x10cchr/project1.png" alt="Shoes" /></figure>
                    <div className="card-body ">
                        <h2 className="card-title">
                            Buy&Sell24 Site
                        </h2>
                        <div className="card-actions flex justify-start">
                            <div>
                                <div className="badge badge-outline">ReactJS</div>
                                <div className="badge badge-outline">ExpressJS</div>
                                <div className="badge badge-outline">Tailwind Css</div>
                                <div className="badge badge-outline">MongoDB</div>
                                <div className="badge badge-outline">Firebase</div>
                            </div>
                            <button className="btn-sm text-neutral rounded-lg  btn-outline btn-primary border-2 border-primary transition-colors duration-500"><a href="https://buysell-a13b9.web.app/" target="_blank">Live Site</a></button>
                            <button className="btn-sm text-neutral rounded-lg  btn-outline btn-primary border-2 border-primary transition-colors duration-500"><a href="https://github.com/MdSalman2022/BuySell24-Site-Client" target="_blank">Code Link</a></button>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-neutral border-2 text-secondary border-primary shadow-xl " data-aos="fade-up" data-aos-duration="1000">
                    <figure><img src="https://i.ibb.co/nws7qcM/project2.png" alt="Shoes" /></figure>
                    <div className="card-body ">
                        <h2 className="card-title">
                            Peter McKinnon Photography Service
                        </h2>
                        <div className="card-actions flex justify-start">
                            <div>
                                <div className="badge badge-outline">ReactJS</div>
                                <div className="badge badge-outline">ExpressJS</div>
                                <div className="badge badge-outline">Tailwind Css</div>
                                <div className="badge badge-outline">MongoDB</div>
                                <div className="badge badge-outline">Firebase</div>
                            </div>
                            <button className="btn-sm text-neutral rounded-lg  btn-outline btn-primary border-2 border-primary transition-colors duration-500"><a href="https://photography-site-32ba9.web.app/" target="_blank">Live Site</a></button>
                            <button className="btn-sm text-neutral rounded-lg  btn-outline btn-primary border-2 border-primary transition-colors duration-500"><a href="https://github.com/MdSalman2022/Photography-ServiceProvide-Client" target="_blank">Code Link</a></button>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-neutral border-2 text-secondary border-primary shadow-xl " data-aos="fade-left" data-aos-duration="1000">
                    <figure><img src="https://i.ibb.co/DfjfLQZ/project3.png" alt="Shoes" /></figure>
                    <div className="card-body ">
                        <h2 className="card-title">
                            CourseAcademy
                        </h2>
                        <div className="card-actions flex justify-start">
                            <div>
                                <div className="badge badge-outline">ReactJS</div>
                                <div className="badge badge-outline">ExpressJS</div>
                                <div className="badge badge-outline">Tailwind Css</div>
                                <div className="badge badge-outline">MongoDB</div>
                                <div className="badge badge-outline">Firebase</div>
                            </div>
                            <button className="btn-sm text-neutral rounded-lg  btn-outline btn-primary border-2 border-primary transition-colors duration-500"><a href="https://course-academy-99252.web.app/" target="_blank">Live Site</a></button>
                            <button className="btn-sm text-neutral rounded-lg  btn-outline btn-primary border-2 border-primary transition-colors duration-500"><a href="https://github.com/MdSalman2022/CourseAcademy" target="_blank">Code Link</a></button>
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary lg:col-span-3 w-44">See More</button>
            </div>
        </div>
    );
};

export default Projects;