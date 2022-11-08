import React, { useState } from "react";
import { isWideScreen } from "../../helpers/screen";
import BoxSearch from "../common/BoxSearch";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import LoginDesktop from "../login/LoginDesktop";

function Header(props) {
    const [showSearchDesktop, setShowSearchDesktop] = useState(false);

    const [isLogIn, setIsLogIn] = useState(false);

    return (
        <>
            <header className="main-header">
                <div className="cm-width main-header--top">
                    <div className="main-header--top pfpi">
                        <div className="logo-menu">
                            <div className="style-logo">
                                <Link to="/" className="tiki-logo">
                                    <img src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png" alt="tiki logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="header-form-search" onMouseLeave={() => { setShowSearchDesktop(false) }}>
                            <input placeholder="Bạn đang tìm kiếm gì" type="text" onClick={() => { setShowSearchDesktop(true) }}
                                onKeyDown={() => { setShowSearchDesktop(true) }}
                                onChange={() => { setShowSearchDesktop(true) }}
                            />
                            <button className="pointer">
                                <img src="https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png" alt="" />
                                Tìm Kiếm
                            </button>
                            {(showSearchDesktop && isWideScreen()) && <BoxSearch setShowSearchDesktop={setShowSearchDesktop} showSearchDesktop={showSearchDesktop} />}
                        </div>
                        <div className="main-header--top__right">
                            {isLogIn ? (
                                <>
                                    <div className="logged">
                                        <img alt="sd" src="https://salt.tikicdn.com/cache/512x512/ts/avatar/b9/42/e9/5d6bd301d4a6fb334877b9ae5082f483.jpg" width='32' height='32' />
                                        <span>
                                            <span className="logged-user">Tài khoản</span>
                                            <span className="account-label1" onClick={() => setIsLogIn(false)}>
                                                <span>Trần Hoàng</span>
                                                <img alt='s' src='https://salt.tikicdn.com/ts/upload/d7/d4/a8/34939af2da1ceeeae9f95b7485784233.png' width='16' height='16' />
                                            </span>
                                        </span>
                                    </div>
                                </>
                            ) : (
                                <div className="header-user-shortcut" onClick={() => setIsLogIn(true)}>
                                    <img className="profile" src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png" alt="" />
                                    <span className="user-style">
                                        <span className="user-style__title">
                                            <Popup modal trigger={<div>Đăng nhập/Đăng ký</div>}>
                                                {close => <LoginDesktop close={close} />}
                                            </Popup>
                                        </span>
                                        <span className="account-label">
                                            <Link to="/info" style={{ color: 'white' }}><span>Tài khoản</span></Link>
                                            <img src="https://salt.tikicdn.com/ts/upload/d7/d4/a8/34939af2da1ceeeae9f95b7485784233.png" alt="arrowIcon" />
                                        </span>
                                    </span>
                                </div>
                            )}
                            <div className="header-cart">
                                <Link to="/">
                                    <div className="header-cart-shotcut">
                                        <div className="cart-wrapper">
                                            <img src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png" alt="" className="cart-icon" />
                                            <span className="cart-number">
                                                9
                                            </span>
                                        </div>
                                        <span className="cart-title">Giỏ hàng</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-header--bottom">
                    <div className="cm-width main-header--bottom--title">
                        <div className="left">
                            <Link to="/" className="img-logo">
                                <img src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png" alt="" height="12" width="83" />
                            </Link>
                            <div className="left__link">
                                <Link to="/" className="item-link">Trái cây</Link>
                                <Link to="/" className="item-link">Thịt, trứng</Link>
                                <Link to="/" className="item-link">rau củ quả</Link>
                                <Link to="/" className="item-link">sữa, bơ, phô mai</Link>
                                <Link to="/" className="item-link">hải sản</Link>
                                <Link to="/" className="item-link">gạo, mỳ ăn liền</Link>
                                <Link to="/" className="item-link">đồ uống, bia rượu</Link>
                                <Link to="/" className="item-link">bánh kẹo</Link>
                            </div>
                        </div>

                        <Link to="/" className="seller">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icon-seller.svg" alt="" />
                            <span>Bán hàng cùng tiki</span>
                        </Link>
                    </div>
                </div>
            </header>

        </>

    )
}
export default Header;