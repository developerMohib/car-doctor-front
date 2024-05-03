import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Blog from './Pages/Blog/Blog.jsx';
import Service from './Pages/Service/Service.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage> </ErrorPage> ,
    children:[
      {
        path: "/" ,
        element: <Home> </Home> ,
      },
      {
        path: "/about" ,
        element: <About> </About> ,
      },
      {
        path: "/contact" ,
        element: <Contact> </Contact> ,
      },
      {
        path: "/blog" ,
        element: <Blog> </Blog> ,
      },
      {
        path: "/service" ,
        element: <Service> </Service> ,
      },
      {
        path: "/login" ,
        element: <Login> </Login> ,
      },
      {
        path: "/register" ,
        element: <Register> </Register> ,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
