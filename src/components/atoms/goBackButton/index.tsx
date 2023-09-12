import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { BUTTON_TITLE } from "../../../constants/stringConstants";
import { useMediaQuery } from 'react-responsive';
import { device } from '../../../global/theme/index';
import './style.scss';
import { useNavigate } from "react-router-dom";

export const GoBackButton = () => {
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ query: `${device.mobileL}`});
    
    return(
        <Button 
        className='go-back--button'
        onClick={() => {
            navigate(-1);
        }}
        >
            <ArrowLeftOutlined />
            {!isMobile && BUTTON_TITLE.GO_BACK}
        </Button>
    )
}