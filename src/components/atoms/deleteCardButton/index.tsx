import React from "react"
import { useDeleteCardButton } from "../../../myHooks/collectionHooks/useDeleteCardButton";
import { TcollectionItemData } from "../../../utils/utils";
import { StyledDeleteButton } from "../deleteButton/styledDeleteButton";
import { Popconfirm } from 'antd';
import { DELETE_CONFIRM } from "../../../constants/stringConstants";

export const DeleteCardButton = ({currentCard, onChangeLoadingStatus, openNotification}: {currentCard: TcollectionItemData, onChangeLoadingStatus: (value: boolean)=> void, openNotification: ((descriptionText: string) => void)}) => {
    const onDeleteClickHandler = useDeleteCardButton(currentCard, onChangeLoadingStatus, openNotification);
    return(
        <Popconfirm
        title={DELETE_CONFIRM.DELETE_CARD_TITLE}
        description={DELETE_CONFIRM.DELETE_CARD_TEXT}
        onConfirm={onDeleteClickHandler}
        okText="Yes"
        cancelText="No"
        >
            <StyledDeleteButton />
        </Popconfirm>
    )
}