import React, {useState} from 'react';

function UpdatePassword() {

    const [user, setUser] = useState([]);
    const [password, setPassword] = useState("");

    async function getUser() {
        fetch("https://api-ecm.123code.net/api/auth/profile").then((result) => {
            result.json().then((res) => {
                setUser(res);
                setPassword(res.password);
            })
        })
    }

    const [password_old, setPassword_old] = useState("");
    const [password_new, setPassword_new] = useState("");
    const [password_confirm, setPassword_confirm] = useState("");

    async function updatePassword(e) {
        e.preventDefault();
        let item = {password_old, password_new, password_confirm}
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
                    <span>Đổi mật khẩu</span>
                    <form className="form-phonenum">
                        <div className="form-pass-control">
                            <label className="input-pass-label">
                                Mật khẩu hiện tại
                            </label>
                            <div className="input-pass-box">
                                <input className="input-pass-box1" placeholder="Nhập mật khẩu hiện tại" type="search"
                                    value={password_old}
                                />
                                <img className="img-pass" src='https://frontend.tikicdn.com/_desktop-next/static/img/account/eye.png' alt="ds" width="24" height="24"/>
                            </div>
                            
                        </div>
                        <div className="form-pass-control">
                            <label className="input-pass-label">
                                Mật khẩu mới
                            </label>
                            <div className="input-pass-box">
                                <input className="input-pass-box1" placeholder="Nhập mật khẩu mới" type="search"
                                    value={password_new}
                                />
                                <img className="img-pass" src='https://frontend.tikicdn.com/_desktop-next/static/img/account/eye.png' alt="ds" width="24" height="24"/>
                            </div>
                            <div class="hint-pass-new"> Mật khẩu phải dài từ 8 đến 32 ký tự, bao gồm chữ và số</div>
                            
                        </div>
                        <div className="form-pass-control">
                            <label className="input-pass-label">
                                Nhập lại mật khẩu mới
                            </label>
                            <div className="input-pass-box">
                                <input className="input-pass-box1" placeholder="Nhập lại mật khẩu mới" type="search"
                                    value={password_confirm}
                                />
                                <img className="img-pass" src='https://frontend.tikicdn.com/_desktop-next/static/img/account/eye.png' alt="ds" width="24" height="24"/>
                            </div>
                        </div>
                        <button className="btn-pass" type="submit" onClick={updatePassword}>  Lưu thay đổi</button>
                    </form>
                </div>
            </div>   
        </>
    )

}

export default UpdatePassword;