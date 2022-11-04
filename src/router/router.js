import React from 'react';
import NoPage from '../pages/nopage/NoPage';
import ProductDetailPage from '../pages/product_detail/ProductDetailPage';
import HomePage from '../pages/home/HomePage';
import CategoryPage from '../pages/category/CategoryPage';
import ProductPage from '../pages/product/ProductPage';
// import AccountPage from '../pages/account/AccountPage';
import AccountInfo from '../pages/account/include/AccountInfo';
import OrderManagement from '../pages/account/include/OrderManagement';
import OrderDetail from '../pages/account/include/OrderDetail';
import UpdatePhoneNum from '../pages/account/include/UpdatePhoneNum';
import UpdateEmail from '../pages/account/include/UpdateEmail';
import UpdatePassword from '../pages/account/include/UpdatePassword';
import UpdatePin from '../pages/account/include/UpdatePin';
import UpdName from '../pages/account/include/mobile/UpdName';
import UpdEmail from '../pages/account/include/mobile/UpdEmail';
import UpdNickname from '../pages/account/include/mobile/UpdNickname';
import UpdPass from '../pages/account/include/mobile/UpdPass';
import UpdPhoneNum from '../pages/account/include/mobile/UpdPhoneNum';
import UpdSex from '../pages/account/include/mobile/UpdSex';

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
            path: '/info',
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
        {
            path: 'info/updname',
            element: <UpdName/>
        },
        {
            path: 'info/updemail',
            element: <UpdEmail/>
        },
        {
            path: 'info/updnickname',
            element: <UpdNickname/>
        },
        {
            path: 'info/updpass',
            element: <UpdPass/>
        },
        {
            path: 'info/updphonenum',
            element: <UpdPhoneNum/>
        },
        {
            path: 'info/updsex',
            element: <UpdSex/>
        },
    ]
}
