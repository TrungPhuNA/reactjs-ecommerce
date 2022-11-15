import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginDesktop() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // let handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         let res = await fetch("https://api-ecm.123code.net/api/auth/login", {
    //             method: "POST",
    //             headers: { 
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 username: username,
    //                 password: password,
    //         }),
    //     });
    //     let resJson = await res.json();
    //     if (res.status === 201) {
    //         setUserName("");
    //         setPassWord("");
    //     } else {

    //     }
    //     } catch (e) {
    //         console.log("----Login Error@");
    //     }

    //     return {
    //         status: 401,
    //     };
        
    // };

    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('user-info')){
            navigate("/")
        }
    }, [])

    async function logIn(e) {
        let item = {username, password}
        let result = await fetch("https://api-ecm.123code.net/api/auth/login", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item)
        });
        // axios.defaults.headers.common['Authorization'] = `Bearer ${result['token']}`;
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result))
        navigate("info")
    }

    return (
        <>
            <div className="login-left-content-heading">
                <h4>Xin chào,</h4>
                <p>Đăng nhập</p>
            </div>
            <form >
                <div className="left-content-heading-input">
                    <label className="text-title">Tên đăng nhập</label>
                    <input type="username" placeholder="Nhập tên đăng nhập" onChange={(e) => setUsername(e.target.value)} maxlength="50" />
                    <label className="text-title">Mật khẩu</label>
                    <input type="password" placeholder="Nhập mật khẩu" onChange={(e) => setPassword(e.target.value)} maxlength="20" />
                </div>
                <button type="submit" onClick={logIn}><Link to="/" style={{ color: "white" }}>Tiếp tục</Link></button>
            </form>
            {/* <p className="login-with-login">Bạn chưa có tài khoản? <Link onClick={() => setIsRegister(true)}>Đăng ký</Link></p> */}
        </>
    )
}

export default LoginDesktop;