import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authApi from '../../../../api/AuthService';
import { useSelector } from 'react-redux';

function DetailHeader() {

    const cart = useSelector((state) => state.cartReduce.listCart);

    const navigate = useNavigate();
    const [user, setUser] = useState(false);
    const getUser = async () => {
        const response = await authApi.getProfile();
        if (response.status === 200) 
            setUser(true);
        else 
            setUser(false);
    }


    return (
        <div className="m_detail-header">
            <div className="m_d-inner-top">
                <div onClick={() => navigate(-1)} className="left-header">
                    <img alt='.' src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/backWhite.svg"/>
                </div>
                <Link to={`${ user === true ? '/cart' : '/loginMobile'}`}>
                    <div className="right-header">
                        <div className="img-cart1">
                            <img alt="." src="https://frontend.tikicdn.com/_mobile-next/static/img/icons/cart.svg"/>
                        </div>
                        <span>{cart ? cart.length : 0}</span>
                    </div>
                    
                </Link>
            </div>
        </div>
    )
}

export default DetailHeader;