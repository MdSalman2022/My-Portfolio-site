import React from 'react';

const Banner = () => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('../Assets/Resume.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Resume.pdf';
                alink.click();
            })
        })
    }

    return (
        <div className="hero py-32 ">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20 items-center justify-center">
                <div className="avatar">
                    <div className="w-52 rounded-full">
                        <img src="https://i.ibb.co/5GcFJsm/Salman.jpg" alt="Salman" border="0"></img>
                    </div>
                </div>
                <div >
                    <p className="py-6 text-primary text-2xl">Hi,</p>
                    <h1 className="text-5xl font-bold text-secondary">I am <span className="text-primary">Salman</span></h1>
                    <h1 className="text-5xl font-bold text-secondary opacity-80 pb-5 ">I build things for the web.</h1>
                    <button onClick={onButtonClick} className="btn btn-outline btn-primary" download>Download Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;