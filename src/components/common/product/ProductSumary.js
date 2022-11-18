import React, { useEffect, useState } from "react";
import Images from "../../Image/Images";
import {Link } from "react-router-dom";
import productApi from "../../../api/ProductService";


function ProductSummary({deal, disCount}) {

    const [products, setProducts] = useState([]);
    const [loadingProduct, setLoadingProduct] = useState(true);

    const getProducts = async (params) => {
        const response = await productApi.getListsProducts(params);
        setProducts(response.data);
        setLoadingProduct(false);
    };

    useEffect(() => {
        getProducts();
    },[]);

    return (
        <div className="dashboard-product--item" >
            { products.map(item => { 
                return (
                    <>
                    <Link to="/detail" className="product-item">
                        <div className={`product-item--style ${!deal? 'not-style':''}`}>

                            <div className="thumbnail">
                                <div className="thumbnail--product-img">
                                    <Images src={item.pro_avatar} alt="333"/>
                                </div>
                            </div>
                            <div className="infor">
                            {!deal && 
                                <>
                                    <div className="name">
                                        <h3 className="fs-10">{item.pro_name}</h3>
                                    </div>
                                    <div className={`price-discount ${disCount ? 'has-discount':''}`}>
                                        <div className="price-discount__price">
                                            {item.pro_price} ₫
                                        </div>
                                    </div>
                                </>
                            }
                            {deal && 
                                <>
                                    <div className="deal">
                                        <div className={`price-discount ${disCount ? 'has-discount':''}`}>
                                                <div className="price-discount__price">
                                                    {item.pro_price} ₫
                                                </div>
                                                <div className="price-discount__discount">
                                                    {item.pro_discount_value?item.pro_discount_value+'%':''}
                                                </div>
                                            </div>
                                    </div>                                    
                                </>
                            }
                            </div>
                        </div>
                    </Link>
                </>)
            })}
        </div>

    )
}
export default ProductSummary