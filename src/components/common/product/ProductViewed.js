import ProductSummary from "./ProductSumary";
import React, {useState, } from "react";

function ProductViewed() {
    const [disCount,setDistCount]=useState(true);

    const arr_10 = Array.from(Array(1).keys());

    return (
        <div className="viewed">
            <h2>Sản Phẩm Đã Xem</h2>
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
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductViewed;
