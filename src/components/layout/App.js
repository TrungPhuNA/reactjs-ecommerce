import React, { useState, useEffect } from "react";
import { routes } from "../../router/router";
import Header from "./Header";
import Footers from "./Footers";
import { useRoutes } from "react-router-dom";
import { isWideScreen } from "../../helpers/screen";
import { store } from "../../store/store";
import { Provider } from "react-redux";

function App() {
  const route_item = useRoutes(routes());
  const [showLogin, setShowLogin] = useState(false);

  const [off_fixed, setOffFixed] = useState("off-fixed");

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  const onScroll = (e) => {
    let c = e.target.documentElement.scrollTop;
    if (c < 350) {
      setOffFixed("off-fixed");
    } else {
      setOffFixed("");
    }
  };

  const onClickActive = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isDark, setIsDark] = useState(false);

  return (
    <div className="layout">
      <Provider store={store}>
        {isWideScreen() && (
          <Header showLogin={showLogin} setShowLogin={setShowLogin} />
        )}
        {route_item}
        {/* {isWideScreen() && <Footers />} */}
        <Footers />

        <div className={`scrollToTop ${off_fixed}`} onClick={onClickActive}>
          <i className="fa fa-chevron-up"></i>
        </div>
      </Provider>
    </div>
  );
}

export default App;
