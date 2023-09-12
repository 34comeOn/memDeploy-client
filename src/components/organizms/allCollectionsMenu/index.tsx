import React from "react";
import { UserCollectionsList } from "../userCollectionsList";
import variables from '../../../sass/variables.module.scss';
import './style.scss';
import { getAccountStatusSelector } from "../../../store/reducers/accountReducer";
import { useAppSelector } from "../../../app/hooks";
import { CreateNewCollectionButton } from "../../atoms/createNewCollectionButton";
import { StyledMainPageMenu } from "../mainPageMenu/styledMainPageMenu";
import { ROUT_PROTECTION_TEXT } from "../../../constants/stringConstants";

export const AllCollectionsMenu = () => {
    const accountStatus = useAppSelector(getAccountStatusSelector);
    return(
        <StyledMainPageMenu className='collections--menu-options__box' >
            {!accountStatus && <p className='collections--menu__rout-notice'>
                {ROUT_PROTECTION_TEXT.ALL_COLLECTIONS_TEXT}
            </p> }
            <CreateNewCollectionButton disabled={!accountStatus} color={variables.colorDecorBright}>
                Create a new collection
            </ CreateNewCollectionButton>
            {accountStatus && <UserCollectionsList />}
        </ StyledMainPageMenu>
    )
}