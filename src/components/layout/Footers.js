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
                        Hotline: <a href="/home">1900-6035</a>
                        <span className="small-text1">(1000 đ/phút, 8-21h kể cả T7, CN)</span>
                        </p>
                        <a href="/home" className="small-text">Các câu hỏi thường gặp</a>
                        <a href="/home" className="small-text">Gửi yêu cầu hỗ trợ</a>
                        <a href="/home" className="small-text">Hướng dẫn đặt hàng</a>
                        <a href="/home" className="small-text">Phương thức vận chuyển</a>
                        <a href="/home" className="small-text">Chính sách đổi trả</a>
                        <a href="/home" className="small-text">Hướng dẫn trả góp</a>
                        <a href="/home" className="small-text">Chính sách hàng nhập khẩu</a>

                        <p className="security">
                        Hỗ trợ khách hàng: <a href="/home">hotro@tiki.vn</a>
                        </p>
                        <p className="security mb-0">
                        Báo lỗi bảo mật: <a href="/home">security@tiki.vn</a>
                        </p>
                    </div>
                    <div className="block">
                        <h4>Về tiki</h4>
                        <a href="/home" className="small-text">Giới thiệu Tiki</a>
                        <a href="/home" className="small-text">Tuyển dụng</a>
                        <a href="/home" className="small-text">Chính sách bảo mật thanh toán</a>
                        <a href="/home" className="small-text">Chính sách bảo mật thông tin cá nhân</a>
                        <a href="/home" className="small-text">Chính sách giải quyết khiếu nại</a>
                        <a href="/home" className="small-text">Điều khoản sử dụng</a>
                        <a href="/home" className="small-text">Giới thiệu Tiki Xu</a>
                        <a href="/home" className="small-text">SEP - Mua sắm có lời</a>
                        <a href="/home" className="small-text">Tiếp thị liên kết cùng Tiki</a>
                        <a href="/home" className="small-text">Bán hàng doanh nghiệp</a>
                        <a href="/home" className="small-text">Điều kiện vận chuyển</a>
                    </div>
                    <div className="block">
                        <h4>Hợp tác và liên hệ</h4>
                        <a href="/home" className="small-text">Quy chế hoạt động Sàn GDTMĐT</a>
                        <a href="/home" className="small-text">Bán hàng cùng Tiki</a>
                        <h4>Chứng nhận bởi</h4>
                        <div className="d-flex">
                        <a href="/home">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="12"/>
                        </a>
                        <a href="/home">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg" width="83" height="32" alt="test"/>
                        </a>
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
                            <a href="/home">
                            <img src="https://static.wixstatic.com/media/6e68b4_245b828eb23a404b9aba586a8fb0292c~mv2.png/v1/crop/x_39,y_33,w_200,h_99/fill/w_110,h_54,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/images.png" width="68" height="33" alt="test" />
                            </a>
                        </p>
                    </div>
                    <div className="block">
                        <h4>Kết nối với chúng tôi</h4>
                        <p>
                            <a href="/home">
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />
                            </a>
                            <a href="/home">
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />
                            </a>
                            <a href="/home">
                            <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="test" />
                            </a>
                        </p>
                        <h4 className="store-title">Tải ứng dụng trên điện thoại</h4>
                        <div className="d-flex">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/qrcode.png" height="80" width="80" alt="test" />
                            <div className="dowload-app">
                            <a href="/home">
                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png" width="122" alt="test" />
                            </a>
                            <a href="/home">
                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png" width="122" alt="test" />
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
                    <a href="/home">Điện thoại smartphone</a>
                     tới 
                    <a href="/home">Rau củ quả tươi</a>
                    , kèm theo dịch vụ giao hàng siêu tốc TikiNOW, Tiki mang đến cho bạn một trải nghiệm mua sắm online bắt đầu bằng chữ tín. Thêm vào đó, ở Tiki bạn có thể dễ dàng sử dụng vô vàn các tiện ích khác như 
                    <a href="/home">mua thẻ cào, thanh toán hoá đơn điện nước, các dịch vụ bảo hiểm.</a>
                    </p>
                    <h2>Khuyến mãi, ưu đãi tràn ngập</h2>
                    <p>
                    Bạn muốn săn giá sốc, Tiki có <a href="/home">giá sốc mỗi ngày</a>  cho bạn! Bạn là tín đồ của các thương hiệu, các <a href="/home">cửa hàng Official chính hãng</a>
                     đang chờ đón bạn. Không cần săn mã freeship, vì Tiki đã có hàng triệu sản phẩm trong <a href="/home">chương trình Freeship+</a>, không giới hạn lượt đặt, tiết kiệm thời gian vàng bạc của bạn. Mua thêm gói 
                     <a href="/home"> TikiNOW tiết kiệm</a> để nhận 100% free ship 2h & trong ngày, hoặc mua gói TikiNOW cao cấp để nhận được 100% freeship, áp dụng cho 100% sản phẩm, 100% tỉnh thành Việt Nam. Bạn muốn tiết kiệm hơn nữa? Đã có TikiCARD, 
                    <a href="/home"> thẻ tín dụng Tiki hoàn tiền 15%</a> trên mọi giao dịch (tối đa hoàn 600k/tháng)
                    </p>
                </div>
                <div className="style-line"></div>
                <div className="py-3">
                    <h1>Danh mục sản phẩm</h1>
                    <div className="category">
                                <div   className="category-item">
                                    <div className="category-item--title">
                                        <a href="/home">Đồ Chơi - Mẹ  Bé</a>
                                        <p>
                                            <a href="/home">Thời trang cho mẹ và bé</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Đồ chơi</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Đồ dùng cho bé</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Chăm sóc nhà cửa</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Chăm sóc mẹ mang thai, sau sinh</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Dinh dưỡng cho bé</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Tã, bỉm</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Dinh dưỡng cho người lớn</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Dinh dưỡng cho mẹ</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Thực phẩm ăn dặm</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Chuẩn bị mang thai</a>
                                        </p>
                                        <a href="/home">Thực Phẩm Tươi Sống</a>
                                        <p>
                                            <a href="/home">Trái Cây</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Thịt, Trứng</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Cá, thủy hải sản</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Rau củ quả</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Thực phẩm Việt</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Sữa, bơ, phô mai</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Đông lạnh, mát</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Dầu ăn, gia vị</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Gạo mì, nông sản</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Đồ hộp, đóng gói</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Bia, đồ uống</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Thực phẩm chạy</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Dành cho trẻ em</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Bánh kẹo, giỏ quà</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Thức ăn, đồ thú cưng</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Chăm sóc cá nhân</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Chăm sóc nhà cửa</a>
                                        </p>
                                        <a href="/home">Điện Thoại - Máy Tính Bảng</a>
                                        <p>
                                            <a href="/home">Điện thoại Smartphone</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Điện thoại bàn</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Điện thoại phổ thông</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Máy đọc sách</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Máy tính bảng</a>
                                        </p>
                                        <a href="/home">Làm Đẹp - Sức Khỏe</a>
                                        <p>
                                            <a href="/home">Chăm sóc da mặt</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Dụng cụ làm đẹp</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Thực phẩm chức năng</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Trang điếm</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Chăm sóc cơ thể</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Máy Massage & Thiết bị chăm sóc sức khỏe</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Sản phẩm thiên nhiên & khác</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Chăm óc tóc và da đầu</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Chăm sóc cá nhân</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Nước hoa</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Hỗ trợ tình dục</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Bộ sản phẩm làm đẹp</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Dược mỹ phẩm</a>
                                        </p>
                                        <a href="/home">Điện Gia Dụng</a>
                                        <p>
                                            <a href="/home">Đồ dùng nhà bếp</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Thiết bị gia đình</a>
                                        </p>
                                    </div>
                                    <div className="category-item--title">
                                        <a href="/home">Thời trang nữ</a>
                                        <p>
                                            <a href="/home">Áo nữ</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Đầm nữ</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Quần nữ</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Áo liền quần - Bộ trang phục</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Áo khoác nữ</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Đồ ngủ - Đồ mặc nhà nữ</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Chân váy</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Trang phục bơi nữ</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Thời trang bầu và sau sinh</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Thời trang trung niên</a>
                                        </p>
                                        <a href="/home">Thời trang nam</a>
                                        <p>
                                            <a href="/home">Áo thun nam</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Quần nam</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Áo vest - Áo khoác nam</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Áo sơ mi nam</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Đồ lót nam</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Áo hoodie nam</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Đồ ngủ, đồ mặc nhà nam</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Đồ đôi - Đồ gia đình nam</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Áo nỉ - Áo len nam</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Đồ bơi - Đồ đi biển nam</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Quần áo nam trung niên</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Quần áo nam kích cỡ lớn</a>
                                        </p>
                                        <a href="/home">Giày - Dép nữ</a>
                                        <p>
                                            <a href="/home">Giày cao gót</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Dép - Guốc nữ</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Giày thể thao nữ</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Giày sandals nữ</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Giày búp bê</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Giày boots nữ</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Giày lười nữ</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Phụ kiện giày</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Giày đế xuồng nữ</a>
                                        </p>
                                        <a href="/home">Giày - Dép nam</a>
                                        <p>
                                            <a href="/home">Giày lười nam</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Giày tây nam</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Giày thể thao nam</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Dép nam</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Giày sandals nam</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Phụ kiện giày nam</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Giày boots nam</a>
                                        </p>
                                        <a href="/home">Túi thời trang nữ</a>
                                        <p>
                                            <a href="/home">Túi đeo chéo, túi đeo vai nữ</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Ví nữ</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Túi xách tay nữ</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Túi tote nữ</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Phụ kiện túi</a>
                                        </p>
                                        <a href="/home">Túi thời trang nam</a>
                                        <p>
                                            <a href="/home">Ví nam</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Túi đeo chéo nam</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Túi xách công sở nam</a>
                                            &nbsp;/&nbsp;
                                            <a href="/home">Túi bao tử, túi đeo bụng</a>
                                        </p>
                                    </div>
                                    <div className="category-item--title">
                                        <a href="/home">Balo và Vali</a>
                                        <p>
                                            <a>Balo</a>
                                            &nbsp;/&nbsp;
                                            <a>Túi du lịch và phụ kiện</a>
                                            &nbsp;/&nbsp;
                                            <a>Balo, cặp, túi chống sốc laptop</a>
                                            &nbsp;/&nbsp;
                                            <a>Vali, phụ kiện vali </a>
                                        </p>
                                        <a href="/home">Phụ kiện thời trang</a>
                                        <p>
                                            <a>Phụ kiện thời trang nữ</a>
                                            &nbsp;/&nbsp;
                                            <a>Mắt kính</a>
                                            &nbsp;/&nbsp;
                                            <a>Phụ kiện thời trang nam</a>
                                        </p>
                                        <a href="/home">Đồng hồ và Trang sức</a>
                                        <p>
                                            <a>Trang sức</a>
                                            &nbsp;/&nbsp;
                                            <a>Đồng hồ nữ</a>
                                            &nbsp;/&nbsp;
                                            <a>Đồng hồ nam</a>
                                            &nbsp;/&nbsp;
                                            <a>Phụ kiện đồng hồ</a>
                                            &nbsp;/&nbsp;
                                            <a>Đồng hồ trẻ em</a>
                                        </p>
                                        <a href="/home">Laptop - Máy vi tính - Link kiện</a>
                                        <p>
                                            <a>Linh Kiện Máy Tính - Phụ Kiện Máy Tính</a>
                                            &nbsp;/&nbsp;
                                            <a>Thiết Bị Văn Phòng - Thiết Bị Ngoại Vi</a>
                                            &nbsp;/&nbsp;
                                            <a>Thiết Bị Mạng</a> 
                                            &nbsp;/&nbsp;
                                            <a>Thiết Bị Lưu Trữ</a>
                                            &nbsp;/&nbsp;
                                            <a>PC - Máy Tính Bộ</a>
                                            &nbsp;/&nbsp;
                                            <a>Laptop</a>
                                        </p>
                                        <a href="/home">Nhà Cửa - Đời Sống</a>
                                        <p>
                                            <a>Trang trí nhà cửa</a>
                                            &nbsp;/&nbsp;
                                            <a>Dụng cụ nhà bếp</a>
                                            &nbsp;/&nbsp;
                                            <a>Sửa chữa nhà cửa</a>
                                            &nbsp;/&nbsp;
                                            <a>Ngoài trời &amp; sân vườn</a>
                                            &nbsp;/&nbsp;
                                            <a>Nội thất</a>
                                            &nbsp;/&nbsp;
                                            <a>Đèn &amp; thiết bị chiếu sáng</a>
                                            &nbsp;/&nbsp;
                                            <a>Đồ dùng và thiết bị nhà tắm</a>
                                            &nbsp;/&nbsp;
                                            <a>Đồ dùng phòng ăn</a>
                                            &nbsp;/&nbsp;
                                            <a>Đồ dùng phòng ngủ</a>
                                            &nbsp;/&nbsp;
                                            <a>Đồ thờ cúng</a>
                                            &nbsp;/&nbsp;
                                            <a>Nhạc cụ</a>    
                                            &nbsp;/&nbsp;
                                            <a>Hoa tươi và cây cảnh</a>
                                        </p>
                                        <a href="/home">Bách Hóa Online</a>
                                        <p>
                                            <a>Chăm sóc thú cưng</a>
                                            &nbsp;/&nbsp;
                                            <a>Đồ uống - Pha chế dạng bột</a>
                                            &nbsp;/&nbsp;
                                            <a>Thực phẩm Đóng hộp và Khô</a>
                                            &nbsp;/&nbsp;
                                            <a>Gia Vị và Chế Biến</a>
                                            &nbsp;/&nbsp;
                                            <a>Đậu &amp; Hạt Các Loại</a>
                                            &nbsp;/&nbsp;
                                            <a>Đồ Ăn Vặt</a>
                                            &nbsp;/&nbsp;
                                            <a>Sữa và các Sản phẩm từ sữa</a>
                                            &nbsp;/&nbsp;
                                            <a>Đồ Uống Không Cồn</a>
                                            &nbsp;/&nbsp;
                                            <a>Đồ uống có cồn</a>
                                            &nbsp;/&nbsp;
                                            <a>Bộ quà tặng</a>
                                        </p>
                                    </div>
                                    <div className="category-item--title">
                                        <a href="/home">Hàng Quốc Tế</a>
                                        <p>
                                            <a>Nhà Cửa - Đời Sống</a>
                                            &nbsp;/&nbsp;
                                            <a>Thời Trang</a>
                                            &nbsp;/&nbsp;
                                            <a>Ô tô, xe máy, xe đạp</a>
                                            &nbsp;/&nbsp;
                                            <a>Thiết Bị Số - Phụ Kiện Số</a> 
                                            &nbsp;/&nbsp;
                                            <a>Thể thao - Dã ngoại</a>
                                            &nbsp;/&nbsp;
                                            <a>Làm Đẹp - Sức Khỏe</a>
                                            &nbsp;/&nbsp;
                                            <a>Sách, Văn phòng phẩm &amp; Quà lưu niệm</a>
                                            &nbsp;/&nbsp;
                                            <a>Mẹ &amp; Bé</a>
                                            &nbsp;/&nbsp;
                                            <a>Điện gia dụng</a>
                                            &nbsp;/&nbsp;
                                            <a>Bách hóa online</a>
                                            &nbsp;/&nbsp;
                                            <a>Máy Ảnh - Máy Quay Phim</a>
                                            &nbsp;/&nbsp;
                                            <a>Laptop &amp; Máy Vi Tính</a>
                                            &nbsp;/&nbsp;
                                            <a>Sản phẩm - thiết bị công nghiệp</a>
                                            &nbsp;/&nbsp;
                                            <a>Tivi &amp; Thiết Bị Nghe Nhìn</a>
                                            &nbsp;/&nbsp;
                                            <a>Điện Thoại - Máy Tính Bảng</a>
                                        </p>
                                        <a href="/home">Thiết Bị Số - Phụ Kiện Số</a>
                                        <p>
                                            <a>Phụ Kiện Điện Thoại và Máy Tính Bảng</a>
                                            &nbsp;/&nbsp;
                                            <a>Phụ kiện máy tính và Laptop</a>
                                            &nbsp;/&nbsp;
                                            <a>Thiết Bị Âm Thanh và Phụ Kiện</a>
                                            &nbsp;/&nbsp;
                                            <a>Thiết Bị Thông Minh và Linh Kiện Điện Tử</a>
                                            &nbsp;/&nbsp;
                                            <a>Thiết Bị Đeo Thông Minh và Phụ Kiện</a>
                                            &nbsp;/&nbsp;
                                            <a>Thiết Bị Chơi Game và Phụ Kiện</a>
                                        </p>
                                        <a href="/home">Voucher - Dịch vụ </a>
                                        <p>
                                            <a>Thanh toán hóa đơn</a>
                                            &nbsp;/&nbsp;
                                            <a>Khóa học</a>
                                            &nbsp;/&nbsp;
                                            <a>Du lịch - Khách sạn</a>
                                            &nbsp;/&nbsp;
                                            <a>Spa &amp; Làm đẹp</a>
                                            &nbsp;/&nbsp;
                                            <a>Dịch vụ khác</a>
                                            &nbsp;/&nbsp;
                                            <a>Nhà hàng - Ăn uống</a>
                                            &nbsp;/&nbsp;
                                            <a>Sự kiện - Giải trí</a>
                                            &nbsp;/&nbsp;
                                            <a>Nha khoa - Sức khỏe</a>
                                            &nbsp;/&nbsp;
                                            <a>Phiếu quà tặng</a>
                                            &nbsp;/&nbsp;
                                            <a>Sim số - Thẻ cào - Thẻ game</a>
                                        </p>
                                        <a href="/home">Ô Tô - Xe Máy - Xe Đạp</a>
                                        <p>
                                            <a>Phụ kiện - Chăm sóc xe</a>
                                            &nbsp;/&nbsp;
                                            <a>Xe điện</a>
                                            &nbsp;/&nbsp;
                                            <a>Xe đạp</a>
                                            &nbsp;/&nbsp;
                                            <a>Xe máy</a>
                                            &nbsp;/&nbsp;
                                            <a>Ô tô</a>
                                            &nbsp;/&nbsp;
                                            <a>Xe Scooter</a>
                                            &nbsp;/&nbsp;
                                            <a>Dịch vụ, lắp đặt</a>
                                        </p>
                                        <a href="/home">Nhà Sách Tiki</a>
                                        <p>
                                            <a>Sách tiếng Việt</a>
                                            &nbsp;/&nbsp;
                                            <a>Văn phòng phẩm</a>
                                            &nbsp;/&nbsp;
                                            <a>Quà lưu niệm</a>
                                            &nbsp;/&nbsp;
                                            <a>English Books</a>
                                        </p>
                                    </div>
                                    <div className="category-item--title">
                                        <a href="/home">Điện Tử - Điện Lạnh</a>
                                        <p>
                                            <a>Âm thanh &amp; Phụ kiện Tivi</a>
                                            &nbsp;/&nbsp;
                                            <a>Phụ kiện điện lạnh</a>
                                            &nbsp;/&nbsp;
                                            <a>Tủ lạnh</a>
                                            &nbsp;/&nbsp;
                                            <a>Máy lạnh - Máy điều hòa</a>
                                            &nbsp;/&nbsp;
                                            <a>Máy giặt</a>
                                            &nbsp;/&nbsp;
                                            <a>Tủ đông - Tủ mát</a>
                                            &nbsp;/&nbsp;
                                            <a>Tivi</a>
                                            &nbsp;/&nbsp;
                                            <a>Máy nước nóng</a>
                                            &nbsp;/&nbsp;
                                            <a>Máy rửa chén</a>
                                            &nbsp;/&nbsp;
                                            <a>Máy sấy quần áo</a>
                                            &nbsp;/&nbsp;
                                            <a>Tủ ướp rượu</a>
                                        </p>
                                        <a href="/home">Thể THao - Dã Ngoại</a>
                                        <p>
                                            <a>Trang phục thể thao nữ</a>
                                            &nbsp;/&nbsp;
                                            <a>Trang phục thể thao nam</a>
                                            &nbsp;/&nbsp;
                                            <a>Đồ dùng dã ngoại</a>
                                            &nbsp;/&nbsp;
                                            <a>Giày thể thao nam</a>
                                            &nbsp;/&nbsp;
                                            <a>Phụ kiện thể thao</a>
                                            &nbsp;/&nbsp;
                                            <a>Dụng cụ - thiết bị tập thể thao</a>
                                            &nbsp;/&nbsp;
                                            <a>Các môn thể thao khác</a>
                                            &nbsp;/&nbsp;
                                            <a>Dụng cụ câu cá</a>
                                            &nbsp;/&nbsp;
                                            <a>Thể thao dưới nước</a>
                                            &nbsp;/&nbsp;
                                            <a>Các môn thể thao đồng đội</a>
                                            &nbsp;/&nbsp;
                                            <a>Các môn thể thao chơi vợt</a>
                                            &nbsp;/&nbsp;
                                            <a>Các môn thể thao đối kháng </a>
                                            &nbsp;/&nbsp;
                                            <a>Giày thể thao nữ</a>
                                            &nbsp;/&nbsp;
                                            <a>Thực phẩm bổ sung năng lượng</a>
                                            &nbsp;/&nbsp;
                                            <a>Dụng cụ leo núi</a>

                                        </p>
                                        <a href="/home">Máy Ảnh - Máy Quay Phim</a>
                                        <p>
                                            <a>Phụ Kiện Máy Ảnh, Máy Quay</a>
                                            &nbsp;/&nbsp;
                                            <a>Camera Giám Sát</a>
                                            &nbsp;/&nbsp;
                                            <a>Thiết Bị Ánh Sáng</a>
                                            &nbsp;/&nbsp;
                                            <a>Camera Hành Trình - Action Camera và Phụ Kiện</a>
                                            &nbsp;/&nbsp;
                                            <a>Balo - Túi Đựng - Bao Da</a>
                                            &nbsp;/&nbsp;
                                            <a>Ống Kính - Ống Ngắm</a>
                                            &nbsp;/&nbsp;
                                            <a>Ống Kính (Lens)</a>
                                            &nbsp;/&nbsp;
                                            <a>Thiết Bị Quay Phim</a>
                                            &nbsp;/&nbsp;
                                            <a>Máy Bay Camera và Phụ Kiện</a>
                                            &nbsp;/&nbsp;
                                            <a>Máy Ảnh</a>
                                        </p>
                                    </div>
                                    
                                </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}