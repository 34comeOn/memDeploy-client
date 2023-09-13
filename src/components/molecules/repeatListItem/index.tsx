import React from "react";
import { cutWords, TcollectionItemData } from "../../../utils/utils";
import { StyledRepeatListItem } from "./styledRepeatListItem";
import './style.scss';
import { RepeatCounter } from "../repeatCounter";

type TrepeatListItem = {
    onClick: ()=>void,
    item: TcollectionItemData,
}

export const RepeatListItem = ({onClick, item} :TrepeatListItem) => {
    const itemTitle = cutWords(item.collectionItemTitle, 25);
    
    return(
        <StyledRepeatListItem 
            color={item.collectionItemColor || 'white'}
            className='list--item' 
            onClick={() => onClick()}
        >
            {itemTitle}
            <RepeatCounter item={item}/>
        </StyledRepeatListItem>
    )
}