import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");

    const [isShow, setIsShow] = useState(true)
    const [isRegister, setIsRegister] = useState(true);

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://api-ecm.123code.net/api/auth/register", {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    email: email,
                    username: username,
                    phone: phone,
                    password: password,
                    address: address,
                }),
            });
            let resJson = await res.json();
            if (res.status === 201) {
                setName("");
                setEmail("");
                setUsername("");
                setPhone("");
                setPassword("");
                setAddress("");
            } else {

            }
        } catch (e) {
            console.log("---------Register Error", e);
        }

        return {
            status: 500,
        };
    };

    // useEffect(() => {
    //     localStorage.setItem("name", JSON.stringify(name));
    // }, [name]);
    // useEffect(() => {
    //     localStorage.setItem("email", JSON.stringify(email));
    // }, [email]);
    // useEffect(() => {
    //     localStorage.setItem("username", JSON.stringify(username));
    // }, [username]);
    // useEffect(() => {
    //     localStorage.setItem("phone", JSON.stringify(phone));
    // }, [phone]);
    // useEffect(() => {
    //     localStorage.setItem("password", JSON.stringify(password));
    // }, [password]);
    // useEffect(() => {
    //     localStorage.setItem("name", JSON.stringify(address));
    // }, [address]);

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
                                            <div className="login-left-content-heading">
                                                <h4>Xin chào,</h4>
                                                <p>Đăng nhập hoặc Tạo tài khoản</p>
                                            </div>
                                            <form onSubmit={handleSubmit}>
                                                <div className="left-content-heading-input">
                                                    <label className="text-title">Họ và tên</label>
                                                    <input type="name" vale={name} placeholder="Nhập họ và tên" onChange={(e) => setName(e.target.value)} maxlength="50" />
                                                    <label className="text-title">Email</label>
                                                    <input type="email" vale={email} placeholder="Nhập email" onChange={(e) => setEmail(e.target.value)} maxlength="50" />
                                                    <label className="text-title">Tên đăng nhập</label>
                                                    <input type="username" vale={username} placeholder="Nhập tên đăng nhập" onChange={(e) => setUsername(e.target.value)} maxlength="50" />
                                                    <label className="text-title">Số điện thoại</label>
                                                    <input type="phone" vale={phone} placeholder="Nhập số điện thoại" onChange={(e) => setPhone(e.target.value)} maxlength="10" />
                                                    <label className="text-title">Mật khẩu</label>
                                                    <input type="password" vale={password} placeholder="Nhập mật khẩu" onChange={(e) => setPassword(e.target.value)} maxlength="20" />
                                                    <label className="text-title">Địa chỉ</label>
                                                    <input type="address" vale={address} placeholder="Nhập địa chỉ" onChange={(e) => setAddress(e.target.value)} maxlength="10" />
                                                </div>
                                                <button type="submit"><Link to="/" style={{ color: "white" }}>Tiếp tục</Link></button>
                                            </form>
                                            <p className="login-with-login"><Link onClick={() => setIsRegister(false)}>Đăng nhập bằng email</Link></p>
                                        </>
                                    ) : (
                                        <>
                                            <div className="login-left-content-heading">
                                                <h4>Xin chào,</h4>
                                                <p>Đăng nhập</p>
                                            </div>
                                            <form onSubmit={handleSubmit}>
                                                <div className="left-content-heading-input">
                                                    <label className="text-title">Tên đăng nhập</label>
                                                    <input type="username" placeholder="Nhập tên đăng nhập" onChange={(e) => setUsername(e.target.value)} maxlength="50" />
                                                    <label className="text-title">Mật khẩu</label>
                                                    <input type="password" placeholder="Nhập mật khẩu" onChange={(e) => setPassword(e.target.value)} maxlength="20" />
                                                </div>
                                                <button type="submit"><Link to="/" style={{ color: "white" }}>Tiếp tục</Link></button>
                                            </form>
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
