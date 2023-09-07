import React, { ReactElement } from "react";
import './style.scss';

export const CenterContainer = ({children}: {children: ReactElement}) => {
    return (
        <div className="center-container">
            {children}
        </div>
    )
}