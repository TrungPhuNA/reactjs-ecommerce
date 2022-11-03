import React, {} from "react";
import { Link } from "react-router-dom";

class SideNavBar extends React.Component {
    state = {
        links: [
            {
                id: 1,
                name: "Thông tin tài khoản",
                to: '/info',
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                tab: "true",
            },
            {
                id: 2,
                name: "Thông báo của tôi",
                to: '',
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                tab: "false"
            },
            {
                id: 3,
                name: "Quản lý đơn hàng",
                to: '/order',
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                tab: "false"
            },
            {
                id: 4,
                name: "Quản lý đổi trả",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                tab: "false"
            },
            {
                id: 5,
                name: "Sổ địa chỉ",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                tab: "false"
            },
            {
                id: 6,
                name: "Thông tin thanh toán",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                tab: "false"
            },
            {
                id: 7,
                name: "Đánh giá sản phẩm",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                tab: "false"
            },
            {
                id: 8,
                name: "Sản phẩm bạn đã xem",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                tab: "false"
            },
            {
                id: 9,
                name: "Sản phẩm yêu thích",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                tab: "false"
            },
            {
                id: 10,
                name: "Sản phẩm mua sau",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                tab: "false"
            },
            {
                id: 11,
                name: "Nhận xét của tôi",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                tab: "false"
            },
            {
                id: 12,
                name: "Thành viên",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                tab: "false"
            },
            {
                id: 13,
                name: "Chia sẻ có lời",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                tab: "false"
            },
            {
                id: 14,
                name: "Hợp đồng bảo hiểm",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                tab: "false"
            },
            {
                id: 15,
                name: "Thông tin TikiNOW",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                tab: "false"
            },
            {
                id: 16,
                name: "Mã giảm giá",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                tab: "false"
            },
            {
                id: 17,
                name: "Quản lý Tiki Xu của tôi",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
                tab: "false"
            },
            {
                id: 18,
                name: "BookCare của tôi",
                to: "",
                src: "https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png",
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
                            Tài khoản của
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
                                            <img className="cli-icon" src={link.src} alt="sdasd"/>
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