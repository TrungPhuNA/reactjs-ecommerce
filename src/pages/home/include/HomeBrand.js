import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay,Lazy } from "swiper";
import Images from "../../../components/Image/Images";

const settingsSlide = {
    slidesPerView:2,
    spaceBetween:0,
    loop:true,
    lazy:true,
    pagination:{
      clickable: true
    },
    autoplay:{
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation:true,
    modules:[Pagination, Navigation,Autoplay,Lazy],
    className:"brand-swiper"
}
function HomeBrand() {
    const arr_6 = Array.from(Array(6).keys());
    const [brand,setBrand] = useState([]);

    useEffect(() => {
        const data = [
            {
               src:"https://salt.tikicdn.com/cache/w750/ts/banner/be/d8/ef/8f91abb908bf17e1b8c088e8b34264cc.jpg",
               title:'Ngon'
            },
            {
               src:"https://salt.tikicdn.com/cache/w750/ts/banner/be/d8/ef/8f91abb908bf17e1b8c088e8b34264cc.jpg",
               title:'Ngon'
            },
            {
                src:"https://salt.tikicdn.com/cache/w750/ts/banner/be/d8/ef/8f91abb908bf17e1b8c088e8b34264cc.jpg",
                title:'Ngon'
             },
             {
                src:"https://salt.tikicdn.com/cache/w750/ts/banner/be/d8/ef/8f91abb908bf17e1b8c088e8b34264cc.jpg",
                title:'Ngon'
             },
             {
                src:"https://salt.tikicdn.com/cache/w750/ts/banner/be/d8/ef/8f91abb908bf17e1b8c088e8b34264cc.jpg",
                title:'Ngon'
             },
             {
                src:"https://salt.tikicdn.com/cache/w750/ts/banner/be/d8/ef/8f91abb908bf17e1b8c088e8b34264cc.jpg",
                title:'Ngon'
             },
             {
                src:"https://salt.tikicdn.com/cache/w750/ts/banner/be/d8/ef/8f91abb908bf17e1b8c088e8b34264cc.jpg",
                title:'Ngon'
             },
            
          ]
    setBrand(data);
    },[])
    return(
        <div className="cm-width">
            <div className="famous-brand">
                <div className="famous-brand--header">
                    <div className="main-title d-flex fs-20">
                        <Images src="https://salt.tikicdn.com/ts/upload/33/0f/67/de89fab36546a63a8f3a8b7d038bff81.png" alt="aaa" />
                        <div className="main-title__text">Thương Hiệu Chính Hãng</div>
                    </div>
                    <Link to="/" className="see-more">Xem thêm</Link>
                </div>
                <div className="brand-slide">
                            <Swiper {...settingsSlide}>
                                {
                                    brand.map((item,index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="brand-item">
                                                    <Link to="/">
                                                        <div className="position-relative">
                                                            <Images src={item.src} alt={item.title}/>
                                                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                </div>
                <div className="famous-brand--cart">
                    <div className="cart-wrapper">
                        <div className="cart-wrapper--list">
                            <div className="slick-track">
                                {arr_6.map(index => {
                                    return (
                                        <>
                                            <div className="slick-slide">
                                                <Link to="/" className="text">
                                                    <div className="position-relative">
                                                        <Images src="https://salt.tikicdn.com/ts/banner/4d/5b/21/23b24cbfaac38c74a43fef60343194e8.png" alt="âds" />
                                                        <p className="brand__title">Giảm đến 50%</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </>
                                    )
                                })}  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeBrand;