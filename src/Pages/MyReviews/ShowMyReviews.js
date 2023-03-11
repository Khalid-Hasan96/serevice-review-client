import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';

const ShowMyReviews = ({ myReview, handleDelete, handleUpdate }) => {
      const { user } = useContext(AuthContext);
      const { _id, review, serviceTitle } = myReview;
      console.log(review)
      return (
            <div>
                  <div className="bg-indigo-400 bg-opacity-40 backdrop-blur-md drop-shadow-lg rounded-xl mb-5 py-5">
                        <div className="text-center">

                              <p>Service Name: <span className='text-2xl'>{serviceTitle}</span></p>
                              <hr />
                              <p className='my-4'>Review: <span className='text-3xl font-bold'>{review}</span></p>
                              <div className='flex justify-around items-center'>
                                    <div>
                                          <label htmlFor="my-modal" className="btn btn-success">Edit</label>

                                          <button onClick={() => handleDelete(_id)} className='ml-2 btn-outline btn btn-error'><small>Delete</small>
                                          </button>

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
                                          <label onClick={() => handleUpdate(_id)} htmlFor="my-modal" className="btn btn-success">Confirm</label>
                                    </div>
                              </form>

                        </div>
                  </div>
            </div>
      );
};

export default ShowMyReviews;