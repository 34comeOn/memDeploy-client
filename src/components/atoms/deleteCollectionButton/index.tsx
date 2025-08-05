import React from "react"
import { useDeleteCollectionButton } from "../../../myHooks/collectionHooks/useDeleteCollectionButton";
import { Button, Popconfirm } from 'antd';
import { DELETE_CONFIRM } from "../../../constants/stringConstants";
import { DeleteOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import { device } from "../../../global/theme";

type Props = {
    _id: string,onChangeLoadingStatus: (value: boolean)=> void,
    openNotification: ((descriptionText: string) => void),
}

export const DeleteCollectionButton = ({_id, onChangeLoadingStatus, openNotification}: Props) => {
    const onDeleteClickHandler = useDeleteCollectionButton(_id, onChangeLoadingStatus, openNotification);
    const isLaptop = useMediaQuery({ query: `${device.isLaptop}`});

    return(
        <Popconfirm
            title={DELETE_CONFIRM.DELETE_COLLECTION_TITLE}
            description={DELETE_CONFIRM.DELETE_COLLECTION_TEXT}
            onConfirm={onDeleteClickHandler}
            onPopupClick={(e) => e.stopPropagation()}
            okText="Yes"
            cancelText="No"
        >
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <Button
                    size={isLaptop ? "middle" : "small"}
                >
                    <DeleteOutlined />
                </Button>
            </div>
        </Popconfirm>
    )
}
