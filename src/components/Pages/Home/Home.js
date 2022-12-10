import React from 'react';
import About from '../../About/About';
import Banner from '../../Banner/Banner';
import Projects from '../../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
        </div>
    );
};

export default Home;