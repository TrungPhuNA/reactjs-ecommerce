import React, { useEffect, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation,Pagination, Autoplay, Lazy} from "swiper";
import { useCountdown } from "../../../hook/useCountDown";
import ProductSummary from "../../../components/common/product/ProductSumary";
import { isWideScreen } from "../../../helpers/screen";

const settingsSlide = {
    slidesPerView:5,
    navigation:true,
    modules:[Navigation],
    className:"deal-hot-swiper"
}
const settingSlide2 = {
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
    modules:[Pagination,Autoplay,Lazy],
    className:"brand-swiper"
}
function HomeDeal() {

    const [deal,setDeal] = useState([]);
    const [hours, minutes, seconds] = useCountdown('2022-10-7');
    const deal_right = [
        {
            id:1,
            type:1,
            name:'video',
            src:"https://sand.tikicdn.com/ts/asavideo/19/0c/48/fdce6602418b5bd48113e4e7a7f10335.mp4",
            
        },
        {
            id:2,
            type:2,
            name:'img',
            src:"https://salt.tikicdn.com/ts/upload/ee/f1/10/bc58a1bcbf5ff92206bff7a3c56ab89b.png",
            
        }
    ]
    
    
    useEffect(() => {
        const data = [
            {
              src:"https://salt.tikicdn.com/ts/category/1e/8c/08/d8b02f8a0d958c74539316e8cd437cbd.png",
              title:'Ngon',
              price:23000,
              sale:23,
              sold:0
            },
            {
              src:"https://salt.tikicdn.com/cache/280x280/ts/product/00/01/c7/c0b1ae113ff90cdbf0b848c441b99adb.jpg",
              title:'Giày thể thao nam',
              price:23000,
              sale:23,
              sold:4
            },
            {
              src:"https://salt.tikicdn.com/cache/280x280/ts/product/ad/50/99/93c55f64df94b3809e13e0648eec55f2.jpg",
              title:'Balo',
              price:23000,
              sale:23,
              sold:4
            },
            {
              src:"https://salt.tikicdn.com/cache/280x280/ts/product/bd/15/a6/1bdc5f510d933bb4260e19552781a3e7.jpg",
              title:'Tất, vớ nam',
              price:23000,
              sale:23,
              sold:4
            },
            {
              src:"https://salt.tikicdn.com/cache/280x280/ts/product/e4/a3/52/4845a31ebb7c0b75766ef9272506f236.jpg",
              title:'Sách tư duy - kỹ năng sống',
              price:23000,
              sale:23,
              sold:4
            },
            {
              src:"https://salt.tikicdn.com/cache/280x280/ts/product/34/3f/38/a6ca7dd555efc59607e8b0427cf8da61.jpg",
              title:'Truyện Tranh, Manga, Comic',
              price:23000,
              sale:23,
              sold:4
            },
            {
              src:"https://salt.tikicdn.com/cache/280x280/ts/product/0c/62/39/499c08d6ec13cd33b33ee601d9e4251e.jpg",
              title:'Điện thoại Smartphone',
              price:23000,
              sale:23,
              sold:4
            },
            {
              src:"https://salt.tikicdn.com/cache/280x280/ts/product/5e/18/24/2a6154ba08df6ce6161c13f4303fa19e.jpg",
              title:'Tiểu Thuyết',
              price:23000,
              sale:23,
              sold:4
            },
          ]
    setDeal(data);

    },[]);
    return(
        <div className="cm-width my-2 d-flex">
            <div className="deal-hot"> 
                    { isWideScreen() && 
                        <div className="deal-hot--left">
                            <div className="header">
                                <div className="header-left">
                                    <div>
                                        <img alt="flash-deal12" className="flash-deal" src="https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg"/>
                                        <img alt="flash-deal2" width="21" className="flash-deal middle" src="https://frontend.tikicdn.com/_desktop-next/static/img/dealFlashIcon.svg"/>
                                        <img alt="flash-deal3" className="flash-deal" src="https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg"/>
                                    </div>
                                    <div>
                                        <Link to="/">
                                            <div className="deal-time">
                                                {hours+minutes+seconds > 0 && 
                                                <>
                                                <span>{hours}</span>:<span className="min">{minutes}</span>:<span>{seconds}</span>
                                                </>  

                                                }
                                                
                                            </div>
                                        </Link >
                                    </div>
                                </div>
                                <Link to="/">Xem thêm</Link>
                            </div>
                            <div className="body">
                                <Swiper {...settingsSlide}>
                                            {
                                                deal.map((item,index) => {
                                                    return (
                                                        <SwiperSlide key={index}>
                                                            <ProductSummary disCount={item.sale} deal={true} price={item.price} sold={item.sold}/>
                                                        </SwiperSlide>
                                                    )
                                                })
                                            }
                                </Swiper>
                            </div>
                    </div>
                    }
                <div className="deal-hot--right">
                <Swiper {...settingSlide2}>
                    {
                        deal_right.map((item,index) => {
                            return(
                                <SwiperSlide key={index}>
                                  {item.type === 2 && <img src={item.src} height="274" width="488" alt="1212"/>}  
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                </div>
                    
            </div>
        </div>
    )
}
export default HomeDeal