import React from 'react';
import faq from '../../../assets/faq.png'

const FAQ = () => {
      return (
            <div className='my-10 rounded-2xl p-10 text-center flex flex-col lg:flex-row'>
                  <div className="w-full lg:w-2/4">
                        <img src={faq} alt="" />
                  </div>
                  <div className="w-full lg:w-2/4">
                        <div className="collapse collapse-arrow border border-base-300 shadow-xl bg-green-400 bg-opacity-40 backdrop-blur-md drop-shadow-lg p-5 rounded-xl my-2">
                              <input type="checkbox" />
                              <div className="collapse-title text-xl font-medium bg-green-300 rounded-lg">
                                    What Are Your Areas of Specialization?
                              </div>
                              <div className="collapse-content bg-green-300 rounded-lg">
                                    <p>I have worked on different projects and with various companies. However, I have developed a liking for residential projects. I have worked on more than 300 residential projects in the last two years. I also love being part of electrical installation and maintenance teams. However, with my skills and experience, I can work on any project related to this field.</p>
                              </div>
                        </div>
                        <div className="collapse collapse-arrow border border-base-300 shadow-xl bg-orange-400 bg-opacity-40 backdrop-blur-md drop-shadow-lg p-5 rounded-xl my-2">
                              <input type="checkbox" />
                              <div className="collapse-title text-xl font-medium bg-orange-300 rounded-lg">
                                    What Are Some of The Safety Measures That You Undertake in This Role?
                              </div>
                              <div className="collapse-content bg-orange-300 rounded-lg">
                                    <p>Whenever I am working, I make sure that all the circuits and machines are locked out and tagged. I also put on protective gears at all time such as the right gloves and shoes when working on electrical lines.</p>
                              </div>
                        </div>
                        <div className="collapse collapse-arrow border border-base-300 shadow-xl bg-yellow-400 bg-opacity-40 backdrop-blur-md drop-shadow-lg p-5 rounded-xl my-2">
                              <input type="checkbox" />
                              <div className="collapse-title text-xl font-medium bg-yellow-300 rounded-lg">
                                    What would you do if you received a task with incomplete instructions?
                              </div>
                              <div className="collapse-content bg-yellow-300 rounded-lg">
                                    <p>If I received a task with incomplete instructions I would begin by quickly considering whether I had solved a similar challenge before. Then, I would clarify the task with the supervisor who assigned it, mentioning my own ideas to fill in the missing information. I think that it is important to figure out how to accomplish a task independently, but I also value the efficiency of doing a task according to spec the first time.</p>
                              </div>
                        </div>
                        <div className="collapse collapse-arrow border border-base-300 shadow-xl bg-indigo-400 bg-opacity-40 backdrop-blur-md drop-shadow-lg p-5 rounded-xl my-2">
                              <input type="checkbox" />
                              <div className="collapse-title text-xl font-medium bg-indigo-300 rounded-lg">
                                    What Are the Qualities That an Electrician Need to be Effective?
                              </div>
                              <div className="collapse-content bg-indigo-300 rounded-lg">
                                    <p>An electrician needs to have good communication and problem-solving skills given the nature of the work involved. He/ she should have excellent people skills to be able to work in teams and get along well with other professionals. Other qualities include basic Math skills and a perfect understanding of the regulatory requirements surrounding electrical work.</p>
                              </div>
                        </div>

                  </div>
            </div>
      );
};

export default FAQ;