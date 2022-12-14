import React, { useState } from 'react';
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
// import * as Yup from "yup";

function RegisterDesktop() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [noti, setNoti] = useState(false);

    async function signUp(e) {
        e.preventDefault();
        try {
            let item = { name, email, username, phone, password, address }
            let result = await fetch("https://api-ecm.123code.net/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(item)
            });
            result = await result.json();

            if (result.status === 200 && result.status !== 500) {
                localStorage.setItem('user', JSON.stringify(result.data));
                const token = localStorage.getItem('user');
                const tokenString = JSON.parse(token);
                localStorage.setItem('accessToken', tokenString.accessToken);
                window.location.reload();
            } else {
                localStorage.clear();
                setNoti(true);
            }
        } catch (e) {
            localStorage.clear();
            setNoti(true);
        }

    }

    return (
        <>
            <div className="login-left-content-heading">
                <h4>Xin chào,</h4>
                <p>Đăng nhập hoặc Tạo tài khoản</p>
            </div>
            <Formik
                validate={() => {
                    let errors = {};

                    if (!name)
                        errors.name = "Họ và tên không được bỏ trống!";

                    if (!username)
                        errors.username = "Tên đăng nhập không được bỏ trống!";

                    if (!address)
                        errors.address = "Địa chỉ không được bỏ trống!";

                    const phoneRegex = /[0-9]/;
                    if (!phone)
                        errors.phone = "Số điện thoại không được bỏ trống!";
                    else if (phone.length < 10 || !phoneRegex.test(phone))
                        errors.phone = "Số điện thoại không hợp lệ!";

                    if (!email) {
                        errors.email = "Email không được bỏ trống!";
                    } else if (!EmailValidator.validate(email)) {
                        errors.email = "Invalid email address";
                    }

                    const passwordRegex = /(?=.*[0-9])/;
                    if (!password) {
                        errors.password = "Mật khẩu không được bỏ trống!";
                    } else if (password.length < 8) {
                        errors.password = "Password must be 8 characters long.";
                    } else if (!passwordRegex.test(password)) {
                        errors.password =
                            "Invalida password. Must contain one number";
                    }

                    return errors;
                }}
            // validationSchema={Yup.object().shape({
            //     name: Yup.string().required("Họ và tên không được bỏ trống"),
            //     username: Yup.string().required("Tên đăng nhập không được bỏ trống"),
            //     email: Yup.string().email().required("Email không được bỏ trống"),
            //     password: Yup.string()
            //         .required("Mật khẩu không được để trống")
            //         .min(
            //             6,
            //             "Password is too short - should be 6 chars minimum."
            //         )
            //         .matches(
            //             /(?=.*[0-9])/,
            //             "Password must contain a number."
            //         ),
            //     phone: Yup.string()
            //         .required("Số điện thoại không được bỏ trống")
            //         .min(
            //             10,
            //             "Số điện thoại không hợp lệ"
            //         ),
            //     address: Yup.string().required("Địa chỉ không được bỏ trống"),
            // })}
            >
                {(props) => {
                    const {
                        touched,
                        errors,
                        handleBlur,
                    } = props;
                    return (
                        <form >
                            <div className="left-content-heading-input">
                                <label className="text-title" htmlFor="name">
                                    Họ và tên
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Nhập họ và tên"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    onBlur={handleBlur}
                                    className={
                                        errors.name && touched.name && "error"
                                    }
                                />
                                {errors.name && touched.name && (
                                    <div className="input-feedback">
                                        {errors.name}
                                    </div>
                                )}
                                <label
                                    className="text-title"
                                    htmlFor="username"
                                >
                                    Tên đăng nhập
                                </label>
                                <input
                                    name="username"
                                    type="text"
                                    placeholder="Nhập tên đăng nhập"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    onBlur={handleBlur}
                                    className={
                                        errors.username &&
                                        touched.username &&
                                        "error"
                                    }
                                />
                                {errors.username && touched.username && (
                                    <div className="input-feedback">
                                        {errors.username}
                                    </div>
                                )}
                                <label
                                    className="text-title"
                                    htmlFor="password"
                                >
                                    Mật khẩu
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Nhập mật khẩu"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    onBlur={handleBlur}
                                    className={
                                        errors.password &&
                                        touched.password &&
                                        "error"
                                    }
                                />
                                {errors.password && touched.password && (
                                    <div className="input-feedback">
                                        {errors.password}
                                    </div>
                                )}
                                <label className="text-title" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    name="email"
                                    type="text"
                                    placeholder="Nhập email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onBlur={handleBlur}
                                    className={
                                        errors.email && touched.email && "error"
                                    }
                                />
                                {errors.email && touched.email && (
                                    <div className="input-feedback">
                                        {errors.email}
                                    </div>
                                )}
                                <label className="text-title" htmlFor="phone">
                                    Số điện thoại
                                </label>
                                <input
                                    name="phone"
                                    type="text"
                                    placeholder="Nhập số điện thoại"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    onBlur={handleBlur}
                                    className={
                                        errors.phone && touched.phone && "error"
                                    }
                                />
                                {errors.phone && touched.phone && (
                                    <div className="input-feedback">
                                        {errors.phone}
                                    </div>
                                )}
                                <label className="text-title" htmlFor="address">
                                    Địa chỉ
                                </label>
                                <input
                                    name="address"
                                    type="text"
                                    placeholder="Nhập địa chỉ"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    onBlur={handleBlur}
                                    className={
                                        errors.address &&
                                        touched.address &&
                                        "error"
                                    }
                                />
                                {errors.address && touched.address && (
                                    <div className="input-feedback">
                                        {errors.address}
                                    </div>
                                )}
                            </div>
                            <button type="submit" onClick={signUp}>
                                Tiếp tục
                            </button>

                            {noti ? (<>
                                <div className="unauth">Thông tin chưa đúng hoặc đã tồn tại. Vui lòng nhập lại!</div>
                            </>)
                                :
                                (<></>)
                            }

                        </form>
                    );
                }}
                {/* <div className="left-content-heading-input">
                    <label className="text-title">Họ và tên</label>
                    <input
                        type="name"
                        value={name}
                        placeholder="Nhập họ và tên"
                        onChange={(e) => setName(e.target.value)}
                        maxlength="50"
                    />
                    <label className="text-title">Email</label>
                    <input
                        type="email"
                        value={email}
                        placeholder="Nhập email"
                        onChange={(e) => setEmail(e.target.value)}
                        maxlength="50"
                    />
                    <label className="text-title">Tên đăng nhập</label>
                    <input
                        type="username"
                        value={username}
                        placeholder="Nhập tên đăng nhập"
                        onChange={(e) => setUsername(e.target.value)}
                        maxlength="50"
                    />
                    <label className="text-title">Số điện thoại</label>
                    <input
                        type="phone"
                        value={phone}
                        placeholder="Nhập số điện thoại"
                        onChange={(e) => setPhone(e.target.value)}
                        maxlength="10"
                    />
                    <label className="text-title">Mật khẩu</label>
                    <input
                        type="password"
                        value={password}
                        placeholder="Nhập mật khẩu"
                        onChange={(e) => setPassword(e.target.value)}
                        maxlength="20"
                    />
                    <label className="text-title">Địa chỉ</label>
                    <input
                        type="address"
                        value={address}
                        placeholder="Nhập địa chỉ"
                        onChange={(e) => setAddress(e.target.value)}
                        maxlength="10"
                    />
                </div> 
                <button type="submit" onClick={signUp}>
                    Tiếp tục
                </button> */}
            </Formik>
        </>
    );

}

export default RegisterDesktop;