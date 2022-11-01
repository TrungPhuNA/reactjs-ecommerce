import React from "react";
import Dropdown from 'react-dropdown';

function AccountInfo() {
    const options = ['1900', '1901', '1902'];
    const defaultOption = options[0];
    return(
        <>
            <div className="right-container">
                <div className="heading-title">
                    Thông tin tài khoản
                </div>
                <div className="info-page">
                    <div className="info-container">
                        <div className="info-left">
                            <span className="info-title">Thông tin cá nhân</span>
                            <div className="info-form">
                                <form>
                                    <div className="form-info">
                                        <div className="form-avatar">
                                            <div className="avatar-view">
                                                <img src="https://salt.tikicdn.com/cache/512x512/ts/avatar/b9/42/e9/5d6bd301d4a6fb334877b9ae5082f483.jpg" alt="avatar"/>
                                                <div className="avatar-edit">
                                                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/account/edit.png" alt="edit"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-name">
                                            <div className="form-control">
                                                <label>Họ & Tên</label>
                                                <div className="input-label">
                                                    <input class="input" type="search" name="fullName" maxlength="128" placeholder="Thêm họ tên"/>
                                                </div>
                                            </div>
                                            <div className="form-control">
                                                <label class="input-label">Nickname</label>
                                                <input class="input" type="search" name="userName" maxlength="128" placeholder="Thêm nickname"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <label className="input-label">Ngày sinh</label>
                                        <select name="day">
                                            <option value="0">Ngày</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                        </select>
                                        <select name="month">
                                            <option value="0">Tháng</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </select>
                                        <select name="year">
                                            <option value="0">Năm</option>
                                        </select>
                                    </div>
                                    <div className="form-control">
                                        <label className="input-label">Giới tính</label>
                                    </div>
                                    <div className="form-control">
                                        <label className="input-label">Quốc tịch</label>
                                    </div>
                                    <div className="form-control">
                                        <label className="input-label">&nbsp;</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="info-vertical"/>
                        <div className="info-right">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountInfo;