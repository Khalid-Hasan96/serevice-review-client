import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import ShowMyReviews from './ShowMyReviews';

import 'react-toastify/dist/ReactToastify.css';

const MyReviews = () => {
      const { user } = useContext(AuthContext);
      const [myReviews, setMyReviews] = useState([]);
      useEffect(() => {
            fetch(`http://localhost:5000/clientreviews?clientEmail=${user?.email}`)
                  .then(res => res.json())
                  .then(data => setMyReviews(data))
      }, [user?.email])

      const handleDelete = (id) => {
            fetch(`http://localhost:5000/reviews/${id}`, {
                  method: 'DELETE',
            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.deletedCount > 0) {
                              alert('Deleted Successfully');
                              const remaining = myReviews.filter(review => review._id !== id);
                              setMyReviews(remaining)
                        }
                  })
      }

      console.log(myReviews)
      return (
            <div className='my-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-10 text-center'>
                  <h2 className='text-center text-4xl font-bold mb-5'>My Reviews</h2>
                  {
                        myReviews.map(myReview => <ShowMyReviews
                              key={myReview._id}
                              myReview={myReview}
                              handleDelete={handleDelete}
                        ></ShowMyReviews>)
                  }
            </div>
      );
};

export default MyReviews;