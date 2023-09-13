import React from "react";
import { CenterContainer } from "../../components/atoms/centerContainer";
import { SUPPORT_EMAIL, SUPPORT_PAGE } from "../../constants/stringConstants";
import './style.scss';

export const SupportPage = () => {
    return(
        <CenterContainer>
            <div className='support-request--container'>
                <h2 className='support-request--caption'>
                    {SUPPORT_PAGE.TITLE}
                </h2>
                <p className='support-request--text'>
                    {SUPPORT_PAGE.TEXT_INTRO}
                </p>
                <p className='support-request--text support-request--email'>
                    {`${SUPPORT_PAGE.TEXT_HELP} ${SUPPORT_EMAIL}`}
                </p>
            </div>
        </ CenterContainer>
    )
}