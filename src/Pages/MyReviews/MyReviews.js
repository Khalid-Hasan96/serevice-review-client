import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const MyReviews = () => {
      const { user } = useContext(AuthContext);


      return (
            <div className='my-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-10 text-center'>
                  <h2 className='text-center text-4xl font-bold mb-5'>My Reviews</h2>
                  <div className="bg-white bg-opacity-40 backdrop-blur-md drop-shadow-lg text-white rounded-xl mb-5 py-5">
                        <div className="text-center">
                              <div>

                                    <p p className='mb-4'></p>

                                    <div className='flex justify-around items-center'>
                                          <div className="avatar flex justify-center items-center">
                                                <div className="w-10 rounded-full">
                                                      <img src={user?.photoURL} alt="" />
                                                </div>
                                                <p className='ml-2'>{user?.displayName}</p>
                                          </div>
                                          <div>
                                                <label htmlFor="my-modal" className="btn btn-success">Edit</label>

                                                <button className='ml-2 btn-outline btn btn-error'><small>Delete</small></button>
                                          </div>
                                    </div>
                              </div>

                        </div>
                  </div >
                  <input type="checkbox" id="my-modal" className="modal-toggle" />
                  <div className="modal">
                        <div className="modal-box">

                              <form>
                                    <textarea id="" name='addReview' className='w-3/4 p-3 border rounded-xl text-black' placeholder='Edit your Review here....'></textarea>
                                    <br />

                                    <div className="modal-action">
                                          <label htmlFor="my-modal" className="btn btn-success">Confirm</label>
                                    </div>
                              </form>

                        </div>
                  </div>
            </div>
      );
};

export default MyReviews;