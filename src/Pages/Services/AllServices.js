import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../hooks/useTitle';

const AllServices = ({ service }) => {
      useTitle('Services')
      const { _id, img, title, details, price } = service;
      return (
            <div className="card shadow-xl bg-green-400 bg-opacity-40 backdrop-blur-md drop-shadow-lg">

                  <PhotoProvider>
                        <PhotoView src={img}>
                              <img className='cursor-pointer w-full h-64 object-cover p-3 drop-shadow-2xl' src={img} alt={title} />
                        </PhotoView>
                  </PhotoProvider>

                  <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{details}</p>
                        <p>Price: $<span className='text-2xl font-bold'>{price}</span></p>
                        <div className="card-actions justify-end">
                              <Link to={`/servicesDetails/${_id}`}><button className='btn btn-success animate-pulse'>View Details &nbsp;<FaAngleDoubleRight></FaAngleDoubleRight></button></Link>
                        </div>
                  </div>
            </div>
      );
};

export default AllServices;