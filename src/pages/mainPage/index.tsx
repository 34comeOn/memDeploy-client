import React from "react";
import { MainPageMenu } from "../../components/organizms/mainPageMenu";
import { PAGE_CONTENT } from "../../constants/stringConstants";
import { NodeIndexOutlined, RocketOutlined, SmileOutlined } from "@ant-design/icons";
import { useMediaQuery } from 'react-responsive';
import './style.scss';
import { device } from "../../global/theme";

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
            <MainPageMenu />
        </div>
    )
}