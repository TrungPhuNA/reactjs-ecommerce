import React, { useState, useEffect } from "react";
import HomeBanner from "./include/HomeBanner";
import FamousCategory from "./include/FamousCategory";
import HomeSuggest from "./include/HomeSuggest";
import HomeBrand from "./include/HomeBrand";
import HomeDeal from "./include/HomeDeal";
import HomeAdv from "./include/HomeAdv";
import HomeCategory from "./include/HomeCategory";
import Images from "../../components/Image/Images";
import {isWideScreen } from "../../helpers/screen";
import MenuMobile from "../../components/layout/MenuMobile";
import MobileHeader from "../../components/layout/MobileHeader";
import HomeSearchMobile from "../../components/common/HomeSearchMobile";
import LoginMobile from "../../components/login/LoginMobile";
import {Link } from "react-router-dom";

function HomePage() {
    const [menu,setMenu]=useState(1);
    const [search,setSearch]=useState(false);
    const [login,setLogin]=useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
      <main className={isWideScreen()?'desktop':'mobile'}>
        {isWideScreen() && 
            <>  
                <HomeCategory/>
                <HomeAdv/>
                <HomeDeal/>
                <div className="cm-width">
                    <div className="home-top-brand">
                        <Link to="/">
                            <Images alt="brand 1" src="https://salt.tikicdn.com/ts/banner/48/0a/e4/2987b7d8ab8be674e5a414cb4d800a70.jpg"/>
                        </Link>
                        <Link to="/" className="center-brand">
                            <Images alt="brand 2" src="https://salt.tikicdn.com/ts/banner/68/40/72/3b2b45ea96788a6784baef02e44e1cb3.png"/>
                        </Link>
                        <Link to="/">
                            <Images alt="brand 3" src="https://salt.tikicdn.com/ts/banner/48/0a/e4/2987b7d8ab8be674e5a414cb4d800a70.jpg"/>
                        </Link>
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
        { search && <HomeSearchMobile search={search} setSearch={setSearch}/>

        }
        {(!search && !login) && 
            <>
                <MobileHeader search={search} setSearch={setSearch}/>
                <HomeAdv/>
                <HomeDeal/>
                <div className="home-top-brand">
                    <div></div>
                    <Link to="/">
                        <Images alt="brand 1" src="https://salt.tikicdn.com/ts/banner/6a/c7/b3/0782f028a81e7175dd2776fb99f2fc7f.png"/>
                    </Link>
                    <Link to="/" className="center-brand">
                        <Images alt="brand 2" src="https://salt.tikicdn.com/ts/banner/6a/c7/b3/0782f028a81e7175dd2776fb99f2fc7f.png"/>
                    </Link>
                    <Link to="/">
                        <Images alt="brand 3" src="https://salt.tikicdn.com/ts/banner/6a/c7/b3/0782f028a81e7175dd2776fb99f2fc7f.png"/>
                    </Link>
                </div>
                <FamousCategory check={true}/>
                <HomeBanner number={4}/>
                <HomeBrand/>
                <FamousCategory check={false}/>
                <HomeSuggest status={false}/>
                <div className="home__background">
                    <Images src="https://salt.tikicdn.com/ts/banner/df/e4/7e/45fd347a5b3479a0a16b8a8f1b164819.png" alt="bg" />
                </div>
            </>
        }
        {login && <LoginMobile login={login} setLogin={setLogin}/>}
            
          {!login && <MenuMobile menu={menu} setMenu={setMenu} login={login} setLogin={setLogin}/> }  

        </>
            
        }
      </main>
    )
}
export default HomePage;
