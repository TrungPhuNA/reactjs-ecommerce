import { Outlet } from "react-router-dom";
import React, { useEffect } from "react";
import "./Nopage.scss";

const NoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="page_error">
        <img src={"/iconHeader/404.jpg"} alt="404_Error" />

        <a className="" href="/">
          Go home!!!
        </a>
      </div>

      <Outlet />
    </>
  );
};

export default NoPage;
