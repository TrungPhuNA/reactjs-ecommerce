import React from "react";
import Images from "../../Image/Images";
import {Link } from "react-router-dom";

function ProductSummary({disCount,setDisCount,deal,price}) {
    const src_1 = "https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png";
    const src_2 = "https://salt.tikicdn.com/cache/280x280/media/catalog/product/tmp/ef/dd/4e/bf2a14ed2c1593a704ddcffc960f7877.jpg";
    return (
        <div className="dashboard-product--item">
            <Link to="/detail" className="product-item">
                <div className={`product-item--style ${!deal? 'not-style':''}`}>
                    <div className="thumbnail">
                        <div className="thumbnail--icon-badge">
                            <Images src={src_1} alt="333"/>
                        </div>
                        <div className="thumbnail--product-img">
                            <Images src={src_2} alt="111" />
                        </div>
                    </div>
                    <div className="infor">
                    
                    {!deal && 
                        <>
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
                        </>
                    }
                    {deal && 
                    <>
                    <div className="deal">
                        <div className={`price-discount ${disCount ? 'has-discount':''}`}>
                                <div className="price-discount__price">
                                {price}đ
                                </div>
                                <div className="price-discount__discount">
                                {disCount?disCount+'%':''}
                                </div>
                            </div>
                    </div>
                    <div className="deal-quty">
                        <div className="deal-progress">
                            <span>Sắp bán hết</span>
                            <Images src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg" alt="222"/>
                        </div>
                    </div>
                        
                    </>
                    }
                    </div>
                </div>
            </Link>
        </div>

    )
}
export default ProductSummary