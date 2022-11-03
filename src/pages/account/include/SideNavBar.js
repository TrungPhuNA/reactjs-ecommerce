import React, {} from "react";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';

class SideNavBar extends React.Component {
    state = {
        links: [
            {
                id: 1,
                name: "Thông tin tài khoản",
                to: '/info',
                src: "fas fa-user",
                tab: "true",
            },
            {
                id: 2,
                name: "Thông báo của tôi",
                to: '',
                src: "fas fa-bell",
                tab: "false"
            },
            {
                id: 3,
                name: "Quản lý đơn hàng",
                to: '/order',
                src: "fas fa-bars",
                tab: "false"
            },
            {
                id: 4,
                name: "Quản lý đổi trả",
                to: "",
                src: "fas fa-turn-down-left",
                tab: "false"
            },
            {
                id: 5,
                name: "Sổ địa chỉ",
                to: "",
                src: "fas fa-location-dot",
                tab: "false"
            },
            {
                id: 6,
                name: "Thông tin thanh toán",
                to: "",
                src: "fas fa-credit-card",
                tab: "false"
            },
            {
                id: 7,
                name: "Đánh giá sản phẩm",
                to: "",
                src: "fas fa-location-dot",
                tab: "false"
            },
            {
                id: 8,
                name: "Sản phẩm bạn đã xem",
                to: "",
                src: "fas fa-location-dot",
                tab: "false"
            },
            {
                id: 9,
                name: "Sản phẩm yêu thích",
                to: "",
                src: "fas fa-location-dot",
                tab: "false"
            },
            {
                id: 10,
                name: "Sản phẩm mua sau",
                to: "",
                src: "fas fa-location-dot",
                tab: "false"
            },
            {
                id: 11,
                name: "Nhận xét của tôi",
                to: "",
                src: "fas fa-location-dot",
                tab: "false"
            },
            {
                id: 12,
                name: "Thành viên",
                to: "",
                src: "fas fa-location-dot",
                tab: "false"
            },
            {
                id: 13,
                name: "Chia sẻ có lời",
                to: "",
                src: "fas fa-location-dot",
                tab: "false"
            },
            {
                id: 14,
                name: "Hợp đồng bảo hiểm",
                to: "",
                src: "fas fa-location-dot",
                tab: "false"
            },
            {
                id: 15,
                name: "Thông tin TikiNOW",
                to: "",
                src: "fas fa-location-dot",
                tab: "false"
            },
            {
                id: 16,
                name: "Mã giảm giá",
                to: "",
                src: "fas fa-location-dot",
                tab: "false"
            },
            {
                id: 17,
                name: "Quản lý Tiki Xu của tôi",
                to: "",
                src: "fas fa-location-dot",
                tab: "false"
            },
            {
                id: 18,
                name: "BookCare của tôi",
                to: "",
                src: "fas fa-location-dot",
                tab: "false"
            }
        ],
        activeLink: null,
    };

    handleClick = id => {
        this.setState({ activeLink: id });
    };

    render() {
        const { links, activeLink } = this.state;
        

        return(
            <>
                <div className="left-container">
                    <div className="account-avatar">
                        <img src="https://salt.tikicdn.com/cache/512x512/ts/avatar/b9/42/e9/5d6bd301d4a6fb334877b9ae5082f483.jpg" alt="avatar"/>
                        <div className="account-info">
                            Tài khoản của <FontAwesomeIcon icon="far fa-users" />
                            <strong>Trần Hoàng</strong>
                        </div>
                    </div>
                <div className="category-list-item">
                    {links.map(link => {
                        return (
                            <div key={link.id}>
                                <ul>
                                    <Link to={link.to}>
                                        <li
                                        onClick={() => this.handleClick(link.id)}   
                                        className={
                                            (link.id === activeLink ? "is-active" : "no-active")
                                        }
                                        > 
                                            <FontAwesomeIcon icon={link.src}/>
                                            {link.name} 
                                            {link.id === activeLink && ""}                  
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        );
                    })}
                </div>
                </div>
            </>
    );
    }
}

export default SideNavBar;