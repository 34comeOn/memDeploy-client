import React from "react";
import { StyledHeader } from "./styledHeader";
import { HeaderLogo } from "../../atoms/headerLogo";
import { Navigation } from "../../molecules/navigation";
import { useAppSelector } from "../../../app/hooks";
import { getAccountStatusSelector, getUserNameSelector } from "../../../store/reducers/accountReducer";
import { LogOutNavButton } from "../../molecules/logOutNavButton";
import { DropdownNavigation } from "../../molecules/dropdownNavigation";
import { useMediaQuery } from 'react-responsive';
import { device } from '../../../global/theme/index';

export const Header = () => {
    const hasLoged = useAppSelector(getAccountStatusSelector);
    const userName = useAppSelector(getUserNameSelector);

    const isTabletOrMobile = useMediaQuery({ query: `${device.tablet}`});
    return(
        <StyledHeader>
            <HeaderLogo />
            {hasLoged && <LogOutNavButton userName={userName}/>}
            {!isTabletOrMobile && !hasLoged && <Navigation />}
            {(isTabletOrMobile || hasLoged) && <DropdownNavigation />}
        </StyledHeader>
    )
}