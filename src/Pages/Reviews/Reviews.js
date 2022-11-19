import React from 'react';


const Reviews = ({ serviceReview }) => {
      const { client, clientImg, serviceId, review } = serviceReview

      return (
            <div>

                  <div className="bg-white bg-opacity-40 backdrop-blur-md drop-shadow-lg text-white rounded-xl mb-5 py-5">
                        <div className="text-center">
                              <div>

                                    <p p className='mb-4'>{review}</p>

                                    <div className='flex justify-around items-center'>
                                          <div className="avatar flex justify-center items-center">
                                                <div className="w-10 rounded-full">
                                                      <img src='' alt="" />
                                                </div>
                                                <p className='ml-2'>{client}</p>
                                          </div>
                                          <div>
                                                <button className='btn btn-outline btn-success'><small>Edit</small></button>
                                                <button className='ml-2 btn-outline btn btn-error'><small>Delete</small></button>
                                          </div>
                                    </div>
                              </div>

                        </div>
                  </div >

            </div>

      );
};

export default Reviews;