import React, { useEffect } from "react";
import ProductViewed from "../../components/common/product/ProductViewed";
import Explore from "../../pages/product_detail/include/Explore";
import Category from "../../pages/product_detail/include/Category";
import Product from "../../pages/product_detail/include/Product";
import SimilarProduct from "../product_detail/include/SimilarProduct";
import ProductDescribe from "./include/ProductDescribe";
import Comment from "./include/Comment";
import {isWideScreen } from "../../helpers/screen";
import DetailHeader from "./include/mobile/DetailHeader";

function ProductDetailPage() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

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
                        <DetailHeader/>
                        <Product/>
                        <SimilarProduct/>
                        <ProductDescribe/>
                        <Comment/>
                        <ProductViewed/>
                    </>
            }  
        </main>     
    )
}

export default ProductDetailPage;