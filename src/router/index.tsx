import React,{lazy} from "react";
import {Navigate} from 'react-router-dom'
import {RouteObject} from 'react-router-dom'
const Discover = lazy(() => import('@/views/discover'))
const Users = lazy(() => import('@/views/users'))
const Task = lazy(() => import('@/views/task'))
const StroeTemplate = lazy(() => import('@/views/discover/c-pages/StroeTemplate'))
const AxiosTemplate = lazy(() => import('@/views/discover/c-pages/AxiosTemplate'))
const Album = lazy(() => import('@/views/discover/c-pages/album'))

const routes: RouteObject[]=[
    {
        path: '/',
        element: <Navigate to="/discover" />
    },
    {
        path: '/discover',
        element: <Discover />,
        children: [
            {
                path: '/discover',
                element: <Navigate to="/discover/stroeTemplate" />
            },
            {
                path: '/discover/stroeTemplate',
                element: <StroeTemplate />
              },
              {
                path: '/discover/axiosTemplate',
                element: <AxiosTemplate />
              },
              {
                path: '/discover/album',
                element: <Album />
              }
        ]
    },
    {
        path: '/users',
        element: <Users />,
    },
    {
        path: '/task',
        element: <Task />,
    },
]

export default routes