import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function RegisterDesktop() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    
    // let handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {   
    //         let res = await fetch("https://api-ecm.123code.net/api/auth/register", {
    //             method: "POST",
    //             headers: { 
    //                 'Content-Type': 'application/json' 
    //             },
    //             body: JSON.stringify({
    //                 name: name,
    //                 email: email,
    //                 username: username,
    //                 phone: phone,
    //                 password: password,
    //                 address: address,
    //             }),
    //         });
    //         let resJson = await res.json();
    //         if (res.status === 201) {
    //             setName("");
    //             setEmail("");
    //             setUsername("");
    //             setPhone("");
    //             setPassword("");
    //             setAddress("");
    //         } else {

    //         }
    //     } catch (e) {
    //         console.log("---------Register Error", e);
    //     }

    //     return {
    //         status: 500,
    //     };
    // };

    const navigate = useNavigate();

    async function signUp(e) {
        e.preventDefault();
        let item = {name, email, username, phone, password, address}
        let result = await fetch("https://api-ecm.123code.net/api/auth/register", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result))
        navigate("/")
    }

    return(
        <>
            <div className="login-left-content-heading">
                <h4>Xin chào,</h4>
                <p>Đăng nhập hoặc Tạo tài khoản</p>
            </div>
            <form>
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
                <button type="submit" onClick={signUp}><Link to="/" style={{ color: "white" }}>Tiếp tục</Link></button>
            </form>
            {/* <p className="login-with-login"><Link onClick={() => setIsRegister(false)}>Đăng nhập bằng email</Link></p> */}
        </>
    )

}

export default RegisterDesktop;