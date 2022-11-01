import React, {} from "react";
import { Link } from "react-router-dom";

class SideNavBar extends React.Component {
    state = {
        links: [
            {
                id: 1,
                name: "Thông tin tài khoản",
                to: '/AI',
                className: "side_nav_item"
            },
            {
                id: 2,
                name: "Thông báo của tôi",
                to: '',
                className: "side_nav_item"
            },
            {
                id: 3,
                name: "Quản lý đơn hàng",
                to: "",
                className: "side_nav_item"
            },
            {
                id: 4,
                name: "Quản lý đổi trả",
                to: "",
                className: "side_nav_item"
            },
            {
                id: 5,
                name: "Sổ địa chỉ",
                to: "",
                className: "side_nav_item"
            },
            {
                id: 6,
                name: "Thông tin thanh toán",
                to: "",
                className: "side_nav_item"
            },
            {
                id: 7,
                name: "Đánh giá sản phẩm",
                to: "",
                className: "side_nav_item"
            },
            {
                id: 8,
                name: "Sản phẩm bạn đã xem",
                to: "",
                className: "side_nav_item"
            },
            {
                id: 9,
                name: "Sản phẩm yêu thích",
                to: "",
                className: "side_nav_item"
            },
            {
                id: 10,
                name: "Sản phẩm mua sau",
                to: "",
                className: "side_nav_item"
            },
            {
                id: 11,
                name: "Nhận xét của tôi",
                to: "",
                className: "side_nav_item"
            },
            {
                id: 12,
                name: "Thành viên",
                to: "",
                className: "side_nav_item"
            },
            {
                id: 13,
                name: "Chia sẻ có lời",
                to: "",
                className: "side_nav_item"
            },
            {
                id: 14,
                name: "Hợp đồng bảo hiểm",
                to: "",
                className: "side_nav_item"
            },
            {
                id: 15,
                name: "Thông tin TikiNOW",
                to: "",
                className: "side_nav_item"
            },
            {
                id: 16,
                name: "Mã giảm giá",
                to: "",
                className: "side_nav_item"
            },
            {
                id: 17,
                name: "Quản lý Tiki Xu của tôi",
                to: "",
                className: "side_nav_item"
            },
            {
                id: 18,
                name: "BookCare của tôi",
                to: "",
                className: "side_nav_item"
            }
        ],
        activeLink: null
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
                            Tài khoản của
                            <strong>Trần Hoàng</strong>
                        </div>
                    </div>
                    <div className="category-list-item">
                        {links.map(link => {
                            return (
                                <div key={link.id}>
                                    <ul>
                                        <Link to={links.to} className="is-active">
                                            <li
                                            onClick={() => this.handleClick(link.id)}
                                            className={
                                                link.className +
                                                (link.id === activeLink ? " active_item" : "")
                                            }
                                            >
                                                
                                                    {link.src}
                                                    {link.name} 
                                                    {link.id === activeLink && "active"}
                                            
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