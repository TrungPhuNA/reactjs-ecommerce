import React from "react";
import HomeBanner from "./HomeBanner";
import FamousCategory from "../Category/FamousCategory";
import HomeSuggest from "./HomeSuggest";
import HomeBrand from "./HomeBrand";
import HomeDeal from "./HomeDeal";
import HomeAdv from "./HomeAdv";
import HomeCategory from "./HomeCategory";

function Home() {
    return (
      <main>
        <HomeCategory/>
        <HomeAdv/>
        <HomeDeal/>
        <div className="cm-width">
            <div className="home-top-brand">
                <a href="/home">
                    <img src="https://salt.tikicdn.com/ts/banner/48/0a/e4/2987b7d8ab8be674e5a414cb4d800a70.jpg"/>
                </a>
                <a href="/home" className="center-brand">
                    <img src="https://salt.tikicdn.com/ts/banner/68/40/72/3b2b45ea96788a6784baef02e44e1cb3.png"/>
                </a>
                <a href="/home">
                    <img src="https://salt.tikicdn.com/ts/banner/48/0a/e4/2987b7d8ab8be674e5a414cb4d800a70.jpg"/>
                </a>
            </div>
        </div>
        <FamousCategory/>
        <HomeBanner number={4}/>
        <HomeBrand/>
        <FamousCategory/>
        <HomeBanner/>
        <HomeSuggest/>
      </main>
    )
}
export default Home;