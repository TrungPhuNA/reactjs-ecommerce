import React from 'react'
import HomeContainer from '../containers/Home/HomeContainer'
import { Navigate } from 'react-router-dom'

export const routes = () => {
    const router_element = [
        {
            path: '/',
            element:<Navigate to="/home"/>
        },
        {
            path: '/home',
            element:<HomeContainer/>
        }
    ]
    return router_element
}