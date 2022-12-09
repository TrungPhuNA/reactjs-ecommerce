import React, {useState,useEffect } from "react";
import Images from "../../../components/Image/Images";
import ProductSummary from "../../../components/common/product/ProductSumary";
import {Link } from "react-router-dom";

function Explore({status}) {
    const [disCount,setDistCount]=useState(true);
    const [suggestTitle,setSuggestTitle] = useState([]);

  useEffect(() => {
    let data = [
      {
          id:1,
          name:'Dành cho bạn',
          tab:true,
          src:"https://salt.tikicdn.com/ts/personalish/f9/27/b5/3a8e2286a1c8fb91b67acc5ee35f82f0.png"
      },
      { 
          id:2,
          name:'Dịch vụ số',
          tab:false,
          src:"https://salt.tikicdn.com/ts/tikimsp/14/7b/d9/72d4b0ba52b75a09051aa6da36461bf0.png"
      },
      {
          id:3,
          name:'Đi Chợ Siêu Sale',
          tab:false,
          src:"https://salt.tikicdn.com/ts/personalish/b7/aa/f3/bcff08097ead36826d2c9daf7c2debd5.png" 
      },
      {
          id:4,
          name:'Deal Siêu Hot',
          tab:false,
          src:"https://salt.tikicdn.com/ts/personalish/41/99/9a/8898607d7fca4b79775a708c57a8152f.png"
      },
      {
          id:5,
          name:'Trending',
          tab:false,
          src:"https://salt.tikicdn.com/ts/personalish/0f/59/9d/215fa18ef72e430eefcbfe5355cab8e2.png"
      },
      {
          id:6,
          name:'Ngày hội Astra',
          tab:false,
          src:"https://salt.tikicdn.com/ts/personalish/7d/8a/6e/d8b76e2c43cbd06b7e1aa3ab8c54df64.png"
      },
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
                        <h2>Khám Phá Thêm</h2>
                        
                        <div className="suggestion__title-list">

                            {
                                suggestTitle.map(item => {
                                    return (
                                        <>
                                        <div keys={item.id.toString()} className={`tab ${item.tab ? 'active' : ''}`} onClick={() => changeTab(item.id)}>
                                            <Images alt="test" src={item.src} />
                                            <div className="tab-text fs-13">{item.name}</div>
                                        </div>
                                        </>   
                                    )
                                })
                            } 

                        </div>
                </div>
            )   
        }
       else return (<>  
                <h2 style={{height: 48+'px'}}>Khám Phá Thêm</h2>

                <div className="suggestion__title-list">
                    {
                        suggestTitle.map(item => {
                            return (
                                <>
                                <div keys={item.id.toString()} className={`tab ${item.tab ? 'active' : ''}`} onClick={() => changeTab(item.id)}>
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
                        { arr_10.map(() => {
                                return (
                                    <ProductSummary
                                        disCount={disCount}
                                        setDistCount={setDistCount}
                                        deal={false}
                                        price={undefined} sold={undefined}
                                    />
                                )
                            })
                        }
                    </div>
                    <Link to="/" className="view-more">
                        Xem thêm
                    </Link>
                </div>
            </div>
            
        </div>

    )
}
export default Explore;