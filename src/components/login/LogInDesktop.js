import React, { useState } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { setTokenLogin } from "../../store/authSlice";


function LogInDesktop() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [noti, setNoti] = useState(false);
    const dispatch = useDispatch();

    async function loginUser(e) {
        e.preventDefault();
        try {
            let item = { username, password };
            let result = await fetch("https://api-ecm.123code.net/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(item),
            });
            result = await result.json();

            

            if (result.status === 200) {
                localStorage.setItem("user", JSON.stringify(result.data));
                const token = localStorage.getItem("user");
                const tokenString = JSON.parse(token);
                localStorage.setItem("accessToken", tokenString.accessToken);
                dispatch(setTokenLogin(tokenString.accessToken));
                window.location.reload();
            }
        } catch (e) {
            setNoti(true);
        }


    }

    return (
        <>
            <div className="login-left-content-heading">
                <h4>Xin chào,</h4>
                <p>Đăng nhập</p>
            </div>
            <Formik
                validate={() => {
                    let errors = {};

                    if (!username)
                        errors.username = "Tên đăng nhặp không được bỏ trống!";

                    if (!password)
                        errors.password = "Mật khẩu không được bỏ trống!";

                    return errors;
                }}
            // validationSchema={Yup.object().shape({
            //     username: Yup.string().required("Tên đăng nhập không được bỏ trống"),
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
            // })}
            >
                {(props) => {
                    const { touched, errors, handleBlur } = props;
                    return (
                        <form>
                            <div className="left-content-heading-input">
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
                            </div>

                            <button type="submit" onClick={loginUser}>
                                Tiếp tục
                            </button>

                            {noti ? (<>
                                <div className="unauth">Sai tên đăng nhập hoặc mật khẩu!</div>
                            </>)
                                :
                                (<></>)
                            }

                        </form>
                    );
                }}
            </Formik>
        </>
    );
}

export default LogInDesktop;
