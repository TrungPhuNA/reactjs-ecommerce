import React, { useEffect, useState } from "react";
import ProductViewed from "../../components/common/product/ProductViewed";
import Category from "../../pages/product_detail/include/Category";
import Product from "../../pages/product_detail/include/Product";
import SimilarProduct from "../product_detail/include/SimilarProduct";
import ProductDescribe from "./include/ProductDescribe";
import Comment from "./include/Comment";
import {isWideScreen } from "../../helpers/screen";
import DetailHeader from "./include/mobile/DetailHeader";
import DetailFooter from "./include/mobile/DetailFooter";
import { useParams } from "react-router";
import productApi from "../../api/ProductService";
import HomeSuggest from "../home/include/HomeSuggest";

function ProductDetailPage() {

    let { id } = useParams();
    const [category, setCategory] = useState(null);
    const [products, setProducts] = useState([]);
    const [pro_price, setPro_Price] = useState([])

    const getProductsDetail = async () => {
        const response = await productApi.findById(id);
        if(response.status === 200) {
            setProducts(response.data);
            setCategory(response.data.category);
            setPro_Price(response.data.pro_price.toLocaleString()) 
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getProductsDetail();
      },[id]);


    return (
        <main className={isWideScreen()?'desktop':'mobile'}>
            {isWideScreen() && 
            <>
                <div className="container">
                    <Category category={category} products={products}/>
                    <Product products={products} pro_price={pro_price}/>
                    <SimilarProduct/>
                    <ProductDescribe/>
                    <Comment/>
                    <HomeSuggest/>
                    {/* <ProductViewed/> */}
                    
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
                        <HomeSuggest/>
                        {/* <ProductViewed/> */}
                        <DetailFooter/>
                    </>
            }  
        </main>     
    )
}

export default ProductDetailPage;