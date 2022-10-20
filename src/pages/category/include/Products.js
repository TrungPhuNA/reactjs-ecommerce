import React, {useState, } from "react";
import ProductSummary from "../../../components/common/product/ProductSumary";

function Products({status}) {
    const [disCount,setDistCount]=useState(true);

    const arr_10 = Array.from(Array(48).keys());

    return (
        <div className="product-container">
                <div className="suggestion__product">
                    <div className="content">
                        { arr_10.map(item => {
                                return (
                                    <ProductSummary
                                        disCount={disCount}
                                        setDistCount={setDistCount}
                                        deal={false}
                                        price={undefined} sold={undefined}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
        </div>

    )
}
export default Products;