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
            <div className="style-line"></div>
            <div className="style-information">
                <div className="cm-width d-flexs">
                    <div className="address">
                        <div className="address-infor">
                            <p className="small-text1">Trụ sở chính: Tòa nhà Viettel, Số 285, đường Cách Mạng Tháng 8, phường 12, quận 10, Thành phố Hồ Chí Minh</p>
                            <p className="small-text1">Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và nhận hàng trực tiếp tại văn phòng hoặc trung tâm xử lý đơn hàng</p>
                            <p className="small-text1">Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp lần đầu ngày 06/01/2010 và sửa đổi lần thứ 23 ngày 14/02/2022</p>
                            <p className="small-text1">© 2022 - Bản quyền của Công ty TNHH Ti Ki</p>
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
                    <Link to="/">Điện thoại smartphone</Link>
                     tới 
                    <Link to="/">Rau củ quả tươi</Link>
                    , kèm theo dịch vụ giao hàng siêu tốc TikiNOW, Tiki mang đến cho bạn một trải nghiệm mua sắm online bắt đầu bằng chữ tín. Thêm vào đó, ở Tiki bạn có thể dễ dàng sử dụng vô vàn các tiện ích khác như 
                    <Link to="/">mua thẻ cào, thanh toán hoá đơn điện nước, các dịch vụ bảo hiểm.</Link>
                    </p>
                    <h2>Khuyến mãi, ưu đãi tràn ngập</h2>
                    <p>
                    Bạn muốn săn giá sốc, Tiki có <Link to="/">giá sốc mỗi ngày</Link>  cho bạn! Bạn là tín đồ của các thương hiệu, các <Link to="/">cửa hàng Official chính hãng</Link>
                     đang chờ đón bạn. Không cần săn mã freeship, vì Tiki đã có hàng triệu sản phẩm trong <Link to="/">chương trình Freeship+</Link>, không giới hạn lượt đặt, tiết kiệm thời gian vàng bạc của bạn. Mua thêm gói 
                     <Link to="/"> TikiNOW tiết kiệm</Link> để nhận 100% free ship 2h & trong ngày, hoặc mua gói TikiNOW cao cấp để nhận được 100% freeship, áp dụng cho 100% sản phẩm, 100% tỉnh thành Việt Nam. Bạn muốn tiết kiệm hơn nữa? Đã có TikiCARD, 
                    <Link to="/"> thẻ tín dụng Tiki hoàn tiền 15%</Link> trên mọi giao dịch (tối đa hoàn 600k/tháng)
                    </p>
                </div>
                <div className="style-line"></div>
                <div className="py-3">
                    <h1>Danh mục sản phẩm</h1>
                    <div className="category">
                                <div   className="category-item">
                                    <div className="category-item--title">
                                        <Link to="/">Đồ Chơi - Mẹ  Bé</Link>
                                        <p>
                                            <Link to="/">Thời trang cho mẹ và bé</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Đồ chơi</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Đồ dùng cho bé</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Chăm sóc nhà cửa</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Chăm sóc mẹ mang thai, sau sinh</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Dinh dưỡng cho bé</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Tã, bỉm</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Dinh dưỡng cho người lớn</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Dinh dưỡng cho mẹ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Thực phẩm ăn dặm</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Chuẩn bị mang thai</Link>
                                        </p>
                                        <Link to="/">Thực Phẩm Tươi Sống</Link>
                                        <p>
                                            <Link to="/">Trái Cây</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Thịt, Trứng</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Cá, thủy hải sản</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Rau củ quả</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Thực phẩm Việt</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Sữa, bơ, phô mai</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Đông lạnh, mát</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Dầu ăn, gia vị</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Gạo mì, nông sản</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Đồ hộp, đóng gói</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Bia, đồ uống</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Thực phẩm chạy</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Dành cho trẻ em</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Bánh kẹo, giỏ quà</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Thức ăn, đồ thú cưng</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Chăm sóc cá nhân</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Chăm sóc nhà cửa</Link>
                                        </p>
                                        <Link to="/">Điện Thoại - Máy Tính Bảng</Link>
                                        <p>
                                            <Link to="/">Điện thoại Smartphone</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Điện thoại bàn</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Điện thoại phổ thông</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Máy đọc sách</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Máy tính bảng</Link>
                                        </p>
                                        <Link to="/">Làm Đẹp - Sức Khỏe</Link>
                                        <p>
                                            <Link to="/">Chăm sóc da mặt</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Dụng cụ làm đẹp</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Thực phẩm chức năng</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Trang điếm</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Chăm sóc cơ thể</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Máy Massage & Thiết bị chăm sóc sức khỏe</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Sản phẩm thiên nhiên & khác</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Chăm óc tóc và da đầu</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Chăm sóc cá nhân</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Nước hoa</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Hỗ trợ tình dục</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Bộ sản phẩm làm đẹp</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Dược mỹ phẩm</Link>
                                        </p>
                                        <Link to="/">Điện Gia Dụng</Link>
                                        <p>
                                            <Link to="/">Đồ dùng nhà bếp</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Thiết bị gia đình</Link>
                                        </p>
                                    </div>
                                    <div className="category-item--title">
                                        <Link to="/">Thời trang nữ</Link>
                                        <p>
                                            <Link to="/">Áo nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Đầm nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Quần nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Áo liền quần - Bộ trang phục</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Áo khoác nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Đồ ngủ - Đồ mặc nhà nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Chân váy</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Trang phục bơi nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Thời trang bầu và sau sinh</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Thời trang trung niên</Link>
                                        </p>
                                        <Link to="/">Thời trang nam</Link>
                                        <p>
                                            <Link to="/">Áo thun nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Quần nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Áo vest - Áo khoác nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Áo sơ mi nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Đồ lót nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Áo hoodie nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Đồ ngủ, đồ mặc nhà nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Đồ đôi - Đồ gia đình nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Áo nỉ - Áo len nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Đồ bơi - Đồ đi biển nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Quần áo nam trung niên</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Quần áo nam kích cỡ lớn</Link>
                                        </p>
                                        <Link to="/">Giày - Dép nữ</Link>
                                        <p>
                                            <Link to="/">Giày cao gót</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Dép - Guốc nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Giày thể thao nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Giày sandals nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Giày búp bê</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Giày boots nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Giày lười nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Phụ kiện giày</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Giày đế xuồng nữ</Link>
                                        </p>
                                        <Link to="/">Giày - Dép nam</Link>
                                        <p>
                                            <Link to="/">Giày lười nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Giày tây nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Giày thể thao nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Dép nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Giày sandals nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Phụ kiện giày nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Giày boots nam</Link>
                                        </p>
                                        <Link to="/">Túi thời trang nữ</Link>
                                        <p>
                                            <Link to="/">Túi đeo chéo, túi đeo vai nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Ví nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Túi xách tay nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Túi tote nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Phụ kiện túi</Link>
                                        </p>
                                        <Link to="/">Túi thời trang nam</Link>
                                        <p>
                                            <Link to="/">Ví nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Túi đeo chéo nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Túi xách công sở nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Túi bao tử, túi đeo bụng</Link>
                                        </p>
                                    </div>
                                    <div className="category-item--title">
                                        <Link to="/">Balo và Vali</Link>
                                        <p>
                                            <Link to="/">Balo</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Túi du lịch và phụ kiện</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Balo, cặp, túi chống sốc laptop</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Vali, phụ kiện vali </Link>
                                        </p>
                                        <Link to="/">Phụ kiện thời trang</Link>
                                        <p>
                                            <Link to="/">Phụ kiện thời trang nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Mắt kính</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Phụ kiện thời trang nam</Link>
                                        </p>
                                        <Link to="/">Đồng hồ và Trang sức</Link>
                                        <p>
                                            <Link to="/">Trang sức</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Đồng hồ nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Đồng hồ nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Phụ kiện đồng hồ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Đồng hồ trẻ em</Link>
                                        </p>
                                        <Link to="/">Laptop - Máy vi tính - Link kiện</Link>
                                        <p>
                                            <Link to="/">Linh Kiện Máy Tính - Phụ Kiện Máy Tính</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Thiết Bị Văn Phòng - Thiết Bị Ngoại Vi</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Thiết Bị Mạng</Link> 
                                            &nbsp;/&nbsp;
                                            <Link to="/">Thiết Bị Lưu Trữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">PC - Máy Tính Bộ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Laptop</Link>
                                        </p>
                                        <Link to="/">Nhà Cửa - Đời Sống</Link>
                                        <p>
                                            <Link to="/">Trang trí nhà cửa</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Dụng cụ nhà bếp</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Sửa chữa nhà cửa</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Ngoài trời &amp; sân vườn</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Nội thất</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Đèn &amp; thiết bị chiếu sáng</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Đồ dùng và thiết bị nhà tắm</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Đồ dùng phòng ăn</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Đồ dùng phòng ngủ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Đồ thờ cúng</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Nhạc cụ</Link>    
                                            &nbsp;/&nbsp;
                                            <Link to="/">Hoa tươi và cây cảnh</Link>
                                        </p>
                                        <Link to="/">Bách Hóa Online</Link>
                                        <p>
                                            <Link to="/">Chăm sóc thú cưng</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Đồ uống - Pha chế dạng bột</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Thực phẩm Đóng hộp và Khô</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Gia Vị và Chế Biến</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Đậu &amp; Hạt Các Loại</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Đồ Ăn Vặt</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Sữa và các Sản phẩm từ sữa</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Đồ Uống Không Cồn</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Đồ uống có cồn</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Bộ quà tặng</Link>
                                        </p>
                                    </div>
                                    <div className="category-item--title">
                                        <Link to="/">Hàng Quốc Tế</Link>
                                        <p>
                                            <Link to="/">Nhà Cửa - Đời Sống</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Thời Trang</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Ô tô, xe máy, xe đạp</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Thiết Bị Số - Phụ Kiện Số</Link> 
                                            &nbsp;/&nbsp;
                                            <Link to="/">Thể thao - Dã ngoại</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Làm Đẹp - Sức Khỏe</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Sách, Văn phòng phẩm &amp; Quà lưu niệm</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Mẹ &amp; Bé</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Điện gia dụng</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Bách hóa online</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Máy Ảnh - Máy Quay Phim</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Laptop &amp; Máy Vi Tính</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Sản phẩm - thiết bị công nghiệp</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Tivi &amp; Thiết Bị Nghe Nhìn</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Điện Thoại - Máy Tính Bảng</Link>
                                        </p>
                                        <Link to="/">Thiết Bị Số - Phụ Kiện Số</Link>
                                        <p>
                                            <Link to="/">Phụ Kiện Điện Thoại và Máy Tính Bảng</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Phụ kiện máy tính và Laptop</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Thiết Bị Âm Thanh và Phụ Kiện</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Thiết Bị Thông Minh và Linh Kiện Điện Tử</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Thiết Bị Đeo Thông Minh và Phụ Kiện</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Thiết Bị Chơi Game và Phụ Kiện</Link>
                                        </p>
                                        <Link to="/">Voucher - Dịch vụ </Link>
                                        <p>
                                            <Link to="/">Thanh toán hóa đơn</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Khóa học</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Du lịch - Khách sạn</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Spa &amp; Làm đẹp</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Dịch vụ khác</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Nhà hàng - Ăn uống</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Sự kiện - Giải trí</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Nha khoa - Sức khỏe</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Phiếu quà tặng</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Sim số - Thẻ cào - Thẻ game</Link>
                                        </p>
                                        <Link to="/">Ô Tô - Xe Máy - Xe Đạp</Link>
                                        <p>
                                            <Link to="/">Phụ kiện - Chăm sóc xe</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Xe điện</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Xe đạp</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Xe máy</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Ô tô</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Xe Scooter</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Dịch vụ, lắp đặt</Link>
                                        </p>
                                        <Link to="/">Nhà Sách Tiki</Link>
                                        <p>
                                            <Link to="/">Sách tiếng Việt</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Văn phòng phẩm</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Quà lưu niệm</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">English Books</Link>
                                        </p>
                                    </div>
                                    <div className="category-item--title">
                                        <Link to="/">Điện Tử - Điện Lạnh</Link>
                                        <p>
                                            <Link to="/">Âm thanh &amp; Phụ kiện Tivi</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Phụ kiện điện lạnh</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Tủ lạnh</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Máy lạnh - Máy điều hòa</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Máy giặt</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Tủ đông - Tủ mát</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Tivi</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Máy nước nóng</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Máy rửa chén</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Máy sấy quần áo</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Tủ ướp rượu</Link>
                                        </p>
                                        <Link to="/">Thể THao - Dã Ngoại</Link>
                                        <p>
                                            <Link to="/">Trang phục thể thao nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Trang phục thể thao nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Đồ dùng dã ngoại</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Giày thể thao nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Phụ kiện thể thao</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Dụng cụ - thiết bị tập thể thao</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Các môn thể thao khác</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Dụng cụ câu cá</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Thể thao dưới nước</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Các môn thể thao đồng đội</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Các môn thể thao chơi vợt</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Các môn thể thao đối kháng </Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Giày thể thao nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Thực phẩm bổ sung năng lượng</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Dụng cụ leo núi</Link>

                                        </p>
                                        <Link to="/">Máy Ảnh - Máy Quay Phim</Link>
                                        <p>
                                            <Link to="/">Phụ Kiện Máy Ảnh, Máy Quay</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Camera Giám Sát</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Thiết Bị Ánh Sáng</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Camera Hành Trình - Action Camera và Phụ Kiện</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Balo - Túi Đựng - Bao Da</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Ống Kính - Ống Ngắm</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Ống Kính (Lens)</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Thiết Bị Quay Phim</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Máy Bay Camera và Phụ Kiện</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/">Máy Ảnh</Link>
                                        </p>
                                    </div>
                                    
                                </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}