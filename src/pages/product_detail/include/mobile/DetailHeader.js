import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function DetailHeader() {

    const navigate = useNavigate();

    return (
        <div className="m_detail-header">
            <div className="m_d-inner-top">
                <div onClick={() => navigate(-1)} className="left-header">
                    <img alt='.' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/backWhite.svg"/>
                </div>
                <div className="right-header" onClick={() => navigate('/cart')}>
                    <div className="img-cart1">
                        <img alt="." src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/cart.svg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailHeader;