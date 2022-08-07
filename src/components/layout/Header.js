import React from "react";

function Header() {
    return (
        <header className="main-header">
            <div className="cm-width main-header--top">
                <div className="main-header--top pfpi">
                    <div className="logo-menu">
                    <div className="style-logo">
                        <a href="/home" className="tiki-logo">
                            <img src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png" alt="tiki logo"/>
                        </a>
                    </div>
                    </div>
                    <div className="header-form-search">
                        <input type="text"/>
                        <button className="pointer">
                        <img src="https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png" alt=""/>
                        tìm kiếm
                        </button>
                    </div>
                    <div className="main-header--top__right">
                    <div className="header-user-shortcut">
                        <img className="profile" src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png" alt=""/>
                        <span className="user-style">
                            <span className="user-style__title"> Đăng nhập/Đăng ký</span>
                            <span className="account-label">
                            <span>Tài khoản</span>
                            <img src="https://salt.tikicdn.com/ts/upload/d7/d4/a8/34939af2da1ceeeae9f95b7485784233.png" alt="arrowIcon"/>
                            </span>
                        </span>
                    </div>
                    <div className="header-cart">
                        <a href="/home">
                            <div className="header-cart-shotcut">
                                <div className="cart-wrapper">
                                    <img src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png" alt="" className="cart-icon"/>
                                    <span className="cart-number">
                                        9
                                    </span>
                                </div>
                                <span className="cart-title">Giỏ hàng</span>
                            </div>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
            <div className="main-header--bottom">
                <div className="cm-width main-header--bottom--title">
                    <div className="left">
                        <a href="/home" className="img-logo">
                            <img src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png" alt="" height="12" width="83"/>
                        </a>
                        <div className="left__link">
                            <a href="/home" className="item-link">Trái cây</a>
                            <a href="/home" className="item-link">Thịt, trứng</a>
                            <a href="/home" className="item-link">rau củ quả</a>
                            <a href="/home" className="item-link">sữa, bơ, phô mai</a>
                            <a href="/home" className="item-link">hải sản</a>
                            <a href="/home" className="item-link">gạo, mỳ ăn liền</a>
                            <a href="/home" className="item-link">đồ uống, bia rượu</a>
                            <a href="/home" className="item-link">bánh kẹo</a>
                        </div>
                    </div>

                    <a href="/home" className="seller">
                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icon-seller.svg" alt=""/>
                        <span>Bán hàng cùng tiki</span>
                    </a>
                </div>
            </div>
        </header>
    )   
}
export default Header;