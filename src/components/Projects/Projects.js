import React from 'react';

const Projects = () => {
    return (
        <div className='px-32 py-10 container mx-auto'>
            <h1 className='text-3xl text-secondary font-bold py-2 border-b-2 border-primary w-40'>Projects</h1>
            <div className="grid grid-cols-3 gap-5 py-5">
                <div className="card card-compact w-full bg-transparent shadow-xl">
                    <figure><img className='rounded-lg' src="https://i.ibb.co/x10cchr/project1.png" alt="Shoes" /></figure>
                </div>
                <div className="card card-compact w-full bg-transparent shadow-xl">
                    <figure><img className='rounded-lg' src="https://i.ibb.co/nws7qcM/project2.png" alt="Shoes" /></figure>
                </div>
                <div className="card card-compact w-full bg-transparent shadow-xl">
                    <figure><img className='rounded-lg' src="https://i.ibb.co/DfjfLQZ/project3.png" alt="Shoes" /></figure>
                </div>
            </div>
        </div>
    );
};

export default Projects;