import React from "react";

function OrderManagement() {
    return(
        <>
            <div className="right-container">
                <div className="heading-title">
                    Đơn hàng của tôi
                </div>
                <div className="order-tablist">
                    <div className="order-tab-active">Tất cả đơn</div>
                    <div className="order-tab">Chờ thanh toán</div>
                    <div className="order-tab">Đang xử lý</div>
                    <div className="order-tab">Đang vận chuyển</div>
                    <div className="order-tab">Đã giao</div>
                    <div className="order-tab">Đã hủy</div>
                </div>
                <div className="order-search-input">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="#808089" class="icon-left" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                    <input className="search-input-bar" name="search" placeholder="Tìm đơn hàng theo Mã đơn hàng, Nhà bán hoặc Tên sản phẩm" type="search"></input>
                    <div className="search-input-right">Tìm đơn hàng</div>
                </div>
                <div className="order-container">
                    
                </div>
            </div>  
        </>
    )
}

export default OrderManagement;