

function OrderDetail() {
    
    return(
        <>
            <div className="right-container">
                <div className="heading-title">
                    <span>Chi tiết đơn hàng #1234567890 </span>
                    -
                    <span className="heading-title-bold"> Giao hàng thành công</span>
                </div>
                <div className="heading-date">
                    Ngày đặt hàng: 00:00 2/11/2022
                </div>
                <div className="heading-detail">
                    THÔNG BÁO
                </div>
                <div className="heading-detail-container1">

                </div>
                <div className="heading-detail-container2">
                    <div className="order-box-content">
                        <div>ĐỊA CHỈ NGƯỜI NHẬN</div>
                        <div className="box-content">

                        </div>
                    </div>
                    <div className="seperate-box"/>
                    <div className="order-box-content">
                        <div>HÌNH THỨC GIAO HÀNG</div>
                        <div className="box-content">
                            
                        </div>
                    </div>
                    <div className="seperate-box"/>
                    <div className="order-box-content">
                        <div>HÌNH THỨC THANH TOÁN</div>
                        <div className="box-content">
                            
                        </div>
                    </div>
                </div>
                <div className="heading-detail-container3">
                    <div className="detail-title">
                        <div className="title-tab1">
                            <span>Sản phẩm</span>
                        </div>
                        <div className="title-tab2">
                            <span>Giá</span>
                        </div>
                        <div className="title-tab2">
                            <span>Số lượng</span>
                        </div>
                        <div className="title-tab2">
                            <span>Giảm giá</span>
                        </div>
                        <div className="title-tab3">
                            <span>Tạm tính</span>
                        </div>
                    </div>
                </div>
                <div className="heading-detail-container4">
                </div>
            </div> 
        </>
    )

}

export default OrderDetail;