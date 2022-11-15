import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterDesktop from './RegisterDesktop';
import LogInDesktop from './LogInDesktop';
   
export default () => {

    const [isShow, setIsShow] = useState(true)
    const [isRegister, setIsRegister] = useState(true);

    return (
        <>
             {isShow ? (
                <div className="login-desktop">
                    <div className="login-desktop-container">
                        <div className="login-desktop-content">
                            <button className="button-close" onClick={() => setIsShow(false)}><img src="https://salt.tikicdn.com/ts/upload/fe/20/d7/6d7764292a847adcffa7251141eb4730.png" alt="sdf" /></button>
                            <div className="login-left">
                                <div className="login-left-content">
                                    {isRegister ? (
                                        <>
                                            <RegisterDesktop/>
                                            <p className="login-with-login"><Link onClick={() => setIsRegister(false)}>Đăng nhập bằng email</Link></p>
                                        </>
                                    ) : (
                                        <>
                                            <LogInDesktop/>
                                            <p className="login-with-login">Bạn chưa có tài khoản? <Link onClick={() => setIsRegister(true)}>Đăng ký</Link></p>
                                        </>
                                    )
                                    }
                                </div>
                                <div className="login-left-footer">
                                    <p className="login-footer-text1">
                                        <span>Hoặc tiếp tục bằng</span>
                                    </p>
                                    <ul>
                                        <li>
                                            <img src="https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png" alt="ads" width="58" height="58" />
                                        </li>
                                        <li>
                                            <img src="https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png" alt="ads" width="58" height="58" />
                                        </li>
                                    </ul>
                                    <p class="note">Bằng việc tiếp tục, bạn đã chấp nhận <Link to="">điều khoản sử dụng</Link></p>
                                </div>
                            </div>
                            <div className="login-right">
                                <img src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png" alt="sad" width='203' height='203' />
                                <div class="login-right-content">
                                    <h4>Mua sắm tại Tiki</h4>
                                    <span>Siêu ưu đãi mỗi ngày</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>) : (<></>)}
        </>
    )
}
