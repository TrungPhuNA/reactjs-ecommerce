import React, { useState } from 'react';

function UpdateEmail() {

    const [isShow, setIsShow] = useState(true);

    const [user, setUser] = useState([]);
    const [email, setEmail] = useState("");
    
    async function getUser() {
        fetch("https://api-ecm.123code.net/api/auth/profile", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem('accessToken'),
            }
        }).then((result) => {
            result.json().then((res) => {
                setUser(res);
                setEmail(res.email);
            })
        });
    }

    async function updateEmail(e) {
        e.preventDefault();
        let item = { email };
        fetch("https://api-ecm.123code.net/api/user/update-email", {
            method: "PUT",
            headers: { 
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem('accessToken'),
            },
            body: JSON.stringify(item)
        }).then((result) => {
            result.json().then(() => {
                getUser();
            })
        })
    }

    return (
        <>  
            { isShow ? (
                <div className="right-container">
                    <div className="info-popup">
                        <div className="up-phone-container">
                            <button className="button-close" onClick={() => setIsShow(false)}><img src="https://salt.tikicdn.com/ts/upload/fe/20/d7/6d7764292a847adcffa7251141eb4730.png" alt="sdf" /></button>
                            <span><p>Cập Nhật Email</p></span>
                            <form className="form-phonenum" onSubmit={updateEmail}>
                                <div className="form-pn-control">
                                    <label className="input-pn-label">
                                        Địa chỉ email
                                    </label>
                                    <div className="input-pn-box">
                                        <img src='https://frontend.tikicdn.com/_desktop-next/static/img/account/email.png' alt="ds" width="24" height="24"/>
                                        <input maxlength="50" placeholder="Nhập địa chỉ email" type="search"
                                            value={email} onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <button type="submit" onClick={updateEmail}>Lưu thay đổi</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> 
            ) : (<></>)}
        </>
    )

}

export default UpdateEmail;