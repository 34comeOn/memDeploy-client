import React from "react"
import { useDeleteCollectionButton } from "../../../myHooks/collectionHooks/useDeleteCollectionButton";
import { StyledDeleteButton } from "../deleteButton/styledDeleteButton";
import { Popconfirm } from 'antd';
import { DELETE_CONFIRM } from "../../../constants/stringConstants";

export const DeleteCollectionButton = ({_id, onChangeLoadingStatus, openNotification}: {_id: string,onChangeLoadingStatus: (value: boolean)=> void, openNotification: ((descriptionText: string) => void)}) => {
    const onDeleteClickHandler = useDeleteCollectionButton(_id, onChangeLoadingStatus, openNotification);
    return(
        <Popconfirm
        title={DELETE_CONFIRM.DELETE_COLLECTION_TITLE}
        description={DELETE_CONFIRM.DELETE_COLLECTION_TEXT}
        onConfirm={onDeleteClickHandler}
        okText="Yes"
        cancelText="No"
        >
            <StyledDeleteButton />
        </Popconfirm>
    )
}



