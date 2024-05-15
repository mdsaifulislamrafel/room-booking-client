import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import RoomDetails from './Components/RoomDetails/RoomDetails';
import AuthProvider from './Provider/AuthProvider';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import Booking from './Components/Booking/Booking';
import MyBooking from './Components/MyBooking/MyBooking';
import Update from './Components/MyBooking/Update';
import PrivateRoute from './Provider/PrivatRoute';
import AvailableRoom from './Components/Home/AvailableRoom';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/rooms/:id',
        element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/rooms/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: 'room/:id',
        element: <PrivateRoute><Booking></Booking></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/rooms/${params.id}`)
      },
      {
        path: '/bookings',
        element: <PrivateRoute><MyBooking></MyBooking></PrivateRoute>
      },
      {
        path: 'bookings/:id',
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
      },
      {
        path: '/rooms',
        element: <PrivateRoute><AvailableRoom /></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/unavailable/Available')
      }, 
      {
        path: '/contact', 
        element: <Contact></Contact>
      }, 
      {
        path: '/about', 
        element: <About></About>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </AuthProvider>
)
