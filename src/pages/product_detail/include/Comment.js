
import { Link } from "react-router-dom";
import { isWideScreen } from "../../../helpers/screen";
import React from 'react';
import { useEffect, useState } from "react";
import Rate from '../../../components/common/Rate';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ratingApi from "../../../api/RatingService";
import authApi from "../../../api/AuthService";
import { integerPropType } from "@mui/utils";

function Comment({ id, products }) {

    let product_id = Number(id);

    const [showRate, setShowRate] = useState(false);
    const [rating, setRating] = useState(0);
    const [content, setContent] = useState();
    const [auth, setAuth] = useState(false);

    const [vote, setVote] = useState([]);
    const [countComment, setCountComment] = useState();
    const [voteStar, setVoteStar] = useState(0);

    const [percent1, setPercent1] = useState(0);
    const [percent2, setPercent2] = useState(0);
    const [percent3, setPercent3] = useState(0);
    const [percent4, setPercent4] = useState(0);
    const [percent5, setPercent5] = useState(0);

    const getUser = async () => {
        const response = await authApi.getProfile();
        if (response.status === 200) {
            setAuth(true);
        }
    }

    useEffect(() => {
        getUser();
        getRate();
    }, [id])

    const getRate = async () => {
        setPercent1(0);
        setPercent2(0);
        setPercent3(0);
        setPercent4(0);
        setPercent5(0);
        let arr = [];
        let star = 0;
        const response = await ratingApi.getListRateByProducts(id);
        if (response.status === 200) {
            setVote(response.data);
        }
        response.data.forEach(item => {
            if (item.v_product_id == product_id) {
                star += item.v_number;
                arr.push(item);
                switch (item.v_number) {
                    case 1:
                        setPercent1(percent1 + 1);
                        break;
                    case 2:
                        setPercent2(percent2 + 1);
                        break;
                    case 3:
                        setPercent3(percent3 + 1);
                        break;
                    case 4:
                        setPercent4(percent4 + 1);
                        break;
                    case 5:
                        setPercent5(percent5 + 1);
                        break;
                    default:
                        break;
                }
            }
        })
        setCountComment(arr.length);
        setVoteStar(star);
        console.log(star);
    }

    const handleSubmit = async () => {
        let data = {
            v_content: content,
            v_number: rating,
            v_product_id: product_id,
        }
        const response = await ratingApi.createRate(data);
        if (response.status === 200) {
            setContent('');
            setShowRate(false);
        }
    }

    return (
        <div className="cmt-container">
            <div className="cmt-heading">
                Đánh Giá - Nhận Xét Từ Khách Hàng
            </div>
            <div className="customer-review">
                <div className="review-top">
                    <div className="review-rate">
                        <div className="rating">
                            <div className="rating-summary">
                                <div className="rating-point">{(voteStar / countComment) || 0}</div>
                                <div className="rating-stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3L14.6198 8.81653L21 9.49342L16.239 13.7651L17.5623 20L12 16.8235L6.43769 20L7.761 13.7651L3 9.49342L9.38015 8.81653L12 3Z" stroke="#FFA142" fill="#FFD52E"></path><path fillRule="evenodd" clipRule="evenodd" d="M12 2L14.9109 8.50806L22 9.26543L16.71 14.045L18.1803 21.0211L12 17.467L5.81966 21.0211L7.29 14.045L2 9.26543L9.08906 8.50806L12 2ZM12 4.29426L9.72422 9.38228L4.18197 9.97439L8.31771 13.7111L7.16819 19.165L12 16.3864L16.8318 19.165L15.6823 13.7111L19.818 9.97439L14.2758 9.38228L12 4.29426Z" fill="#FFA142"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3L14.6198 8.81653L21 9.49342L16.239 13.7651L17.5623 20L12 16.8235L6.43769 20L7.761 13.7651L3 9.49342L9.38015 8.81653L12 3Z" stroke="#FFA142" fill="#FFD52E"></path><path fillRule="evenodd" clipRule="evenodd" d="M12 2L14.9109 8.50806L22 9.26543L16.71 14.045L18.1803 21.0211L12 17.467L5.81966 21.0211L7.29 14.045L2 9.26543L9.08906 8.50806L12 2ZM12 4.29426L9.72422 9.38228L4.18197 9.97439L8.31771 13.7111L7.16819 19.165L12 16.3864L16.8318 19.165L15.6823 13.7111L19.818 9.97439L14.2758 9.38228L12 4.29426Z" fill="#FFA142"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3L14.6198 8.81653L21 9.49342L16.239 13.7651L17.5623 20L12 16.8235L6.43769 20L7.761 13.7651L3 9.49342L9.38015 8.81653L12 3Z" stroke="#FFA142" fill="#FFD52E"></path><path fillRule="evenodd" clipRule="evenodd" d="M12 2L14.9109 8.50806L22 9.26543L16.71 14.045L18.1803 21.0211L12 17.467L5.81966 21.0211L7.29 14.045L2 9.26543L9.08906 8.50806L12 2ZM12 4.29426L9.72422 9.38228L4.18197 9.97439L8.31771 13.7111L7.16819 19.165L12 16.3864L16.8318 19.165L15.6823 13.7111L19.818 9.97439L14.2758 9.38228L12 4.29426Z" fill="#FFA142"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3L14.6198 8.81653L21 9.49342L16.239 13.7651L17.5623 20L12 16.8235L6.43769 20L7.761 13.7651L3 9.49342L9.38015 8.81653L12 3Z" stroke="#FFA142" fill="#FFD52E"></path><path fillRule="evenodd" clipRule="evenodd" d="M12 2L14.9109 8.50806L22 9.26543L16.71 14.045L18.1803 21.0211L12 17.467L5.81966 21.0211L7.29 14.045L2 9.26543L9.08906 8.50806L12 2ZM12 4.29426L9.72422 9.38228L4.18197 9.97439L8.31771 13.7111L7.16819 19.165L12 16.3864L16.8318 19.165L15.6823 13.7111L19.818 9.97439L14.2758 9.38228L12 4.29426Z" fill="#FFA142"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3L14.6198 8.81653L21 9.49342L16.239 13.7651L17.5623 20L12 16.8235L6.43769 20L7.761 13.7651L3 9.49342L9.38015 8.81653L12 3Z" stroke="#FFA142" fill="#FFD52E"></path><path fillRule="evenodd" clipRule="evenodd" d="M12 2L14.9109 8.50806L22 9.26543L16.71 14.045L18.1803 21.0211L12 17.467L5.81966 21.0211L7.29 14.045L2 9.26543L9.08906 8.50806L12 2ZM12 4.29426L9.72422 9.38228L4.18197 9.97439L8.31771 13.7111L7.16819 19.165L12 16.3864L16.8318 19.165L15.6823 13.7111L19.818 9.97439L14.2758 9.38228L12 4.29426Z" fill="#FFA142"></path></svg>
                                    <div className="rating-text">{countComment} nhận xét</div>
                                </div>
                            </div>
                            <div className="rating-detail">
                                <div className="rating-level">
                                    <div className="star-level">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z" stroke="#FFA142" fill="#FFD52E"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z" fill="#FFA142"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z" stroke="#FFA142" fill="#FFD52E"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z" fill="#FFA142"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z" stroke="#FFA142" fill="#FFD52E"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z" fill="#FFA142"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z" stroke="#FFA142" fill="#FFD52E"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z" fill="#FFA142"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z" stroke="#FFA142" fill="#FFD52E"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z" fill="#FFA142"></path></svg>
                                    </div>
                                    <div className="star-bar">
                                        <div className="bar-rate" style={{ width: `${percent5 !== 0 ? (percent5 / countComment * 100) : 0}%` }} />
                                    </div>
                                    <div className="rating-number">{percent5 !== 0 ? percent5 : 0}</div>
                                </div>
                                <div className="rating-level">
                                    <div className="star-level">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z" stroke="#FFA142" fill="#FFD52E"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z" fill="#FFA142"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z" stroke="#FFA142" fill="#FFD52E"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z" fill="#FFA142"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z" stroke="#FFA142" fill="#FFD52E"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z" fill="#FFA142"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z" stroke="#FFA142" fill="#FFD52E"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z" fill="#FFA142"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z" stroke="#DDDDE3" fill="#DDDDE3"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z" fill="#DDDDE3"></path></svg>
                                    </div>
                                    <div className="star-bar">
                                        <div className="bar-rate" style={{ width: `${percent4 !== 0 ? (percent4 / countComment * 100) : 0}%` }} />
                                    </div>
                                    <div className="rating-number">{percent4 !== 0 ? percent4 : 0}</div>
                                </div>
                                <div className="rating-level">
                                    <div className="star-level">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z" stroke="#FFA142" fill="#FFD52E"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z" fill="#FFA142"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z" stroke="#FFA142" fill="#FFD52E"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z" fill="#FFA142"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z" stroke="#FFA142" fill="#FFD52E"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z" fill="#FFA142"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z" stroke="#DDDDE3" fill="#DDDDE3"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z" fill="#DDDDE3"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z" stroke="#DDDDE3" fill="#DDDDE3"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z" fill="#DDDDE3"></path></svg>
                                    </div>
                                    <div className="star-bar">
                                        <div className="bar-rate" style={{ width: `${percent3 !== 0 ? (percent3 / countComment * 100) : 0}%` }} />
                                    </div>
                                    <div className="rating-number">{percent3 !== 0 ? percent3 : 0}</div>
                                </div>
                                <div className="rating-level">
                                    <div className="star-level">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z" stroke="#FFA142" fill="#FFD52E"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z" fill="#FFA142"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z" stroke="#FFA142" fill="#FFD52E"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z" fill="#FFA142"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z" stroke="#DDDDE3" fill="#DDDDE3"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z" fill="#DDDDE3"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z" stroke="#DDDDE3" fill="#DDDDE3"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z" fill="#DDDDE3"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z" stroke="#DDDDE3" fill="#DDDDE3"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z" fill="#DDDDE3"></path></svg>
                                    </div>
                                    <div className="star-bar">
                                        <div className="bar-rate" style={{ width: `${percent2 !== 0 ? (percent2 / countComment * 100) : 0}%` }} />
                                    </div>
                                    <div className="rating-number">{percent2 !== 0 ? percent2 : 0}</div>
                                </div>
                                <div className="rating-level">
                                    <div className="star-level">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z" stroke="#FFA142" fill="#FFD52E"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z" fill="#FFA142"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z" stroke="#DDDDE3" fill="#DDDDE3"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z" fill="#DDDDE3"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z" stroke="#DDDDE3" fill="#DDDDE3"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z" fill="#DDDDE3"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z" stroke="#DDDDE3" fill="#DDDDE3"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z" fill="#DDDDE3"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z" stroke="#DDDDE3" fill="#DDDDE3"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z" fill="#DDDDE3"></path></svg>
                                    </div>
                                    <div className="star-bar">
                                        <div className="bar-rate" style={{ width: `${percent1 !== 0 ? (percent1 / countComment * 100) : 0}%` }} />
                                    </div>
                                    <div className="rating-number">{percent1 !== 0 ? percent1 : 0}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="review-img">
                        {isWideScreen() &&
                            <>
                                <div className="imgs">
                                    <div className="imgs-header">
                                        Tất cả hình ảnh (100)
                                    </div>
                                    <div className="imgs-inner">
                                        <img alt="/" src="https://dienmaythienphu.vn/wp-content/uploads/2022/01/treotuong-2604-1622626429.jpg" />
                                        <img alt="/" src="https://dienmaythienphu.vn/wp-content/uploads/2022/01/treotuong-2604-1622626429.jpg" />
                                        <img alt="/" src="https://dienmaythienphu.vn/wp-content/uploads/2022/01/treotuong-2604-1622626429.jpg" />
                                        <img alt="/" src="https://dienmaythienphu.vn/wp-content/uploads/2022/01/treotuong-2604-1622626429.jpg" />
                                        <img alt="/" src="https://dienmaythienphu.vn/wp-content/uploads/2022/01/treotuong-2604-1622626429.jpg" />
                                        <img alt="/" src="https://dienmaythienphu.vn/wp-content/uploads/2022/01/treotuong-2604-1622626429.jpg" />
                                    </div>
                                </div>
                                <div className="review-filter">
                                    <div className="filter-label">Lọc xem theo : </div>
                                    <div className="filter-inner">
                                        <span>Mới nhất</span>
                                        <span>Có hình ảnh</span>
                                        <span>Đã mua hàng</span>
                                        <span>5 sao</span>
                                        <span>4 sao</span>
                                        <span>3 sao</span>
                                        <span>2 sao</span>
                                        <span>1 sao</span>
                                    </div>
                                </div>
                            </>
                        }
                        {!isWideScreen() &&
                            <div></div>
                        }
                    </div>
                </div>
                {auth === true &&
                    <div className="rate-container">
                        <button onClick={() => setShowRate(true)}>Viết đánh giá</button>
                    </div>
                }
                {showRate === true && (
                    <>
                        <div className="rate-popup">
                            <div className="rate-form">
                                <div className="rate-form-header">
                                    <p>Đánh giá</p>
                                    <div className="rate-close" onClick={() => setShowRate(false)}>
                                        <FontAwesomeIcon icon={faXmark} />
                                    </div>
                                </div>
                                <div className="rate-form-content">
                                    <div className="rate-info">
                                        <img src={products.pro_avatar} alt='xad' width='35' height='35' />
                                        <span>{products.pro_name}</span>
                                    </div>
                                    <div className="rate">
                                        <Rate
                                            rating={rating}
                                            onRating={(rate) => setRating(rate)}
                                        />
                                    </div>
                                    <div className="rate-input">
                                        <textarea type='text' value={content} onChange={(e) => setContent(e.target.value)} placeholder="Mời bạn chia sẻ thêm một số cảm nhận về sản phẩm ..." />
                                        <button onClick={handleSubmit}>Gửi đánh giá</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {vote.map((item, index) =>
                    item.v_product_id == product_id && (
                        <div className="customer-comment" key={index}>
                            <div className="review-user">
                                <div className="user-inner">
                                    <div className="user-avatar">
                                        <img alt="/" src="https://dienanhtrongtamtay.com/wp-content/uploads/2021/04/Icon-la-gi.jpg" width="48" height="48" />
                                    </div>
                                    <div>
                                        <div className="user-name">User {item.v_product_id}</div>
                                        {/* <div className="user-date">Đã tham gia 2 tuần</div> */}
                                    </div>
                                </div>
                                {/* <div className="review-cmt-user-info">
                                <img alt="/" src="https://salt.tikicdn.com/ts/upload/c6/67/f1/444fc9e1869b5d4398cdec3682af7f14.png" width="20" height="20"/>
                                Đã viết:
                                <span>11 Đánh giá</span>
                            </div>
                            <div className="review-cmt-user-info">
                                <img alt="/" src="https://salt.tikicdn.com/ts/upload/c6/67/f1/444fc9e1869b5d4398cdec3682af7f14.png" width="20" height="20"/>
                                Đã nhận:
                                <span>69 Lượt cảm ơn</span>
                            </div> */}
                            </div>
                            <div className="review-user-content">
                                <div className="review-title">
                                    <Rate rating={item.v_number} />
                                </div>
                                <div className="review-check-icon">
                                    <img alt="/" src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" width="14" height="14" />
                                    Đã mua hàng
                                </div>
                                <div className="review-user-text">
                                    {item.v_content}
                                </div>
                                {/* <div className="text-created-date">
                                <span>Đánh giá vào 5 ngày trước</span>
                                <span className="rated">Đã dùng 3 ngày</span>
                            </div>
                            <span className="thank">
                                <img alt="/" src="https://i.pinimg.com/originals/f8/2b/b1/f82bb1b3bb1df050238910c0f8632491.jpg" width="20" height="20"/>
                                <span>Hữu ích (100)</span>
                            </span> */}
                                <span className="thank">Bình luận</span>
                                <span className="thank">Chia sẻ</span>
                            </div>
                        </div>
                    ))}

                {/* <div className="review-pages">
                    <ul>
                        <li>
                            <Link to ="detail" className="img-noactive">
                                <img alt="/" src="https://icons.veryicon.com/png/o/miscellaneous/test-2/prev.png" width="20" height="20"/>
                            </Link>
                        </li>
                        <li>
                            <Link className="page-active" to="/:slug">1</Link>
                        </li>
                        <li>
                            <Link to="/:slug">2</Link>
                        </li>
                        <li>
                            <Link to="/:slug">3</Link>
                        </li>
                        <li>
                            <Link to ="detail">
                                <img alt="/" src="https://cdn-icons-png.flaticon.com/512/130/130884.png" width="20" height="20"/>
                            </Link>
                        </li>
                    </ul>
                </div> */}
            </div>
        </div>
    )

}

export default Comment;