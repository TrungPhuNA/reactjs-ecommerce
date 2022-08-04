import React from "react";

export default function Footers(){
    const cate = Array.from(Array(10).keys());
    return (
        <footer>
            <div className="style-information">
                <div className="cm-width d-flexs">
                    <div className="block">
                        <h4>Hỗ trợ khách hàng</h4>
                        <p className="hot-line">
                        Hotline: <a >1900-6035</a>
                        <span className="small-text">(1000 đ/phút, 8-21h kể cả T7, CN)</span>
                        </p>
                        <a href="" className="small-text">Các câu hỏi thường gặp</a>
                        <a href="" className="small-text">Gửi yêu cầu hỗ trợ</a>
                        <a href="" className="small-text">Hướng dẫn đặt hàng</a>
                        <a href="" className="small-text">Phương thức vận chuyển</a>
                        <a href="" className="small-text">Chính sách đổi trả</a>
                        <a href="" className="small-text">Hướng dẫn trả góp</a>
                        <a href="" className="small-text">Chính sách hàng nhập khẩu</a>

                        <p className="security">
                        Hỗ trợ khách hàng: <a href="">hotro@tiki.vn</a>
                        </p>
                        <p className="security mb-0">
                        Báo lỗi bảo mật: <a href="">security@tiki.vn</a>
                        </p>
                    </div>
                    <div class="block">
                        <h4>Về tiki</h4>
                        <a href="" class="small-text">Giới thiệu Tiki</a>
                        <a href="" class="small-text">Tuyển dụng</a>
                        <a href="" class="small-text">Chính sách bảo mật thanh toán</a>
                        <a href="" class="small-text">Chính sách bảo mật thông tin cá nhân</a>
                        <a href="" class="small-text">Chính sách giải quyết khiếu nại</a>
                        <a href="" class="small-text">Điều khoản sử dụng</a>
                        <a href="" class="small-text">Giới thiệu Tiki Xu</a>
                        <a href="" class="small-text">SEP - Mua sắm có lời</a>
                        <a href="" class="small-text">Tiếp thị liên kết cùng Tiki</a>
                        <a href="" class="small-text">Bán hàng doanh nghiệp</a>
                        <a href="" class="small-text">Điều kiện vận chuyển</a>
                    </div>
                    <div className="block">
                        <h4>Hợp tác và liên hệ</h4>
                        <a href="" className="small-text">Quy chế hoạt động Sàn GDTMĐT</a>
                        <a href="" className="small-text">Bán hàng cùng Tiki</a>
                        <h4>Chứng nhận bởi</h4>
                        <div className="d-flex">
                        <a >
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt=""/>
                        </a>
                        <a href="">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg" width="83" height="32" alt=""/>
                        </a>
                        </div>
                    </div>
                    <div className="block">
                        <h4>Phương thức thanh toán</h4>
                        <p className="payment">
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="" />
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="" />
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="" />
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="" />
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="" />
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="" />
                        </p>
                        <h4>Dịch vụ giao hàng</h4>
                        <p>
                            <a href="">
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="68" height="32" alt="" />
                            </a>
                        </p>
                    </div>
                    <div className="block">
                        <h4>Kết nối với chúng tôi</h4>
                        <p>
                            <a href="">
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="" />
                            </a>
                            <a href="">
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="" />
                            </a>
                            <a href="">
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="" />
                            </a>
                        </p>
                        <h4 className="store-title">Tải ứng dụng trên điện thoại</h4>
                        <div className="d-flex">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/qrcode.png" height="80" width="80" alt="" />
                            <div className="dowload-app">
                            <a href="">
                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png" width="122" alt="" />
                            </a>
                            <a href="">
                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png" width="122" alt="" />
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="style-line"></div>
            <div className="style-information">
                <div className="cm-width d-flexs">
                    <div className="address">
                        <div className="address-infor">
                            <p className="small-text">Trụ sở chính: Tòa nhà Viettel, Số 285, đường Cách Mạng Tháng 8, phường 12, quận 10, Thành phố Hồ Chí Minh</p>
                            <p className="small-text">Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và nhận hàng trực tiếp tại văn phòng hoặc trung tâm xử lý đơn hàng</p>
                            <p className="small-text">Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp lần đầu ngày 06/01/2010 và sửa đổi lần thứ 23 ngày 14/02/2022</p>
                            <p className="small-text">© 2022 - Bản quyền của Công ty TNHH Ti Ki</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="style-line"></div>
            <div className="cm-width">
                <div className="py-3">
                    <h1>Tiki - Thật nhanh, thật chất lượng, thật rẻ</h1>
                    <h2>Tiki có tất cả</h2>
                    <p>Với hàng triệu sản phẩm từ các thương hiệu, cửa hàng uy tín, hàng nghìn loại mặt hàng từ
                    <a href="">Điện thoại smartphone</a>
                    tới
                    <a href="">Rau củ quả tươi</a>
                    , kèm theo dịch vụ giao hàng siêu tốc TikiNOW, Tiki mang đến cho bạn một trải nghiệm mua sắm online bắt đầu bằng chữ tín. Thêm vào đó, ở Tiki bạn có thể dễ dàng sử dụng vô vàn các tiện ích khác như
                    <a href="">mua thẻ cào, thanh toán hoá đơn điện nước, các dịch vụ bảo hiểm.</a>
                    </p>
                    <h2>Khuyến mãi, ưu đãi tràn ngập</h2>
                    <p>
                    Bạn muốn săn giá sốc, Tiki có <a href="">giá sốc mỗi ngày</a>  cho bạn! Bạn là tín đồ của các thương hiệu, các <a href="">cửa hàng Official chính hãng</a>
                    đang chờ đón bạn. Không cần săn mã freeship, vì Tiki đã có hàng triệu sản phẩm trong <a href="">chương trình Freeship+</a>, không giới hạn lượt đặt, tiết kiệm thời gian vàng bạc của bạn. Mua thêm gói
                    <a href="">TikiNOW tiết kiệm</a> để nhận 100% free ship 2h & trong ngày, hoặc mua gói TikiNOW cao cấp để nhận được 100% freeship, áp dụng cho 100% sản phẩm, 100% tỉnh thành Việt Nam. Bạn muốn tiết kiệm hơn nữa? Đã có TikiCARD,
                    <a href="">thẻ tín dụng Tiki hoàn tiền 15%</a> trên mọi giao dịch (tối đa hoàn 600k/tháng)
                    </p>
                </div>
                <div className="style-line"></div>
                <div className="py-3">
                    <h1>Danh mục sản phẩm</h1>
                    <div className="category">
                        {cate.map((item) => {
                            return (
                                <>
                                 <div className="category-item">
                                    <div className="category-item--title">
                                        <a href="">Đồ Chơi - Mẹ  Bé</a>
                                        <p>
                                            <a href=""> askdjkasd /</a>
                                        </p>
                                    </div>
                                </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </footer>

    )
}