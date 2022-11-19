import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const MyReviews = () => {
      const { user } = useContext(AuthContext);
      return (
            <div>
                  <h2>My Reviews</h2>
            </div>
      );
};

export default MyReviews;