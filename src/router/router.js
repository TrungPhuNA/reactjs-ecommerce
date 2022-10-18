import React from 'react';
import NoPage from '../components/pages/NoPage';
import Detail from '../components/pages/productdetail/Detail';
import HomePage from '../pages/home/HomePage';
import CategoryPage from '../pages/category/CategoryPage';

export const routes = () => {
    return [
        {
            path: '/home',
            element: <HomePage/>
        },
        {
            path: '/category',
            element: <CategoryPage/>
        },
        {
            path: '/detail',
            element: <Detail/>
        },
        {
            path: '/',
            element: <NoPage/>
        }
    ]
}
