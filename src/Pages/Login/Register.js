import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import register from '../../assets/register.png';
import { FaGoogle, FaGithubSquare } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
      const [error, setError] = useState('');
      const { providerSignIn, createUser, updateUserProfile } = useContext(AuthContext);

      const handleGoogleSignIn = () => {
            const provider = new GoogleAuthProvider();

            providerSignIn(provider)
                  .then(result => {
                        const user = result.user;
                        setError('')
                  })
                  .catch(err => {
                        setError(err.message);
                  })
      }
      const handleSubmit = event => {
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            const photo = form.photoURL.value;

            createUser(email, password)
                  .then(result => {
                        const user = result.user;
                        setError('');
                        handleUpdateUserProfile(name, photo)
                        form.reset();
                  })
                  .catch(err => setError(err.message))

      }
      const handleUpdateUserProfile = (name, photoURL) => {
            const profile = { displayName: name, photoURL: photoURL };
            updateUserProfile(profile)
                  .then(() => { })
                  .catch(error => console.error(error))
      }


      return (
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 rounded my-10">
                  <div className="flex p-10 lg:justify-around ">
                        <div>
                              <img src={register} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm bg-white bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg">
                              <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Name</span>
                                                </label>
                                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Photo</span>
                                                </label>
                                                <input type="text" name="photoURL" placeholder="PhotoURL" className="input input-bordered" required />
                                          </div>
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
                                          </div>
                                          <div>
                                                <p className='text-red-500'>{error}</p>
                                          </div>
                                          <div className="form-control mt-6">
                                                <input type="submit" value="Register" className='btn btn-warning' />
                                                <small className='my-3'>Already have an account? Please <Link to='/login' className='underline font-bold'>Login</Link></small>
                                          </div>
                                    </form>

                                    <hr />
                                    <div>
                                          <h4 className='text-center font-semibold'>Or</h4>
                                          <div className='flex justify-center gap-3'>
                                                <button onClick={handleGoogleSignIn} className='btn btn-error'><FaGoogle />oogle</button>
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