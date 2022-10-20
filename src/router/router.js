import React from 'react';
import NoPage from '../pages/nopage/NoPage';
import ProductDetailPage from '../pages/product_detail/ProductDetailPage';
import HomePage from '../pages/home/HomePage';
import CategoryPage from '../pages/category/CategoryPage';
import ProductPage from '../pages/product/ProductPage';

export const routes = () => {
    return [
        {
            path: '/',
            element: <HomePage/>
        },
        {
            path: 'category',
            element: <CategoryPage/>
        },
        {
            path: 'detail',
            element: <ProductDetailPage/>
        },
        {
            path: '*',
            element: <NoPage/>
        },
        {
            path: '&pp',
            element: <ProductPage/>
        }
    ]
}
