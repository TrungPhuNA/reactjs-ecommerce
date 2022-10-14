import React from "react";
import {isWideScreen } from "../../../helpers/screen";
import ProductViewed from "../../common/product/ProductViewed";
import Explore from "../../pages/productdetail/include/Explore";
import Category from "../../pages/productdetail/include/Category";
import Product from "../../pages/productdetail/include/Product";
import SimilarProduct from "../../pages/productdetail/include/SimilarProduct";
import ProductDescribe from "./include/ProductDescribe";
import Comment from "./include/Comment";

function Detail() {
    return (
        <main className={isWideScreen()?'desktop':'mobile'}>
            {isWideScreen() && 
                <div className="container">
                    <Category/>
                    <Product/>
                    <SimilarProduct/>
                    <ProductDescribe/>
                    <Comment/>
                    <Explore status={true}/>
                    <ProductViewed/>
                </div>
            }
        </main>
    )
}

export default Detail;