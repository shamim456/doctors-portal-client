import React from 'react';
import About from '../About/About';
import AppoinmentHomePage from '../AppoinmentHomePage/AppoinmentHomePage';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import TestimonialHomePage from '../TestimonialHomePage/TestimonialHomePage';
import Banner from './Banner';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <AppoinmentHomePage></AppoinmentHomePage>
            <TestimonialHomePage></TestimonialHomePage>
            <Contact></Contact>
        </div>
    );
};

export default Home;
//px-12