import React from 'react';
import guarantee from '../../../assets/guarantee.png';
import service247 from '../../../assets/247.png';
import insured from '../../../assets/insured.png';

const ServiceFeatures = () => {
      return (
            <div className='my-10 rounded-2xl p-10 text-center grid gap-5 sm:grid-cols-1 lg:grid-cols-3'>
                  <div className='shadow-xl bg-indigo-400  bg-opacity-40  drop-shadow-lg p-5 rounded-xl'>
                        <img src={guarantee} className="w-full h-60 object-fit" alt="" />
                        <h4 className='text-2xl font-semibold mb-2'>Quality Guarantee</h4>
                        <hr />
                        <p className='mt-4'>Reliable electric service is what every home or office gets when they have Mr. Electric handling their electrical problem.</p>
                  </div>
                  <div className='shadow-xl bg-yellow-400 bg-opacity-40  drop-shadow-lg p-5 rounded-xl'>
                        <img src={service247} className="w-full h-60 object-fit" alt="" />
                        <h4 className='text-2xl font-semibold mb-2'>24/7 Service</h4>
                        <hr />
                        <p className='mt-4'>
                              Call Mr. Electric today for all of your electrical services. Count on Mr. Electric to be on time and bring guaranteed electrical resolutions.
                        </p>
                  </div>
                  <div className='shadow-xl bg-orange-400 bg-opacity-40  drop-shadow-lg p-5 rounded-xl'>
                        <img src={insured} className="w-full h-60 object-fit" alt="" />
                        <h4 className='text-2xl font-semibold mb-2'>Insured, Bonded, Licenses</h4>
                        <hr />
                        <p className='mt-4'>
                              Licensed in fully-equipped vans to handle your residential, commercial and industrial needs.
                        </p>
                  </div>
            </div>
      );
};

export default ServiceFeatures;