import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../components/Pages/Home/Home';
import Main from '../../Layouts/Main';
import ProjectDetails from '../../components/Projects/ProjectDetails';
import Blog from '../../components/Pages/Blog/Blog';
import Projects from '../../components/Projects/Projects';

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
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/projects',
                loader: () => fetch(`https://salman-reactdev.vercel.app/projects/`),
                element: <Projects></Projects>
            },
            {
                path: '/projects/:id',
                loader: ({ params }) => fetch(`https://salman-reactdev.vercel.app/projects/${params.id}`),
                element: <ProjectDetails></ProjectDetails>
            },
        ]
    },

])