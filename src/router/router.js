import React from 'react';
import NoPage from '../pages/nopage/NoPage';
import ProductDetailPage from '../pages/product_detail/ProductDetailPage';
import HomePage from '../pages/home/HomePage';
import CategoryPage from '../pages/category/CategoryPage';
import ProductPage from '../pages/product/ProductPage';
import AccountPage from '../pages/account/AccountPage';
import AccountInfo from '../pages/account/include/AccountInfo';
import OrderManagement from '../pages/account/include/OrderManagement';
import OrderDetail from '../pages/account/include/OrderDetail';
import UpdatePhoneNum from '../pages/account/include/UpdatePhoneNum';
import UpdateEmail from '../pages/account/include/UpdateEmail';
import UpdatePassword from '../pages/account/include/UpdatePassword';
import UpdatePin from '../pages/account/include/UpdatePin';

export const routes = () => {
    return [
        {
            path: '/',
            element: <HomePage/>
        },
        {
            path: 'category/:slug-:id',
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
            path: 'info',
            element: <AccountInfo/>
        },
        {
            path: '/updatepn',
            element: <UpdatePhoneNum/>
        },
        {
            path: '/updatepass',
            element: <UpdatePassword/>
        },
        {
            path: '/updatepin',
            element: <UpdatePin/>
        },
        {
            path: '/updateemail',
            element: <UpdateEmail/>
        },
        {
            path: 'order',
            element: <OrderManagement/>
        },
        {
            path: 'order/orderdetail',
            element: <OrderDetail/>
        },

    ]
}
