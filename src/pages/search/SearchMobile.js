import React, {useEffect, useState} from 'react';
import productApi from '../../api/ProductService';
import { Link, useNavigate } from 'react-router-dom';

function SearchMobile() {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [arr] = useState([]);
    const [showMore, setShowMore] = useState(4);

    const saveSearch = () => {
        arr.push({ name: searchInput });
        console.log(arr);
    };

	const page_size = 300;
	const page = 1;

    const getData = async () => {
        const response = await productApi.getListsProductsByPage(page, page_size);
        if (response.status === 200) {
            setProducts(response.data);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="search">
            <div className="mobile__header--cate-logo">
                <div onClick={() => navigate(-1)} className="left-header">
                    <img alt='.' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/backWhite.svg"/>
                </div>
                <div className="mobile__header--cate-search" style={{width: '90%'}}>
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
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                </div>
            </div>
            <div className="search-container">
                {searchInput.length > 0 && (
                    <Link
                        to={`/search&q=${searchInput}`}
                        className="search-list"
                        onClick={saveSearch}
                    >
                        <img
                            src="https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png"
                            alt="icon-search"
                            width='35'
                            height='35'
                        />
                        <p className='search-item'>{searchInput}</p>
                    </Link>
                )}
                {arr
                    .filter((item) =>
                        item.name
                            .toLowerCase()
                            .match(searchInput.toLowerCase())
                    )
                    .slice(0, 3)
                    .map((item, index) => (
                        <Link
                            to={`/search&q=${item.name}`}
                            className="search-list"
                            key={index}
                        >
                            <img
                                src="https://salt.tikicdn.com/ts/upload/90/fa/09/9deed3e3186254637b5ca648f3032665.png"
                                alt="icon-search"
                                width='35'
                                height='35'
                            />
                            <p>{item.name}</p>
                        </Link>
                    ))}
                {products
                    .filter((item) =>
                        item.pro_name
                            .toLowerCase()
                            .match(searchInput.toLowerCase())
                    )
                    .slice(0, showMore)
                    .map((item, index) => (
                        <Link
                            to={`${item.pro_slug}-${item.id}`}
                            className="search-list"
                            onClick={() =>
                                setSearchInput("")
                            }
                            key={index}
                        >
                            <img
                                src={
                                    item.pro_avatar
                                }
                                alt="icon-product"
                                width="35"
                                height="35"
                            />
                            <p>{item.pro_name}</p>
                        </Link>
                    ))
                }
                { showMore <= 6 ?
                    (<div className="search-list" style={{ justifyContent: 'center'}} onClick={() => setShowMore(8)}>
                    <span style={{ color: 'blue' }}>Xem thêm</span>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn0DdZzOaqWSYrbQKRLpUVqYtqmOig49fawwX3Hd8H3XmYchxtZbBIHeFyktUSMg6_Ul8&usqp=CAU" width='14' height='14' style ={{ color: 'blue', marginLeft: 10, marginTop: -2 }}/>
                </div>) :
                    (<div className="search-list" style={{ justifyContent: 'center'}} onClick={() => setShowMore(4)}>
                    <span style={{ color: 'blue' }}>Thu gọn</span>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn0DdZzOaqWSYrbQKRLpUVqYtqmOig49fawwX3Hd8H3XmYchxtZbBIHeFyktUSMg6_Ul8&usqp=CAU" width='14' height='14' style ={{ color: 'blue', marginLeft: 10, marginTop: -2, transform: 'scaleX(-1)', transform: 'scaleY(-1)' }}/>
                </div>)
                }
                
            </div>    
        </div>
    )
}

export default SearchMobile;