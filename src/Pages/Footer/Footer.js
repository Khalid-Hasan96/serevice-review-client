import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../../assets/logo.png'

const Footer = () => {
      return (
            <section>
                  <footer className="footer p-10 bg-primary text-white">
                        <div>
                              <img src={footerLogo} width="50" height="50" alt="" />
                              <p>Mr. Electric<br />Providing services since 2020</p>
                        </div>
                        <div>
                              <span className="footer-title">Services</span>
                              <Link to='/servicesDetails/637672d62098bdb098a6c263' className="link link-hover">Wiring</Link>
                              <Link to='/servicesDetails/637672d62098bdb098a6c264' className="link link-hover">Troubleshoot</Link>
                              <Link to='/servicesDetails/637672d62098bdb098a6c265' className="link link-hover">Install Appliances</Link>
                              <Link to='/servicesDetails/637672d62098bdb098a6c267' className="link link-hover">Maintenance System</Link>
                        </div>
                        <div>
                              <span className="footer-title">Company</span>
                              <a className="link link-hover">About us</a>
                              <a className="link link-hover">Contact</a>
                              <a className="link link-hover">Jobs</a>
                              <a className="link link-hover">Press kit</a>
                        </div>
                        <div>
                              <span className="footer-title">Legal</span>
                              <a className="link link-hover">Terms of use</a>
                              <a className="link link-hover">Privacy policy</a>
                              <a className="link link-hover">Cookie policy</a>
                        </div>
                  </footer>

                  <footer className="footer footer-center p-4 bg-primary text-white">
                        <div>
                              <p>Copyright © 2023 - All right reserved by <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/khalid-hasan96/' className='hover:underline font-bold'>Khalid Hasan</a></p>
                        </div>
                  </footer>
            </section>
      );
};

export default Footer;