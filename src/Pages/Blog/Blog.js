import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
      useTitle('Blog')
      return (
            <div className='rounded-2xl p-10 my-10'>
                  <h2 className='text-center text-4xl font-bold mb-5'>Welcome to my blogs</h2>

                  <div className='shadow-xl bg-green-400 bg-opacity-40 backdrop-blur-md drop-shadow-lg mb-5 p-5 rounded-2xl'>
                        <h4 className='font-bold text-2xl'>Q. Difference between SQL and NoSQL</h4>
                        <br /><hr /><br />
                        <p>SQL databases are called as RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). These databases are not suited for hierarchical data storage. These databases are best suited for complex queries. Vertically Scalable.Follows ACID property. <br /><br />
                              NoSQL databases are called Non-relational or distributed database system. They have dynamic schema. These databases are best suited for hierarchical data storage. These databases are not so good for complex queries.Horizontally scalable. Follows CAP(consistency, availability, partition tolerance).
                        </p>
                  </div>
                  <div className='shadow-xl bg-green-400 bg-opacity-40 backdrop-blur-md drop-shadow-lg mb-5 p-5 rounded-2xl'>
                        <h4 className='font-bold text-2xl'>Q. What is JWT and how does it work?</h4><br /><hr /><br />
                        <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.
                              <br /><br />
                              User sign-in using username and password or google/facebook.
                              Authentication server verifies the credentials and issues a jwt signed using a private key.
                              User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.
                              Resource server then verifies the authenticity of the token using the secret salt/ public key.
                        </p>
                  </div>
                  <div className='shadow-xl bg-green-400 bg-opacity-40 backdrop-blur-md drop-shadow-lg mb-5 p-5 rounded-2xl'>
                        <h4 className='font-bold text-2xl'>Q. What is the difference between JavaScript and NodeJS?</h4><br /><hr /><br />
                        <p><span>NodeJS:</span>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. We can run Javascript outside the browser with the help of NodeJS. It is mostly used on the server-side.
                              <br />
                              <br />
                              <span>JavaScript: Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. Javascript can only be run in the browsers. It is basically used on the client-side.</span>
                        </p>
                  </div>
                  <div className='shadow-xl bg-green-400 bg-opacity-40 backdrop-blur-md drop-shadow-lg mb-5 p-5 rounded-2xl'>
                        <h4 className='font-bold text-2xl'>Q. How does NodeJS handle multiple requests at the same time?</h4><br /><hr /><br />
                        <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                              If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                  </div>
            </div>
      );
};

export default Blog;