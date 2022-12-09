import React, { useState, useEffect } from "react"
import { routes } from '../../router/router'
import Header from "./Header";
import Footers from "./Footers";
import { useRoutes } from "react-router-dom";
import { isWideScreen } from "../../helpers/screen";
import { store } from "../../store/store";
import { Provider } from 'react-redux';


function App() {
    const route_item = useRoutes(routes());
    const [showLogin, setShowLogin] = useState(false);

    return (
        <div className="layout">
            <Provider store={store}>
                {isWideScreen() && (
                    <Header showLogin={showLogin} setShowLogin={setShowLogin} />
                )}
                {route_item}
                {isWideScreen() && <Footers />}
            </Provider>
        </div>
    );
}

export default App