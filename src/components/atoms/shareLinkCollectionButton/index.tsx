import { Button } from 'antd';
import { LinkOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import { device } from "../../../global/theme";

type Props = {
    showModal: () => void,
}

export const ShareLinkCollectionButton = ({ showModal }: Props) => {
    const isLaptop = useMediaQuery({ query: `${device.isLaptop}`});
    return(
        <Button
            className='share-link__button'
            onClick={(e) => {
                e.stopPropagation();
                showModal();
            }}
            size={isLaptop ? "middle" : "small"}
        >
            <LinkOutlined />
        </Button>
    )
}
