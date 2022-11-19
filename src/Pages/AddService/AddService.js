import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const AddService = () => {
      const { user } = useContext(AuthContext);
      const handleAddService = event => {
            event.preventDefault();
            const form = event.target;
            const title = form.serviceName.value;
            const img = form.serviceImg.value;
            const details = form.serviceDetails.value;
            const price = form.servicePrice.value;

            const addService = {
                  title,
                  img,
                  details,
                  price,
                  clientId: user?.uid,
                  client: user?.displayName,
                  clientEmail: user?.email,
                  clientImg: user?.photoURL
            }
            fetch('http://localhost:5000/services', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(addService)
            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.acknowledged) {
                              alert('Service added successfully');
                              form.reset();
                        }
                  })
      }

      return (
            <div>
                  <div className='my-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl px-10 py-8'>
                        <h2 className='text-center text-3xl font-bold underline mb-4 text-white'>Add Service</h2>
                        <div className="bg-white bg-opacity-40 backdrop-blur-md drop-shadow-lg text-white rounded-xl text-center p-6">
                              {
                                    user?.uid ?
                                          <form onSubmit={handleAddService}>
                                                <input type="text" className='w-3/4 p-3 border rounded-xl text-black mb-2' name="serviceName" id="" placeholder='Service Name' />
                                                <input type="text" className='w-3/4 p-3 border rounded-xl text-black mb-2' name="serviceImg" id="" placeholder='Service Image URL' />
                                                <textarea id="" name='serviceDetails' className='w-3/4 p-3 border rounded-xl text-black' placeholder='Service Details....'></textarea>
                                                <input type="text" className='w-3/4 p-3 border rounded-xl text-black mb-2' name="servicePrice" id="" placeholder='Service Price' />

                                                <br />
                                                <input type="submit" value="Add Review" className='btn btn-primary' />
                                          </form>
                                          :
                                          <p>Please <Link to='/login' className='underline font-semibold'>Login</Link> to add service.</p>
                              }
                        </div>
                  </div>
            </div>
      );
};

export default AddService;