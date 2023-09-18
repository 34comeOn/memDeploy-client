import React from "react";
import { MainPageMenu } from "../../components/organizms/mainPageMenu";
import { PAGE_CONTENT } from "../../constants/stringConstants";
import { NodeIndexOutlined, RocketOutlined, SmileOutlined } from "@ant-design/icons";
import { useMediaQuery } from 'react-responsive';
import './style.scss';
import { device } from "../../global/theme";
import { Link } from "react-router-dom";

export const MainPage = () => {
    const isMobile = useMediaQuery({ query: `${device.mobileS}`});

    return(
        <div className='main-page--container'>
            <h1 className='main-page--caption'>
                {PAGE_CONTENT.MAIN_PAGE_TITLE}
            </h1>
            <div className="main-page--advantage__container">
                {!isMobile && <SmileOutlined />}
                <span className="main-page--advantage__text">
                    {PAGE_CONTENT.MAIN_PAGE_ADVANTAGE_FIRST}
                </span>
            </div>
            <div className="main-page--advantage__container">
                {!isMobile && <NodeIndexOutlined />}
                <span className="main-page--advantage__text">
                    {PAGE_CONTENT.MAIN_PAGE_ADVANTAGE_SECOND}
                </span>
            </div>
            <div className="main-page--advantage__container">
                {!isMobile && <RocketOutlined />}
                <span className="main-page--advantage__text">
                    {PAGE_CONTENT.MAIN_PAGE_ADVANTAGE_THIRD}
                </span>
            </div>
            <div className="main-page--advantage__container">
                <span className="main-page--suggest__text">
                    {PAGE_CONTENT.MAIN_PAGE_TRY} <Link className="main-page--suggest__link" to={'/about'}>{PAGE_CONTENT.MAIN_PAGE_METHOD}</Link>
                </span>
            </div>
            <MainPageMenu />
            <div className="main-page--advantage__container">
                <span className="main-page--account__text">
                    {PAGE_CONTENT.MAIN_PAGE_ACCOUNT_FIRST} 
                    <Link className="main-page--account__link" to={'/login_registration'}>{PAGE_CONTENT.MAIN_PAGE_ACCOUNT_LINK}</Link>
                    {PAGE_CONTENT.MAIN_PAGE_ACCOUNT_SECOND} 
                </span>
            </div>
        </div>
    )
}