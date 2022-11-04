import React from 'react';

function UpdatePassword() {
    return (
        <>
            <div className="right-container">

                <div className="up-phone-container">
                    <span>Đổi mật khẩu</span>
                    <form className="form-phonenum">
                        <div className="form-pass-control">
                            <label className="input-pass-label">
                                Mật khẩu hiện tại
                            </label>
                            <div className="input-pass-box">
                                <input className="input-pass-box1" placeholder="Nhập mật khẩu hiện tại" type="search"></input>
                                <img className="img-pass" src='https://frontend.tikicdn.com/_desktop-next/static/img/account/eye.png' alt="ds" width="24" height="24"/>
                            </div>
                            
                        </div>
                        <div className="form-pass-control">
                            <label className="input-pass-label">
                                Mật khẩu mới
                            </label>
                            <div className="input-pass-box">
                                <input className="input-pass-box1" placeholder="Nhập mật khẩu mới" type="search"></input>
                                <img className="img-pass" src='https://frontend.tikicdn.com/_desktop-next/static/img/account/eye.png' alt="ds" width="24" height="24"/>
                            </div>
                            <div class="hint-pass-new"> Mật khẩu phải dài từ 8 đến 32 ký tự, bao gồm chữ và số</div>
                            
                        </div>
                        <div className="form-pass-control">
                            <label className="input-pass-label">
                                Nhập lại mật khẩu mới
                            </label>
                            <div className="input-pass-box">
                                <input className="input-pass-box1" placeholder="Nhập lại mật khẩu mới" type="search"></input>
                                <img className="img-pass" src='https://frontend.tikicdn.com/_desktop-next/static/img/account/eye.png' alt="ds" width="24" height="24"/>
                            </div>
                        </div>
                        <button className="btn-pass" type="submit">  Lưu thay đổi</button>
                    </form>
                </div>
            </div>   
        </>
    )

}

export default UpdatePassword;