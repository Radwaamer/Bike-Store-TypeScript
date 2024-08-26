import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from 'pages/home/Home';
import Bikes from 'pages/bikes/Bikes';
import BikeDetails from 'pages/bikeDetails/BikeDetails';
import Cart from 'pages/cart/Cart';

export const router=createBrowserRouter([
    {path:"/", element:<MainLayout />, children:[
        {index:true, element:<Home />},
        {path:"/bikes", element:<Bikes />},
        {path:"/bikes/:id", element:<BikeDetails />},
        {path:"/cart", element:<Cart />},
    ]}
])