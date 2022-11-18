import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Reviews from '../Reviews/Reviews';
import AddReview from '../Reviews/AddReview';

const ServiceDetails = () => {
      const service = useLoaderData();

      const { title, img, details, price } = service;
      return (
            <div>
                  <div className='my-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl px-10 py-8'>
                        <h2 className='text-center text-3xl font-bold underline mb-4 text-white'>Service Details</h2>
                        <div className="hero bg-white bg-opacity-40 backdrop-blur-md drop-shadow-lg text-white rounded-xl">
                              <div className="hero-content flex-col lg:flex-row">

                                    <figure>
                                          <PhotoProvider>
                                                <PhotoView src={img}>
                                                      <img src={img} className="sm:w-full rounded-lg cursor-pointer shadow-2xl" alt={title} />
                                                </PhotoView>
                                          </PhotoProvider>
                                    </figure>
                                    <div>
                                          <h1 className="text-3xl font-bold">{title}</h1>
                                          <p className="py-6">{details}</p>
                                          <p className="py-6">Price: ${price}</p>
                                          <button className="btn btn-outline btn-primary hover:animate-bounce">Order Now</button>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className='my-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl px-10 py-6'>
                        <Reviews></Reviews>
                  </div>
                  <div className='my-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl px-10 py-6'>
                        <AddReview></AddReview>
                  </div>
            </div>
      );
};

export default ServiceDetails;