import React, { useEffect, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation,} from "swiper";
import ProductSummary from "../../../components/common/product/ProductSumary";
import { isSmallScreen, isWideScreen } from "../../../helpers/screen";

function SimilarProduct() {
    const [deal,setDeal] = useState([]);
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
        <div className="product-slide"> 
                { isWideScreen() && 
                <>
                    <h2>Sản Phẩm Tương Tự</h2>
                    <div className="slide-container">
                        <Swiper
                              slidesPerView={5}
                              navigation={true}
                              modules={[Navigation]}
                              className="deal-hot-swiper"
                        >
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
                </>}
                { isSmallScreen() && 
                <>
                    <h2>Sản Phẩm Tương Tự</h2>
                    <div className="slide-container">
                        <Swiper
                              slidesPerView={2}
                              navigation={true}
                              modules={[Navigation]}
                              className="deal-hot-swiper"
                        >
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
                </>}
        </div>
    )
}
export default SimilarProduct;