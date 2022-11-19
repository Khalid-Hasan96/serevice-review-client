import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Reviews from '../Reviews/Reviews';
import AddReview from '../Reviews/AddReview';

const ServiceDetails = () => {
      const service = useLoaderData();
      const { _id, title, img, details, price } = service;
      const [reviews, setReviews] = useState([]);
      useEffect(() => {
            fetch('http://localhost:5000/reviews')
                  .then(res => res.json())
                  .then(data => setReviews(data))
      }, [])



      return (
            <div>
                  <div className='my-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl px-10 py-8'>
                        <h2 className='text-center text-3xl font-bold underline mb-4 text-white'>Service Details</h2>
                        <div className="bg-white bg-opacity-40 backdrop-blur-md drop-shadow-lg text-white rounded-xl p-5">
                              <div>

                                    <figure>
                                          <PhotoProvider>
                                                <PhotoView src={img}>
                                                      <img src={img} className="w-full rounded-lg cursor-pointer shadow-2xl" alt={title} />
                                                </PhotoView>
                                          </PhotoProvider>
                                    </figure>
                                    <div className='mt-5 text-center'>
                                          <h1 className="text-3xl font-bold">{title}</h1>
                                          <p className="mt-3">{details}</p>
                                          <p className="mt-3">Price: $<span className='text-2xl font-bold'>{price}</span></p>
                                          <button className="btn btn-outline btn-primary hover:animate-bounce mt-3">Order Now</button>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className='my-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl px-10 py-6'>
                        <h2 className='text-center text-3xl font-bold underline mb-4 text-white'>Reviews</h2>
                        {
                              reviews.map(serviceReview => <Reviews key={serviceReview._id} serviceReview={serviceReview}></Reviews>)
                        }
                  </div>
                  <div className='my-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl px-10 py-6'>
                        <AddReview
                              key={_id}
                              service={service}
                        ></AddReview>
                  </div>
            </div>
      );
};

export default ServiceDetails;