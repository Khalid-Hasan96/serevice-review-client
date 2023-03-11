import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllServices from './AllServices';

const ShowAllServices = () => {
      const services = useLoaderData();

      return (
            <div className='my-10'>
                  <h1 className='text-center text-4xl font-bold mb-5'>Choose what you want...</h1>
                  <div className='grid grid-cols-1 gap-6 lg:grid-cols-3 rounded-2xl p-10'>
                        {
                              services.map(service => <AllServices
                                    key={service._id}
                                    service={service}
                              ></AllServices>)
                        }
                  </div>
            </div>
      );
};

export default ShowAllServices;