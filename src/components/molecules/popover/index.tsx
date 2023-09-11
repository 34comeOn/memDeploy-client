import * as React from 'react';
import { Button, Popover } from 'antd';
import { CheckboxList } from '../checkboxList';
import { CheckSquareOutlined} from "@ant-design/icons";
import './style.scss';
import { BUTTON_TITLE } from '../../../constants/stringConstants';

const content = (
    <div>
        <CheckboxList />
    </div>
  );

export const BasicPopover = () => {
    return (
        <Popover placement="bottom" content={content} trigger="click">
            <Button className='popover--button'>
                <CheckSquareOutlined />
                {BUTTON_TITLE.FILTERS}
            </Button>
        </Popover>
    )
}