import React, {useState,useEffect } from "react";
import Images from "../../../components/Image/Images";
import ProductSummary from "../../../components/common/product/ProductSumary";
import {Link } from "react-router-dom";
import categoryApi from "../../../api/CategoryService";
import Skeleton from "react-loading-skeleton";

function HomeSuggest({status}) {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const getCategories = async (params) => {
        const response = await categoryApi.getListsCategory(params);
        setCategories(response.data);
        setLoading(false);
    };

    useEffect(() => {
        getCategories();
    },[]);

    const changeTab = (tabNumber) => {
        let title = categories.map(item => {
            item.tab = item.id === tabNumber ? true:false;
            return item
        })
       setCategories(title);
    }
    const getSuggestTitle = ()=>{
        if(status) {
            return(
                <>
                    <div className="suggestion__title">
                        <h2>Gợi ý hôm nay</h2>
                        <div className="suggestion__title-list">
                            { categories.map(item => {
                                    return (
                                        <>
                                        <div className={`tab ${item.tab ? 'active' : ''}`} onClick={() => changeTab(item.id)}>
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
                            <ProductSummary/>
                            <ProductSummary/>
                        </div>
                        <Link to="/" className="view-more">
                            Xem thêm
                        </Link>
                    </div>
                </>
            )   
        }
       else return (<>  
            <h2 style={{height: 48+'px'}}>Gợi ý hôm nay</h2>
            <div className="suggestion__title-list">
                {
                    categories.map(item => {
                        return (
                            <>
                            <div className={`tab ${item.tab ? 'active' : ''}`} onClick={() => changeTab(item.id)}>
                                <Images alt="test" src={item.c_avatar} />
                                <div className="tab-text fs-13">{item.c_name}</div>
                            </div>
                            </>   
                        )
                    })
                } 
            </div>
            <div className="suggestion__product">
                <div className="content">
                    <ProductSummary/>
                    <ProductSummary/>
                </div>
                <Link to="/" className="view-more">
                    Xem thêm
                </Link>
            </div>
        </>)
    }

    
    return (
        <div className="cm-width">
            <div className={`suggestion`}>
                { loading === false ? (
                    getSuggestTitle()
                ): (
                    <div className="body-loading-cate" style={{ padding: "10px 15px", display: "flex"}}>
                        <div className="body-slide--list" style={{ display: 'flex', flexDirection: "column", width: "auto", marginRight: "20px"}}>
                            <Skeleton count={1} height={50} width={100} style={{ display:"inline-block"}} />
                            <Skeleton count={1} height={20} width={100} style={{ display:"inline-block"}}/>
                        </div>
                        <div className="body-slide--list" style={{ display: 'flex', flexDirection: "column", width: "auto",  marginRight: "20px"}}>
                            <Skeleton count={1} height={50} width={100} style={{ display:"inline-block"}} />
                            <Skeleton count={1} height={20} width={100} style={{ display:"inline-block"}}/>
                        </div>
                        <div className="body-slide--list" style={{ display: 'flex', flexDirection: "column", width: "auto",  marginRight: "20px"}}>
                            <Skeleton count={1} height={50} width={100} style={{ display:"inline-block"}} />
                            <Skeleton count={1} height={20} width={100} style={{ display:"inline-block"}}/>
                        </div>
                        <div className="body-slide--list" style={{ display: 'flex', flexDirection: "column", width: "auto",  marginRight: "20px"}}>
                            <Skeleton count={1} height={50} width={100} style={{ display:"inline-block"}} />
                            <Skeleton count={1} height={20} width={100} style={{ display:"inline-block"}}/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default HomeSuggest;    
