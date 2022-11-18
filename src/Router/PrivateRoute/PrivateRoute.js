import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { InfinitySpin } from 'react-loader-spinner';


const PrivateRoute = ({ children }) => {
      const { user, loading } = useContext(AuthContext);
      const location = useLocation();
      if (loading) {
            return <div className='text-center'>
                  <InfinitySpin
                        width='200'
                        color="#808080"
                  />
            </div>
      }

      if (!user) {
            return <Navigate to='/login' state={{ from: location }} replace></Navigate>
      }
      return children;
};

export default PrivateRoute;