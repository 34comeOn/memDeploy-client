import React from "react";
import { AllCollectionsMenu } from "../../components/organizms/allCollectionsMenu";
import './style.scss';

export const AllCollectionsPage = () => {
    return(
        <div className='collections-page--container'>
            <h1 className='collections-page--caption'>
                My collections
            </h1>
            <AllCollectionsMenu />
        </div>
    )
}