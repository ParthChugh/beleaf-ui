import React from 'react';
import './index.css';
import { createRoot } from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './contexts/user';
import { CookiesProvider } from 'react-cookie';
import Container from './components/container';
import 'react-tabs/style/react-tabs.css';

createRoot(document.getElementById("root")).render(
  <CookiesProvider>
    <UserProvider>
      <Container />
    </UserProvider>
  </CookiesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
