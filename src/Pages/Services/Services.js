import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Services = ({ service }) => {

      const { _id, title, img, details, price } = service;

      return (
            <div className="card card-compact bg-base-100 shadow-xl">
                  <figure>

                        <PhotoProvider>
                              <PhotoView src={img}>
                                    <img className='cursor-pointer' src={img} alt={title} />
                              </PhotoView>
                        </PhotoProvider>
                  </figure>
                  <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{details.slice(0, 100)}...</p>
                        <p>Price: ${price}</p>
                        <div className="card-actions justify-end">
                              <Link to={`/servicesDetails/${_id}`}><button className='btn btn-primary animate-pulse'>View Details &nbsp;<FaAngleDoubleRight className='animate-bounce'></FaAngleDoubleRight></button></Link>
                        </div>
                  </div>
            </div>

      );
};

export default Services;