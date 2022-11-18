import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/login.png';
import { FaGoogle, FaGithubSquare } from 'react-icons/fa';

// bg-white bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg
// shadow-2xl bg-indigo-400
const Login = () => {
      return (
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded my-10">
                  <div className="flex p-10 lg:justify-around ">
                        <div className="">
                              <img src={login} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm bg-white bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg">
                              <div className="card-body">
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
                                          <label className="label">
                                                <button href="#" className="label-text-alt link link-hover">Forgot password?</button>
                                          </label>
                                    </div>
                                    <div className="form-control mt-6">
                                          <button className="btn btn-primary">Login</button>
                                          <small className='my-3'>New on Mr. Electric? Please <Link to='/register' className='underline font-bold'>Register</Link></small>
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

export default Login;