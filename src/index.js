import React from 'react';
import './index.css';
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { router } from './routes';
import { UserProvider } from './contexts/user';
import Header from './components/header'
import { CookiesProvider } from 'react-cookie';

createRoot(document.getElementById("root")).render(
  <CookiesProvider>
    <UserProvider>
      <Header />
      <RouterProvider router={router} />
    </UserProvider>
  </CookiesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
