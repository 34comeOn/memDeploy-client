import React, { useRef, useState } from "react";
import { Field, FieldProps } from "formik";
import { Transition } from "react-transition-group";
import { RADIO_BUTTON_LABEL_TEXT, RADIO_BUTTON_NAME } from "../../../constants/stringConstants";
import { CategoryInput } from "../../molecules/categoryInput";
import { FormInput } from "../../molecules/formInput";
import { RadioButtonsContainer } from "../radioButtonsContainer";
import { StyledCardRadioButtonsOrganizm } from "./styledCardRadioButtonsOrganizm";
import { ValidationErrorBox } from "../../atoms/validationErrorBox";
import { validateCollectionItemCategory } from "../../../utils/utils";

export const CardRadioButtonsOrganizm = ({
    field,
    form,
    ...props
  }: FieldProps) => {

    const SecondRadioButtonContent = useRef(null);
    const ThirdRadioButtonContent = useRef(null);

    const [isSecondRadioContentShown, setIsSecondRadioContentShown] = useState(false);
    const [isThirdRadioContentShown, setIsThirdRadioContentShown] = useState(false);
    
    const {errors, touched} = form;

    return(
        <StyledCardRadioButtonsOrganizm>
            <RadioButtonsContainer 
                labelText={RADIO_BUTTON_LABEL_TEXT.NO_CATEGORY} 
                labelFor={RADIO_BUTTON_NAME.NO_CATEGORY} 
                drillField={field}
                drillProps={props}
                checked={true}
            />
            <RadioButtonsContainer 
                labelText={RADIO_BUTTON_LABEL_TEXT.SET_CATEGORY}  
                labelFor={RADIO_BUTTON_NAME.SET_CATEGORY} 
                drillField={field}
                drillProps={props}
            >
                <Transition
                    nodeRef={SecondRadioButtonContent} 
                    in={RADIO_BUTTON_NAME.SET_CATEGORY === field.value} 
                    timeout={600}
                    onEntering={()=> setIsSecondRadioContentShown(true)}
                    onExited={()=> setIsSecondRadioContentShown(false)}
                >
                    {state => (
                        (isSecondRadioContentShown) &&  <div 
                            ref={SecondRadioButtonContent}
                            className={`set-category--container-second ${state}`}
                            >
                                <FormInput 
                                    type='text' 
                                    name='collectionItemCategory' 
                                    placeholder='phrases' 
                                    labelValue='New category title'
                                    disabled={RADIO_BUTTON_NAME.SET_CATEGORY !== field.value}
                                    validateCallback={validateCollectionItemCategory}
                                /> 
                                {errors.collectionItemCategory && touched.collectionItemCategory ? (
                                    <ValidationErrorBox error={errors.collectionItemCategory ? errors.collectionItemCategory as string: ''} />
                                ) : null}
                                <FormInput 
                                    width='60px'
                                    type='color' 
                                    name='collectionItemColor' 
                                    labelValue='Choose category color'
                                    disabled={RADIO_BUTTON_NAME.SET_CATEGORY !== field.value}
                                />
                        </div>
                    )}
                </Transition>
            </ RadioButtonsContainer>
            <RadioButtonsContainer 
                labelText={RADIO_BUTTON_LABEL_TEXT.CHOOSE_CATEGORY} 
                labelFor={RADIO_BUTTON_NAME.CHOOSE_CATEGORY} 
                drillField={field}
                drillProps={props}
            >
                <Transition
                    nodeRef={ThirdRadioButtonContent} 
                    in={RADIO_BUTTON_NAME.CHOOSE_CATEGORY === field.value} 
                    timeout={600}
                    onEntering={()=> setIsThirdRadioContentShown(true)}
                    onExited={()=> setIsThirdRadioContentShown(false)}
                >
                    {state => (
                        (isThirdRadioContentShown) &&  <div 
                            ref={ThirdRadioButtonContent}
                            className={`set-category--container-third ${state}`}
                            >
                                <Field name="cardSelectInput" component={CategoryInput} />
                            </div>
                    )}
                </Transition>
            </ RadioButtonsContainer>
        </StyledCardRadioButtonsOrganizm>
    )
}