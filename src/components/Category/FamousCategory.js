import React from "react";
import Images from "../Image/Images";

function FamousCategory({check}) {
      const categories = [
        {
          src:"https://salt.tikicdn.com/ts/category/1e/8c/08/d8b02f8a0d958c74539316e8cd437cbd.png",
          title:'Ngon'
        },
        {
          src:"https://salt.tikicdn.com/cache/280x280/ts/product/00/01/c7/c0b1ae113ff90cdbf0b848c441b99adb.jpg",
          title:'Giày thể thao nam'
        },
        {
          src:"https://salt.tikicdn.com/cache/280x280/ts/product/ad/50/99/93c55f64df94b3809e13e0648eec55f2.jpg",
          title:'Balo'
        },
        {
          src:"https://salt.tikicdn.com/cache/280x280/ts/product/bd/15/a6/1bdc5f510d933bb4260e19552781a3e7.jpg",
          title:'Tất, vớ nam'
        },
        {
          src:"https://salt.tikicdn.com/cache/280x280/ts/product/e4/a3/52/4845a31ebb7c0b75766ef9272506f236.jpg",
          title:'Sách tư duy - kỹ năng sống'
        },
        {
          src:"https://salt.tikicdn.com/cache/280x280/ts/product/34/3f/38/a6ca7dd555efc59607e8b0427cf8da61.jpg",
          title:'Truyện Tranh, Manga, Comic'
        },
        {
          src:"https://salt.tikicdn.com/cache/280x280/ts/product/0c/62/39/499c08d6ec13cd33b33ee601d9e4251e.jpg",
          title:'Điện thoại Smartphone'
        },
        {
          src:"https://salt.tikicdn.com/cache/280x280/ts/product/5e/18/24/2a6154ba08df6ce6161c13f4303fa19e.jpg",
          title:'Tiểu Thuyết'
        },
        {
          src:"https://salt.tikicdn.com/cache/280x280/ts/product/7c/e8/34/4d3636aadb471cad0bf2f45d681e4f23.jpg",
          title:'Truyện ngắn - Tản văn - Tạp Văn'
        },
        {
          src:"https://salt.tikicdn.com/cache/280x280/ts/product/86/c3/ab/083a92d36771b3bbf4bb8ecd94bcd9ce.jpg",
          title:'Bàn ghế làm việc'
        },
        {
          src:"https://salt.tikicdn.com/cache/280x280/ts/product/4e/18/1e/aa90c76a8066d751b77deb17422ba1e0.jpg",
          title:'Khác'
        },
        {
          src:"https://salt.tikicdn.com/cache/280x280/ts/product/45/3b/fc/aa81d0a534b45706ae1eee1e344e80d9.jpg",
          title:'Tác phẩm kinh điển'
        },
        {
          src:"https://salt.tikicdn.com/cache/280x280/ts/product/25/8c/35/d9081d7f2905df3cf4d1700f180b85a3.jpg",
          title:'Phụ kiện nhà bếp khác'
        },
        {
          src:"https://salt.tikicdn.com/cache/280x280/ts/product/39/3a/4d/264f3b3da19dbb80c819bb9b0c6182a2.jpg",
          title:'Tủ'
        },
        {
          src:"https://salt.tikicdn.com/cache/280x280/ts/product/e1/04/31/7763d9035552760f627c34acfec0e12f.jpg",
          title:'Sách Học Tiếng Anh'
        },
        {
          src:"https://salt.tikicdn.com/cache/280x280/ts/product/7c/da/b3/4828a68bf4864874b3f85eee932a051e.jpg",
          title:'Bình giữ nhiệt'
        },
        {
          src:"https://salt.tikicdn.com/cache/280x280/ts/product/c0/20/26/d18b12c8541c13c0a059761cd6a3159d.png",
          title:'Kệ & Tủ'
        },
        {
          src:"https://salt.tikicdn.com/ts/category/07/40/db/51cb029a8c0c7a9bfaf038f54f6d9f27.jpg",
          title:'Cà phê'
        },
        {
          src:"https://salt.tikicdn.com/cache/280x280/ts/product/80/2e/45/98bd5029ed6f7b7b9b48d292ab28f517.jpg",
          title:'Nồi các loại'
        },
        {
          src:"https://salt.tikicdn.com/cache/280x280/ts/product/85/ac/e3/8cb923f661d5c12d94946076e551f7db.jpg",
          title:'Nội thất phòng ngủ khác'
        }
      ]
    return (
        <div className="cm-width">
            <div className="home-category">
               {!check && <h2 className="header">Danh mục nổi bật</h2>} 
                <div className="body">
                    <div className="body-slide">
                        <div className="body-slide--list">
                            { categories.map((category,index) => {
                                return (
                                    <a href="/home" key={index.toString()} className="item">
                                        <Images src={category.src} alt={`category ${index}`}/>
                                        <h3>{category.title}</h3>
                                    </a>
                                )
                            })

                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FamousCategory