import React from "react";
import { StyledMainPageMenu } from "./styledMainPageMenu";
import './style.scss';
import { getAccountStatusSelector } from "../../../store/reducers/accountReducer";
import { useAppSelector } from "../../../app/hooks";
import { StockCollectionsList } from "../stockCollectionsList";

export const MainPageMenu = () => {
    const accountStatus = useAppSelector(getAccountStatusSelector);
    return(
        <StyledMainPageMenu className='menu-options--box' >
                {!accountStatus && <StockCollectionsList />}
        </ StyledMainPageMenu>
    )
}