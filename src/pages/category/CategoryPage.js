import React, { useEffect, useState } from 'react';
import Category from './include/desktop/Category';
// import Container from './include/desktop/Container';
import Products from './include/desktop/Products';
import { isWideScreen } from "../../helpers/screen";
// import MobileCategoryHeader from "./include/mobile/MobileCategoryHeader";
import { useParams } from 'react-router';
import categoryApi from '../../api/CategoryService';
import productApi from '../../api/ProductService';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import SidebarFilter from '../../components/common/sidebar/SidebarFinter';

function CategoryPage() {

    let { id } = useParams();
    const navigate = useNavigate();
    const [category, setCategory] = useState(null);
    const [products, setProducts] = useState([]);
    const [productsAsc, setProductsAsc] = useState([]);
    const [productsDesc, setProductsDesc] = useState([]);

    const [loadingProduct, setLoadingProduct] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();

    const [show, setShow] = useState(true);
    const [sortAsc, setSortAsc] = useState(false);
    const [sortDesc, setSortDesc] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        getCategoryDetail().then(r => {});
        getProductsByCategory().then(r => {});
        setShow(true);
        setSortAsc(false);
        setSortDesc(false);
    }, [id])

    const getCategoryDetail = async () => {
        const response = await categoryApi.findById(id);
        if (response.status === 200) {
            setCategory(response.data);
        }
    }

    const getProductsByCategory = async () => {
        let params = {
            category_id: id,
            page_size: 300,
        }
        const response = await productApi.getListsProducts(params);
        if (response.status === 200) {
            setProducts(response.data);
            setLoadingProduct(false);
        }
    }

    const handleChangeSort = (event) => {
        let sortType = event.currentTarget.getAttribute('data-sort-type');
        let sortValue = event.currentTarget.getAttribute('data-sort-value');
        const elementLinks = [...document.querySelectorAll('.tabs-list')];

        elementLinks.map((tl) => {
            tl.classList.remove('active');
        });

        // event.currentTarget.classList.add("active");
        if (sortType === 'price') {
            let pramsPrice = { 'price': sortValue };
            setSearchParams({ ...pramsPrice })
            console.log('-------- sortValue', sortValue);
        }

        if (sortValue === 'asc') {
            handleSortAsc();
        } else if (sortValue === 'desc') {
            handleSortDesc();
        } else {
            event.currentTarget.classList.remove("active");
        }
    }

    const handleSortAsc = () => {
        const sortedArr = [...products].sort((a, b) => a.pro_price > b.pro_price ? 1 : -1);
        setProductsAsc(sortedArr);
        console.log('--Asc', productsAsc);
        setSortAsc(!sortAsc);
        setSortDesc(false);
        setShow(!show);
        if (sortDesc === true)
            setShow(false)
    }

    const handleSortDesc = () => {
        const sortedArr = [...products].sort((a, b) => a.pro_price > b.pro_price ? 1 : -1).reverse();
        setProductsDesc(sortedArr);
        console.log('--Desc', productsDesc);
        setSortAsc(false);
        setSortDesc(!sortDesc);
        setShow(!show)
        if (sortAsc === true)
            setShow(false)
    }


    return (
        <main className={isWideScreen() ? 'desktop' : 'mobile'}>
            {isWideScreen() &&
                <>
                    <div className="container">
                        <Category category={category} />
                        <div className="category-view">
                            <SidebarFilter />
                            <div className="category-right">
                                <div className="search-summary">
                                    <div className="title">
                                        <h1>{category?.c_name || <Skeleton count={1} />}</h1>
                                    </div>

                                    <div className="search-summary-category">
                                        <div className="summary-top">
                                            <div className="top-tabs">
                                                <div className="tabs-list">
                                                    {isWideScreen() &&
                                                        <>
                                                            <Link to={`${sortAsc === false ? `?price=asc` : '?'}`}
                                                                // {`?${searchParams}`}
                                                                onClick={handleChangeSort}
                                                                className={`tabs-list ${sortAsc === true ? 'active' : ''}`}
                                                                data-sort-type="price"
                                                                data-sort-value={"asc"}
                                                            >
                                                                Giá Thấp Đến Cao
                                                            </Link>
                                                            <Link to={`${sortDesc === false ? `?price=desc` : '?'}`}
                                                                // {`?${searchParams}`}
                                                                onClick={handleChangeSort}
                                                                className={`tabs-list ${sortDesc === true ? 'active' : ''}`}
                                                                data-sort-type="price"
                                                                data-sort-value={"desc"}
                                                            >
                                                                Giá Cao Đến Thấp
                                                            </Link>
                                                        </>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Products
                                        products={products}
                                        id={id}
                                        productsAsc={productsAsc}
                                        productsDesc={productsDesc}
                                        show={show}
                                        sortAsc={sortAsc}
                                        sortDesc={sortDesc}
                                        loadingProduct={loadingProduct}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }

            {!isWideScreen() &&
                <>
                <div className="container">
                    <div className="mobile__header">
                        <div className="mobile__header--logo">
                            <Link
                            to="/"
                            title="free-ship"
                            style={{ scale: "3", marginBottom: "5px", marginLeft: 40, marginTop: 0 }}
                            >
                            <img src={"/logo.svg"} alt="free" width="40" />
                            </Link>
                            <div>
                            <Link to="/" title="free-ship">
                                <img
                                src="https://salt.tikicdn.com/ts/upload/70/44/6c/a5ac520d156fde81c08dda9c89afaf37.png"
                                alt="free"
                                width="24"
                                height="24"
                                />
                            </Link>
                            </div>
                        </div>
                        <div className="mobile__header--search">
                            <img
                            src="https://salt.tikicdn.com/ts/upload/34/62/0c/6ae13efaff83c66f810c4c63942cf6c0.png"
                            height="24"
                            width="24"
                            alt="search"
                            />
                            <input
                            className="w-100"
                            type="text"
                            placeholder="Bạn tìm gì hôm nay?"
                            />
                        </div>
                    </div>
                    <Category category={category} />
                    <div className="category-view">
                        <SidebarFilter />
                        <div className="category-right">
                            <div className="search-summary">
                                <div className="title">
                                    <h1>{category?.c_name || <Skeleton count={1} />}</h1>
                                </div>

                                <div className="search-summary-category">
                                    <div className="summary-top">
                                        <div className="top-tabs">
                                            <div className="tabs-list">
                                                {isWideScreen() &&
                                                    <>
                                                        <Link to={`${sortAsc === false ? `?price=asc` : '?'}`}
                                                            // {`?${searchParams}`}
                                                            onClick={handleChangeSort}
                                                            className={`tabs-list ${sortAsc === true ? 'active' : ''}`}
                                                            data-sort-type="price"
                                                            data-sort-value={"asc"}
                                                        >
                                                            Giá Thấp Đến Cao
                                                        </Link>
                                                        <Link to={`${sortDesc === false ? `?price=desc` : '?'}`}
                                                            // {`?${searchParams}`}
                                                            onClick={handleChangeSort}
                                                            className={`tabs-list ${sortDesc === true ? 'active' : ''}`}
                                                            data-sort-type="price"
                                                            data-sort-value={"desc"}
                                                        >
                                                            Giá Cao Đến Thấp
                                                        </Link>
                                                    </>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Products
                                    products={products}
                                    id={id}
                                    productsAsc={productsAsc}
                                    productsDesc={productsDesc}
                                    show={show}
                                    sortAsc={sortAsc}
                                    sortDesc={sortDesc}
                                    loadingProduct={loadingProduct}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
            }
        </main>


    )
}

export default CategoryPage;
