import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Trainings from './components/Training';
import HomePage from './components/homepage';
import ContactUs from './components/contact';
import Login from './components/login';
import Signup from './components/signup';
import AboutUs from './components/about';
import Dashboard from './components/dashboard/dashboard';
import Maindashboard from './components/dashboard/Maindashboard';
import Mycourses from './components/dashboard/Mycourses';
import ManPower from './components/ManPower';
import Consultancy from './components/Consultancy';
import Setting  from './components/dashboard/setting';


const router = createBrowserRouter([{
  path: '/',
  element: <App></App>,
  children: [
    {
      path: "/",
      element: <HomePage></HomePage>
    },



    {

      path: 'trainings',
      element: <Trainings></Trainings>,

    },
    {
      path: "contact-us",
      element: <ContactUs></ContactUs>
    },
    {
      path: "login",
      element: <Login></Login>
    },
    {
      path: "sign-up",
      element: <Signup></Signup>

    },
    

    {
      path: "about-us",
      element: <AboutUs></AboutUs>

    },
    {
      path:"man-power",
      element:<ManPower></ManPower>
    },
    {
      path:"Consultancy",
      element:<Consultancy></Consultancy>
    }
    

  ]

},
{
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children:[
        {
        path:'/dashboard',
        element:<Maindashboard></Maindashboard>
      },
        {
        path:'/dashboard/mycourses',
        element:<Mycourses></Mycourses>
      },
        {
        path:'/dashboard/settings',
        element:<Setting></Setting>
      },
    ]

    },   

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
