import React from "react";
import { StyledMainPageMenu } from "./styledMainPageCollections";
import './style.scss';
import { StockCollectionsList } from "../stockCollectionsList";

export const MainPageCollections = () => {
    return(
        <StyledMainPageMenu className='menu-options--box' >
            <StockCollectionsList />
        </ StyledMainPageMenu>
    )
}