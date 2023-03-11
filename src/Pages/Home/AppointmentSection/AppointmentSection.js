import React from 'react';
import appointment from '../../../assets/appointment.jpg';

const AppointmentSection = () => {
      return (
            <div className='my-10'>
                  <h2 className='text-4xl font-semibold text-center'>Schedule an Appoinment</h2>
                  <div className='mt-4 rounded-2xl p-10 sm:grid grid-cols-1 gap-5 lg:flex'>
                        <img src={appointment} className="w-full lg:w-1/2" alt="" />
                        <form className='shadow-xl bg-green-400  bg-opacity-40  drop-shadow-lg p-5 w-full lg:w-1/2 lg:ml-5 rounded-xl'>
                              <div className='flex gap-5'>
                                    <input className='rounded w-1/2 h-10 p-4' type="text" name="" placeholder='First Name' id="" />
                                    <input className='rounded w-1/2 h-10 p-4' type="text" name="" placeholder='Last Name' id="" />
                              </div>
                              <input type="text" className='w-full rounded mt-3 h-10 p-4' name="" placeholder='Contact Number' id="" />
                              <br />

                              <textarea name="" className='w-full rounded mt-3 h-18 p-4' id="" placeholder='Address'></textarea>
                              <textarea name="" className='w-full rounded mt-3 h-24 p-4' id="" placeholder='Service Description'></textarea>
                              <input type="submit" value="Submit" className='btn btn-success hover:bg-green-500 ease-in duration-300 mt-2' />
                        </form>
                  </div>
            </div>
      );
};

export default AppointmentSection;