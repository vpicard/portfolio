import React from 'react';
import Projects from '../components/Projects';
import Navigation from './Navigation';

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <Navigation />
            <Projects />
        </div>
    );
};

export default Portfolio;