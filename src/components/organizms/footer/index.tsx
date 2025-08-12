import React from "react";
import { CopyrightOutlined } from "@ant-design/icons";
import { StyledFooter } from "./styledFooter";
import './style.scss';

export const Footer = () => {
    return(
        <StyledFooter>
            <div className="footer--wrapper">
                <CopyrightOutlined className="footer--icon" />
                <span className="footer--text">
                    by Barabanov Mikhail
                </span>
            </div>
        </StyledFooter>
    )
}