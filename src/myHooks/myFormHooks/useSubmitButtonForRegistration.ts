import { useNavigate } from "react-router-dom";
import { RESPONSE_ERROR_TEXT, REGISTER_USER_ENDPOINT } from "../../constants/stringConstants";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";

export interface IlogInForm {
    email: string, 
    userName: string, 
    password: string, 
    confirmPassword: string,
}

export const UseSubmitButtonToRegister = (onChangeLoadingStatus: (value: boolean)=> void, openRegistrationNotification: ((descriptionText: string) => void)) => {
    const navigate = useNavigate();
    const [getAllUserDataAfterRegistrationTriger] = collectionDataAPI.usePostNewUserMutation();

    return (values: IlogInForm) => {
        const newUserObject = {
            email: values.email,
            password: values.password,
            userName: values.userName,
            isActivated: false,
            activationLink: '',
            subscription: 'none',
            currentToken: 'none',
            currentCollection: 'none',
            userCollectionsData: [],
        }

        onChangeLoadingStatus(true);

        getAllUserDataAfterRegistrationTriger({path:REGISTER_USER_ENDPOINT, putObj: newUserObject})
        .unwrap()
        .then(
          () => {
            onChangeLoadingStatus(false);
            navigate('/');
          },
          (error) => {
            if (error.status === 400) {
              openRegistrationNotification(RESPONSE_ERROR_TEXT.EMAIL_ALREADY_EXIST)
            } else {
              openRegistrationNotification(RESPONSE_ERROR_TEXT.SOMETHING_WENT_WRONG)
            }
          }
        )
    }
}