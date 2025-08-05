import React from "react";
import { UserCollectionsList } from "../userCollectionsList";
import variables from '../../../sass/variables.module.scss';
import './style.scss';
import { getAccountStatusSelector, getUserEmailSelector } from "../../../store/reducers/accountReducer";
import { useAppSelector } from "../../../app/hooks";
import { CreateNewCollectionButton } from "../../atoms/createNewCollectionButton";
import { StyledMainPageMenu } from "../mainPageCollections/styledMainPageCollections";
import { ROUT_PROTECTION_TEXT } from "../../../constants/stringConstants";
import { getBasicUserCollectionsInfoSelector } from "../../../store/reducers/userCollectionsReducer";

export const AllCollectionsMenu = () => {
    const accountStatus = useAppSelector(getAccountStatusSelector);
    const userEmail = useAppSelector(getUserEmailSelector);

    const allCollections = useAppSelector(getBasicUserCollectionsInfoSelector);
    const userPersonalCollections = allCollections.filter(collection => collection.collectionAdminList.includes(userEmail));
    const sharedCollections = allCollections.filter(collection => !collection.collectionAdminList.includes(userEmail));
    return(
        <StyledMainPageMenu className='collections--menu-options__box' >
            {accountStatus ? (
                <>
                    <CreateNewCollectionButton disabled={!accountStatus} color={variables.colorDecorBright}>
                        Create new collection
                    </ CreateNewCollectionButton>
                    <UserCollectionsList collections={userPersonalCollections} />
                    {sharedCollections.length > 0 && (
                        <>
                            <h2 className='collections-page--caption'>
                                Shared collections
                            </h2>
                            <UserCollectionsList collections={sharedCollections} isSharedCollections={true} />
                        </>
                    )}
                </>
            ) : (
                <p className='collections--menu__rout-notice'>
                    {ROUT_PROTECTION_TEXT.ALL_COLLECTIONS_TEXT}
                </p> 
            )}
        </ StyledMainPageMenu>
    )
}