import React from 'react';
 
function UpdatePin() {
    return (
        <>
            <div className="right-container">
                <div className="up-pin-container">
                    <span>Thiết lập mã PIN</span>
                    <div className="left-pin">
                        <div className="left-pin-title">
                            Xác minh số điện thoại
                        </div>
                        <div className="left-pin-container">
                            Để bắt đầu thiết lập mã PIN, vui lòng xác minh bằng mã <br/> OTP gửi qua số điện thoại của bạn
                        </div>
                    </div>
                    <div className="right-pin">
                        <button>Lấy mã OTP</button>
                        <div className="right-pin-text">
                            Đổi số điện thoại? Liên hệ Hotline <a href='zxc'>1900-6035</a> 
                        </div>
                    </div>
                </div>
            </div>    
        </>
    )

}

export default UpdatePin;