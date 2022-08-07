import React from "react"
import { routes } from '../../router/router'
import Header from "./Header";
import Footers from "./Footers";
import { useRoutes } from "react-router-dom";
import { isWideScreen } from "../../helpers/screen";


function App() {
  const route_item = useRoutes(routes());
  return (
    <div className="layout">
        {isWideScreen() && <Header/>}
            {route_item}
        {isWideScreen() && <Footers/>}
    </div>
  )
}

export default App