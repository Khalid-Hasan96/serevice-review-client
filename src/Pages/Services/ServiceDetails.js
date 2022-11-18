import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetails = () => {
      const service = useLoaderData();

      const { title, img, details, price } = service;
      return (
            <div className='my-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-10'>
                  <div className="hero  bg-white bg-opacity-40 backdrop-blur-md drop-shadow-lg text-white rounded-xl">
                        <div className="hero-content flex-col lg:flex-row">

                              <figure>
                                    <PhotoProvider>
                                          <PhotoView src={img}>
                                                <img src={img} className="max-w-sm rounded-lg cursor-pointer shadow-2xl" alt={title} />
                                          </PhotoView>
                                    </PhotoProvider>
                              </figure>
                              <div>
                                    <h1 className="text-5xl font-bold">{title}</h1>
                                    <p className="py-6">{details}</p>
                                    <p className="py-6">Price: ${price}</p>
                                    <button className="btn btn-outline btn-primary hover:animate-bounce">Order Now</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ServiceDetails;