import React from "react";
import { MainPageCollections } from "../../components/organizms/mainPageCollections";
import { PAGE_CONTENT } from "../../constants/stringConstants";
import { NodeIndexOutlined, RocketOutlined, SmileOutlined } from "@ant-design/icons";
import { useMediaQuery } from 'react-responsive';
import './style.scss';
import { device } from "../../global/theme";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { useAppSelector } from "../../app/hooks";
import { getAccountStatusSelector } from "../../store/reducers/accountReducer";

export const MainPage = () => {
    const isMobile = useMediaQuery({ query: `${device.mobile}`});
    const isAuthorized = useAppSelector(getAccountStatusSelector);

    return(
        <div className='main-page--container'>
            <h1 className='main-page--caption'>
                {PAGE_CONTENT.MAIN_PAGE_TITLE}
            </h1>
            <div className="block"></div>
            <div className="main-page--advantages__container">
                <div className="main-page--advantage__wrapper">
                    {!isMobile && <SmileOutlined />}
                    <span className="main-page--advantage__text">
                        {PAGE_CONTENT.MAIN_PAGE_ADVANTAGE_FIRST}
                    </span>
                </div>
                <div className="main-page--advantage__wrapper">
                    {!isMobile && <NodeIndexOutlined />}
                    <span className="main-page--advantage__text">
                        {PAGE_CONTENT.MAIN_PAGE_ADVANTAGE_SECOND}
                    </span>
                </div>
                <div className="main-page--advantage__wrapper">
                    {!isMobile && <RocketOutlined />}
                    <span className="main-page--advantage__text">
                        {PAGE_CONTENT.MAIN_PAGE_ADVANTAGE_THIRD}
                    </span>
                </div>
            </div>
            <div className="main-page--suggest__wrapper">
                <span>
                    {PAGE_CONTENT.MAIN_PAGE_TRY}
                </span>
                <Button size={isMobile ? "small" : "middle"} href="/about">
                    {PAGE_CONTENT.MAIN_PAGE_METHOD}
                </Button>
            </div>
            <MainPageCollections />
            {!isAuthorized && (
                <div className={`${'main-page--suggest__wrapper'}`}>
                    <span>
                        {PAGE_CONTENT.MAIN_PAGE_ACCOUNT_SECOND} 
                    </span>
                    <Button size={isMobile ? "small" : "middle"} href="/login_registration">
                        {PAGE_CONTENT.MAIN_PAGE_ACCOUNT_LINK}
                    </Button>
                </div>
            )}
        </div>
    )
}