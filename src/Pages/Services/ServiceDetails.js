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
            fetch('https://service-review-server-six-phi.vercel.app/reviews')
                  .then(res => res.json())
                  .then(data => setReviews(data))
      }, [])



      return (
            <div>
                  <div className='mt-10 rounded-2xl w-2/3 mx-auto'>
                        <h2 className='text-center text-3xl font-bold underline mb-4'>Service Details</h2>
                        <div className="bg-indigo-500 bg-opacity-40 drop-shadow-lg  rounded-xl p-5">
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
                  <div className='rounded-2xl  w-2/3 mx-auto'>
                        <h2 className='text-2xl mt-2 font-bold'>Reviews</h2>
                        {
                              reviews.map(serviceReview => <Reviews key={serviceReview._id} serviceKey={_id} serviceReview={serviceReview}></Reviews>)
                        }
                  </div>
                  <div className='mb-10 w-2/3 mx-auto'>
                        <AddReview
                              key={_id}
                              service={service}
                        ></AddReview>
                  </div>
            </div>
      );
};

export default ServiceDetails;