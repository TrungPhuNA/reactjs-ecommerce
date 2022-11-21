import React, { useState, useEffect } from "react";
import Images from "../../../components/Image/Images";
import { Link } from "react-router-dom";
import categoryApi from "../../../api/CategoryService";
import Skeleton from "react-loading-skeleton";
import productApi from "../../../api/ProductService";

function HomeSuggest() {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const getCategories = async (params) => {
        const response = await categoryApi.getListsCategory(params);
        setCategories(response.data);
        setLoading(false);
    };

    useEffect(() => {
        getCategories();
    }, []);

    const [tabNumber, setTabNumber] = useState();
    function changeTab(tabNumber) {
        let title = categories.map(item => {
            item.tab = item.id === tabNumber ? true : false;
            console.log(tabNumber)
            setTabNumber(tabNumber);
            return item
        })
        setCategories(title);
    }

    console.log(tabNumber);
    const [products, setProducts] = useState([]);

    const getProducts = async (params) => {
        const response = await productApi.getListsProducts(params);
        setProducts(response.data);
        setLoading(false);
    };

    useEffect(() => {
        getProducts();
    }, []);

    const [deal, setDeal] = useState(false);
    const getSuggestTitle = () => {
        return (
            <>
                <div className="suggestion__title">
                    <h2>Gợi ý hôm nay</h2>
                    <div className="suggestion__title-list">
                        {categories.map((item) => {
                            return (
                                <>
                                    <div key={item.id} className={`tab ${item.tab ? 'active' : ''}`} onClick={() => changeTab(item.id)}>
                                        <Images alt="test" src={item.c_avatar} />
                                        <div className="tab-text fs-13">{item.c_name}</div>
                                    </div>
                                </>
                            )
                        })
                        }
                    </div>
                </div>
                <div className="suggestion__product">
                    <div className="content">
                        <div className="dashboard-product--item" >
                            {products.map((item2) => {
                                {
                                    if (item2.pro_category_id == tabNumber) {
                                        return (
                                            <>
                                                <Link to={item2.pro_slug} className="product-item">
                                                    <div className={`product-item--style ${!deal ? 'not-style' : ''}`}>

                                                        <div className="thumbnail">
                                                            <div className="thumbnail--product-img">
                                                                <Images src={item2.pro_avatar} alt="333" />
                                                            </div>
                                                        </div>
                                                        <div className="infor">
                                                            {!deal &&
                                                                <>
                                                                    <div className="name">
                                                                        <h3 className="fs-10">{item2.pro_name}</h3>
                                                                    </div>
                                                                    <div className={`price-discount ${item2.prodiscount_value !== 0 ? 'has-discount' : ''}`}>
                                                                        <div className="price-discount__price">
                                                                            {item2.pro_price} ₫
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            }
                                                            {deal &&
                                                                <>
                                                                    <div className="deal">
                                                                        <div className={`price-discount ${item2.prodiscount_value !== 0 ? 'has-discount' : ''}`}>
                                                                            <div className="price-discount__price">
                                                                                {item2.pro_price} ₫
                                                                            </div>
                                                                            <div className="price-discount__discount">
                                                                                {item2.pro_discount_value ? item2.pro_discount_value + '%' : ''}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            }
                                                        </div>
                                                    </div>
                                                </Link>
                                            </>)
                                    }
                                }
                            })
                            }
                        </div>

                    </div>
                    <Link to="/" className="view-more">
                        Xem thêm
                    </Link>
                </div>
            </>
        )
    }
    return (
        <div className="cm-width">
            <div className={`suggestion`}>
                {loading === false ? (
                    getSuggestTitle()
                ) : (
                    <div className="body-loading-cate" style={{ padding: "10px 15px", display: "flex" }}>
                        <div className="body-slide--list" style={{ display: 'flex', flexDirection: "column", width: "auto", marginRight: "20px" }}>
                            <Skeleton count={1} height={50} width={100} style={{ display: "inline-block" }} />
                            <Skeleton count={1} height={20} width={100} style={{ display: "inline-block" }} />
                        </div>
                        <div className="body-slide--list" style={{ display: 'flex', flexDirection: "column", width: "auto", marginRight: "20px" }}>
                            <Skeleton count={1} height={50} width={100} style={{ display: "inline-block" }} />
                            <Skeleton count={1} height={20} width={100} style={{ display: "inline-block" }} />
                        </div>
                        <div className="body-slide--list" style={{ display: 'flex', flexDirection: "column", width: "auto", marginRight: "20px" }}>
                            <Skeleton count={1} height={50} width={100} style={{ display: "inline-block" }} />
                            <Skeleton count={1} height={20} width={100} style={{ display: "inline-block" }} />
                        </div>
                        <div className="body-slide--list" style={{ display: 'flex', flexDirection: "column", width: "auto", marginRight: "20px" }}>
                            <Skeleton count={1} height={50} width={100} style={{ display: "inline-block" }} />
                            <Skeleton count={1} height={20} width={100} style={{ display: "inline-block" }} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default HomeSuggest;    
