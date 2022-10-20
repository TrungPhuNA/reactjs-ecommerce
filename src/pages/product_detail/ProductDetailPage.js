import React, { useState,useEffect } from "react";
// import {isWideScreen } from "../../../helpers/screen";
import ProductViewed from "../../components/common/product/ProductViewed";
import Explore from "../../pages/product_detail/include/Explore";
import Category from "../../pages/product_detail/include/Category";
import Product from "../../pages/product_detail/include/Product";
import SimilarProduct from "../../pages/product_detail/include/SimilarProduct";
import ProductDescribe from "./include/ProductDescribe";
import Comment from "./include/Comment";
import MenuMobile from "../../components/layout/MenuMobile";
import MobileHeader from "../../components/layout/MobileHeader";
import HomeSearchMobile from "../../components/common/HomeSearchMobile";
import LoginMobile from "../../components/login/LoginMobile";
import {isWideScreen } from "../../helpers/screen";

function ProductDetailPage() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      const [menu,setMenu]=useState(1);
      const [search,setSearch]=useState(false);
      const [login,setLogin]=useState(false);

    return (
        <main className={isWideScreen()?'desktop':'mobile'}>
            {isWideScreen() && 
            <>
                <div className="container">
                    <Category/>
                    <Product/>
                    <SimilarProduct/>
                    <ProductDescribe/>
                    <Comment/>
                    <Explore status={true}/>
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
                        <Product/>
                        <SimilarProduct/>
                        <ProductDescribe/>
                        <Comment/>
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

export default ProductDetailPage;