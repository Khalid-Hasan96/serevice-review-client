import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
      const service = useLoaderData();

      const { title, img, details, price } = service;
      return (
            <div className='my-10'>
                  <div className="hero bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                              <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt={title} />
                              <div>
                                    <h1 className="text-5xl font-bold">{title}</h1>
                                    <p className="py-6">{details}</p>
                                    <p className="py-6">Price: ${price}</p>
                                    <button className="btn btn-primary">Get Started</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ServiceDetails;