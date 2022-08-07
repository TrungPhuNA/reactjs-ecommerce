import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay,Lazy } from "swiper";

const settingsSlide = {
    slidesPerView:1,
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
    className:"advertise-swiper"
}
function HomeAdv() {
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
        <div className="cm-width advertise">
            <div className="advertise-list">
                <div className="advertise-slide">
                            <Swiper {...settingsSlide}>
                                {
                                    brand.map((item,index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="advertise-item">
                                                    <a href="/home">
                                                        <div className="position-relative">
                                                            <img className="advertise-img swiper-lazy" src={item.src} alt={item.title}/>
                                                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                                                        </div>
                                                    </a>
                                                </div>
                                                
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                </div>
                <div className="right">
                    <img src="https://salt.tikicdn.com/ts/banner/fe/9e/a9/e42b3b531e92432bab99e933318ac0b7.png"/>
                </div>
                
            </div>
        </div>
    )
}
export default HomeAdv;