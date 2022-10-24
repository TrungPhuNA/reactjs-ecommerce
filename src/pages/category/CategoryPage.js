import React, {  useEffect } from "react";
import Category from './include/desktop/Category';
import Container from './include/desktop/Container';
import ProductViewed from '../../components/common/product/ProductViewed';
//import MobileHeader from "../../components/layout/MobileHeader";
import {isWideScreen } from "../../helpers/screen";
import MobileCategoryHeader from "./include/mobile/MobileCategoryHeader";

function CategoryPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

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
                    <>
                        <MobileCategoryHeader/>
                        <Container/>
                    </>
                </>    
                }
        </main>

        
    )
}

export default CategoryPage;