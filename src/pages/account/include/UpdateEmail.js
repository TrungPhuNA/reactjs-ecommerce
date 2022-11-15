import React, { useState } from 'react';

function UpdateEmail() {

    const [user, setUser] = useState([]);
    const [email, setEmail] = useState("");

    async function getUser() {
        fetch("https://api-ecm.123code.net/api/auth/profile").then((result) => {
            result.json().then((res) => {
                setUser(res);
                setEmail(res.email);
            })
        })
    }

    async function updateEmail(e) {
        e.preventDefault();
        let item = {email};
        fetch("https://api-ecm.123code.net/api/user/update-email", {
            method: "PUT",
            headers: { 
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        }).then((result) => {
            result.json().then(() => {
                getUser();
            })
        })
    }

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
                                <input maxlength="10" placeholder="Nhập địa chỉ email" type="search"
                                    value={email}
                                />
                            </div>
                            <button type="submit" onClick={updateEmail}>Lưu thay đổi</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}

export default UpdateEmail;