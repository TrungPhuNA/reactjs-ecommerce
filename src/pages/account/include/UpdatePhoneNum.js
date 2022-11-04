import React from 'react';

function UpdatePhoneNum() {
    return (
        <>
            <div className="right-container">
                <div className="up-phone-container">
                    <span>Cập nhật số điện thoại</span>
                    <form className="form-phonenum">
                        <div className="form-pn-control">
                            <label className="input-pn-label">
                                Số điện thoại
                            </label>
                            <div className="input-pn-box">
                                <img src='https://frontend.tikicdn.com/_desktop-next/static/img/account/phone.png' alt="ds" width="24" height="24"/>
                                <input maxlength="10" placeholder="Nhập số điện thoại" type="search"></input>
                            </div>
                            <button type="submit">Lưu thay đổi</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}

export default UpdatePhoneNum;