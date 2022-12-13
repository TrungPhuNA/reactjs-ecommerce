import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity, removeItem, removeAll } from '../../store/cartSlice';
import { store } from '../../store/store';
import authApi from '../../api/AuthService';
import cartApi from '../../api/CartService';


function ShopCart() {

    const cart = useSelector((state) => state.cartReduce.listCart);
    let price_total = 0;
    const dispatch = useDispatch();
    const [checked, isChecked] = useState(false);
    const [checkedAll, isCheckedAll] = useState(false);
    const [checkItem, setCheckItem] = useState(false);

    function handleCheckAll() {
        isChecked(!checked);
        isCheckedAll(!checkedAll);
    }

    function getTotal() {
        if (checked === true) {
            cart.map((item, index) => {
                price_total += item.quantity * item.pro_price;
            })
            console.log('Total = ', price_total)
            return price_total.toLocaleString();
        }
    }

    const Order = async () => {
        let order = {};
        let transactions = [];
        console.log('------------- cart: ', cart);
        let total = 0;
        cart.forEach((item, index) => {
            transactions.push({
                id: item.id,
                name: item.pro_name,
                quantity: item.quantity,
                discount_type: "money",
                discount_value: 0,
                price: item.pro_price,
                total_price: item.pro_price
            });

            total += (item.pro_price * item.quantity);
        });

        const getUser = await authApi.getProfile();
        if (getUser.status === 200) {
            order.name = getUser.data.name;
            order.phone = getUser.data.phone;
            order.address = getUser.data.address;
        }
        order.products = transactions;
        order.note = "_";
        order.total_price = total;

        const createCart = await cartApi.createTransaction(order);
        if (createCart.status === 200) {
            dispatch(removeAll());
        }
        if (createCart.status === 500 && createCart.message === 'error') {
            console.log('Error create!!!');
        }
    }

    return (
        <Provider store={store}>
            <div className="sc-container">
                <div className="main-title">
                    <h4>Giỏ hàng</h4>
                </div>
                <div className="content">
                    <div className="left-content">
                        <div className="left-content-header">
                            <label>
                                <input type='checkbox' onClick={handleCheckAll} />
                                <span>Tất cả</span>
                            </label>
                            <span>Đơn giá</span>
                            <span>Số lượng</span>
                            <span>Thành tiền</span>
                            <span onClick={() => localStorage.removeItem('cart')}><img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg" alt="deleted" /></span>
                        </div>
                        <div className="left-content-container">
                            <div className="list-cart">
                                {cart ? (
                                    cart.map((item, index) =>
                                    (
                                        <>
                                            <div className="product-item" key={index}>
                                                <div className="row">
                                                    <div className="col1">
                                                        <div className="product-detail">
                                                            <div className="product-checkbox">
                                                                <input key={index.toString()} type="checkbox" checked={`${checkedAll === true ? 'checked' : ''}`} readOnly />
                                                            </div>
                                                            <Link to={`/${item.pro_slug}-${item.id}`}>
                                                                <img
                                                                    alt="sda"
                                                                    src={item.pro_avatar}
                                                                    width="80"
                                                                    height="80"
                                                                />
                                                            </Link>
                                                            <div className="product-content">
                                                                <Link
                                                                    to={`/${item.pro_slug}-${item.id}`}
                                                                    className="product-name"
                                                                >
                                                                    {item.pro_name}
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col2">
                                                        <span>{item.pro_price.toLocaleString()} ₫</span>
                                                    </div>
                                                    <div className="col3">
                                                        <div className="count">
                                                            <div className="group-input">
                                                                <button disabled={`${item.quantity < 2 ? '{true}' : ''}`} className={`${item.quantity < 2 ? 'disable' : 'enable'}`} onClick={() => dispatch(decrementQuantity(item))}>
                                                                    <img alt="/" src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg" width="20" height="20" />
                                                                </button>
                                                                <input type="text" value={item.quantity} className="input" readOnly ></input>
                                                                <button className='enable' onClick={() => dispatch(incrementQuantity(item))}>
                                                                    <img alt="/" src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg" width="20" height="20" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col4">
                                                        <span>
                                                            {(item.pro_price * item.quantity).toLocaleString()} ₫
                                                        </span>
                                                    </div>
                                                    <div className="col5" >
                                                        <span>
                                                            <img
                                                                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
                                                                alt="deleted"
                                                                onClick={() => dispatch(removeItem(item))}
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ))
                                ) : (<></>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="right-inner">
                            <div className="delivery">
                                <div className="delivery-container">
                                    <div className="header">
                                        <h3>Giao tới</h3>
                                        <Link to='/cart' className="link">Thay đổi</Link>
                                    </div>
                                    <div className="info">
                                        <p>hoang</p>
                                        <i />
                                        <p>491515</p>
                                    </div>
                                    <div className='address'>
                                        Hà Nội
                                    </div>
                                </div>
                            </div>
                            <div className="calculate-price">
                                <ul>
                                    <li>
                                        <div className="price-text">
                                            Tạm tính
                                        </div>
                                        <div className="price-value">
                                            0 đ
                                        </div>
                                    </li>
                                    <li>
                                        <div className="price-text">
                                            Giảm giá
                                        </div>
                                        <div className="price-value">
                                            0đ
                                        </div>
                                    </li>
                                </ul>
                                <div className="price-total">
                                    <span>Tổng tiền</span>
                                    <div className="price-content">
                                        <span>{getTotal()} đ</span>
                                        <span className="price-note">
                                            (Đã bao gồm VAT nếu có)
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button className="btn-buy" onClick={Order}>Mua hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </Provider>
    )
}

export default ShopCart;