import React from "react";
import HomeBanner from "./HomeBanner";
import FamousCategory from "../Category/FamousCategory";
import HomeSuggest from "./HomeSuggest";
import HomeBrand from "./HomeBrand";
import HomeDeal from "./HomeDeal";
import HomeAdv from "./HomeAdv";
import HomeCategory from "./HomeCategory";
import Images from "../Image/Images";
import { isSmallScreen, isWideScreen } from "../../helpers/screen";
import MenuMobile from "../layout/MenuMobile";
import MobileHeader from "../layout/MobileHeader";

function Home() {
    return (
      <main className={isWideScreen()?'desktop':'mobile'}>
        {isWideScreen() && 
            <>
                <HomeCategory/>
                <HomeAdv/>
                <HomeDeal/>
                <div className="cm-width">
                    <div className="home-top-brand">
                        <a href="/home">
                            <Images alt="brand 1" src="https://salt.tikicdn.com/ts/banner/48/0a/e4/2987b7d8ab8be674e5a414cb4d800a70.jpg"/>
                        </a>
                        <a href="/home" className="center-brand">
                            <Images alt="brand 2" src="https://salt.tikicdn.com/ts/banner/68/40/72/3b2b45ea96788a6784baef02e44e1cb3.png"/>
                        </a>
                        <a href="/home">
                            <Images alt="brand 3" src="https://salt.tikicdn.com/ts/banner/48/0a/e4/2987b7d8ab8be674e5a414cb4d800a70.jpg"/>
                        </a>
                    </div>
                </div>
                <FamousCategory/>
                <HomeBanner number={4}/>
                <HomeBrand/>
                <FamousCategory/>
                <HomeBanner/>
                <HomeSuggest/>
            </>
        }
        
        {!isWideScreen() && 
        <>
            <MobileHeader/>
            <HomeAdv/>
            <div className="home__background">
                <Images src="https://salt.tikicdn.com/ts/banner/0f/65/5a/9bf46b53f2140b31712bc8bb59fdc66e.png" alt="bg" />
            </div>
            <MenuMobile/>
        </>
            
        }
      </main>
    )
}
export default Home;