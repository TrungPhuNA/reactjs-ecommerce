import React, { useState } from "react"
import { routes } from '../../router/router'
import Header from "./Header";
import Footers from "./Footers";
import { useRoutes } from "react-router-dom";
import { isWideScreen } from "../../helpers/screen";
import ModalLogin from "../login/ModalLogin";


function App() {
  const route_item = useRoutes(routes());
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="layout">
        {isWideScreen() && <Header showLogin={showLogin} setShowLogin={setShowLogin}/>}
            {route_item}
        {isWideScreen() && <Footers/>}
    </div>
  )
}

export default App