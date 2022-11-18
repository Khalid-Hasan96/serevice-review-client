import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const AllServices = ({ service }) => {
      const { _id, img, title, details, price } = service
      return (
            <div className="card w-96 shadow-xl bg-white bg-opacity-40 backdrop-blur-md drop-shadow-lg">
                  <figure>
                        <PhotoProvider>
                              <PhotoView src={img}>
                                    <img className='cursor-pointer' src={img} alt={title} />
                              </PhotoView>
                        </PhotoProvider>
                  </figure>
                  <div className="card-body">
                        <h2 className="card-title">
                              {title}
                        </h2>
                        <p>{details.slice(0, 100)}.....</p>
                        <p>Price: $<span className='text-2xl font-bold'>{price}</span></p>
                        <div className="card-actions justify-end">
                              <Link to={`/servicesDetails/${_id}`}><button className='btn btn-primary animate-pulse'>View Details &nbsp;<FaAngleDoubleRight className='animate-bounce'></FaAngleDoubleRight></button></Link>
                        </div>
                  </div>
            </div>
      );
};

export default AllServices;