import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { CREATE_SHARE_LINK, RESPONSE_ERROR_TEXT } from "../../constants/stringConstants";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
import { getUserIdSelector } from "../../store/reducers/accountReducer";
import { hideModalWindow } from "../../store/reducers/modalWindowReducer";
import { addShareLinkForBasicCollectionsInfo } from "../../store/reducers/userCollectionsReducer";

export type TcreateShareLinkData = {
    userId: string,
    collectionId: string,
  }
export const useCreateShareLink = (
    _id: string,
    onChangeLoadingStatus: (value: boolean)=> void,
    openNotification: ((descriptionText: string) => void),
) => {
    const dispatch = useAppDispatch();
    const [getAllCollectionsAfterEditingCollectionTriger] = collectionDataAPI.usePutShareLinkMutation();
    const currentUserId = useAppSelector(getUserIdSelector);
    
    return () => {

        const createShareLinkObj: TcreateShareLinkData = {
            userId: currentUserId,
            collectionId: _id,
        }

        onChangeLoadingStatus(true)
        getAllCollectionsAfterEditingCollectionTriger({path: CREATE_SHARE_LINK, createShareLinkObj})
        .unwrap()
        .then(
          (savedShareLink) => {
            onChangeLoadingStatus(false)
            dispatch(addShareLinkForBasicCollectionsInfo({currentCollectionId: _id, collectionShareLink: savedShareLink[0]}))
            dispatch(hideModalWindow());
          },
          () => {
            onChangeLoadingStatus(false)
            openNotification(RESPONSE_ERROR_TEXT.SOMETHING_WENT_WRONG)
          }
        );
    }
}
