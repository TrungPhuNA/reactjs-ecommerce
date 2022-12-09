import React, {useEffect, useState} from 'react';
import Container from './include/Container';
import Products from './include/Products';
import productApi from '../../api/ProductService';

import {isWideScreen } from "../../helpers/screen";
import MobileCategoryHeader from "../category/include/mobile/MobileCategoryHeader";
import {Link, useParams, useSearchParams} from 'react-router-dom';

import Skeleton from 'react-loading-skeleton';
import SidebarFilter from '../../components/common/sidebar/SidebarFinter';

function SearchPage() {

    let { searchInput } = useParams();

    const [loadingProduct, setLoadingProduct] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();

    const [products, setProducts] = useState([]);

    const getSearchProduct = async () => {
        const response = await productApi.getListsProducts()
        if(response.status === 200) {
            setProducts(response.data);
            setLoadingProduct(false);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getSearchProduct();
    }, [])

    const handleChangeSort = (event) => {
        let sortType = event.currentTarget.getAttribute('data-sort-type');
        let sortValue = event.currentTarget.getAttribute('data-sort-value');
        const elementLinks = [...document.querySelectorAll('.tabs-list')];

        elementLinks.map((tl) => {
            tl.classList.remove('active');
        });

        event.currentTarget.classList.add("active");
        if (sortType === 'price')
        {
            setSearchParams({price: sortValue});
        }
    }

    return (
        <main className={isWideScreen() ? 'desktop' : 'mobile'}>
            {isWideScreen() &&
                <>
                    <div className="container">
                        <div className="category-title">
                            <Link to='/'>Trang chủ</Link>
                            <img alt="/" src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNDY3LjQgMzcxLjc0LTEwNS4xNC0xMDUuMTMtMjAuMzYzIDE5Ljg5MSA4NS4yNDYgODUuMjQyLTg1LjI0NiA4NC43NzMgMjAuMzYzIDIwLjM2MyAxMDUuMTQtMTA1LjE0Ii8+Cjwvc3ZnPgo='></img>
                            <h4>{ searchInput || 'Chưa có dữ liệu' }</h4>
                        </div>
                        <div className="category-view">
                            <SidebarFilter />
                            <div className="category-right">
                                <div className="search-summary">
                                    <div className="title">
                                        <h1>Kết quả tìm kiếm cho `{ searchInput }`</h1>
                                    </div>

                                    {/*<div className="adv-slide">*/}
                                    {/*    <Swiper {...settingsSlide}>*/}
                                    {/*        {*/}
                                    {/*            adv.map((item,index) => {*/}
                                    {/*                return(*/}
                                    {/*                    <SwiperSlide key={index}>*/}
                                    {/*                        {<img alt="/" src={item.src}/>}*/}
                                    {/*                    </SwiperSlide>*/}
                                    {/*                )*/}
                                    {/*            })*/}
                                    {/*        }*/}
                                    {/*    </Swiper>*/}
                                    {/*</div>*/}

                                    <div className="search-summary-category">
                                        <div className="summary-top">
                                            <div className="top-tabs">
                                                <div className="tabs-list">
                                                    { isWideScreen() &&
                                                        <>
                                                            <Link to="" onClick={handleChangeSort} className="tabs-list" data-sort-type="price" data-sort-value={"desc"} >Giá Thấp Đến Cao</Link>
                                                            <Link to="" onClick={handleChangeSort} className="tabs-list" data-sort-type="price" data-sort-value={"asc"} >Giá Cao Đến Thấp</Link>
                                                        </>
                                                    }
                                                    { !isWideScreen() &&
                                                        <>
                                                            <Link to="category" className="active">Phổ Biến</Link>
                                                            <Link to="category" className="active">Bán Chạy</Link>
                                                            <Link to="category" className="active">Hàng Mới</Link>
                                                            <Link to="category" className="active">Giá <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.43306 0.308058C3.67714 0.0639806 4.07286 0.0639806 4.31694 0.308058L6.81694 2.80806C7.06102 3.05214 7.06102 3.44786 6.81694 3.69194C6.57286 3.93602 6.17714 3.93602 5.93306 3.69194L4.5 2.25888V10.125C4.5 10.4702 4.22018 10.75 3.875 10.75C3.52982 10.75 3.25 10.4702 3.25 10.125V2.25888L1.81694 3.69194C1.57286 3.93602 1.17714 3.93602 0.933058 3.69194C0.688981 3.44786 0.688981 3.05214 0.933058 2.80806L3.43306 0.308058ZM9.5 11.7411V3.25C9.5 2.90482 9.77982 2.625 10.125 2.625C10.4702 2.625 10.75 2.90482 10.75 3.25V11.7411L12.1831 10.3081C12.4271 10.064 12.8229 10.064 13.0669 10.3081C13.311 10.5521 13.311 10.9479 13.0669 11.1919L10.5669 13.6919C10.3229 13.936 9.92714 13.936 9.68306 13.6919L7.18306 11.1919C6.93898 10.9479 6.93898 10.5521 7.18306 10.3081C7.42714 10.064 7.82286 10.064 8.06694 10.3081L9.5 11.7411Z" fill="#38383D"></path></svg></Link>
                                                        </>
                                                    }
                                                </div>
                                            </div>

                                            <div className="search-navigate">
                                                <div className="paging">
                                                    <span className="current">1</span>
                                                    &#47;
                                                    <span className="last">50</span>
                                                </div>

                                                <div className="list-arrow">
                                                    <img alt="/" src="https://salt.tikicdn.com/ts/brickv2og/b0/c0/37/55863dd4fac41fc53a8ad943545973b1.png"/>
                                                    <img className="right" alt="/" src="https://salt.tikicdn.com/ts/brickv2og/a8/b5/3b/3c2faee1a219b651e8bf39b1e57b9bbc.png"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="summary-bottom">
                                            <p className="itemsticky">
                                                <img alt="/" src="https://salt.tikicdn.com/ts/upload/b3/21/cf/c6525bcd44b3bb1b793277cc98487799.png" height="12" width="38.5"/>
                                            </p>
                                            <p className="itemsticky">
                                                <img alt="/" src="https://salt.tikicdn.com/ts/upload/08/41/4d/70e65420f4cd6203d36865b87adc2bf3.png" height="12" width="31"/>
                                            </p>
                                            <p className="itemsticky">
                                                <img alt="/" src="https://salt.tikicdn.com/ts/upload/e9/14/26/52318ad1543ad9d3ee5b633b3df0750d.png" height="12" width="62"/>
                                            </p>
                                        </div>
                                    </div>

                                    { loadingProduct === true ? (
                                        <div className="product-container">
                                            <div className="suggestion__product">
                                                <div className="content">
                                                    <div className="" style={{ display:"flex", padding: "0 10px"}}>
                                                        <div className="dashboard-product--item" style={{ marginTop:"10px", marginRight: "10px"}}>
                                                            <Skeleton height={100} />
                                                            <Skeleton height={10} style={{ marginTop: "10px"}} />
                                                            <Skeleton height={10} style={{ marginTop: "5px"}} />
                                                            <Skeleton height={10} style={{ marginTop: "5px"}} />
                                                        </div>
                                                        <div className="dashboard-product--item" style={{ marginTop:"10px", marginRight: "10px"}}>
                                                            <Skeleton height={100} />
                                                            <Skeleton height={10} style={{ marginTop: "10px"}} />
                                                            <Skeleton height={10} style={{ marginTop: "5px"}} />
                                                            <Skeleton height={10} style={{ marginTop: "5px"}} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <Products products={products} searchInput={searchInput}/>
                                            
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }

            {!isWideScreen() &&
                <>
                    <h2>Mobile</h2>
                    <>
                        <MobileCategoryHeader/>
                        <Container/>
                    </>
                </>
            }
        </main>


    )
}

export default SearchPage;
