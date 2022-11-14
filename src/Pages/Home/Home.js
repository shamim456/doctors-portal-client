import React from 'react';
import About from './About/About';
import AppoinmentHomePage from './AppoinmentHomePage/AppoinmentHomePage';
import Banner from './Banner/Banner';

import Contact from './Contact/Contact';
import Services from './Services/Services';
import TestimonialHomePage from './TestimonialHomePage/TestimonialHomePage';

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