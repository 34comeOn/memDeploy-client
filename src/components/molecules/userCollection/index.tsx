import React, { useEffect, useState } from "react";
import { StyledUserCollection } from "./styledUserCollection";
import './style.scss';
import { checkAdminPowers, copyToClipboard, cutWords, getCurrentUserEmailFromLStorage } from "../../../utils/utils";
import { DeleteCollectionButton } from "../../atoms/deleteCollectionButton";
import { EditCollectionButton } from "../../atoms/editCollectionButton";
import { CustomSpinner } from "../../atoms/customSpinner";
import { useRequestLoading } from "../../../myHooks/useRequestLoading";
import { useWarningNotification } from "../../../myHooks/utillsHooks/useWarningNotification";
import { RESPONSE_ERROR_TITLE } from "../../../constants/stringConstants";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useGetStockDataTriger } from "../../../myHooks/useGetStockDataTriger";
import { useChooseCollectionButton } from "../../../myHooks/collectionHooks/useChooseCollectionButton";
import { getAccountStatusSelector, getUserIdSelector } from "../../../store/reducers/accountReducer";
import { Button, Modal } from "antd";
import { useCreateShareLink } from "../../../myHooks/collectionHooks/useCreateShareLink";
import { ShareLinkCollectionButton } from "../../atoms/shareLinkCollectionButton";
import { useDeleteShareLink } from "../../../myHooks/collectionHooks/useDeleteShareLink";
import { setCurrentCollectionShared, setCurrentCollectionStock } from "../../../store/reducers/userCollectionsReducer";
import { useGetSharedDataTriger } from "../../../myHooks/useGetSharedDataTriger";
import { DeleteSharedCollectionButton } from "../../atoms/deleteSharedCollectionButton";

type Props = {
    title: string, 
    color: string, 
    adminList: string[], 
    _id: string,
    shareLink: string,
    isSharedCollection: boolean,
    isStockCollection: boolean,
    showUnfollowIcon?: boolean,
    isShowingAnimation?: boolean,
}

export const UserCollection = (props: Props) => {
    const {
        title,
        color,
        adminList,
        _id,
        shareLink,
        isSharedCollection,
        isStockCollection,
        showUnfollowIcon,
        isShowingAnimation = false,
    } = props;

    const shortTitle = cutWords(title, 19);

    const [openModal, setOpenModal] = useState(false);

    const {isLoading, onChangeLoadingStatus} = useRequestLoading();

    useEffect(() => {
        if (!isLoading) {
            setConfirmLoadingLinkCreation(false);
            setConfirmLoadingLinkDeletion(false);
        }
    },[isLoading]);

    const [notificationContextHolder, openNotification] = useWarningNotification(RESPONSE_ERROR_TITLE.CHOOSE_COLLECTION);
    const [deleteContextHolder, openDeleteNotification] = useWarningNotification(RESPONSE_ERROR_TITLE.DELETE);
    const [createShareLinkContextHolder, openCreateShareLinkNotification] = useWarningNotification(RESPONSE_ERROR_TITLE.CREATE_SHARE_LINK);
    const [deleteShareLinkContextHolder, openDeleteShareLinkNotification] = useWarningNotification(RESPONSE_ERROR_TITLE.DELETE_SHARE_LINK);

    const currentUserEmailFromLStorage = getCurrentUserEmailFromLStorage();
    const userHasAdminPowersForCollection = checkAdminPowers(currentUserEmailFromLStorage?? '', adminList?? []);


    const isUserAuthorized = useAppSelector(getAccountStatusSelector);

    const getDataFromLocalStorageByClick = useGetStockDataTriger(
        _id,
        onChangeLoadingStatus,
        openNotification as ((descriptionText: string) => void),
    );
    
    const getDataByClick = useChooseCollectionButton(
        _id,
        onChangeLoadingStatus,
        openNotification as ((descriptionText: string) => void),
    );

    const getSharedDataWithLocalStorageProgressByClick = useGetSharedDataTriger(
        shareLink,
        onChangeLoadingStatus,
        openNotification as ((descriptionText: string) => void),
    );

    const currentUserId = useAppSelector(getUserIdSelector);
    const getSharedDataWithDbProgressByClick = useGetSharedDataTriger(
        shareLink,
        onChangeLoadingStatus,
        openNotification as ((descriptionText: string) => void),
        currentUserId,
    );

    const onCreateShareLinkHandler = useCreateShareLink(
        _id,
        onChangeLoadingStatus,
        openCreateShareLinkNotification as ((descriptionText: string) => void),
    );

    const onDeleteShareLinkHandler = useDeleteShareLink(
        _id,
        onChangeLoadingStatus,
        openDeleteShareLinkNotification as ((descriptionText: string) => void),
    );

    const [confirmLoadingLinkCreation, setConfirmLoadingLinkCreation] = useState(false);
    const [confirmLoadingLinkDeletion, setConfirmLoadingLinkDeletion] = useState(false);
    const [showCopiedSuccessfully, setShowCopiedSuccessfully] = useState(false);

    const showModal = () => {
        setOpenModal(true);
    };

    const handleCreate = (e: React.MouseEvent<HTMLElement>) => {
        setConfirmLoadingLinkCreation(true);
        onCreateShareLinkHandler();
        e.preventDefault();
    };
  
    const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
        setConfirmLoadingLinkDeletion(true);
        onDeleteShareLinkHandler();
        e.preventDefault();
    };

    const handleCopyShareLink = async () => {
        const result = await copyToClipboard(`https://memorizer-app.com/apply_collection_share_link/${shareLink}`);
        if (result) {
            setShowCopiedSuccessfully(true);
            setTimeout(() => {
                setShowCopiedSuccessfully(false);
            }, 3000)
        } else {
            alert('Could not copy, something went wrong :(');
        }
    };
    
    const handleCancel = () => {
        setOpenModal(false);
    };

    const dispatch = useAppDispatch();

    const onClickHandler = () => {
        if (isStockCollection) {
            getDataFromLocalStorageByClick();
        } else if (isSharedCollection) {
            if (isUserAuthorized) {
                getSharedDataWithDbProgressByClick();
            } else {
                getSharedDataWithLocalStorageProgressByClick();
            }
        } else {
            getDataByClick();
        }

        if (isStockCollection) {
            dispatch(setCurrentCollectionStock(true));
        } else if (isSharedCollection) {
            dispatch(setCurrentCollectionShared(true));
        } else {
            dispatch(setCurrentCollectionStock(false));
            dispatch(setCurrentCollectionShared(false));
        }
    }

    return(
        <>
            <StyledUserCollection 
                color={color}
                isShowingAnimation={isShowingAnimation}
                onClick={onClickHandler}
            >
                <div className='collection--buttons__wrapper'>
                    {userHasAdminPowersForCollection && !isSharedCollection && (
                        <>
                            <ShareLinkCollectionButton showModal={showModal}/>
                            <EditCollectionButton _id={_id} title={title} color={color} />
                            <DeleteCollectionButton 
                                onChangeLoadingStatus={onChangeLoadingStatus}
                                openNotification={openDeleteNotification as ((descriptionText: string) => void)}
                                _id={_id} 
                            />
                        </>
                    )}
                    {isSharedCollection && showUnfollowIcon && (
                        <>
                            <DeleteSharedCollectionButton 
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

            <Modal
                open={openModal}
                title="Share your collection"
                confirmLoading={confirmLoadingLinkCreation || confirmLoadingLinkDeletion}
                onCancel={handleCancel}
                footer={[
                    <Button
                        key="stub1"
                        type="primary"
                        style={{display: 'none', userSelect: 'none'}}
                    >
                        button stub!!!
                    </Button>,
                    <Button
                        key="stub2"
                        type="primary"
                        style={{display: 'none', userSelect: 'none'}}
                    >
                        button stub!!!
                    </Button>,
                ]}
            >
                <p>You can share your collection with your friends</p>
                <div style={{display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', gap: '20px'}}>
                    <Button
                        key="submit"
                        type="primary"
                        onClick={handleCreate}
                        disabled={shareLink.length !== 0}
                        loading={confirmLoadingLinkCreation}
                    >
                        Generate link
                    </Button>
                    <Button
                        key="copy"
                        type="primary"
                        style={{marginRight: 'auto'}}
                        onClick={handleCopyShareLink}
                        disabled={shareLink.length === 0}
                    >
                        {showCopiedSuccessfully ? 'Copied!' : 'Copy link'}
                    </Button>
                    <Button
                        key="delete"
                        type="primary"
                        onClick={handleDelete}
                        loading={confirmLoadingLinkDeletion}
                        disabled={shareLink.length === 0}
                    >
                        Stop sharing
                    </Button>
                </div>
            </Modal>
            <>
                {createShareLinkContextHolder}
            </>
            <>
                {deleteShareLinkContextHolder}
            </>
        </>
    )
}