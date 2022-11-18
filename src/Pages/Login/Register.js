import React from 'react';
import { Link } from 'react-router-dom';
import register from '../../assets/register.png';
import { FaGoogle, FaGithubSquare } from 'react-icons/fa';

const Register = () => {
      return (
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 rounded my-10">
                  <div className="flex p-10 lg:justify-around ">
                        <div className="">
                              <img src={register} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm bg-white bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg">
                              <div className="card-body">
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Name</span>
                                          </label>
                                          <input type="text" placeholder="name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Email</span>
                                          </label>
                                          <input type="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Password</span>
                                          </label>
                                          <input type="password" placeholder="password" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control mt-6">
                                          <button className="btn btn-warning">Register</button>
                                          <small className='my-3'>Already have an account? Please <Link to='/login' className='underline font-bold'>Login</Link></small>
                                    </div>
                                    <hr />
                                    <div>
                                          <h4 className='text-center font-semibold'>Or</h4>
                                          <div className='flex justify-center gap-3'>
                                                <button className='btn btn-error'><FaGoogle />oogle</button>
                                                <button className='btn'><FaGithubSquare />Github</button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Register;