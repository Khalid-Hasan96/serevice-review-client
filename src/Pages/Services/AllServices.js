import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllServices = ({ service }) => {
      const { _id, title, img, details, price } = service;

      return (

            <div className="card bg-white bg-opacity-40 backdrop-blur-md drop-shadow-lg text-white">
                  <figure><img src={img} alt="Shoes" /></figure>
                  <div className="card-body">
                        <h2 className="card-title">
                              {title}
                        </h2>
                        <p>{details.slice(0, 100)}...</p>
                        <p>Price: <span>${price}</span></p>
                        <div className="card-actions justify-end">
                              <Link to={`/servicesDetails/${_id}`}>
                                    <button className='btn btn-primary'><span className='mr-2'>Show Details</span><FaArrowRight className='animate-bounce'></FaArrowRight></button>
                              </Link>
                        </div>
                  </div>
            </div>

      );
};

export default AllServices;