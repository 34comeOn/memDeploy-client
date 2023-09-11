import { PlusSquareOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { useAppDispatch } from "../../../app/hooks";
import { BUTTON_TITLE, MODAL_WINDOW_CONTENT_STRING_CONSTANTS } from "../../../constants/stringConstants";
import { setContentForModalWindow, showModalWindow } from "../../../store/reducers/modalWindowReducer";
import { useMediaQuery } from 'react-responsive';
import { device } from '../../../global/theme/index';
import './style.scss';

export const AddNewCollectionItemButton = () => {
    const dispatch = useAppDispatch();
    const isMobile = useMediaQuery({ query: `${device.mobileM}`});
    
    return(
        <Button 
        className='add--new-card__button'
        onClick={() => {
            dispatch(setContentForModalWindow(MODAL_WINDOW_CONTENT_STRING_CONSTANTS.CREATE_NEW_CARD));
            dispatch(showModalWindow());
        }}
        >
            <PlusSquareOutlined />
            {!isMobile && BUTTON_TITLE.NEW_CARD}
            {isMobile && BUTTON_TITLE.NEW_CARD_SHORT}
        </Button>
    )
}