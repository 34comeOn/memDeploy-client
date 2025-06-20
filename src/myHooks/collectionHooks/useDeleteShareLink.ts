import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { DELETE_SHARE_LINK, RESPONSE_ERROR_TEXT } from "../../constants/stringConstants";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
import { getUserIdSelector } from "../../store/reducers/accountReducer";
import { hideModalWindow } from "../../store/reducers/modalWindowReducer";
import { removeShareLinkForBasicCollectionsInfo } from "../../store/reducers/userCollectionsReducer";

export type TdeleteShareLinkData = {
    userId: string,
    collectionId: string,
  }
export const useDeleteShareLink = (
    _id: string,
    onChangeLoadingStatus: (value: boolean)=> void,
    openNotification: ((descriptionText: string) => void),
) => {
    const dispatch = useAppDispatch();
    const [getAllCollectionsAfterEditingCollectionTriger] = collectionDataAPI.useDeleteShareLinkMutation();
    const currentUserId = useAppSelector(getUserIdSelector);
    
    return () => {

        const deleteShareLinkObj: TdeleteShareLinkData = {
            userId: currentUserId,
            collectionId: _id,
        }

        onChangeLoadingStatus(true)
        getAllCollectionsAfterEditingCollectionTriger({path: DELETE_SHARE_LINK, deleteShareLinkObj})
        .unwrap()
        .then(
          (result) => {
            onChangeLoadingStatus(false)
            dispatch(removeShareLinkForBasicCollectionsInfo({currentCollectionId: _id}))
            dispatch(hideModalWindow());
          },
          () => {
            onChangeLoadingStatus(false)
            openNotification(RESPONSE_ERROR_TEXT.SOMETHING_WENT_WRONG)
          }
        );
    }
}
