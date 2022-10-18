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
                        Hotline: <Link to="/home">1900-6035</Link>
                        <span className="small-text1">(1000 đ/phút, 8-21h kể cả T7, CN)</span>
                        </p>
                        <Link to="/home" className="small-text">Các câu hỏi thường gặp</Link>
                        <Link to="/home" className="small-text">Gửi yêu cầu hỗ trợ</Link>
                        <Link to="/home" className="small-text">Hướng dẫn đặt hàng</Link>
                        <Link to="/home" className="small-text">Phương thức vận chuyển</Link>
                        <Link to="/home" className="small-text">Chính sách đổi trả</Link>
                        <Link to="/home" className="small-text">Hướng dẫn trả góp</Link>
                        <Link to="/home" className="small-text">Chính sách hàng nhập khẩu</Link>

                        <p className="security">
                        Hỗ trợ khách hàng: <Link to="/home">hotro@tiki.vn</Link>
                        </p>
                        <p className="security mb-0">
                        Báo lỗi bảo mật: <Link to="/home">security@tiki.vn</Link>
                        </p>
                    </div>
                    <div className="block">
                        <h4>Về tiki</h4>
                        <Link to="/home" className="small-text">Giới thiệu Tiki</Link>
                        <Link to="/home" className="small-text">Tuyển dụng</Link>
                        <Link to="/home" className="small-text">Chính sách bảo mật thanh toán</Link>
                        <Link to="/home" className="small-text">Chính sách bảo mật thông tin cá nhân</Link>
                        <Link to="/home" className="small-text">Chính sách giải quyết khiếu nại</Link>
                        <Link to="/home" className="small-text">Điều khoản sử dụng</Link>
                        <Link to="/home" className="small-text">Giới thiệu Tiki Xu</Link>
                        <Link to="/home" className="small-text">SEP - Mua sắm có lời</Link>
                        <Link to="/home" className="small-text">Tiếp thị liên kết cùng Tiki</Link>
                        <Link to="/home" className="small-text">Bán hàng doanh nghiệp</Link>
                        <Link to="/home" className="small-text">Điều kiện vận chuyển</Link>
                    </div>
                    <div className="block">
                        <h4>Hợp tác và liên hệ</h4>
                        <Link to="/home" className="small-text">Quy chế hoạt động Sàn GDTMĐT</Link>
                        <Link to="/home" className="small-text">Bán hàng cùng Tiki</Link>
                        <h4>Chứng nhận bởi</h4>
                        <div className="d-flex">
                        <Link to="/home">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="12"/>
                        </Link>
                        <Link to="/home">
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
                            <Link to="/home">
                            <img src="https://static.wixstatic.com/media/6e68b4_245b828eb23a404b9aba586a8fb0292c~mv2.png/v1/crop/x_39,y_33,w_200,h_99/fill/w_110,h_54,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/images.png" width="68" height="33" alt="test" />
                            </Link>
                        </p>
                    </div>
                    <div className="block">
                        <h4>Kết nối với chúng tôi</h4>
                        <p>
                            <Link to="/home">
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />
                            </Link>
                            <Link to="/home">
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />
                            </Link>
                            <Link to="/home">
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />
                            </Link>
                        </p>
                        <h4 className="store-title">Tải ứng dụng trên điện thoại</h4>
                        <div className="d-flex">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/qrcode.png" height="80" width="80" alt="test" />
                            <div className="dowload-app">
                            <Link to="/home">
                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png" width="122" alt="test" />
                            </Link>
                            <Link to="/home">
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
                    <Link to="/home">Điện thoại smartphone</Link>
                     tới 
                    <Link to="/home">Rau củ quả tươi</Link>
                    , kèm theo dịch vụ giao hàng siêu tốc TikiNOW, Tiki mang đến cho bạn một trải nghiệm mua sắm online bắt đầu bằng chữ tín. Thêm vào đó, ở Tiki bạn có thể dễ dàng sử dụng vô vàn các tiện ích khác như 
                    <Link to="/home">mua thẻ cào, thanh toán hoá đơn điện nước, các dịch vụ bảo hiểm.</Link>
                    </p>
                    <h2>Khuyến mãi, ưu đãi tràn ngập</h2>
                    <p>
                    Bạn muốn săn giá sốc, Tiki có <Link to="/home">giá sốc mỗi ngày</Link>  cho bạn! Bạn là tín đồ của các thương hiệu, các <Link to="/home">cửa hàng Official chính hãng</Link>
                     đang chờ đón bạn. Không cần săn mã freeship, vì Tiki đã có hàng triệu sản phẩm trong <Link to="/home">chương trình Freeship+</Link>, không giới hạn lượt đặt, tiết kiệm thời gian vàng bạc của bạn. Mua thêm gói 
                     <Link to="/home"> TikiNOW tiết kiệm</Link> để nhận 100% free ship 2h & trong ngày, hoặc mua gói TikiNOW cao cấp để nhận được 100% freeship, áp dụng cho 100% sản phẩm, 100% tỉnh thành Việt Nam. Bạn muốn tiết kiệm hơn nữa? Đã có TikiCARD, 
                    <Link to="/home"> thẻ tín dụng Tiki hoàn tiền 15%</Link> trên mọi giao dịch (tối đa hoàn 600k/tháng)
                    </p>
                </div>
                <div className="style-line"></div>
                <div className="py-3">
                    <h1>Danh mục sản phẩm</h1>
                    <div className="category">
                                <div   className="category-item">
                                    <div className="category-item--title">
                                        <Link to="/home">Đồ Chơi - Mẹ  Bé</Link>
                                        <p>
                                            <Link to="/home">Thời trang cho mẹ và bé</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Đồ chơi</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Đồ dùng cho bé</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Chăm sóc nhà cửa</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Chăm sóc mẹ mang thai, sau sinh</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Dinh dưỡng cho bé</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Tã, bỉm</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Dinh dưỡng cho người lớn</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Dinh dưỡng cho mẹ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Thực phẩm ăn dặm</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Chuẩn bị mang thai</Link>
                                        </p>
                                        <Link to="/home">Thực Phẩm Tươi Sống</Link>
                                        <p>
                                            <Link to="/home">Trái Cây</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Thịt, Trứng</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Cá, thủy hải sản</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Rau củ quả</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Thực phẩm Việt</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Sữa, bơ, phô mai</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Đông lạnh, mát</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Dầu ăn, gia vị</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Gạo mì, nông sản</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Đồ hộp, đóng gói</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Bia, đồ uống</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Thực phẩm chạy</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Dành cho trẻ em</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Bánh kẹo, giỏ quà</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Thức ăn, đồ thú cưng</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Chăm sóc cá nhân</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Chăm sóc nhà cửa</Link>
                                        </p>
                                        <Link to="/home">Điện Thoại - Máy Tính Bảng</Link>
                                        <p>
                                            <Link to="/home">Điện thoại Smartphone</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Điện thoại bàn</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Điện thoại phổ thông</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Máy đọc sách</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Máy tính bảng</Link>
                                        </p>
                                        <Link to="/home">Làm Đẹp - Sức Khỏe</Link>
                                        <p>
                                            <Link to="/home">Chăm sóc da mặt</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Dụng cụ làm đẹp</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Thực phẩm chức năng</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Trang điếm</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Chăm sóc cơ thể</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Máy Massage & Thiết bị chăm sóc sức khỏe</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Sản phẩm thiên nhiên & khác</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Chăm óc tóc và da đầu</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Chăm sóc cá nhân</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Nước hoa</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Hỗ trợ tình dục</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Bộ sản phẩm làm đẹp</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Dược mỹ phẩm</Link>
                                        </p>
                                        <Link to="/home">Điện Gia Dụng</Link>
                                        <p>
                                            <Link to="/home">Đồ dùng nhà bếp</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Thiết bị gia đình</Link>
                                        </p>
                                    </div>
                                    <div className="category-item--title">
                                        <Link to="/home">Thời trang nữ</Link>
                                        <p>
                                            <Link to="/home">Áo nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Đầm nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Quần nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Áo liền quần - Bộ trang phục</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Áo khoác nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Đồ ngủ - Đồ mặc nhà nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Chân váy</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Trang phục bơi nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Thời trang bầu và sau sinh</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Thời trang trung niên</Link>
                                        </p>
                                        <Link to="/home">Thời trang nam</Link>
                                        <p>
                                            <Link to="/home">Áo thun nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Quần nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Áo vest - Áo khoác nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Áo sơ mi nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Đồ lót nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Áo hoodie nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Đồ ngủ, đồ mặc nhà nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Đồ đôi - Đồ gia đình nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Áo nỉ - Áo len nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Đồ bơi - Đồ đi biển nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Quần áo nam trung niên</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Quần áo nam kích cỡ lớn</Link>
                                        </p>
                                        <Link to="/home">Giày - Dép nữ</Link>
                                        <p>
                                            <Link to="/home">Giày cao gót</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Dép - Guốc nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Giày thể thao nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Giày sandals nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Giày búp bê</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Giày boots nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Giày lười nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Phụ kiện giày</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Giày đế xuồng nữ</Link>
                                        </p>
                                        <Link to="/home">Giày - Dép nam</Link>
                                        <p>
                                            <Link to="/home">Giày lười nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Giày tây nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Giày thể thao nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Dép nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Giày sandals nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Phụ kiện giày nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Giày boots nam</Link>
                                        </p>
                                        <Link to="/home">Túi thời trang nữ</Link>
                                        <p>
                                            <Link to="/home">Túi đeo chéo, túi đeo vai nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Ví nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Túi xách tay nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Túi tote nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Phụ kiện túi</Link>
                                        </p>
                                        <Link to="/home">Túi thời trang nam</Link>
                                        <p>
                                            <Link to="/home">Ví nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Túi đeo chéo nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Túi xách công sở nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Túi bao tử, túi đeo bụng</Link>
                                        </p>
                                    </div>
                                    <div className="category-item--title">
                                        <Link to="/home">Balo và Vali</Link>
                                        <p>
                                            <Link to="/home">Balo</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Túi du lịch và phụ kiện</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Balo, cặp, túi chống sốc laptop</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Vali, phụ kiện vali </Link>
                                        </p>
                                        <Link to="/home">Phụ kiện thời trang</Link>
                                        <p>
                                            <Link to="/home">Phụ kiện thời trang nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Mắt kính</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Phụ kiện thời trang nam</Link>
                                        </p>
                                        <Link to="/home">Đồng hồ và Trang sức</Link>
                                        <p>
                                            <Link to="/home">Trang sức</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Đồng hồ nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Đồng hồ nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Phụ kiện đồng hồ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Đồng hồ trẻ em</Link>
                                        </p>
                                        <Link to="/home">Laptop - Máy vi tính - Link kiện</Link>
                                        <p>
                                            <Link to="/home">Linh Kiện Máy Tính - Phụ Kiện Máy Tính</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Thiết Bị Văn Phòng - Thiết Bị Ngoại Vi</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Thiết Bị Mạng</Link> 
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Thiết Bị Lưu Trữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">PC - Máy Tính Bộ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Laptop</Link>
                                        </p>
                                        <Link to="/home">Nhà Cửa - Đời Sống</Link>
                                        <p>
                                            <Link to="/home">Trang trí nhà cửa</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Dụng cụ nhà bếp</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Sửa chữa nhà cửa</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Ngoài trời &amp; sân vườn</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Nội thất</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Đèn &amp; thiết bị chiếu sáng</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Đồ dùng và thiết bị nhà tắm</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Đồ dùng phòng ăn</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Đồ dùng phòng ngủ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Đồ thờ cúng</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Nhạc cụ</Link>    
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Hoa tươi và cây cảnh</Link>
                                        </p>
                                        <Link to="/home">Bách Hóa Online</Link>
                                        <p>
                                            <Link to="/home">Chăm sóc thú cưng</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Đồ uống - Pha chế dạng bột</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Thực phẩm Đóng hộp và Khô</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Gia Vị và Chế Biến</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Đậu &amp; Hạt Các Loại</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Đồ Ăn Vặt</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Sữa và các Sản phẩm từ sữa</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Đồ Uống Không Cồn</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Đồ uống có cồn</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Bộ quà tặng</Link>
                                        </p>
                                    </div>
                                    <div className="category-item--title">
                                        <Link to="/home">Hàng Quốc Tế</Link>
                                        <p>
                                            <Link to="/home">Nhà Cửa - Đời Sống</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Thời Trang</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Ô tô, xe máy, xe đạp</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Thiết Bị Số - Phụ Kiện Số</Link> 
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Thể thao - Dã ngoại</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Làm Đẹp - Sức Khỏe</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Sách, Văn phòng phẩm &amp; Quà lưu niệm</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Mẹ &amp; Bé</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Điện gia dụng</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Bách hóa online</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Máy Ảnh - Máy Quay Phim</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Laptop &amp; Máy Vi Tính</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Sản phẩm - thiết bị công nghiệp</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Tivi &amp; Thiết Bị Nghe Nhìn</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Điện Thoại - Máy Tính Bảng</Link>
                                        </p>
                                        <Link to="/home">Thiết Bị Số - Phụ Kiện Số</Link>
                                        <p>
                                            <Link to="/home">Phụ Kiện Điện Thoại và Máy Tính Bảng</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Phụ kiện máy tính và Laptop</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Thiết Bị Âm Thanh và Phụ Kiện</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Thiết Bị Thông Minh và Linh Kiện Điện Tử</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Thiết Bị Đeo Thông Minh và Phụ Kiện</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Thiết Bị Chơi Game và Phụ Kiện</Link>
                                        </p>
                                        <Link to="/home">Voucher - Dịch vụ </Link>
                                        <p>
                                            <Link to="/home">Thanh toán hóa đơn</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Khóa học</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Du lịch - Khách sạn</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Spa &amp; Làm đẹp</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Dịch vụ khác</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Nhà hàng - Ăn uống</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Sự kiện - Giải trí</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Nha khoa - Sức khỏe</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Phiếu quà tặng</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Sim số - Thẻ cào - Thẻ game</Link>
                                        </p>
                                        <Link to="/home">Ô Tô - Xe Máy - Xe Đạp</Link>
                                        <p>
                                            <Link to="/home">Phụ kiện - Chăm sóc xe</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Xe điện</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Xe đạp</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Xe máy</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Ô tô</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Xe Scooter</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Dịch vụ, lắp đặt</Link>
                                        </p>
                                        <Link to="/home">Nhà Sách Tiki</Link>
                                        <p>
                                            <Link to="/home">Sách tiếng Việt</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Văn phòng phẩm</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Quà lưu niệm</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">English Books</Link>
                                        </p>
                                    </div>
                                    <div className="category-item--title">
                                        <Link to="/home">Điện Tử - Điện Lạnh</Link>
                                        <p>
                                            <Link to="/home">Âm thanh &amp; Phụ kiện Tivi</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Phụ kiện điện lạnh</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Tủ lạnh</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Máy lạnh - Máy điều hòa</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Máy giặt</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Tủ đông - Tủ mát</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Tivi</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Máy nước nóng</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Máy rửa chén</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Máy sấy quần áo</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Tủ ướp rượu</Link>
                                        </p>
                                        <Link to="/home">Thể THao - Dã Ngoại</Link>
                                        <p>
                                            <Link to="/home">Trang phục thể thao nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Trang phục thể thao nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Đồ dùng dã ngoại</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Giày thể thao nam</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Phụ kiện thể thao</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Dụng cụ - thiết bị tập thể thao</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Các môn thể thao khác</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Dụng cụ câu cá</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Thể thao dưới nước</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Các môn thể thao đồng đội</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Các môn thể thao chơi vợt</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Các môn thể thao đối kháng </Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Giày thể thao nữ</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Thực phẩm bổ sung năng lượng</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Dụng cụ leo núi</Link>

                                        </p>
                                        <Link to="/home">Máy Ảnh - Máy Quay Phim</Link>
                                        <p>
                                            <Link to="/home">Phụ Kiện Máy Ảnh, Máy Quay</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Camera Giám Sát</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Thiết Bị Ánh Sáng</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Camera Hành Trình - Action Camera và Phụ Kiện</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Balo - Túi Đựng - Bao Da</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Ống Kính - Ống Ngắm</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Ống Kính (Lens)</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Thiết Bị Quay Phim</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Máy Bay Camera và Phụ Kiện</Link>
                                            &nbsp;/&nbsp;
                                            <Link to="/home">Máy Ảnh</Link>
                                        </p>
                                    </div>
                                    
                                </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}