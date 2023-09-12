import { RouteObject, useRoutes } from "react-router-dom"
import App from "../App";
import { ROUTS_CONSTANTS } from "../constants/stringConstants";
import { CollectionPage } from "../pages/collectionPage";
import { ForgotPasswordPage } from "../pages/forgotPasswordPage";
import { MainPage } from "../pages/mainPage";
import { LogInAndRegisterPage } from "../pages/logInAndRegisterPage";
import { ActivationRequestPage } from "../pages/activationRequestPage";
import { SupportPage } from "../pages/supportPage";
import { AllCollectionsPage } from "../pages/allCollectionsPage";
import { AboutPage } from "../pages/aboutPage";

export const AppRouter = () => {
    const routes: RouteObject[] = [
        {
            path: ROUTS_CONSTANTS.MAIN_PAGE,
            element: <App />,
            children: [
                {index: true, element: <MainPage /> },
                {path: ROUTS_CONSTANTS.ALL_COLLECTIONS_PAGE, element: <AllCollectionsPage /> },
                {path: ROUTS_CONSTANTS.CURRENT_COLLECTION_PAGE, element: <CollectionPage /> },
                {path: ROUTS_CONSTANTS.LOGIN_AND_REGISTRATION_PAGE, element: <LogInAndRegisterPage /> },
                {path: ROUTS_CONSTANTS.FORGOT_PASSWORD_PAGE, element: <ForgotPasswordPage /> },
                {path: ROUTS_CONSTANTS.ACTIVATION_REQUEST_PAGE, element: <ActivationRequestPage /> },
                {path: ROUTS_CONSTANTS.SUPPORT_PAGE, element: <SupportPage /> },
                {path: ROUTS_CONSTANTS.ABOUT_PAGE, element: <AboutPage /> },
            ]
        }
    ];

    return useRoutes(routes);
}