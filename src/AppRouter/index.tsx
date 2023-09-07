import { RouteObject, useRoutes } from "react-router-dom"
import App from "../App";
import { ROUTS_CONSTANTS } from "../constants/stringConstants";
import { CollectionPage } from "../pages/collectionPage";
import { ForgotPasswordPage } from "../pages/forgotPasswordPage";
import { MainPage } from "../pages/mainPage";
import { LogInAndRegisterPage } from "../pages/logInAndRegisterPage";
import { ActivationRequestPage } from "../pages/activationRequestPage";

export const AppRouter = () => {
    const routes: RouteObject[] = [
        {
            path: ROUTS_CONSTANTS.MAIN_PAGE,
            element: <App />,
            children: [
                {index: true, element: <MainPage /> },
                {path: ROUTS_CONSTANTS.CURRENT_COLLECTION_PAGE, element: <CollectionPage /> },
                {path: ROUTS_CONSTANTS.LOGIN_AND_REGISTRATION_PAGE, element: <LogInAndRegisterPage /> },
                {path: ROUTS_CONSTANTS.FORGOT_PASSWORD_PAGE, element: <ForgotPasswordPage /> },
                {path: ROUTS_CONSTANTS.ACTIVATION_REQUEST_PAGE, element: <ActivationRequestPage /> },
            ]
        }
    ];

    return useRoutes(routes);
}