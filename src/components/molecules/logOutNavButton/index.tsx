import React from "react";
import { StyledLogOutNavButton } from "./styledLogOutNavButton";
import './style.scss';
import { useLogOutNavButton } from "../../../myHooks/useLogOutNavButton";
import { CustomSpinner } from "../../atoms/customSpinner";
import { useRequestLoading } from "../../../myHooks/useRequestLoading";
import { useWarningNotification } from "../../../myHooks/utillsHooks/useWarningNotification";
import { RESPONSE_ERROR_TITLE } from "../../../constants/stringConstants";
import { cutTitle } from "../../../utils/utils";
import { MAX_USER_NAME_LENGTH } from "../../../constants/stockConstants";

export const LogOutNavButton = ({userName}: {userName: string}) => {
    const {isLoading, onChangeLoadingStatus} = useRequestLoading();
    const [contextHolder, openDoneNotification] = useWarningNotification(RESPONSE_ERROR_TITLE.LOGOUT);
    const onLogOutClickHandler = useLogOutNavButton(onChangeLoadingStatus, openDoneNotification as ((descriptionText: string) => void));

    const shortenedUserName = cutTitle(userName, MAX_USER_NAME_LENGTH);
    return(
        <div className="accout-name--container" >
            <span className="accout-name--title">
                {shortenedUserName}
            </span>
            <CustomSpinner isLoading={isLoading} />
            <>
                {contextHolder}
            </>
            <StyledLogOutNavButton onClick={onLogOutClickHandler}>
            </StyledLogOutNavButton>
        </div>
    )
}