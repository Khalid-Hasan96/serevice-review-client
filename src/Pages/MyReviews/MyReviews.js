import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import ShowMyReviews from './ShowMyReviews';

import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';

const MyReviews = () => {
      useTitle('My Reviews')
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

      const handleUpdate = id => {
            fetch(`http://localhost:5000/reviews/${id}`, {
                  method: 'PATCH',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify({ status: 'Approved' })
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data)
                        if (data.modifiedCount > 0) {
                              const remaining = myReviews.filter(review => review._id !== id);
                              const approving = myReviews.find(review => review._id === id);
                              approving.status = 'Approved'
                              const updateReviews = [approving, ...remaining];
                              setMyReviews(updateReviews);
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
                              handleUpdate={handleUpdate}
                        ></ShowMyReviews>)
                  }
            </div>
      );
};

export default MyReviews;