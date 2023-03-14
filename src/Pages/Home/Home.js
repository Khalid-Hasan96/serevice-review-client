import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import SliderBanner from './SliderBanner/SliderBanner';
import ServicesSection from './ServicesSection/ServicesSection';
import AppointmentSection from './AppointmentSection/AppointmentSection';
import ServiceFeatures from './ServiceFeatures/ServiceFeatures';
import FAQ from './FAQ/FAQ';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import AdditionalServices from './AdditionalServices/AdditionalServices';



const Home = () => {
      useTitle('Home')




      return (
            <div>
                  <SliderBanner></SliderBanner>
                  <ServicesSection></ServicesSection>
                  {/* to see all services */}
                  <div className='text-center my-10'>
                        <Link to='/services'><button className='btn btn-success animate-bounce'>See All &nbsp; <span><FaArrowAltCircleRight /></span></button></Link>
                  </div>
                  <AdditionalServices></AdditionalServices>
                  <AppointmentSection></AppointmentSection>
                  <ServiceFeatures></ServiceFeatures>
                  <FAQ></FAQ>



            </div>
      );
};

export default Home;