import React, { useEffect } from "react";
// import {isWideScreen } from "../../../helpers/screen";
import ProductViewed from "../../common/product/ProductViewed";
import Explore from "../../pages/productdetail/include/Explore";
import Category from "../../pages/productdetail/include/Category";
import Product from "../../pages/productdetail/include/Product";
import SimilarProduct from "../../pages/productdetail/include/SimilarProduct";
import ProductDescribe from "./include/ProductDescribe";
import Comment from "./include/Comment";
import { LazyLoadComponent } from "react-lazy-load-image-component";

function Detail() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        // <main className={isWideScreen()?'desktop':'mobile'}>
        //     {isWideScreen() && 
        <>
                <div className="container">
                    <LazyLoadComponent>
                        <Category/>
                        <Product/>
                        <SimilarProduct/>
                        <ProductDescribe/>
                        <Comment/>
                        <Explore status={true}/>
                        <ProductViewed/>
                    </LazyLoadComponent>
                </div>
            {/* }
        </main> */}
        </>
    )
}

export default Detail;