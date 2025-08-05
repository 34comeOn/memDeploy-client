import React from "react"
import { useDispatch } from "react-redux";
import { EditOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { MODAL_WINDOW_CONTENT_STRING_CONSTANTS } from "../../../constants/stringConstants";
import { editCollection, IeditCollection } from "../../../store/reducers/editReducer";
import { setContentForModalWindow, showModalWindow } from "../../../store/reducers/modalWindowReducer";
import { useMediaQuery } from "react-responsive";
import { device } from "../../../global/theme";

export const EditCollectionButton = ({_id, color, title}: IeditCollection) => {
    const isLaptop = useMediaQuery({ query: `${device.isLaptop}`});
    const dispatch = useDispatch();

    return(
        <Button
            onClick={(e) => {
                e.stopPropagation();
                dispatch(editCollection({_id, color, title}));
                dispatch(setContentForModalWindow(MODAL_WINDOW_CONTENT_STRING_CONSTANTS.EDIT_COLLECTION));
                dispatch(showModalWindow());
            }}
            size={isLaptop ? "middle" : "small"}
        >
            <EditOutlined />
        </Button>
    )
}