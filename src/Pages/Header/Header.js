import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../context/AuthProvider';

const Header = () => {
      const { user, logOut } = useContext(AuthContext);
      const handleLogOut = () => {
            logOut()
                  .then()
                  .catch()
      }

      return (
            <div className="navbar bg-primary text-primary-content">
                  <div className="navbar-start">
                        <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-primary-content rounded-box w-52">
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/services'>Services</Link></li>
                                    <li><Link to='/blog'>Blog</Link></li>
                                    {
                                          user?.uid &&
                                          <>
                                                <li><Link>Add Service</Link></li>
                                                <li><Link>My Reviews</Link></li>
                                          </>
                                    }
                              </ul>
                        </div>
                        <div className='flex items-center lg:ml-5'>
                              <img src={logo} width='50' alt="" />
                              <Link to='/' className="btn btn-ghost normal-case text-3xl font-bold">Mr. Electric</Link>
                        </div>
                  </div>
                  <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                              <li><Link to='/'>Home</Link></li>
                              <li><Link to='/services'>Services</Link></li>
                              <li><Link to='/blog'>Blog</Link></li>
                              {
                                    user?.uid &&
                                    <>
                                          <li><Link>Add Service</Link></li>
                                          <li><Link>My Reviews</Link></li>
                                    </>
                              }
                        </ul>
                  </div>
                  <div className="navbar-end lg:pr-5">
                        {
                              user?.uid ?
                                    <div className='flex items-center'>
                                          <img src={user?.photoURL} width='30' className='rounded-full lg:mr-2' alt="" />
                                          <p>{user?.displayName}</p>
                                          <Link to='/' onClick={handleLogOut} className="btn btn-outline lg:ml-2">Log out</Link>
                                    </div>
                                    : <Link to='/login' className="btn">Login</Link>
                        }
                  </div>
            </div>
      );
};

export default Header;