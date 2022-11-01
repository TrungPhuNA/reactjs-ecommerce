import React from 'react';
import NoPage from '../pages/nopage/NoPage';
import ProductDetailPage from '../pages/product_detail/ProductDetailPage';
import HomePage from '../pages/home/HomePage';
import CategoryPage from '../pages/category/CategoryPage';
import ProductPage from '../pages/product/ProductPage';
import AccountPage from '../pages/account/AccountPage';
import AccountInfo from '../pages/account/include/AccountInfo';
import MyNoti from '../pages/account/include/MyNoti';

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
        },
        {
            path: 'account',
            element: <AccountPage/>
        },
        {
            path: 'AI',
            element: <AccountInfo/>
        },
        {
            path: 'Noti',
            element: <MyNoti/>
        }
    ]
}
