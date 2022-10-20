import React, { useState, useEffect } from "react";
// import {isWideScreen } from "../../../helpers/screen";
import Category from '../../pages/category/include/Category';
import Container from '../../pages/category/include/Container';
import ProductViewed from '../../components/common/product/ProductViewed';
import MenuMobile from "../../components/layout/MenuMobile";
import MobileHeader from "../../components/layout/MobileHeader";
import HomeSearchMobile from "../../components/common/HomeSearchMobile";
import LoginMobile from "../../components/login/LoginMobile";
import {isWideScreen } from "../../helpers/screen";

function ProductPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const [menu,setMenu]=useState(1);
    const [search,setSearch]=useState(false);
    const [login,setLogin]=useState(false);

    // const [isLoading, setIsLoading] = useState(true);

    return (
        <main className={isWideScreen()?'desktop':'mobile'}>
             {isWideScreen() && 
        <>
                <div className="container">
                    <Category/>
                    <Container/>
                    <ProductViewed/>

                </div>
        </>
            }

            {!isWideScreen() && 
                <>
                { search && <HomeSearchMobile search={search} setSearch={setSearch}/>
        
                }
                {(!search && !login) && 
                    <>
                        <MobileHeader search={search} setSearch={setSearch}/>
                        <Category/>
                        <Container/>
                        <ProductViewed/>
                    </>
                }
                {login && <LoginMobile login={login} setLogin={setLogin}/>}
                    
                {!login && <MenuMobile menu={menu} setMenu={setMenu} login={login} setLogin={setLogin}/> }  
        
                </>
                    
                }
        </main>

        
    )
}
export default ProductPage;