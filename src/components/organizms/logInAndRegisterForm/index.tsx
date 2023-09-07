import React, { useState } from "react";
import { Formik, Form } from 'formik';
import { FormInput } from "../../molecules/formInput";
import './style.scss';
import { UseSubmitButtonToRegister } from "../../../myHooks/myFormHooks/useSubmitButtonForRegistration";
import { UseSubmitButtonToLogIn } from "../../../myHooks/myFormHooks/useSubmitButtonForLogIn";
import { logInFormValidationSchema, registrationFormValidationSchema } from "../../../validationSchemas";
import { ValidationErrorBox } from "../../atoms/validationErrorBox";
import { PasswordInput } from "../../molecules/passwordInput";
import { ForgotPasswordLink } from "../../atoms/forgotPasswordLink";
import { CustomSpinner } from "../../atoms/customSpinner";
import { useWarningNotification } from "../../../myHooks/utillsHooks/useWarningNotification";
import { useRequestLoading } from "../../../myHooks/useRequestLoading";
import { RESPONSE_ERROR_TITLE } from "../../../constants/stringConstants";

export const LogInAndRegisterForm = () => {
    const [isRegistrationFormActive, setIsRegistrationFormActive] = useState(false);

    const [registrationContextHolder, openRegistrationNotification] = useWarningNotification(RESPONSE_ERROR_TITLE.REGISTRATION);
    const [contextHolder, openNotification] = useWarningNotification(RESPONSE_ERROR_TITLE.LOG_IN);
    const {isLoading, onChangeLoadingStatus} = useRequestLoading();

    const onRegisterHandler = UseSubmitButtonToRegister(onChangeLoadingStatus, openRegistrationNotification as ((descriptionText: string) => void));
    const onLogInHandler = UseSubmitButtonToLogIn(onChangeLoadingStatus, openNotification as ((descriptionText: string) => void));
    return(
        <Formik 
            initialValues={{ 
                email: '', 
                userName: '', 
                password:'', 
                confirmPassword:'' 
            }}
            validationSchema={isRegistrationFormActive? registrationFormValidationSchema : logInFormValidationSchema}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={
                isRegistrationFormActive? onRegisterHandler: onLogInHandler
            }
        >
            {({ errors, touched, values })=>{
                return(
                    <Form className='log-in--form'>
                        <>
                            {registrationContextHolder}
                        </>
                        <>
                            {contextHolder}
                        </>
                        {isRegistrationFormActive && <FormInput 
                            type='text' 
                            name='userName' 
                            labelValue='Name'
                        />}
                        {isRegistrationFormActive && errors.userName && touched.userName ? (
                            <ValidationErrorBox error={errors.userName} />
                        ) : null}
                        <FormInput 
                            type='text' 
                            name='email' 
                            labelValue='E-mail'
                        />
                        {errors.email && touched.email ? (
                            <ValidationErrorBox error={errors.email} />
                        ) : null}
                        <PasswordInput 
                            type='password'
                            name='password' 
                            labelValue='Password'
                            value = {values.password}
                        />
                        <CustomSpinner isLoading={isLoading} />
                        {errors.password && touched.password ? (
                            <ValidationErrorBox error={errors.password} />
                        ) : null}
                        {!isRegistrationFormActive && <ForgotPasswordLink />}
                        {isRegistrationFormActive && <PasswordInput 
                            type='password' 
                            name='confirmPassword' 
                            labelValue='Confirm password'
                            value = {values.confirmPassword}
                        />}
                        {isRegistrationFormActive && errors.confirmPassword && touched.confirmPassword ? (
                            <ValidationErrorBox error={errors.confirmPassword} />
                        ) : null}
                        <button className='submit--button' type='submit'>
                            {isRegistrationFormActive? 'Register' : 'Log in'}
                        </ button>
                        <span className='toggle-button--span'>
                            {!isRegistrationFormActive? 'Don`t have an account yet?' : 'Have account?'}
                        </span>
                        <button className='toggle--sign-button' type='button' onClick={() => setIsRegistrationFormActive(!isRegistrationFormActive)}>
                            {!isRegistrationFormActive? 'Registration' : 'Login'}
                        </ button>
                    </Form>
                )
            }}
        </ Formik>
    )
}