import React from 'react'
//import { Navigate } from 'react-router-dom'
import NoPage from '../components/pages/NoPage';
import Home from '../components/pages/home/Home';
import CategoryIndex from '../components/pages/danhmuc/CategoryIndex';
import Detail from '../components/pages/productdetail/Detail';

export const routes = () => {
    const router_element = [
        {
            path: '/home',
            element:<Home/>
        },
        {
            path: '/category',
            element:<CategoryIndex  />
        },
        {
            path: '/detail',
            element:<Detail />
        },
        {
            path: '/',
            element:<NoPage />
        }
    ]
    return router_element
}