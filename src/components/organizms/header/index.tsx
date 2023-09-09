import React from "react";
import { StyledHeader } from "./styledHeader";
import { HeaderLogo } from "../../atoms/headerLogo";
import { Navigation } from "../../molecules/navigation";
import { useAppSelector } from "../../../app/hooks";
import { getAccountStatusSelector, getUserNameSelector } from "../../../store/reducers/accountReducer";
import { LogOutNavButton } from "../../molecules/logOutNavButton";
import { DropdownNavigation } from "../../molecules/dropdownNavigation";

export const Header = () => {
    const hasLoged = useAppSelector(getAccountStatusSelector);
    const userName = useAppSelector(getUserNameSelector);
    return(
        <StyledHeader>
            <HeaderLogo />
            {hasLoged && <LogOutNavButton userName={userName}/>}
            <Navigation />
            <DropdownNavigation />
        </StyledHeader>
    )
}