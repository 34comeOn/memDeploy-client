import React from "react";
import Modal from 'react-modal';
import variables from '../../../sass/variables.module.scss';
import './style.scss';
import { CloseButton } from "../../atoms/closeButton";
import { useAppSelector } from "../../../app/hooks";
import { getModalWindowContentTitleSelector, getModalWindowViewSelector } from "../../../store/reducers/modalWindowReducer";
import ReactModal from "react-modal";
import { useCloseModalWindowButton } from "../../../myHooks/useCloseModalWindowButton";
import { getReactElementForModalWindowContent } from "../../../myHooks/useCurrentContentForModalWindow";
import { device } from '../../../global/theme/index';
import { useMediaQuery } from 'react-responsive';

ReactModal.setAppElement('#root');

const modalStylesLaptop = {
    content: {
        inset: '62% 40px 40px 50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '800px',
        minHeight: 'min-content',
        width: 'min-content',
        backgroundColor: `${variables.colorBackgroundDark}`,
        borderRadius: '15px',
        padding: '20px',
        paddingBottom: '35px',
    },
}

const modalStylesTablet = {
    content: {
        inset: '62% 40px 40px 50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '800px',
        minHeight: 'min-content',
        width: 'min-content',
        backgroundColor: `${variables.colorBackgroundDark}`,
        borderRadius: '15px',
        padding: '7px',
    },
}

export const EditModalWindow = () => {
    const modalViewState = useAppSelector(getModalWindowViewSelector);
    const modalWindowContent = useAppSelector(getModalWindowContentTitleSelector);
    const closeModalWindow = useCloseModalWindowButton();
    const renderingComponentAsWindowContent = getReactElementForModalWindowContent(modalWindowContent)

    const isMobile = useMediaQuery({ query: `${device.tablet}`});
    return(
        <Modal
            isOpen={modalViewState}
            style={isMobile? modalStylesTablet: modalStylesLaptop}
            overlayClassName='modal--overlay'
        >
            <CloseButton onClick={closeModalWindow}/>
            {renderingComponentAsWindowContent}
        </ Modal>
    )
}
