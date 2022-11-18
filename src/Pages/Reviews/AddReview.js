import React from 'react';

const AddReview = () => {
      return (
            <div>
                  <h2 className='text-center text-3xl font-bold underline mb-4 text-white'>Add Reviews</h2>
                  <div className="bg-white bg-opacity-40 backdrop-blur-md drop-shadow-lg text-white rounded-xl text-center p-6">
                        <form>
                              <textarea name="" id="" className='w-3/4 p-3 border rounded-xl' placeholder='Review here....'></textarea>
                              <br />
                              <button className='btn btn-primary'>Submit</button>
                        </form>
                  </div>

            </div>
      );
};

export default AddReview;