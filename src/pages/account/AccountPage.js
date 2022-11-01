import React, {useEffect} from 'react';
import AccountInfo from './include/AccountInfo';
import Category from './include/Category';
import OrderManagement from './include/OrderManagement';
import SideNavBar from './include/SideNavBar';

function AccountPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="container">
            <Category/>
            <div className="page-container">
                <SideNavBar/>
                <AccountInfo/>
            </div>
        </div>
    )
}

export default AccountPage;