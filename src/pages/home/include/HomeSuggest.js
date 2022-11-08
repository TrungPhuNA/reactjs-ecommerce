import React, {useState,useEffect } from "react";
import Images from "../../../components/Image/Images";
import ProductSummary from "../../../components/common/product/ProductSumary";
import {Link } from "react-router-dom";

function HomeSuggest({status}) {
    const [disCount,setDistCount]=useState(true);
    const [suggestTitle,setSuggestTitle] = useState([]);

    useEffect(() => {
        let data = [
            {
                id:1,
                name:'Dành cho bạn',
                tab:true,
                src:"https://salt.tikicdn.com/ts/personalish/f9/27/b5/3a8e2286a1c8fb91b67acc5ee35f82f0.png"
            }
        ]
        setSuggestTitle(data);
    },[])

    const arr_10 = Array.from(Array(90).keys());

    const changeTab = (tabNumber) => {
        let title = suggestTitle.map(item => {
            item.tab = item.id === tabNumber ? true:false;
            return item
        })
        setSuggestTitle(title);
    }
    const getSuggestTitle = ()=>{
        if(status) {
            return(
                <div className="suggestion__title">
                    <h2>Gợi Ý Hôm Nay</h2>
                    <div className="suggestion__title-list">
                        { suggestTitle.map((item, index) => {
                            <div key={index} className={`tab ${item.tab ? 'active' : ''}`} onClick={() => changeTab(item.id)}>
                                <Images alt="test" src={item.src} />
                                <div className="tab-text fs-13">{item.name}</div>
                            </div>
                        })}

                    </div>
                </div>
            )
        }
        else return (<>
            <h2 style={{height: 48+'px'}}>Gợi Ý Hôm Nay</h2>
            <div className="suggestion__title-list">
                {
                    suggestTitle.map(item => {
                        return (
                            <>
                                <div key={item.id} className={`tab ${item.tab ? 'active' : ''}`} onClick={() => changeTab(item.id)}>
                                    <Images alt="test" src={item.src} />
                                    <div className="tab-text fs-13">{item.name}</div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>)
    }
    return (
        <div className="cm-width">
            <div className={`suggestion`}>
                {getSuggestTitle()}
                <div className="suggestion__product">
                    <div className="content">
                        { arr_10.map((item, index) => {
                            <ProductSummary
                                key={index}
                                disCount={disCount}
                                setDistCount={setDistCount}
                                deal={false}
                                price={undefined} sold={undefined}
                            />
                        })}
                    </div>
                    <Link to="/" className="view-more">
                        Xem thêm
                    </Link>
                </div>
            </div>

        </div>

    )
}
export default HomeSuggest
