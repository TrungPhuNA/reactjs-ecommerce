import React from "react"
import { routes } from '../../router/router'
import Header from "./Header";
import Footers from "./Footers";
import { useRoutes } from "react-router-dom";


function App() {
  const route_item = useRoutes(routes());
  return (
    <div className="layout">
        <Header/>
            {route_item}
          <Footers/>
    </div>
  )
}

export default App