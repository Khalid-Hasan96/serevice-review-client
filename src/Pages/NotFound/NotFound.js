import React from 'react';
import useTitle from '../../hooks/useTitle';

const NotFound = () => {
      useTitle('404')
      return (
            <div className='text-center'>
                  <h1 className='text-center text-5xl font-bold'>404 Not Found</h1>
                  <p className='text-center text-3xl font-bold'>Coundn't find your data</p>
            </div>
      );
};

export default NotFound;