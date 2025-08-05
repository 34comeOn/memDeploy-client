import React from "react";
import { MainPageCollections } from "../../components/organizms/mainPageCollections";
import { PAGE_CONTENT } from "../../constants/stringConstants";
import { NodeIndexOutlined, RocketOutlined, SmileOutlined } from "@ant-design/icons";
import { useMediaQuery } from 'react-responsive';
import './style.scss';
import { device } from "../../global/theme";
import { Button } from "antd";
import { useAppSelector } from "../../app/hooks";
import { getAccountStatusSelector } from "../../store/reducers/accountReducer";
import { getBasicUserCollectionsInfoSelector } from "../../store/reducers/userCollectionsReducer";
import { UserCollectionsList } from "../../components/organizms/userCollectionsList";

type Props = {
    children?: React.ReactNode;
    currentSharedCollectionId?: string;
}

export const MainPage = (props: Props) => {
    const {children, currentSharedCollectionId} = props;

    const isMobile = useMediaQuery({ query: `${device.mobile}`});
    const isUserAuthorized = useAppSelector(getAccountStatusSelector);

    const allCollections = useAppSelector(getBasicUserCollectionsInfoSelector);
    const sharedCollections = allCollections.filter(collection => collection.collectionShareLink?.length && collection.collectionShareLink?.length > 0);
    const sharedCollectionsWithoutCurrentApplyed = sharedCollections.filter(collection => collection._id !== currentSharedCollectionId);

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
            {children}
            <div className="main-page--suggest__wrapper">
                <span>
                    {PAGE_CONTENT.MAIN_PAGE_TRY}
                </span>
                <Button size={isMobile ? "small" : "middle"} href="/about">
                    {PAGE_CONTENT.MAIN_PAGE_METHOD}
                </Button>
            </div>
            <MainPageCollections />
            {!isUserAuthorized && (
                <div className={`${'main-page--suggest__wrapper'}`}>
                    <span>
                        {PAGE_CONTENT.MAIN_PAGE_ACCOUNT_SECOND} 
                    </span>
                    <Button size={isMobile ? "small" : "middle"} href="/login_registration">
                        {PAGE_CONTENT.MAIN_PAGE_ACCOUNT_LINK}
                    </Button>
                </div>
            )}
            {sharedCollectionsWithoutCurrentApplyed.length > 0 && !isUserAuthorized && (
                <>
                    <p style={{color: 'white', fontSize: '16px', maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto', marginTop: '45px', textAlign: 'center'}}>
                        {`These are collections, somebody shared with you.
                        Login or get an account to train them on other device and see train progress over there as well.`}
                    </p>
                    <UserCollectionsList collections={sharedCollectionsWithoutCurrentApplyed} isSharedCollections={true} />
                </>
            )}
        </div>
    )
}