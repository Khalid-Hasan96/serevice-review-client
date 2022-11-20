import React, { useEffect, useState } from 'react';
import ShowReviews from './ShowRevies';



const Reviews = ({ serviceReview, serviceKey }) => {
      const [reviewData, setReviewData] = useState([]);
      const { serviceId } = serviceReview;


      useEffect(() => {
            fetch(`https://service-review-server-six-phi.vercel.app/reviews?serviceId=${serviceId}`)
                  .then(res => res.json())
                  .then(data => setReviewData(data))
      }, [serviceId, serviceKey])
      if (serviceId === serviceKey) {
            return (
                  <div>
                        {
                              reviewData.map(review => <ShowReviews
                                    key={review._id}
                                    allreview={review}
                                    serviceKey={serviceKey}
                              ></ShowReviews>)
                        }
                  </div>
            )
      }

};

export default Reviews;