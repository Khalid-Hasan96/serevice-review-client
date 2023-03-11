import React, { useEffect, useState } from 'react';
import Services from '../../Services/Services';

const ServicesSection = () => {
      const [services, setServices] = useState([]);
      useEffect(() => {
            fetch('https://service-review-server-six-phi.vercel.app/services')
                  .then(res => res.json())
                  .then(data => setServices(data))
      }, [])
      return (
            <div className='my-10'>
                  <h2 className='text-4xl font-semibold text-center'>Services</h2>
                  <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-4 rounded-2xl p-10'>
                        {
                              services.map(service => <Services
                                    key={service._id}
                                    service={service}
                              ></Services>)
                        }
                  </div>
            </div>
      );
};

export default ServicesSection;