import React, { useState } from "react";

function ProductSummary({disCount,setDisCount}) {
    const src_1 = "https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png";
    const src_2 = "https://salt.tikicdn.com/cache/280x280/media/catalog/product/tmp/ef/dd/4e/bf2a14ed2c1593a704ddcffc960f7877.jpg";
    return (
        <div className="dashboard-product--item">
            <a  className="product-item">
                <div className="product-item--style">
                    <div className="thumbnail">
                        <img className="thumbnail--icon-badge" src={src_1} width="136" height="24" alt=""/>
                        <div className="thumbnail--product-img">
                            <img src={src_2} alt="" />
                        </div>
                    </div>
                    <div className="infor">
                    <div className="badge-service"></div>
                    <div className="name">
                        <p>Ad</p>
                        <h3 className="fs-10">Combo 2 TúI Nước Giặt Omo Matic Cho Máy Giặt Cửa Trước Bền Đẹp Bền Màu Sau 100 Lần Giặt 3.6Kg</h3>
                    </div>
                    <div className={`price-discount ${disCount ? 'has-discount':''}`}>
                        <div className="price-discount__price">
                        360000 đ
                        </div>
                        <div className="price-discount__discount">
                        25%
                        </div>
                    </div>
                    <div className="badge-under-price">
                    </div>
                    <div className="badge-benefit">
                    </div>
                    <div className="badge-add-info">
                    </div>
                    </div>
                </div>
            </a>
        </div>

    )
}
export default ProductSummary