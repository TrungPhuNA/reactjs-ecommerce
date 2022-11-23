import React from 'react';
import { Link } from 'react-router-dom';

function ShopCart() {
    return (
        <>
            <div className="sc-container">
                <div className="main-title">
                    <h4>Giỏ hàng</h4>
                    <div className="sub-title">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 3C3.67157 3 3 3.67157 3 4.5C3 5.32843 3.67157 6 4.5 6C5.32843 6 6 5.32843 6 4.5C6 3.67157 5.32843 3 4.5 3ZM2 4.5C2 3.11929 3.11929 2 4.5 2C5.88071 2 7 3.11929 7 4.5C7 5.88071 5.88071 7 4.5 7C3.11929 7 2 5.88071 2 4.5ZM9.64645 2.64645C9.84171 2.45118 10.1583 2.45118 10.3536 2.64645C10.5488 2.84171 10.5488 3.15829 10.3536 3.35355L9.70711 4H12.5C12.7761 4 13 4.22386 13 4.5V7.5C13 7.77614 12.7761 8 12.5 8C12.2239 8 12 7.77614 12 7.5V5H9.70711L10.3536 5.64645C10.5488 5.84171 10.5488 6.15829 10.3536 6.35355C10.1583 6.54882 9.84171 6.54882 9.64645 6.35355L8.14645 4.85355C7.95118 4.65829 7.95118 4.34171 8.14645 4.14645L9.64645 2.64645ZM3.5 8C3.77614 8 4 8.22386 4 8.5V11H6.29289L5.64645 10.3536C5.45118 10.1583 5.45118 9.84171 5.64645 9.64645C5.84171 9.45118 6.15829 9.45118 6.35355 9.64645L7.85355 11.1464C8.04882 11.3417 8.04882 11.6583 7.85355 11.8536L6.35355 13.3536C6.15829 13.5488 5.84171 13.5488 5.64645 13.3536C5.45118 13.1583 5.45118 12.8417 5.64645 12.6464L6.29289 12H3.5C3.22386 12 3 11.7761 3 11.5V8.5C3 8.22386 3.22386 8 3.5 8ZM11.5 10C10.6716 10 10 10.6716 10 11.5C10 12.3284 10.6716 13 11.5 13C12.3284 13 13 12.3284 13 11.5C13 10.6716 12.3284 10 11.5 10ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5Z" fill="#6F55ED"></path></svg>
                        <span>Đổi ASA/Xu</span>
                    </div>
                </div>
                <div className="content">
                    <div className="left-content">
                        <div className="left-content-header">
                            <label>
                                <input type='checkbox' />
                                <span>Tất cả</span>
                            </label>
                            <span>Đơn giá</span>
                            <span>Số lượng</span>
                            <span>Thành tiền</span>
                            <span><img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg" alt="deleted" /></span>
                        </div>
                        <div className="left-content-container">
                            <div className="seller-group">
                                <div className="seller-subtitle">
                                    <label>
                                        <input type='checkbox' />
                                    </label>
                                    <img src="https://salt.tikicdn.com/ts/upload/30/24/79/8317b36e87e7c0920e33de0ab5c21b62.png" alt="seller-link" class="sellers__icon-home"></img>
                                    <Link to="/cart" className="seller-name">
                                        Tiki Trading
                                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/Path.svg" alt="seller-link" class="sellers__icon-arrow"></img>
                                    </Link>
                                </div>
                            </div>
                            <div className="list-cart">
                                <div className="product-item">
                                    <div className="row">
                                        <div className="col1">
                                            <div className="product-detail">
                                                <div className="product-checkbox">
                                                    <input type='checkbox' />
                                                </div>
                                                <Link to='/cart'>
                                                    <img alt='sda' src="https://salt.tikicdn.com/cache/w78/ts/product/0c/ff/1f/091c739d2cc4c1b2a3a9c5025930adcc.jpg" width='80' height='80' />
                                                </Link>
                                                <div className="product-content">
                                                    <Link to='/cart' className="product-name">
                                                        Không Ai Có Thể Làm Bạn Tổn Thương Trừ Khi Bạn Cho Phép (Tặng Kèm 1 Bộ Bookmark Gồm 4 Cái)
                                                    </Link>
                                                    <p>
                                                        <span className="tiki-icon">
                                                            <svg width="34" height="10" viewBox="0 0 34 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.907853 0.25043C0.739301 0.277892 0.589557 0.35121 0.470383 0.470383C0.315525 0.651052 0.238095 0.83172 0.238095 1.06401V8.93599C0.238095 9.16828 0.315525 9.37476 0.470383 9.52962C0.625242 9.68447 0.83172 9.7619 1.08982 9.7619C1.10434 9.7619 1.11865 9.7616 1.13278 9.761C1.11867 9.7616 1.10436 9.7619 1.08986 9.7619C0.831764 9.7619 0.625286 9.68447 0.470427 9.52961C0.315568 9.37475 0.238139 9.16827 0.238139 8.93598V1.064C0.238139 0.831713 0.315568 0.651045 0.470427 0.470376C0.58959 0.351213 0.739319 0.277897 0.907853 0.25043ZM5.58914 1.80886C5.56097 1.81128 5.53235 1.81248 5.50333 1.81248H1.94158V1.81249H5.50329C5.53233 1.81249 5.56096 1.81128 5.58914 1.80886ZM4.9697 5.78357C4.94154 5.78598 4.91292 5.78719 4.8839 5.78719H1.94158V5.7872H4.88386C4.91289 5.7872 4.94152 5.78599 4.9697 5.78357ZM2.17964 8.93599V6.02529H4.88386C5.17104 6.02529 5.44081 5.9283 5.64584 5.72327C5.84234 5.52676 5.94786 5.28666 5.94786 5.0129C5.94786 4.73491 5.85595 4.45573 5.63833 4.2693C5.43425 4.06936 5.16754 3.97471 4.88386 3.97471H2.17964V2.05059H5.50329C5.79047 2.05059 6.06025 1.95359 6.26528 1.74856C6.46178 1.55206 6.5673 1.31195 6.5673 1.0382C6.5673 0.760201 6.47538 0.481021 6.25776 0.294591C6.05368 0.0946525 5.78698 0 5.50329 0H1.06401C0.776828 0 0.507051 0.0969977 0.302024 0.302024L0.295559 0.30849L0.289608 0.315433C0.103734 0.532285 0 0.766333 0 1.06401V8.93599C0 9.22317 0.0969978 9.49295 0.302024 9.69798C0.509439 9.90539 0.780707 10 1.08982 10C1.38749 10 1.62154 9.89627 1.83839 9.71039C2.08052 9.50285 2.17964 9.22547 2.17964 8.93599Z" fill="#FFB700"></path></svg>
                                                        </span>
                                                        <span className="tiki-title">Giao Tiết Kiệm</span>
                                                    </p>
                                                    <div className="asa">
                                                        <div className="badge">
                                                            <svg class="badge-content__icon" width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="non"></circle><g clip-path="url(#clip0_17203_537963)"><path d="M11.4017 8.33958H12.9358L10 1L7.06418 8.33958H8.76754C8.97199 8.33958 9.15584 8.2151 9.23177 8.02527L10 6.1047L10.7054 7.86812C10.8193 8.15286 11.0951 8.33958 11.4017 8.33958Z" fill="url(#paint0_linear_17203_537963)"></path><path d="M12.6745 12.7909L10 11.2125L7.3255 12.7909L8.20759 10.5857C8.29842 10.3586 8.21168 10.0992 8.00256 9.97243L6.72163 9.19591L3.5 17.25L10 13.4139L16.5 17.25L13.2784 9.19591L11.9974 9.97243C11.7883 10.0992 11.7016 10.3586 11.7924 10.5857L12.6745 12.7909Z" fill="url(#paint1_linear_17203_537963)"></path></g><defs><linearGradient id="paint0_linear_17203_537963" x1="10" y1="6.5" x2="10" y2="17" gradientUnits="userSpaceOnUse"><stop stop-color="#FF424E"></stop><stop offset="1" stop-color="#5E5CE6"></stop></linearGradient><linearGradient id="paint1_linear_17203_537963" x1="10" y1="6.5" x2="10" y2="17" gradientUnits="userSpaceOnUse"><stop stop-color="#FF424E"></stop><stop offset="1" stop-color="#5E5CE6"></stop></linearGradient><clipPath id="clip0_17203_537963"><rect width="13" height="16.25" fill="white" transform="translate(3.5 1)"></rect></clipPath></defs></svg>
                                                            <span className="badge-text">+ 1,68 ASA</span>
                                                            <span className="badge-vnd"> ≈ 566 ₫</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col2">
                                            <span>84.000 ₫</span>
                                        </div>
                                        <div className="col3">
                                            <div className="total">
                                                <span data-view-id="cart_main_quantity.decrease" data-view-index="18dd68c3-5c17-11ed-8b14-d2f2a9d390a1" class="qty-decrease "><img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg" alt="decrease" /></span>
                                                <input type="tel" value="1"></input>
                                                <span data-view-id="cart_main_quantity.increase" data-view-index="18dd68c3-5c17-11ed-8b14-d2f2a9d390a1" class="qty-increase "><img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/increase.svg" alt="increase" /></span>
                                            </div>
                                        </div>
                                        <div className="col4">
                                            <span>168.000 ₫</span>
                                        </div>
                                        <div className="col5">
                                            <span>
                                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg" alt="deleted" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="right-inner">
                            <div className="delivery">
                                <div className="delivery-container">
                                    <div className="header">
                                        <h3>Giao tới</h3>
                                        <Link to='/cart' className="link">Thay đổi</Link>
                                    </div>
                                    <div className="info">
                                        <p>hoang</p>
                                        <i />
                                        <p>491515</p>
                                    </div>
                                    <div className='address'>
                                        Hà Nội
                                    </div>
                                </div>
                            </div>
                            <div className="calculate-price">
                                <ul>
                                    <li>
                                        <div className="price-text">
                                            Tạm tính
                                        </div>
                                        <div className="price-value">
                                            0đ
                                        </div>
                                    </li>
                                    <li>
                                        <div className="price-text">
                                            Giảm giá
                                        </div>
                                        <div className="price-value">
                                            0đ
                                        </div>
                                    </li>
                                </ul>
                                <div className="price-total">
                                    <span>Tổng tiền</span>
                                    <div className="price-content">
                                        <span>0đ</span>
                                        <span className="price-note">
                                            (Đã bao gồm VAT nếu có)
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button className="btn-buy">Mua hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopCart;