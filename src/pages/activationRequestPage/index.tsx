import React from "react";
import './style.scss';

export const ActivationRequestPage = () => {
    return(
        <div className='activation-request--container'>
            <h2 className='activation-request--caption'>
                Please verify your email
            </h2>
            <span>
                {`You are almoust there! We sent email to
                ${'fef'}`}
            </span>
        </div>
    )
}