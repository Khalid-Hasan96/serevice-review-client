import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/login.png';
import { FaGoogle, FaGithubSquare } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../hooks/useTitle';


const Login = () => {
      const [error, setError] = useState('');
      const { providerSignIn, signIn } = useContext(AuthContext);

      useTitle('Login')

      const navigate = useNavigate();
      const location = useLocation();

      const from = location.state?.from?.pathname || '/';

      const handleGoogleSignIn = () => {
            const provider = new GoogleAuthProvider();
            providerSignIn(provider)
                  .then(result => {
                        const user = result.user;
                        setError('');
                        navigate(from, { replace: true })

                  })
                  .catch(err => setError(err.message))
      }
      const handleGithubSignIn = () => {
            const provider = new GithubAuthProvider();

            providerSignIn(provider)
                  .then(result => {
                        const user = result.user;
                        navigate(from, { replace: true })

                  })
                  .catch(err => setError(err.message))
      }

      const handleSubmit = event => {
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;

            signIn(email, password)
                  .then(result => {
                        const user = result.user;
                        form.reset();
                        setError('')
                        navigate(from, { replace: true })
                  })
                  .catch(err => setError(err.message))
      }
      return (
            <div className="rounded my-10">
                  <div className="flex p-10 lg:justify-around ">
                        <div className="">
                              <img src={login} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm bg-indigo-400 bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg">
                              <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Password</span>
                                                </label>
                                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                                <label className="label">
                                                      <button href="#" className="label-text-alt link link-hover">Forgot password?</button>
                                                </label>
                                          </div>
                                          <div>
                                                <p className='text-red-500'>{error}</p>
                                          </div>
                                          <div className="form-control mt-6">
                                                <input type="submit" value="Login" className='btn btn-primary' />
                                                <small className='my-3'>New on Mr. Electric? Please <Link to='/register' className='underline font-bold'>Register</Link></small>
                                          </div>
                                    </form>
                                    <hr />
                                    <div>
                                          <h4 className='text-center font-semibold'>Or</h4>
                                          <div className='flex justify-center gap-3'>
                                                <button onClick={handleGoogleSignIn} className='btn btn-error'><FaGoogle />oogle</button>
                                                <button onClick={handleGithubSignIn} className='btn'><FaGithubSquare />Github</button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Login;