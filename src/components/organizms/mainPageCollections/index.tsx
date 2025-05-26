import React from "react";
import { StyledMainPageMenu } from "./styledMainPageCollections";
import './style.scss';
import { getAccountStatusSelector } from "../../../store/reducers/accountReducer";
import { useAppSelector } from "../../../app/hooks";
import { StockCollectionsList } from "../stockCollectionsList";

export const MainPageCollections = () => {
    const isAuthorized = useAppSelector(getAccountStatusSelector);
    return(
        <StyledMainPageMenu className='menu-options--box' >
                {!isAuthorized && <StockCollectionsList />}
        </ StyledMainPageMenu>
    )
}