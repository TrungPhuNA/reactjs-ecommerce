import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { 
    BrowserRouter, Routes, Route
} from 'react-router-dom'
import CategoryIndex from './components/pages/danhmuc/CategoryIndex';
import Home from './components/pages/home/Home';
import Detail from './components/pages/productdetail/Detail';
import AppContainer from './containers/layouts/AppContainer';
import reportWebVitals from './reportWebVitals';
import NoPage from "./components/pages/NoPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AppContainer>
            <Routes>
                <Route path="/" element={<NoPage />}>
                    <Route path='home' element = {<Home />} />
                    <Route path="category" element={<CategoryIndex />} />
                    <Route path="detail" element={<Detail />} />
                    <Route path="/" element={<NoPage />} />
                </Route>
            </Routes>
        </AppContainer>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
