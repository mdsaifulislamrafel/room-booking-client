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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>, 
    children: [
      {
        path: '/', 
        element: <Home></Home>
      }, 
      {
        path: 'rooms/:id',
        element: <RoomDetails></RoomDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/rooms/${params.id}`)
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
        element: <Booking></Booking>,
        loader: ({params}) => fetch(`http://localhost:5000/rooms/${params.id}`)
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
