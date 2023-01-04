import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { isWideScreen } from "../../../helpers/screen";
import React, { useState,useEffect } from 'react';
import { addToCart } from '../../../store/cartSlice';
import {useDispatch, useSelector} from 'react-redux';
import Skeleton from "react-loading-skeleton";
import Login from '../../../components/login/Login'
import Popup from "reactjs-popup";

function Product({ products, pro_price, loading }) {

    let { id } = useParams();
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    // const dataToken = useSelector((state) => state.authReduce.token);

    const addToCartRedux = async () => {
        products.quantity = count;
        dispatch(addToCart(products));
        setCount(1);
        console.log(products);
    }

    useEffect(() => {
        setCount(1);
    }, [id])

    return (
        <>
        { loading === true ? (
            <div className="product-detail">
                <Skeleton height={400} width={500} style={{ margin: "10px"}}/>
                <div>
                   <Skeleton height={30} width={700} style={{ marginTop: "10px"}}/>
                   <Skeleton height={30} width={400} style={{ marginTop: "10px"}}/>
                   <Skeleton height={30} width={300} style={{ marginTop: "10px"}}/>
                </div>
            </div>
        ) : (
            <div className="product-detail">
                <div className="product-img">
                    {isWideScreen() &&
                        <>
                            <div className="group-img">
                                    {<img alt="/" src={products?.pro_avatar} /> || <Skeleton height={100} />}
                            </div>
                            <div className="share-product">
                                <div className="share-text">Chia sẻ:</div>
                                <img alt="/" src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-facebook.svg" />
                                <img alt="/" src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-messenger.svg" />
                                <img alt="/" src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-pinterest.svg" />
                                <img alt="/" src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-twitter.svg" />
                                <img alt="/" src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-copy.svg" />
                            </div>
                        </>
                    }
                    {!isWideScreen() &&
                        <>
                            <div className="review-img1">
                                <Swiper
                                    spaceBetween={5}
                                    slidesPerView={1}
                                    speed={500}
                                    navigation={true}
                                    pagination={{ clickable: true }}
                                    className="review-swiper">
                                    <div className="swiper-button-prev" />
                                    <SwiperSlide>
                                        <img alt="/" src="https://salt.tikicdn.com/cache/750x750/ts/product/67/cc/b0/df989a25d152811771de83e135022d4c.png.webp" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img alt="/" src="https://salt.tikicdn.com/cache/750x750/ts/product/2a/3b/a1/694060a125c0d42ba5d2fafc511b6ec3.jpg.webp" />
                                    </SwiperSlide>
                                    <div className="swiper-button-next" />
                                </Swiper>
                            </div>
                        </>
                    }
                </div>

                <div className="seperate" />

                <div className="product-content">
                    <div className="content-header">
                        {isWideScreen() &&
                            <>
                                <div className="product-brand">
                                    <span>
                                        <h6>Thương hiệu : </h6>
                                        <span style={{color: 'blue', cursor: 'pointer'}}>Hasaki</span>
                                    </span>
                                </div>
                            </>
                        }
                        {!isWideScreen() && <></>}
                        <h1 className="product-title">{products?.pro_name || <Skeleton count={1}/>}</h1>
                        <div className="below-title">
                            <div className="below-rate">
                                <div className="star-on">
                                    &#9733;&#9733;&#9733;&#9733;&#9733;
                                </div>
                                <div className="below-seperate" />
                                <Link to="" onClick={() => window.scrollTo(0,1200)} style={{textDecoration: 'underline'}}>Xem đánh giá</Link>
                                <div className="below-seperate" />
                                <div className="sold">Đã bán 0</div>
                            </div>
                        </div>
                    </div>

                    <div className="content-body">
                        <div className="content-body-left">
                            <div className="price-and-icon">
                                <div className="price-">
                                    <div className="current-price">{pro_price || <Skeleton count={1}/>} ₫</div>
                                    <div className="last-price">{products?.pro_discount_value !== 0 ? '20.000 đ' : null}</div>
                                    <div className="discount-rate">{products?.pro_discount_value !== 0 ? products?.pro_discount_value + '%' : null}</div>
                                </div>
                            </div>
                            {/*<div className="coupon-seperate"/>*/}
                            {/*<div className="coupon">*/}
                            {/*    <div className="coupon-text">8 Mã giảm giá</div>*/}
                            {/*    <div className="coupon-tags">*/}
                            {/*        <div className="coupon-tag">Giảm 45K</div>*/}
                            {/*        <div className="coupon-tag">Giảm 200K</div>*/}
                            {/*        <div className="coupon-tag">Giảm 300K</div>*/}
                            {/*        <img alt="/" src="https://salt.tikicdn.com/ts/upload/63/43/b6/472934eece91531f0855b86a00a3b1a1.png"/>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {/* <div className="addr-deli"> */}
                                {/* <div className="change-addr">*/}
                                {/*    <div>*/}
                                {/*        <span>Giao đến </span>*/}
                                {/*        <span className="Adress">Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội</span>*/}
                                {/*        <span> - </span>*/}
                                {/*        <span className="addr-change">Đổi địa chỉ</span>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="deli-inner">*/}
                                {/*    <div className="shipping-info">*/}
                                {/*        <div className="info-header">*/}
                                {/*            <img alt="/" src="https://salt.tikicdn.com/ts/upload/67/e4/c2/02b5400b39bb3371e06d33c1e9f4d854.png"/>*/}
                                {/*            <div className="divider"></div>*/}
                                {/*            <div className="info-highlight">Thứ 2, ngày 17/10</div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}

                                {/*    <div className="shipping-fee">*/}
                                {/*        <div className="fee-name">Vận chuyển: </div>*/}
                                {/*        <div className="fee-current"> 338.000₫</div>*/}
                                {/*        <div className="fee-origin">358.000đ </div>*/}
                                {/*    </div>*/}
                                {/*</div> */}

                                {/* {isWideScreen() &&
                                    <>
                                        <div className="btnchat">
                                            <span>Chat với nhà bán về cách lắp đặt</span>
                                            <img alt="/" src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/arrow-right-blue.svg" width="12" height="12" />
                                        </div>
                                    </>}
                                {!isWideScreen && <div></div>}
                            </div> */}

                            {isWideScreen() &&
                                <>
                                    <div className="addtocart">
                                        <div className="count">
                                            <p>Số Lượng</p>
                                            <div className="group-input">
                                                <button disabled={`${count < 2 ? '{true}' : ''}`} className={`${count < 2 ? 'disable' : 'enable'}`} onClick={() => setCount(count - 1)}>
                                                    <img alt="/" src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg" width="20" height="20" />
                                                </button>
                                                <input type="text" value={count} className="input" readOnly></input>
                                                <button className='enable' onClick={() => setCount(count + 1)}>
                                                    <img alt="/" src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg" width="20" height="20" />
                                                </button>
                                            </div>
                                            { localStorage.getItem('accessToken') ? (
                                                <div className="group-button">
                                                    <button className="btnadd" onClick={addToCartRedux}>Chọn Mua</button>
                                                </div>
                                            ) : (<>
                                                <Popup 
                                                    modal 
                                                    trigger={
                                                        <div className="group-button">
                                                            <button className="btnadd">Chọn Mua</button>
                                                        </div>
                                                    }
                                                >
                                                    <Login/>
                                                </Popup>
                                            </>)

                                            }
                                            
                                        </div>
                                    </div>
                                </>}
                            {!isWideScreen() && <div></div>}
                        </div>

                        {isWideScreen() &&
                            <>
                                {/*<div className="content-body-right">*/}
                                {/*    <div className="current-seller">*/}
                                {/*        <div className="seller-info">*/}
                                {/*            <Link to="detail">*/}
                                {/*                <img alt="/" src="https://vcdn.tikicdn.com/cache/w100/ts/seller/c2/d9/01/43d82628cee443204b3d245a54c591cb.jpg.webp"/>*/}
                                {/*                <div className="overview-right">*/}
                                {/*                    <span>*/}
                                {/*                        <span>Điện máy tiện lợi S52</span>*/}
                                {/*                        <img alt="/" src="https://salt.tikicdn.com/cache/w100/ts/upload/e8/6a/e3/7f998ef1eb5ab0536aac53f02a698c8a.png.webp"/>*/}
                                {/*                    </span>*/}
                                {/*                </div>*/}
                                {/*            </Link>*/}
                                {/*        </div>*/}
                                {/*        <div className="seller-detail">*/}
                                {/*            <div className="item-rate">*/}
                                {/*                <div classNam="rate-title">*/}
                                {/*                    <span>4.9 / 5</span>*/}
                                {/*                    <img alt="/" src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Star-icon.png" width="14" height="14"/>*/}
                                {/*                </div>*/}
                                {/*                <div className="subrate-title">331</div>*/}
                                {/*            </div>*/}
                                {/*            <div className="border"></div>*/}
                                {/*            <div className="item-fl">*/}
                                {/*                <div classNam="rate-title">*/}
                                {/*                        <span>788</span>*/}
                                {/*                </div>*/}
                                {/*                <div className="subrate-title">Theo dõi</div>*/}
                                {/*            </div>*/}
                                {/*            <div className="border"></div>*/}
                                {/*            <div className="item-chat">*/}
                                {/*                <div classNam="rate-title">*/}
                                {/*                    <span>100%</span>*/}
                                {/*                </div>*/}
                                {/*                <div className="subrate-title">Phản hồi Chat</div>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*        <div className="seller-action">*/}
                                {/*            <Link to="detail" className="actionview">*/}
                                {/*                <img alt="/" src="https://salt.tikicdn.com/ts/upload/49/27/ff/d735c33edfdc6cf6aeb6e183bec28869.png" width="20" height="20"/>*/}
                                {/*                <span>Xem Shop</span>*/}
                                {/*            </Link>*/}
                                {/*            <div className="actionseperate"/>*/}
                                {/*            <div className="actionfl">*/}
                                {/*                <img alt="/" src="https://salt.tikicdn.com/ts/upload/5b/bf/3c/eeda00767e26b5873030e44f951441c4.png" width="20" height="20"/>*/}
                                {/*                <span>Theo Dõi</span>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <div className="warranty">*/}
                                {/*        <div className="warranty-item">*/}
                                {/*            <span className="textLeft">Thời gian bảo hành</span>*/}
                                {/*            <span className="textRight">24 Tháng</span>*/}
                                {/*        </div>*/}
                                {/*        <div className="warranty-item">*/}
                                {/*            <span className="textLeft">Hình thức bảo hành</span>*/}
                                {/*            <span className="textRight">Hóa đơn</span>*/}
                                {/*        </div>*/}
                                {/*        <div className="warranty-item">*/}
                                {/*            <span className="textLeft">Nơi bảo hành</span>*/}
                                {/*            <span className="textRight">Bảo hành chính hãng</span>*/}
                                {/*        </div>*/}
                                {/*        <div className="warranty-item">*/}
                                {/*            <span className="textLeft">Hướng dẫn bảo hành</span>*/}
                                {/*            <span className="textLink">Xem chi tiết</span>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <div className="benefits">*/}
                                {/*        <div className="benefit-item">*/}
                                {/*            <img alt="/" src="https://salt.tikicdn.com/ts/upload/2c/48/44/720434869e103b03aaaf1a104d91ad25.png" width="32" height="32"/>*/}
                                {/*            <span>*/}
                                {/*                Hoàn tiền*/}
                                {/*                <br/>*/}
                                {/*                <b>111%</b>*/}
                                {/*                <br/>*/}
                                {/*                nếu hàng giả*/}
                                {/*            </span>*/}
                                {/*        </div>*/}
                                {/*        <div className="benefit-item">*/}
                                {/*            <img alt="/" src="https://salt.tikicdn.com/ts/upload/4b/a1/23/1606089d5423e5cba05e3820ad39708e.png" width="32" height="32"/>*/}
                                {/*            <span>*/}
                                {/*                Mở hộp*/}
                                {/*                <br/>*/}
                                {/*                <b>kiểm tra</b>*/}
                                {/*                <br/>*/}
                                {/*                nhận hàng*/}
                                {/*            </span>*/}
                                {/*        </div>*/}
                                {/*        <div className="benefit-item">*/}
                                {/*            <img alt="/" src="https://salt.tikicdn.com/ts/upload/63/75/6a/144ada409519d72e2978ad2c61bc02a7.png" width="32" height="32"/>*/}
                                {/*            <span>*/}
                                {/*                Đổi trả trong*/}
                                {/*                <br/>*/}
                                {/*                <b> 7 ngày</b>*/}
                                {/*                <br/>*/}
                                {/*                nếu sp lỗi*/}
                                {/*            </span>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </>
                        }
                        {!isWideScreen() &&
                            <></>
                        }
                    </div>
                </div>
            </div>
        )
        }
    </>)
}

export default Product;
