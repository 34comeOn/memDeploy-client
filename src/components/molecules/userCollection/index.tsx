import React from "react";
import { StyledUserCollection } from "./styledUserCollection";
import './style.scss';
import { checkAdminPowers, cutWords, getCurrentUserEmailFromLStorage } from "../../../utils/utils";
import { DeleteCollectionButton } from "../../atoms/deleteCollectionButton";
import { EditCollectionButton } from "../../atoms/editCollectionButton";
import { CustomSpinner } from "../../atoms/customSpinner";
import { useRequestLoading } from "../../../myHooks/useRequestLoading";
import { useWarningNotification } from "../../../myHooks/utillsHooks/useWarningNotification";
import { RESPONSE_ERROR_TITLE } from "../../../constants/stringConstants";
import { useAppSelector } from "../../../app/hooks";
import { useGetStockDataTriger } from "../../../myHooks/useGetStockDataTriger";
import { useChooseCollectionButton } from "../../../myHooks/collectionHooks/useChooseCollectionButton";
import { getAccountStatusSelector } from "../../../store/reducers/accountReducer";
import { Button } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { useCreateShareLink } from "../../../myHooks/collectionHooks/useCreateShareLink";
import { useMediaQuery } from "react-responsive";
import { device } from "../../../global/theme";

type Props = {
    title: string, 
    color: string, 
    adminList: string[], 
    _id: string,
}

export const UserCollection = (props: Props) => {
    const {
        title,
        color,
        adminList,
        _id,
    } = props;

    const isLaptop = useMediaQuery({ query: `${device.isLaptop}`});
    const {isLoading, onChangeLoadingStatus} = useRequestLoading();
    const [notificationContextHolder, openNotification] = useWarningNotification(RESPONSE_ERROR_TITLE.CHOOSE_COLLECTION);
    const [deleteContextHolder, openDeleteNotification] = useWarningNotification(RESPONSE_ERROR_TITLE.DELETE);
    const currentUserEmailFromLStorage = getCurrentUserEmailFromLStorage();
    const userHasAdminPowersForCollection = checkAdminPowers(currentUserEmailFromLStorage?? '', adminList?? []);

    const shortTitle = cutWords(title, 19);

    const accountStatus = useAppSelector(getAccountStatusSelector);

    const getDataFromLocalStorageByClick = useGetStockDataTriger(
        _id,
        onChangeLoadingStatus,
        openNotification as ((descriptionText: string) => void)
    );
    
    const getDataByClick = useChooseCollectionButton(
        _id,
        onChangeLoadingStatus,
        openNotification as ((descriptionText: string) => void),
    );

    const onCreateShareLinkHandler = useCreateShareLink(_id, onChangeLoadingStatus, openNotification as ((descriptionText: string) => void));

    return(
        <StyledUserCollection 
            color={color}
            onClick={accountStatus ? getDataByClick : getDataFromLocalStorageByClick}
        >
            <div className='collection--buttons__wrapper'>
                {userHasAdminPowersForCollection && (
                    <>
                        <Button
                            className='share-link__button'
                            onClick={(e) => {
                                e.stopPropagation();
                                onCreateShareLinkHandler();
                            }}
                            size={isLaptop ? "middle" : "small"}
                        >
                            <LinkOutlined />
                        </Button>
                        <EditCollectionButton _id={_id} title={title} color={color} />
                        <DeleteCollectionButton 
                            onChangeLoadingStatus={onChangeLoadingStatus}
                            openNotification={openDeleteNotification as ((descriptionText: string) => void)}
                            _id={_id} 
                        />
                    </>
                )}
            </div>
            <span className='collection--title'> 
                {shortTitle}
            </span>
            {isLoading && <CustomSpinner isLoading={isLoading} />}
            <>
                {notificationContextHolder}
            </>
            <>
                {deleteContextHolder}
            </>
        </StyledUserCollection>
    )
}