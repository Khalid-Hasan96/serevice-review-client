import React from 'react';
import footerLogo from '../../assets/logo.png'

const Footer = () => {
      return (
            <section>
                  <footer className="footer p-10 bg-primary text-white">
                        <div>
                              <img src={footerLogo} width="50" height="50" alt="" />
                              <p>Mr. Electric<br />Providing services since 2022</p>
                        </div>
                        <div>
                              <span className="footer-title">Services</span>
                              <a className="link link-hover">Branding</a>
                              <a className="link link-hover">Design</a>
                              <a className="link link-hover">Marketing</a>
                              <a className="link link-hover">Advertisement</a>
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