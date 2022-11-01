import React, {} from "react";
import { Link } from "react-router-dom";


class SideNavBar extends React.Component {
    state = {
        links: [
            {
                id: 1,
                name: "Thông tin tài khoản",
                to: '/AI',
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                className: "side_nav_item"
            },
            {
                id: 2,
                name: "Thông báo của tôi",
                to: '',
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                className: "side_nav_item"
            },
            {
                id: 3,
                name: "Quản lý đơn hàng",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                className: "side_nav_item"
            },
            {
                id: 4,
                name: "Quản lý đổi trả",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                className: "side_nav_item"
            },
            {
                id: 5,
                name: "Sổ địa chỉ",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                className: "side_nav_item"
            },
            {
                id: 6,
                name: "Thông tin thanh toán",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                className: "side_nav_item"
            },
            {
                id: 7,
                name: "Đánh giá sản phẩm",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                className: "side_nav_item"
            },
            {
                id: 8,
                name: "Sản phẩm bạn đã xem",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                className: "side_nav_item"
            },
            {
                id: 9,
                name: "Sản phẩm yêu thích",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                className: "side_nav_item"
            },
            {
                id: 10,
                name: "Sản phẩm mua sau",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                className: "side_nav_item"
            },
            {
                id: 11,
                name: "Nhận xét của tôi",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                className: "side_nav_item"
            },
            {
                id: 12,
                name: "Thành viên",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                className: "side_nav_item"
            },
            {
                id: 13,
                name: "Chia sẻ có lời",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                className: "side_nav_item"
            },
            {
                id: 14,
                name: "Hợp đồng bảo hiểm",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                className: "side_nav_item"
            },
            {
                id: 15,
                name: "Thông tin TikiNOW",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                className: "side_nav_item"
            },
            {
                id: 16,
                name: "Mã giảm giá",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                className: "side_nav_item"
            },
            {
                id: 17,
                name: "Quản lý Tiki Xu của tôi",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                className: "side_nav_item"
            },
            {
                id: 18,
                name: "BookCare của tôi",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
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
                                                    <img className="cli-icon" src={link.src} alt="sdasd"/>
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