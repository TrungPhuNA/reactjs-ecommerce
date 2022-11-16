import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { 
    BrowserRouter, Routes, Route
} from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './fontawesome';
import ProductDetailPage from './pages/product_detail/ProductDetailPage';
import CategoryPage from './pages/category/CategoryPage';
import AppContainer from './containers/layouts/AppContainer';
import reportWebVitals from './reportWebVitals';
import NoPage from "./pages/nopage/NoPage";
import HomePage from './pages/home/HomePage';
//import ProductPage from './pages/product/ProductPage';
import AccountPage from './pages/account/AccountPage';
import AccountInfo from './pages/account/include/AccountInfo';
import OrderManagement from './pages/account/include/OrderManagement';
import OrderDetail from './pages/account/include/OrderDetail';
import "./index.css";
import UpdatePhoneNum from './pages/account/include/UpdatePhoneNum';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AppContainer/> 
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
