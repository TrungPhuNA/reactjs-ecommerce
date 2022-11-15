import React from 'react';

function UpdatePhoneNum() {

    const [user, setUser] = useState([]);
    const [phone, setPhone] = useState("");

    async function getUser() {
        fetch("https://api-ecm.123code.net/api/auth/profile").then((result) => {
            result.json().then((res) => {
                setUser(res);
                setPhone(res.phone);
            })
        })
    }

    async function updatePhone(e) {
        e.preventDefault();
        let item = { phone }
        fetch("https://api-ecm.123code.net/api/user/update-password", {
            method: 'PUT',
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
                    <span>Cập nhật số điện thoại</span>
                    <form className="form-phonenum">
                        <div className="form-pn-control">
                            <label className="input-pn-label">
                                Số điện thoại
                            </label>
                            <div className="input-pn-box">
                                <img src='https://frontend.tikicdn.com/_desktop-next/static/img/account/phone.png' alt="ds" width="24" height="24"/>
                                <input maxlength="10" placeholder="Nhập số điện thoại" type="search" value={phone}></input>
                            </div>
                            <button type="submit" onClick={updatePhone}>Lưu thay đổi</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}

export default UpdatePhoneNum;