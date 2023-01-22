import React, { useContext } from 'react';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from '../../routes';
import { checkIfUserLoggedIn } from '../../global/constants'
import Drawer from '../drawer'
import { UserContext } from '../../contexts/user';
import Header from '../header';

export default function Container() {
  const { userState } = useContext(UserContext);
  const isUserLoggedIn = checkIfUserLoggedIn(userState.user.accessToken)
  return (
    <div>
      {isUserLoggedIn ?
        <Drawer WrappedComponent={<RouterProvider router={router} />} />
        :
        <>
          <Header />
          <RouterProvider router={router} />
        </>

      }

    </div>
  )
}