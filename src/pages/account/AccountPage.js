import React, {useState, useEffect} from 'react';
import AccountInfo from './include/AccountInfo';
import Category from './include/Category';
import OrderDetail from './include/OrderDetail';
import OrderManagement from './include/OrderManagement';
import SideNavBar from './include/SideNavBar';
import { routes1 } from '../../router/router1';
import { useRoutes } from "react-router-dom";
import {Link } from "react-router-dom";
import links from '../account/include/SideNavBar';

function AccountPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])  
    
    const [currentPage, setCurrentPage] = useState([]);
    useEffect(() => {
        let pages = [
            {
                id: 1,
                link: <AccountInfo/>,
                status: true
            },
            {
                id: 2,
                link: <OrderManagement/>,
                status: false
            },
            {
                id: 3,
                link: <OrderDetail/>,
                status: false
            }
        ]
        setCurrentPage(pages);
    }, [])   
    
    const changePages = (tabNav) => {
        let page = currentPage.map(item => {
            item.status = item.id === tabNav ? true : false;
            return item
        })
        setCurrentPage(page);
    }

    const getCurrentPage = () => {
        return (
            <>
                {
                    currentPage.map(item => {
                        return (
                                <div onClick={() => changePages(item.link)}/>
                        )
                    })
                }
            </>
        )
    }

    return(
        <div className="container">
            <Category/>
            <div className="page-container">
                <SideNavBar/>
                {getCurrentPage()}
            </div>
        </div>

    )
}

export default AccountPage;
