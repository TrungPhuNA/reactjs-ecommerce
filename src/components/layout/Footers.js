import React from "react";
import { Link } from "react-router-dom";

export default function Footers(){
    // const cate = Array.from(Array(10).keys());
    return (
        <footer>
            <div className="style-information">
                <div className="cm-width d-flexs">
                    <div className="block">
                        <h4>Hỗ trợ khách hàng</h4>
                        <p className="hot-line">
                        Hotline: <Link to="/">1900-6035</Link>
                        <span className="small-text1">(1000 đ/phút, 8-21h kể cả T7, CN)</span>
                        </p>
                        <Link to="/" className="small-text">Các câu hỏi thường gặp</Link>
                        <Link to="/" className="small-text">Gửi yêu cầu hỗ trợ</Link>
                        <Link to="/" className="small-text">Hướng dẫn đặt hàng</Link>
                        <Link to="/" className="small-text">Phương thức vận chuyển</Link>
                        <Link to="/" className="small-text">Chính sách đổi trả</Link>
                        <Link to="/" className="small-text">Hướng dẫn trả góp</Link>
                        <Link to="/" className="small-text">Chính sách hàng nhập khẩu</Link>

                        <p className="security">
                        Hỗ trợ khách hàng: <Link to="/">hotro@tiki.vn</Link>
                        </p>
                        <p className="security mb-0">
                        Báo lỗi bảo mật: <Link to="/">security@tiki.vn</Link>
                        </p>
                    </div>
                    <div className="block">
                        <h4>Về tiki</h4>
                        <Link to="/" className="small-text">Giới thiệu Tiki</Link>
                        <Link to="/" className="small-text">Tuyển dụng</Link>
                        <Link to="/" className="small-text">Chính sách bảo mật thanh toán</Link>
                        <Link to="/" className="small-text">Chính sách bảo mật thông tin cá nhân</Link>
                        <Link to="/" className="small-text">Chính sách giải quyết khiếu nại</Link>
                        <Link to="/" className="small-text">Điều khoản sử dụng</Link>
                        <Link to="/" className="small-text">Giới thiệu Tiki Xu</Link>
                        <Link to="/" className="small-text">SEP - Mua sắm có lời</Link>
                        <Link to="/" className="small-text">Tiếp thị liên kết cùng Tiki</Link>
                        <Link to="/" className="small-text">Bán hàng doanh nghiệp</Link>
                        <Link to="/" className="small-text">Điều kiện vận chuyển</Link>
                    </div>
                    <div className="block">
                        <h4>Hợp tác và liên hệ</h4>
                        <Link to="/" className="small-text">Quy chế hoạt động Sàn GDTMĐT</Link>
                        <Link to="/" className="small-text">Bán hàng cùng Tiki</Link>
                        <h4>Chứng nhận bởi</h4>
                        <div className="d-flex">
                        <Link to="/">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="12"/>
                        </Link>
                        <Link to="/">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg" width="83" height="32" alt="test"/>
                        </Link>
                        </div>
                    </div>
                    <div className="block">
                        <h4>Phương thức thanh toán</h4>
                        <p className="payment">
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />
                        </p>
                        <h4>Dịch vụ giao hàng</h4>
                        <p>
                            <Link to="/">
                            <img src="https://static.wixstatic.com/media/6e68b4_245b828eb23a404b9aba586a8fb0292c~mv2.png/v1/crop/x_39,y_33,w_200,h_99/fill/w_110,h_54,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/images.png" width="68" height="33" alt="test" />
                            </Link>
                        </p>
                    </div>
                    <div className="block">
                        <h4>Kết nối với chúng tôi</h4>
                        <p>
                            <Link to="/">
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />
                            </Link>
                            <Link to="/">
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />
                            </Link>
                            <Link to="/">
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />
                            </Link>
                        </p>
                        <h4 className="store-title">Tải ứng dụng trên điện thoại</h4>
                        <div className="d-flex">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/qrcode.png" height="80" width="80" alt="test" />
                            <div className="dowload-app">
                            <Link to="/">
                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png" width="122" alt="test" />
                            </Link>
                            <Link to="/">
                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png" width="122" alt="test" />
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}