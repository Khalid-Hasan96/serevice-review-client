import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const AddReview = ({ service }) => {
      const { _id, title } = service;
      const { user } = useContext(AuthContext);

      const handleSubmitReview = event => {
            event.preventDefault();
            const form = event.target;
            const review = form.addReview.value;

            const addReview = {
                  serviceId: _id,
                  serviceTitle: title,
                  clientId: user?.uid,
                  client: user?.displayName,
                  clientEmail: user?.email,
                  clientImg: user?.photoURL,
                  review,

            }
            fetch('https://service-review-server-six-phi.vercel.app/addreviews', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(addReview)
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        if (data.acknowledged) {
                              alert(`Review on ${title} service successfully added. Refresh page to see your review. Thank you.`);
                              form.reset();
                        }
                  })
            console.log(addReview)
      }

      return (
            <div>
                  <h2 className='text-2xl font-bold'>Add Reviews</h2>
                  <div className="bg-green-400 bg-opacity-40 backdrop-blur-md drop-shadow-lg text-white rounded-xl text-center p-6">
                        {
                              user?.uid ?
                                    <form onSubmit={handleSubmitReview}>
                                          <textarea id="" name='addReview' className='w-3/4 p-3 border rounded-xl text-black' placeholder='Review here....'></textarea>
                                          <br />
                                          <input type="submit" value="Add Review" className='btn btn-success hover:bg-green-500 ease-in duration-300' />
                                    </form>
                                    :
                                    <p>Please <Link to='/login' className='underline font-semibold'>Login</Link> to review this service.</p>
                        }
                  </div>

            </div>
      );
};

export default AddReview;