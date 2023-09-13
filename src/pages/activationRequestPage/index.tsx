import React from "react";
import { CenterContainer } from "../../components/atoms/centerContainer";
import { ACTIVATION_REQUEST, SUPPORT_EMAIL } from "../../constants/stringConstants";
import './style.scss';

export const ActivationRequestPage = () => {
    const activationRequestEmail= JSON.parse(localStorage.getItem('activationRequestEmail')?? 'your address');

    return(
        <CenterContainer>
            <div className='activation-request--container'>
                <h2 className='activation-request--caption'>
                    {ACTIVATION_REQUEST.TITLE}
                </h2>
                <p className='activation-request--text'>
                    {ACTIVATION_REQUEST.TEXT_INTRO}
                </p>
                <span className='activation-request--text activation-request--email'>
                    {activationRequestEmail}
                </span>
                <p className='activation-request--text'>
                    {ACTIVATION_REQUEST.TEXT_TODO}
                </p>
                <p className='activation-request--text activation-request--email'>
                    {`${ACTIVATION_REQUEST.TEXT_HELP} ${SUPPORT_EMAIL}`}
                </p>
            </div>
        </ CenterContainer>
    )
}