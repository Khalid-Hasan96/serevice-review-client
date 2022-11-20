import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../../assets/banner-1.png';
import banner2 from '../../assets/banner-2.png';
import banner3 from '../../assets/banner-3.png';
import banner4 from '../../assets/banner-4.png';
import { AuthContext } from '../../context/AuthProvider';
import Services from '../Services/Services';
import appointment from '../../assets/appointment.jpg';
import guarantee from '../../assets/guarantee.png';
import service247 from '../../assets/247.png';
import insured from '../../assets/insured.png';
import useTitle from '../../hooks/useTitle';



const Home = () => {
      useTitle('Home')
      const [services, setServices] = useState([]);
      useEffect(() => {
            fetch('http://localhost:5000/services')
                  .then(res => res.json())
                  .then(data => setServices(data))
      }, [])



      return (
            <div>
                  <div className="carousel w-full my-10">
                        <div id="slide1" className="carousel-item relative bg-indigo-500 text-white rounded-xl w-full">
                              <div className='sm:grid grid-cols-1 lg:flex items-center'>
                                    <h3 className='text-2xl font-semibold w-1/2 pl-20'>Hi, <br /> I'm Mr. Electric, a Residential Electrician. I can do all kinds of electrical work for your house or office. I can do troubleshoot, maintain and upgrade electrical systems. Also I can install and repair security systems, air conditioning units, and other household and office appliances.</h3>
                                    <img src={banner1} alt='Banner' />
                              </div>
                              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" className="btn btn-ghost btn-circle">❮</a>
                                    <a href="#slide2" className="btn btn-ghost btn-circle">❯</a>
                              </div>
                        </div>
                        <div id="slide2" className="carousel-item relative bg-orange-500 text-white rounded-xl w-full">
                              <div className='sm:grid grid-cols-1 lg:flex items-center'>
                                    <h3 className='text-2xl font-semibold w-1/2 pl-20'>Hi, <br /> I'm Mr. Electric, a Residential Electrician. I can do all kinds of electrical work for your house or office. I can do troubleshoot, maintain and upgrade electrical systems. Also I can install and repair security systems, air conditioning units, and other household and office appliances.</h3>
                                    <img src={banner2} alt='Banner' />
                              </div>
                              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" className="btn btn-ghost btn-circle">❮</a>
                                    <a href="#slide3" className="btn btn-ghost btn-circle">❯</a>
                              </div>
                        </div>
                        <div id="slide3" className="carousel-item relative bg-green-500 text-white rounded-xl w-full">
                              <div className='sm:grid grid-cols-1 lg:flex items-center'>
                                    <h3 className='text-2xl font-semibold w-1/2 pl-20'>Hi, <br /> I'm Mr. Electric, a Residential Electrician. I can do all kinds of electrical work for your house or office. I can do troubleshoot, maintain and upgrade electrical systems. Also I can install and repair security systems, air conditioning units, and other household and office appliances.</h3>
                                    <img src={banner3} alt='Banner' />
                              </div>
                              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-ghost btn-circle">❮</a>
                                    <a href="#slide4" className="btn btn-ghost btn-circle">❯</a>
                              </div>
                        </div>
                        <div id="slide4" className="carousel-item relative bg-yellow-500 text-white rounded-xl w-full">
                              <div className='sm:grid grid-cols-1 lg:flex items-center'>
                                    <h3 className='text-2xl font-semibold w-1/2 pl-20'>Hi, <br /> I'm Mr. Electric, a Residential Electrician. I can do all kinds of electrical work for your house or office. I can do troubleshoot, maintain and upgrade electrical systems. Also I can install and repair security systems, air conditioning units, and other household and office appliances.</h3>
                                    <img src={banner4} alt='Banner' />
                              </div>
                              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide3" className="btn btn-ghost btn-circle">❮</a>
                                    <a href="#slide1" className="btn btn-ghost btn-circle">❯</a>
                              </div>
                        </div>
                  </div>
                  <div className='my-10'>
                        <h2 className='text-4xl font-semibold text-center'>Services</h2>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-10'>
                              {
                                    services.map(service => <Services
                                          key={service._id}
                                          service={service}
                                    ></Services>)
                              }
                        </div>
                  </div>
                  <div className='text-center my-10'>
                        <Link to='/services'><button className='btn btn-primary animate-bounce'>See All</button></Link>
                  </div>

                  <div className='my-10'>
                        <h2 className='text-4xl font-semibold text-center'>Schedule an Appoinment</h2>
                        <div className='mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-10  sm:grid grid-cols-1 gap-5 lg:flex'>
                              <img src={appointment} className="rounded-xl sm:w-full lg:w-1/2" alt="" />
                              <form className='shadow-xl bg-white bg-opacity-40 backdrop-blur-md drop-shadow-lg p-5 sm:w-full lg:w-1/2 lg:ml-5 rounded-xl'>
                                    <div className='flex gap-5'>
                                          <input className='rounded w-1/2 h-10 p-4' type="text" name="" placeholder='First Name' id="" />
                                          <input className='rounded w-1/2 h-10 p-4' type="text" name="" placeholder='Last Name' id="" />
                                    </div>
                                    <input type="text" className='w-full rounded mt-3 h-10 p-4' name="" placeholder='Contact Number' id="" />
                                    <br />

                                    <textarea name="" className='w-full rounded mt-3 h-18 p-4' id="" placeholder='Address'></textarea>
                                    <textarea name="" className='w-full rounded mt-3 h-24 p-4' id="" placeholder='Service Description'></textarea>
                                    <input type="submit" value="Submit" className='btn btn-primary mt-2' />
                              </form>
                        </div>
                  </div>
                  <div className='my-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-10 text-center grid gap-5 sm:grid-cols-1 lg:grid-cols-3'>
                        <div className='shadow-xl bg-white bg-opacity-40 backdrop-blur-md drop-shadow-lg p-5 rounded-xl'>
                              <img src={guarantee} className="w-full h-48" alt="" />
                              <h4 className='text-2xl font-semibold mb-2'>Quality Guarantee</h4>
                              <hr />
                              <p className='mt-4'>Reliable electric service is what every home or office gets when they have Mr. Electric handling their electrical problem.</p>
                        </div>
                        <div className='shadow-xl bg-white bg-opacity-40 backdrop-blur-md drop-shadow-lg p-5 rounded-xl'>
                              <img src={service247} className="w-full h-48" alt="" />
                              <h4 className='text-2xl font-semibold mb-2'>24/7 Service</h4>
                              <hr />
                              <p className='mt-4'>
                                    Call Mr. Electric today for all of your electrical services. Count on Mr. Electric to be on time and bring guaranteed electrical resolutions.
                              </p>
                        </div>
                        <div className='shadow-xl bg-white bg-opacity-40 backdrop-blur-md drop-shadow-lg p-5 rounded-xl'>
                              <img src={insured} className="w-full h-48" alt="" />
                              <h4 className='text-2xl font-semibold mb-2'>Insured, Bonded, Licenses</h4>
                              <hr />
                              <p className='mt-4'>
                                    Licensed in fully-equipped vans to handle your residential, commercial and industrial needs.
                              </p>
                        </div>
                  </div>
            </div>
      );
};

export default Home;