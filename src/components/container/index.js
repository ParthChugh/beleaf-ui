import React, { useContext } from 'react';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from '../../routes';
import { checkIfUserLoggedIn } from '../../global/constants'
import Drawer from '../drawer'
import { UserContext } from '../../contexts/user';
import Header from '../header';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Container() {
  const { userState } = useContext(UserContext);
  const isUserLoggedIn = checkIfUserLoggedIn(userState.user.accessToken)

  const THEME = createTheme({
    typography: {
      "fontFamily": "Poppins",
    }
  });

  return (
    <ThemeProvider theme={THEME}>

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
    </ThemeProvider>
  )
}