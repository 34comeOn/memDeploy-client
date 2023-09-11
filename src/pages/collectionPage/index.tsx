import React from "react";
import { useAppSelector } from "../../app/hooks";
import { AddNewCollectionItemButton } from "../../components/atoms/addNewCollectionItemButton";
import { BasicPopover } from "../../components/molecules/popover";
import { RepeatContainer } from "../../components/organizms/repeatContainer";
import { getAccountStatusSelector } from "../../store/reducers/accountReducer";
import { getCurrentCollectionSelector } from "../../store/reducers/userCollectionsReducer";
import './style.scss';

export const CollectionPage = () => {
    const accountStatus = useAppSelector(getAccountStatusSelector);
    const currentCollection = useAppSelector(getCurrentCollectionSelector);
    return(
        <div className="collection-page--container">
            <h1 className='collection-page--caption'>
                Training {currentCollection.collectionTitle} collection
            </h1>
            <div className='repeat-menu--button-wrapper '>
                {accountStatus && <AddNewCollectionItemButton />}
                <BasicPopover />
            </div>
            <div className='collection-data--container'>
                <RepeatContainer />
            </div>
        </div>
    )
}