import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RESPONSE_ERROR_TEXT } from "../../constants/stringConstants";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
import { getAccountStatusSelector, getUserIdSelector } from "../../store/reducers/accountReducer";
import { getBasicUserCollectionsInfoSelector, updateBasicCollectionsInfoAfterDelete } from "../../store/reducers/userCollectionsReducer";
import { cutBasicUserCollectionsInfo} from "../../utils/utils";

export const useDeleteSharedCollectionButton = (_id: string, onChangeLoadingStatus: (value: boolean)=> void, openDeleteNotification: ((descriptionText: string) => void)) => {
    const dispatch = useAppDispatch();

    const isUserAuthorized = useAppSelector(getAccountStatusSelector);
    const currentCollections = useAppSelector(getBasicUserCollectionsInfoSelector);
    const currentUserId = useAppSelector(getUserIdSelector);

    const [deleteCollectionTriger] = collectionDataAPI.useDeleteCollectionMutation();

    if (isUserAuthorized) {
        return () => {
            onChangeLoadingStatus(true)

            deleteCollectionTriger(`api/delete-collection/:${_id}/:${currentUserId}`)
            .unwrap()
            .then(
                (userCollectionsData) => {
                    onChangeLoadingStatus(false)
                    dispatch(updateBasicCollectionsInfoAfterDelete(cutBasicUserCollectionsInfo(userCollectionsData)));
                },
                () => {
                    onChangeLoadingStatus(false)
                    openDeleteNotification(RESPONSE_ERROR_TEXT.SOMETHING_WENT_WRONG)
                }
            )
        }
    }
    
    return () => {
        dispatch(updateBasicCollectionsInfoAfterDelete(currentCollections.filter(collection => collection._id !== _id)));
    }
}