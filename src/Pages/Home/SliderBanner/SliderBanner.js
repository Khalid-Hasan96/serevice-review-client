import React from 'react';
import banner1 from '../../../assets/banner-1.png'
import banner2 from '../../../assets/banner-2.png'
import banner3 from '../../../assets/banner-3.png'
import banner4 from '../../../assets/banner-4.png'

const SliderBanner = () => {
      return (
            <div className="carousel  mb-10">
                  <div id="slide1" className="carousel-item relative bg-indigo-500 text-white w-full">
                        <div className='sm:grid grid-cols-1 lg:flex items-center'>
                              <h3 className='text-xl w-4/5 text-center lg:text-justify lg:w-2/3 font-semibold pl-20'>Hi, <br /> I'm Mr. Electric, a Residential Electrician. I can do all kinds of electrical work for your house or office. I can do troubleshoot, maintain and upgrade electrical systems. Also I can install and repair security systems, air conditioning units, and other household and office appliances.</h3>
                              <img src={banner1} alt='Banner' />
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide4" className="btn btn-ghost btn-circle">❮</a>
                              <a href="#slide2" className="btn btn-ghost btn-circle">❯</a>
                        </div>
                  </div>
                  <div id="slide2" className="carousel-item relative bg-orange-500 text-white w-full">
                        <div className='sm:grid grid-cols-1 lg:flex items-center'>
                              <h3 className='text-xl w-4/5 text-center lg:text-justify lg:w-2/3 font-semibold pl-20'>Hi, <br /> I'm Mr. Electric, a Residential Electrician. I can do all kinds of electrical work for your house or office. I can do troubleshoot, maintain and upgrade electrical systems. Also I can install and repair security systems, air conditioning units, and other household and office appliances.</h3>
                              <img src={banner2} alt='Banner' />
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide1" className="btn btn-ghost btn-circle">❮</a>
                              <a href="#slide3" className="btn btn-ghost btn-circle">❯</a>
                        </div>
                  </div>
                  <div id="slide3" className="carousel-item relative bg-green-500 text-white w-full">
                        <div className='sm:grid grid-cols-1 lg:flex items-center'>
                              <h3 className='text-xl w-4/5 text-center lg:text-justify lg:w-2/3 font-semibold pl-20'>Hi, <br /> I'm Mr. Electric, a Residential Electrician. I can do all kinds of electrical work for your house or office. I can do troubleshoot, maintain and upgrade electrical systems. Also I can install and repair security systems, air conditioning units, and other household and office appliances.</h3>
                              <img src={banner3} alt='Banner' />
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide2" className="btn btn-ghost btn-circle">❮</a>
                              <a href="#slide4" className="btn btn-ghost btn-circle">❯</a>
                        </div>
                  </div>
                  <div id="slide4" className="carousel-item relative bg-yellow-500 text-white w-full">
                        <div className='sm:grid grid-cols-1 lg:flex items-center'>
                              <h3 className='text-xl w-4/5 text-center lg:text-justify lg:w-2/3 font-semibold pl-20'>Hi, <br /> I'm Mr. Electric, a Residential Electrician. I can do all kinds of electrical work for your house or office. I can do troubleshoot, maintain and upgrade electrical systems. Also I can install and repair security systems, air conditioning units, and other household and office appliances.</h3>
                              <img src={banner4} alt='Banner' />
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide3" className="btn btn-ghost btn-circle">❮</a>
                              <a href="#slide1" className="btn btn-ghost btn-circle">❯</a>
                        </div>
                  </div>
            </div>
      );
};

export default SliderBanner;