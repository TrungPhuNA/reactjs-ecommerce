import React, { useState } from "react";
import HomeBanner from "./HomeBanner";
import FamousCategory from "../Category/FamousCategory";
import HomeSuggest from "./HomeSuggest";
import HomeBrand from "./HomeBrand";
import HomeDeal from "./HomeDeal";
import HomeAdv from "./HomeAdv";
import HomeCategory from "./HomeCategory";
import Images from "../Image/Images";
import {isWideScreen } from "../../helpers/screen";
import MenuMobile from "../layout/MenuMobile";
import MobileHeader from "../layout/MobileHeader";

function Home() {
    const [menu,setMenu]=useState(1);
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
                <FamousCategory check={true}/>
                <HomeBanner number={4}/>
                <HomeBrand/>
                <FamousCategory check={false}/>
                <HomeBanner/>
                <HomeSuggest status={true}/>
            </>
        }
        
        {!isWideScreen() && 
        <>
            <MobileHeader/>
            <HomeAdv/>
            <HomeDeal/>
            <div className="home-top-brand">
                <div></div>
                <a href="/home">
                    <Images alt="brand 1" src="https://salt.tikicdn.com/ts/banner/6a/c7/b3/0782f028a81e7175dd2776fb99f2fc7f.png"/>
                </a>
                <a href="/home" className="center-brand">
                    <Images alt="brand 2" src="https://salt.tikicdn.com/ts/banner/6a/c7/b3/0782f028a81e7175dd2776fb99f2fc7f.png"/>
                </a>
                <a href="/home">
                    <Images alt="brand 3" src="https://salt.tikicdn.com/ts/banner/6a/c7/b3/0782f028a81e7175dd2776fb99f2fc7f.png"/>
                </a>
            </div>
            <FamousCategory check={true}/>
            <HomeBanner number={4}/>
            <HomeBrand/>
            <FamousCategory check={false}/>
            <HomeSuggest status={false}/>
            <div className="home__background">
                <Images src="https://salt.tikicdn.com/ts/banner/df/e4/7e/45fd347a5b3479a0a16b8a8f1b164819.png" alt="bg" />
            </div>
            <MenuMobile menu={menu}/>
            
        </>
            
        }
      </main>
    )
}
export default Home;