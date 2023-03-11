import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import SliderBanner from './SliderBanner/SliderBanner';
import ServicesSection from './ServicesSection/ServicesSection';
import AppointmentSection from './AppointmentSection/AppointmentSection';
import ServiceFeatures from './ServiceFeatures/ServiceFeatures';
import FAQ from './FAQ/FAQ';


const Home = () => {
      useTitle('Home')




      return (
            <div>
                  <SliderBanner></SliderBanner>
                  <ServicesSection></ServicesSection>
                  {/* to see all services */}
                  <div className='text-center my-10'>
                        <Link to='/services'><button className='btn btn-warning animate-bounce'>See All</button></Link>
                  </div>
                  <AppointmentSection></AppointmentSection>
                  <ServiceFeatures></ServiceFeatures>
                  <FAQ></FAQ>



            </div>
      );
};

export default Home;