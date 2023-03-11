import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Services = ({ service }) => {

      const { _id, title, img, details, price } = service;

      return (
            <div className="card shadow-xl bg-yellow-400 bg-opacity-40 backdrop-blur-md drop-shadow-lg">

                  <PhotoProvider>
                        <PhotoView src={img}>
                              <img className='cursor-pointer w-full h-64 object-cover p-3 drop-shadow-2xl' src={img} alt={title} />
                        </PhotoView>
                  </PhotoProvider>

                  <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{details.slice(0, 100)}...</p>
                        <p>Price: $<span className='text-2xl font-bold'>{price}</span></p>
                        <div className="card-actions justify-end">
                              <Link to={`/servicesDetails/${_id}`}><button className='btn btn-warning animate-pulse'>View Details &nbsp;<FaAngleDoubleRight></FaAngleDoubleRight></button></Link>
                        </div>
                  </div>
            </div>

      );
};

export default Services;