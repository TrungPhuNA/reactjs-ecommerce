import React, {  useEffect } from "react";
// import {isWideScreen } from "../../../helpers/screen";
import Category from './include/Category';
import Container from './include/Container';
import ProductViewed from '../../common/product/ProductViewed';
import { LazyLoadComponent } from "react-lazy-load-image-component";

function CategoryIndex() {
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
                        <Container/>
                        <ProductViewed/>
                    </LazyLoadComponent>
                </div>
        </>
        //     }
        // </main>
    )
}

export default CategoryIndex;