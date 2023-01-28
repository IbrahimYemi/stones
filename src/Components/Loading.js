import React from 'react';
import { BeatLoader } from 'react-spinners';

const LoadingComponent = () => {

  return (
    <div className='flex items-center justify-center h-20' >
      <BeatLoader
        sizeunit={"px"}
        size={50}
        color={'#1A202C'}
        loading={true}
      />
    </div>
  );
}

export default LoadingComponent;

