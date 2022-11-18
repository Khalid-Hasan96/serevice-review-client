import React from 'react';

const Services = ({ service }) => {

      const { _id, title, img, details, price } = service;

      return (
            <div className="card card-compact bg-base-100 shadow-xl">
                  <figure><img src={img} alt="Shoes" /></figure>
                  <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{details.slice(0, 100)}...</p>
                        <p>Price: ${price}</p>
                        <div className="card-actions justify-end">
                              <button className="btn btn-outline btn-primary">Buy Now</button>
                        </div>
                  </div>
            </div>

      );
};

export default Services;