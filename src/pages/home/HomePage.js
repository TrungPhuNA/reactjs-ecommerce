import React, { useState, useEffect } from "react";
import HomeBanner from "./include/HomeBanner";
import FamousCategory from "./include/FamousCategory";
import HomeSuggest from "./include/HomeSuggest";
import HomeBrand from "./include/HomeBrand";
import HomeDeal from "./include/HomeDeal";
import HomeCategory from "./include/HomeCategory";
import { isWideScreen } from "../../helpers/screen";
import MenuMobile from "../../components/layout/MenuMobile";
import MobileHeader from "../../components/layout/MobileHeader";
import productApi from "../../api/ProductService";
import { Link } from "react-router-dom";

function HomePage() {

    const [show, setShow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={isWideScreen() ? "desktop" : "mobile"}>
      {isWideScreen() && (
        <>
          <HomeCategory />
          <HomeDeal />
          <HomeBanner />
          <FamousCategory check={true} />
          <HomeSuggest />
          <HomeBrand />
        </>
      )}

      {!isWideScreen() && 
        <>
            <MobileHeader/>
            {/* <HomeAdv /> */}
            <HomeDeal />
            <HomeBanner number={4} />
            <FamousCategory check={false} />
            <HomeSuggest status={false} />
            <MenuMobile/>
        </>
      }
    </main>
  );
}
export default HomePage;
