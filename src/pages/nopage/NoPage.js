import { Outlet } from "react-router-dom";
import React, { useEffect } from 'react';

const NoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      <h1>404 Error</h1>
      <h1>404 Error</h1>
      <h1>404 Error</h1>
      <h1>404 Error</h1>
      <h1>404 Error</h1>
      <h1>404 Error</h1>

      <Outlet />
    </>
  )
};

export default NoPage;