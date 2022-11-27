import React, { useEffect, useState } from "react";
import { isWideScreen } from "../../helpers/screen";
import BoxSearch from "../common/BoxSearch";
import { Link, useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import LoginDesktop from "../login/LogIn";

function Header(props) {
    const [showSearchDesktop, setShowSearchDesktop] = useState(false);
    const [hideLogout, setHideLogout] = useState(true);
 
    const [user, setUser] = useState();
    const [name, setName] = useState();
    const [isUser, setIsUser] = useState(false);

    // const [list, setList] = useState([]);
    // const [count, setCount] = useState(0);

    function getUser() {
        if (localStorage.getItem('accessToken')) {
            setIsUser(true)
            return fetch("https://api-ecm.123code.net/api/auth/profile", {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + localStorage.getItem('accessToken'),
                    }
                }).then((result) => {
                    result.json().then((res) => {
                        setUser(res);
                        setName(res.data.name);
                    })
                });
        }    
    }

    useEffect(() => {
        getUser();
    },[])
    
    // async function getListOrder() {
    //     fetch("https://api-ecm.123code.net/api/transaction/lists", {
    //         method: 'GET',
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: "Bearer " + localStorage.getItem('accessToken'),
    //         }
    //     }).then((result) => {
    //         result.json().then((res) => {
    //             setList(res.data);
    //         })
    //     });
    // }

    const navigate = useNavigate();

    function Logout() {
        localStorage.clear();
        window.location.reload();
        navigate("/");
    }

    function showDropdownList() {
        return (
            <div className="dropdown-list" onMouseLeave={() => setHideLogout(true)}>
                <Link to="/info"><p>Thông tin cá nhân</p></Link>
                <Link to="/order"><p>Đơn hàng của tôi</p></Link>
                <Link to="/" onClick={()=>Logout()}><p>Đăng xuất</p></Link>
            </div>
        )
    }

    return (
        <>
            <header className="main-header">
                <div className="cm-width main-header--top">
                    <div className="main-header--top pfpi">
                        <div className="logo-menu">
                            <div className="style-logo">
                                <Link to="/" className="tiki-logo">
                                    <img src={"/logo.svg"} alt="tiki logo" />
                                </Link>
                            </div>
                        </div>
                        <div
                            className="header-form-search"
                            onMouseLeave={() => {
                                setShowSearchDesktop(false);
                            }}
                        >
                            <input
                                placeholder="Bạn đang tìm kiếm gì"
                                type="text"
                                onClick={() => {
                                    setShowSearchDesktop(true);
                                }}
                                onKeyDown={() => {
                                    setShowSearchDesktop(true);
                                }}
                                onChange={() => {
                                    setShowSearchDesktop(true);
                                }}
                            />
                            <button className="pointer">
                                <img
                                    src="https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png"
                                    alt=""
                                />
                                Tìm Kiếm
                            </button>
                            {showSearchDesktop && isWideScreen() && (
                                <BoxSearch
                                    setShowSearchDesktop={setShowSearchDesktop}
                                    showSearchDesktop={showSearchDesktop}
                                />
                            )}
                        </div>
                        <div className="main-header--top__right">
                            {isUser ? (
                                <>
                                    <div className="logged">
                                        <img
                                            alt="sd"
                                            src="https://salt.tikicdn.com/cache/512x512/ts/avatar/b9/42/e9/5d6bd301d4a6fb334877b9ae5082f483.jpg"
                                            width="32"
                                            height="32"
                                        />
                                        <span>
                                            <span className="logged-user">
                                                Tài khoản
                                            </span>
                                            <span
                                                className="account-label1"
                                                onMouseMove={() =>
                                                    setHideLogout(false)
                                                }
                                            >
                                                <span>{name}</span>
                                                <img
                                                    alt="s"
                                                    src="https://salt.tikicdn.com/ts/upload/d7/d4/a8/34939af2da1ceeeae9f95b7485784233.png"
                                                    width="16px"
                                                    height="16px"
                                                />
                                            </span>
                                            {hideLogout ? (
                                                <></>
                                            ) : (
                                                <>{showDropdownList()}</>
                                            )}
                                        </span>
                                    </div>
                                    <div className="header-cart">
                                        <Link to="/cart">
                                            <div className="header-cart-shotcut">
                                                <div className="cart-wrapper">
                                                    <img
                                                        src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png"
                                                        alt=""
                                                        className="cart-icon"
                                                    />
                                                    <span className="cart-number">
                                                        0
                                                    </span>
                                                </div>
                                                <span className="cart-title">
                                                    Giỏ hàng
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                </>
                                ) : (
                                <>
                                    <div className="header-user-shortcut">
                                        <img
                                            className="profile"
                                            src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png"
                                            alt=""
                                        />
                                        <span className="user-style">
                                            <span className="user-style__title">
                                                <Popup
                                                    modal
                                                    trigger={
                                                        <div>
                                                            Đăng nhập/Đăng ký
                                                        </div>
                                                    }
                                                >
                                                    <LoginDesktop />
                                                </Popup>
                                            </span>
                                            <span className="account-label">
                                                <Link
                                                    to=""
                                                    style={{ color: "white" }}
                                                >
                                                    <span>Tài khoản</span>
                                                </Link>
                                                <img
                                                    src="https://salt.tikicdn.com/ts/upload/d7/d4/a8/34939af2da1ceeeae9f95b7485784233.png"
                                                    alt="arrowIcon"
                                                />
                                            </span>
                                        </span>
                                    </div>
                                    <div className="header-cart">
                                        <Link to="/cart">
                                            <div className="header-cart-shotcut">
                                                <div className="cart-wrapper">
                                                    <img
                                                        src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png"
                                                        alt=""
                                                        className="cart-icon"
                                                    />
                                                    <span className="cart-number">
                                                        0
                                                    </span>
                                                </div>
                                                <span className="cart-title">
                                                    Giỏ hàng
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                </>)
                            }
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
export default Header;
