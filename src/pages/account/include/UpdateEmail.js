import React from 'react';

function UpdateEmail() {
    return (
        <>
            <div className="right-container">
                <div className="up-phone-container">
                    <span>Cập nhật Email</span>
                    <form className="form-phonenum">
                        <div className="form-pn-control">
                            <label className="input-pn-label">
                                Địa chỉ email
                            </label>
                            <div className="input-pn-box">
                                <img src='https://frontend.tikicdn.com/_desktop-next/static/img/account/email.png' alt="ds" width="24" height="24"/>
                                <input maxlength="10" placeholder="Nhập địa chỉ email" type="search"></input>
                            </div>
                            <button type="submit">Lưu thay đổi</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}

export default UpdateEmail;