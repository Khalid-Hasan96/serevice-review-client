import React from 'react';
import faq from '../../../assets/faq.png'

const FAQ = () => {
      return (
            <div className='my-10 rounded-2xl p-10 text-center flex flex-col lg:flex-row'>
                  <div className="w-full lg:w-2/4">
                        <img src={faq} alt="" />
                  </div>
                  <div className="w-full lg:w-2/4">
                        <div className="collapse collapse-arrow border border-base-300 shadow-xl bg-indigo-400 bg-opacity-40 backdrop-blur-md drop-shadow-lg p-5 rounded-xl my-2">
                              <input type="checkbox" />
                              <div className="collapse-title text-xl font-medium bg-indigo-400 rounded-lg">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit?
                              </div>
                              <div className="collapse-content bg-indigo-400 rounded-lg">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam illum corporis repellendus est quod iste, officiis inventore nobis amet perspiciatis accusamus ipsa maiores fugit eum illo voluptas cupiditate quibusdam. Assumenda.</p>
                              </div>
                        </div>
                        <div className="collapse collapse-arrow border border-base-300 shadow-xl bg-indigo-400 bg-opacity-40 backdrop-blur-md drop-shadow-lg p-5 rounded-xl my-2">
                              <input type="checkbox" />
                              <div className="collapse-title text-xl font-medium bg-indigo-400 rounded-lg">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit?
                              </div>
                              <div className="collapse-content bg-indigo-400 rounded-lg">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam illum corporis repellendus est quod iste, officiis inventore nobis amet perspiciatis accusamus ipsa maiores fugit eum illo voluptas cupiditate quibusdam. Assumenda.</p>
                              </div>
                        </div>
                        <div className="collapse collapse-arrow border border-base-300 shadow-xl bg-indigo-400 bg-opacity-40 backdrop-blur-md drop-shadow-lg p-5 rounded-xl my-2">
                              <input type="checkbox" />
                              <div className="collapse-title text-xl font-medium bg-indigo-400 rounded-lg">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit?
                              </div>
                              <div className="collapse-content bg-indigo-400 rounded-lg">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam illum corporis repellendus est quod iste, officiis inventore nobis amet perspiciatis accusamus ipsa maiores fugit eum illo voluptas cupiditate quibusdam. Assumenda.</p>
                              </div>
                        </div>

                  </div>
            </div>
      );
};

export default FAQ;