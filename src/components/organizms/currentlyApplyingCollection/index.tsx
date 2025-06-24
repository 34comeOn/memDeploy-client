import React, { useEffect } from "react";
import { UserCollection } from "../../molecules/userCollection";
import { STOCK_COLLECTION_COLOR } from "../../../constants/stockConstants";
import { nanoid } from "nanoid";
import { collectionDataAPI } from "../../../RTKApi/collectionDataApi";
import { APPLY_SHARED_COLLECTION, RESPONSE_ERROR_TEXT, STOCK_DATA_USER_ID} from "../../../constants/stringConstants";
import { CustomSpinner } from "../../atoms/customSpinner";
import { notification } from "antd";

export type TapplySharedCollectionObj = {
    userId: string,
    collectionId: string,
    shareLink: string,
}

type Props = {
    validUserId?: string,
    validCollectionId?: string,
    validShareLink?: string,
}

export const CurrentlyApplyingCollection = ({validUserId, validCollectionId, validShareLink}: Props) => {
    const [requestSharedCollectionData, result] = collectionDataAPI.useGetApplySharedCollectionDataMutation();
    const { data: applyingCollection, isLoading, isSuccess, isError } = result;

    useEffect(() => {
        const requestSharedCollectionDataOnLoad = async () => {
            try {
                await requestSharedCollectionData({path: `${APPLY_SHARED_COLLECTION}/${validUserId}/${validCollectionId}/${validShareLink}`}).unwrap();
            } catch (err) {
                notification.error({
                    message: RESPONSE_ERROR_TEXT.SOMETHING_WENT_WRONG,
                    placement: 'top',
                })
            }
        };
        requestSharedCollectionDataOnLoad();
    }, [requestSharedCollectionData]);

    if (isLoading) {
        return  <CustomSpinner isLoading={isLoading} />
    }
    if (isSuccess) {
        localStorage.setItem('stockDataUserId', STOCK_DATA_USER_ID);

        return (
            <UserCollection
                _id={applyingCollection._id || ''}
                key={applyingCollection._id || nanoid()}
                title={applyingCollection.collectionTitle}
                color={applyingCollection.collectionColor || STOCK_COLLECTION_COLOR}
                adminList={applyingCollection.collectionAdminList}
                isSharedCollection={true}
                isStockCollection={false}
                shareLink={applyingCollection.collectionShareLink || ''}
            /> 
        );
    }
    if (isError) {
        notification.error({
            message: RESPONSE_ERROR_TEXT.SHARED_COLLECTION_HAS_NOT_LOADED,
            placement: 'top',
        })
    }
    return null;
}
