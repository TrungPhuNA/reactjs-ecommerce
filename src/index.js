import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { 
    BrowserRouter, Routes, Route
} from 'react-router-dom'
import ProductDetailPage from './pages/product_detail/ProductDetailPage';
import CategoryPage from './pages/category/CategoryPage';
import AppContainer from './containers/layouts/AppContainer';
import reportWebVitals from './reportWebVitals';
import NoPage from "./pages/nopage/NoPage";
import HomePage from './pages/home/HomePage';
import ProductPage from './pages/product/ProductPage';
import AccountPage from './pages/account/AccountPage';
import AccountInfo from './pages/account/include/AccountInfo';
import MyNoti from './pages/account/include/MyNoti';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AppContainer>
            <Routes>
                <Route path ="/" element={<HomePage />}>
                    <Route path="category" element={<CategoryPage />}>
                        <Route path="&pp" element={<ProductPage/>} />
                    </Route>
                    <Route path="detail" element={<ProductDetailPage />} />
                    <Route path="*" element = {<NoPage />} />
                    <Route path="account" element = {<AccountPage />} />
                    <Route path="AI" element = {<AccountInfo />} />
                    <Route path="Noti" element = {<MyNoti />} />
                </Route>
            </Routes>
        </AppContainer>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
