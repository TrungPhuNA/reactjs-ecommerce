import React, {} from "react";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../../fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons";

class SideNavBar extends React.Component {
    // state = {
    //     links: [
    //         {
    //             id: 1,
    //             name: "Thông tin tài khoản",
    //             to: ' ',
    //             src: "faUser",
    //             tab: "true",
    //         },
    //         {
    //             id: 3,
    //             name: "Quản lý đơn hàng",
    //             to: '/order',
    //             src: "fas fa-bars",
    //             tab: "false"
    //         },
    //     ],
    //     activeLink: null,
    // };

    // handleClick = id => {
    //     this.setState({ activeLink: id });
    // };

    // render() {
    //     const { links, activeLink } = this.state;
        
    render() {
        return (
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
                    {/* {links.map(link => {
                        return ( */}
                            {/* <div key={link.id}> */}
                                {/* <ul>
                                    <Link to='/info'>
                                        <li
                                        onClick={() => this.handleClick(links.id)}   
                                        className={
                                            (link.id === activeLink ? "is-active" : "no-active")
                                        }
                                        > 
                                            <FontAwesomeIcon className="iimg" icon={faUser} />
                                            {link.name}
                                            {link.id}
                                        </li>
                                    </Link>
                                </ul> */}
                            <div>
                                <ul>
                                    <Link to='/info'>
                                        <li> 
                                            <FontAwesomeIcon className="iimg" icon={faUser} />
                                            <div className="li-text">Thông tin của tôi</div>
                                        </li>
                                    </Link>
                                </ul>
                                <ul>
                                    <Link to='/order'>
                                        <li> 
                                            <FontAwesomeIcon className="iimg" icon={faUser} />
                                            <div className="li-text">Quản lý đơn hàng</div>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        {/* );
                    })} */}
                </div>
                </div>
            </>
        );
    }
}

export default SideNavBar;