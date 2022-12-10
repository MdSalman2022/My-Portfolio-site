import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../components/Pages/Home/Home';
import Main from '../../Layouts/Main';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
        ]
    },

])