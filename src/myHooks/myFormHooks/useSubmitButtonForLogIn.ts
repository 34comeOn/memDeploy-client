import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { RESPONSE_ERROR_TEXT, LOG_IN_USER_ENDPOINT, ROUTS_CONSTANTS } from "../../constants/stringConstants";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
import { logIn } from "../../store/reducers/accountReducer";
import { setUserBasicCollectionsInfo } from "../../store/reducers/userCollectionsReducer";
import { cutBasicUserCollectionsInfo } from "../../utils/utils";

export interface IlogInForm {
    email: string, 
    userName: string, 
    password: string, 
    confirmPassword: string, 
};

export const UseSubmitButtonToLogIn = (onChangeLoadingStatus: (value: boolean)=> void, openNotification: ((descriptionText: string) => void)) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [getAllUserDataAfterLogInTriger] = collectionDataAPI.useLogInUserMutation();
    return (values: IlogInForm) => {
        const logInObject = {
            email: values.email,
            password: values.password,
        }

        onChangeLoadingStatus(true)
        getAllUserDataAfterLogInTriger({path:LOG_IN_USER_ENDPOINT, logInObject})
        .unwrap()
        .then(
          (userData) => {
            localStorage.setItem('accessToken', JSON.stringify(userData.currentToken));
            onChangeLoadingStatus(false);
            dispatch(logIn({userName: userData.userName, userEmail: userData.email,userId: userData._id || ' '}));
            dispatch(setUserBasicCollectionsInfo(cutBasicUserCollectionsInfo(userData.userCollectionsData)));
            navigate(`/${ROUTS_CONSTANTS.ALL_COLLECTIONS_PAGE}`);
          },
          (error) => {
            onChangeLoadingStatus(false)

            if (error.status === 400) {
              openNotification(RESPONSE_ERROR_TEXT.PASS_OR_EMAIL_NOT_MATCH)
            } else if (error.status === 401) {
              openNotification(RESPONSE_ERROR_TEXT.ACCOUNT_NOT_ACTIVATED)
            } else {
              openNotification(RESPONSE_ERROR_TEXT.SOMETHING_WENT_WRONG)
            }
          }
        );
    };
};