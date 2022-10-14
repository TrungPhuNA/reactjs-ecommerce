import React from 'react'
import HomeContainer from '../containers/Home/HomeContainer'
//import { Navigate } from 'react-router-dom'
import CategoryContainer from '../containers/Category/CategoryContainer'
import ProductDetailContainer from '../containers/ProductDetail/ProductDetailContainer'

export const routes = () => {
    const router_element = [
        {
            path: '/',
            element:<HomeContainer/>
        },
        {
            path: '/home',
            element:<HomeContainer/>
        },
        {
            path: '/category',
            element:<CategoryContainer  />
        },
        {
            path: '/detail',
            element:<ProductDetailContainer   />
        }
    ]
    return router_element
}