import React from "react";
import {isWideScreen } from "../../../helpers/screen";
import Category from './include/Category';
import Container from './include/Container';
import ProductViewed from '../../common/product/ProductViewed';

function CategoryIndex() {

    return (
        <main className={isWideScreen()?'desktop':'mobile'}>
            {isWideScreen() && 
                <div className="container">
                    <Category/>
                    <Container/>
                    <ProductViewed/>
                </div>
            }
        </main>
    )
}

export default CategoryIndex;