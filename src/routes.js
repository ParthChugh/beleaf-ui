import Contact from './screens/contact';
import Home from './screens/home'
import Login from './screens/login';
import Dashboard from './screens/dashboard';
import { createBrowserRouter } from "react-router-dom";
import { logoutUser, redirectIfUser } from './global/constants';

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "dashboard",
        element: <Dashboard />
      },

      {
        path: "login",
        element: <Login />,
        loader: redirectIfUser,
      },
      {
        path: "logout",
        action: () => {
          console.log('qwdqwdwqddwq')
        },
      },
    ],
  },
]);