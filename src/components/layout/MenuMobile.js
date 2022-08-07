import { CommentOutlined, FireOutlined, UserOutlined } from '@ant-design/icons';
import React, {useState } from 'react'
import Images from '../Image/Images'

function MenuMobile() {
    const [menu,setMenu]=useState(1);

    // useEffect(()=> {
    //     changeMenu()
    // },[menu])
    const changeMenu = (number) => {
        setMenu(number);
        console.log(menu)
    }
    return (
        <div className="menu__mobile">
            <a href='/home' className={menu === 1?'active':''} onClick={() => changeMenu(1)}>
                <Images src={menu === 1?"https://frontend.tikicdn.com/_mobile-next/static/img/home/navigation/active-home.png":"https://frontend.tikicdn.com/_mobile-next/static/img/home/navigation/home.png"} alt="Home"/>
                <span className='fs-10'>Trang Chủ</span>
            </a>
            <a href='/home' title='Home' className={menu === 2?'active':''} onClick={() => changeMenu(2)}>
                <Images src={menu === 2?"https://frontend.tikicdn.com/_mobile-next/static/img/home/navigation/active-cate.png":"https://frontend.tikicdn.com/_mobile-next/static/img/home/navigation/cate.png"} alt="Danh muc"/>
                <span className='fs-10'>Danh mục</span>
            </a>
            <a href='/home' title='Home' className={menu === 3?'active':''} onClick={() => changeMenu(3)}>
            <FireOutlined style={{color:menu === 3?'color: rgb(13, 92, 182)':'#8C8C8C'}}/>
                <span className='fs-10'>Lướt</span>
            </a>
            <a href='/home' title='Home' className={menu === 4?'active':''} onClick={() => changeMenu(4)}>
            <CommentOutlined style={{color:menu === 4?'color: rgb(13, 92, 182)':'#8C8C8C'}}/>
                <span className='fs-10'>Chat</span>
            </a>
            <a href='/home' title='Home' className={menu === 5?'active':''} onClick={() => changeMenu(5)}>
            <UserOutlined style={{color:menu === 5?'color: rgb(13, 92, 182)':'#8C8C8C'}}/>
                <span className='fs-10'>Cá nhân</span>
            </a>
        </div>
    )
}

export default MenuMobile
