import React from 'react';
import AccountPage from '../pages/account/AccountPage';
import AccountInfo from '../pages/account/include/AccountInfo';
import OrderManagement from '../pages/account/include/OrderManagement';
import OrderDetail from '../pages/account/include/OrderDetail';

export const routes1 = () => {
    return [
        {
            path: 'info',
            element: <AccountInfo/>
        },
        {
            path: 'order',
            element: <OrderManagement/>
        },
        {
            path: 'order-detail',
            element: <OrderDetail/>
        }
    ]
}
