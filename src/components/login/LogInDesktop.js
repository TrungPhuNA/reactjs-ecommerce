import React, {  useState } from 'react';
import { Link } from 'react-router-dom';

function LogInDesktop() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    async function loginUser(e) {
        e.preventDefault();
        let item = {username, password}
            let result = await fetch("https://api-ecm.123code.net/api/auth/login", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(item)
            });
            result = await result.json();
            localStorage.setItem('user', JSON.stringify(result.data));
            const token = localStorage.getItem('user');
            const tokenString = JSON.parse(token);
            localStorage.setItem('accessToken', tokenString.accessToken);
            
    }

    return (
        <>
            <div className="login-left-content-heading">
                <h4>Xin chào,</h4>
                <p>Đăng nhập</p>
            </div>
            <form>
                <div className="left-content-heading-input">
                    <label className="text-title">Tên đăng nhập</label>
                    <input type="username" placeholder="Nhập tên đăng nhập" onChange={(e) => setUsername(e.target.value)} maxlength="50" />
                    <label className="text-title">Mật khẩu</label>
                    <input type="password" placeholder="Nhập mật khẩu" onChange={(e) => setPassword(e.target.value)} maxlength="20" />
                </div>
                <button type="submit" onClick={loginUser}><Link to="/" style={{ color: "white" }}>Tiếp tục</Link></button>
            </form>
            {/* <p className="login-with-login">Bạn chưa có tài khoản? <Link onClick={() => setIsRegister(true)}>Đăng ký</Link></p> */}
        </>
    )
}

export default LogInDesktop;