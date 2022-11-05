import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Navigation } from "swiper";
import categoryApi from '../../../api/CategoryService';

const settingsSlide = {
    slidesPerView: 10,
    navigation:true,
    modules:[Navigation],
    className:"category-swiper",
}
function HomeCategory() {
    const [categoriesHome,SetCategoriesHome] = useState([]);
    const [loadingCategoryHome, setLoadingCategoryHome] = useState(true);
    useEffect(() => {
        getCategoriesHome();
    },[])

    const getCategoriesHome = async (params) => {
        const response = await categoryApi.getListsCategory(params);
        console.log('-------------- getCategoriesHome@response: ', response);
        SetCategoriesHome(response.data);
        setLoadingCategoryHome(false);
    }

    return(
        <div className="category">
            { loadingCategoryHome === true ? (
                <div className="loading-category category-swiper" style={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <Skeleton style={{ marginRight: "10px"}} count={1} height={20} width={100}/>
                    <Skeleton style={{ marginRight: "10px"}}count={1} height={20} width={100}/>
                    <Skeleton style={{ marginRight: "10px"}} count={1} height={20} width={100}/>
                    <Skeleton style={{ marginRight: "10px"}} count={1} height={20} width={100}/>
                    <Skeleton style={{ marginRight: "10px"}} count={1} height={20} width={100}/>
                </div>
            ) : (
                <Swiper {...settingsSlide}>
                    {
                        categoriesHome.length > 0 && categoriesHome.map((item,index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="category-item">
                                        <Link to="/category">
                                            <div className="position-relative">
                                                <p>{item.c_name}</p>
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            )}
        </div>
    )
}
export default HomeCategory;
