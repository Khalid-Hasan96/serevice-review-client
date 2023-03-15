import React from 'react';
import ad1 from '../../../assets/advertisement/ad-1.webp';
import ad2 from '../../../assets/advertisement/ad-2.png';
import ad3 from '../../../assets/advertisement/ad-3.jpg';
import ad4 from '../../../assets/advertisement/ad-4.jpg';

const Advertisement = () => {
      return (
            <div className='max-w-screen-xl mx-auto my-12'>
                  <div className='my-5'>
                        <div className='flex flex-col lg:flex-row gap-4'>
                              <img src={ad1} className="w-full lg:w-2/3" alt="" />
                              <img src={ad2} className="w-full lg:w-4/12" alt="" />
                        </div>
                        <br />
                        <div className='flex flex-col lg:flex-row gap-4'>
                              <img src={ad3} className="w-full h-72 lg:w-2/4" alt="" />
                              <img src={ad4} className="w-full h-72 lg:w-2/4" alt="" />
                        </div>

                  </div>
            </div>
      );
};

export default Advertisement;