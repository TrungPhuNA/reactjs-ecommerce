import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay, Lazy } from "swiper";
import Images from "../../../components/Image/Images";

const settingsSlide = {
  slidesPerView: 4,
  spaceBetween: 0,
  loop: true,
  lazy: true,
  pagination: {
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: true,
  modules: [Pagination, Navigation, Autoplay, Lazy],
  className: "brand-swiper",
};
function HomeBrand() {
  const arr_6 = Array.from(Array(6).keys());
  const [brand, setBrand] = useState([]);

  useEffect(() => {
    const data = [
      {
        // src: "https://cdn3.dhht.vn/wp-content/uploads/2021/09/anhbia-10-thuong-hieu-giay-viet-nam-duoc-ua-chuong-nhat-hien-nay.jpg",
        src: "https://theme.hstatic.net/1000110092/1000546214/14/brand_img1.png?v=71",
        title: "Ngon",
      },
      {
        // src: "https://bizweb.dktcdn.net/thumb/grande/100/347/092/articles/giay-sneaker-la-gi-1.jpg?v=1599104206663",
        src: "https://theme.hstatic.net/1000110092/1000546214/14/brand_img2.png?v=71",
        title: "Ngon",
      },
      {
        // src: "https://drake.vn/image/catalog/H%C3%ACnh%20content/hinh-anh-giay-vans/hinh-anh-giay-vans-9.jpg",
        src: "https://theme.hstatic.net/1000110092/1000546214/14/brand_img4.png?v=71",
        title: "Ngon",
      },
      {
        // src: "https://giaygiare.vn/upload/images/top-5-mau-giay-adidas-nam-tot-nhat-nam-2019.jpg",
        src: "https://theme.hstatic.net/1000110092/1000546214/14/brand_img5.png?v=71",
        title: "Ngon",
      },
      {
        // src: "https://lh5.googleusercontent.com/Ogj-eOA4EIuOO-NgGjCwd40xmpcxUSQ0mFHPqmsmJCCNKHbzFGu23HBFsatpebPU8rSrYTG2mnJYSqI9AGnAzEWDK8pjWUEDIV_b7hdiRhA2yfDNbf33z8tZ9K3iEMJQ7F8Tmfls=s0",
        src: "https://theme.hstatic.net/1000110092/1000546214/14/brand_img6.png?v=71",
        title: "Ngon",
      },
      {
        // src: "https://cdn.vuahanghieu.com/unsafe/0x0/left/top/smart/filters:quality(90)/https://cdn.vuahanghieu.com/unsafe/823x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/news/2020/12/lich-su-hinh-thanh-va-phat-trien-cua-ong-trum-adidas-21122020095928.jpg",
        src: "https://theme.hstatic.net/1000110092/1000546214/14/brand_img7.png?v=71",
        title: "Ngon",
      },
      {
        // src: "https://saigonsneaker.com/wp-content/uploads/2018/09/new-balance-crt-300-do-xanh-574-996-trang-xam-navy-saigon-sneaker.jpg",
        src: "https://cdn.elly.vn/uploads/2021/05/09222258/nhung-dieu-thu-vi-ve-giay-new-balance.2.jpg",
        title: "Ngon",
      },
    ];
    setBrand(data);
  }, []);
  return (
    <div className="cm-width">
      <div className="famous-brand">
        <div className="famous-brand--header">
          <div className="main-title d-flex fs-20">
            <Images
              src="https://salt.tikicdn.com/ts/upload/33/0f/67/de89fab36546a63a8f3a8b7d038bff81.png"
              alt="aaa"
            />
            <div className="main-title__text">Thương Hiệu Chính Hãng</div>
          </div>
          <Link to="/" className="see-more">
            Xem thêm
          </Link>
        </div>
        <div className="brand-slide">
          <Swiper {...settingsSlide}>
            {brand.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="brand-item">
                    <Link to="/">
                      <div className="position-relative">
                        <Images src={item.src} alt={item.title} />
                        <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
export default HomeBrand;
