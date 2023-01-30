import React from 'react';
import { UserProvider } from '../contexts/user';

export const UserLayout = WrappedComponent => {
  // console.log('WrappedComponent123123', WrappedComponent)
  return function (props) {
    // console.log('props1232', props)
    return (
      <UserProvider>
        <WrappedComponent {...props} />
      </UserProvider>
    );
  };
};
