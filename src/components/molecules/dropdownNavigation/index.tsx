import React from "react";
import './style.scss';
import { useAppSelector } from "../../../app/hooks";
import { getAccountStatusSelector } from "../../../store/reducers/accountReducer";
import { StyledNavigation } from "../navigation/StyledNavigation";
import { MenuUnfoldOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { NAVIGATION_ITEMS_PATH, NAVIGATION_ITEMS_TITLE } from "../../../constants/stringConstants";

export const DropdownNavigation = () => {
    const hasLoged = useAppSelector(getAccountStatusSelector);

    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
             <a rel="noopener noreferrer" href={`${NAVIGATION_ITEMS_PATH.MAIN}`}> 
              {NAVIGATION_ITEMS_TITLE.MAIN}
            </a>
          ),
        },
        {
          key: '2',
          label: (
             <a rel="noopener noreferrer" href={`${NAVIGATION_ITEMS_PATH.LOGIN_REGISTRATION}`}> 
              {NAVIGATION_ITEMS_TITLE.LOGIN_REGISTRATION}
            </a>
          ),
          disabled: hasLoged,
        },
        {
          key: '3',
          label: (
             <a rel="noopener noreferrer" href={`${NAVIGATION_ITEMS_PATH.ALL_COLLECTIONS}`}> 
              {NAVIGATION_ITEMS_TITLE.ALL_COLLECTIONS}
            </a>
          ),
          disabled: !hasLoged,
        },
        {
          key: '4',
          label: (
             <a rel="noopener noreferrer" href={`${NAVIGATION_ITEMS_PATH.ABOUT}`}> 
              {NAVIGATION_ITEMS_TITLE.ABOUT}
            </a>
          ),
        },
        {
          key: '5',
          label: (
             <a rel="noopener noreferrer" href={`${NAVIGATION_ITEMS_PATH.SUPPORT}`}> 
              {NAVIGATION_ITEMS_TITLE.SUPPORT}
            </a>
          ),
        },
      ];

    return (
        <StyledNavigation>
            <Dropdown menu={{ items }} trigger={['click']}>
                <a className="dropdown-link--container" href="#" onClick={(e) => e.preventDefault()}>
                    <Space>
                        <MenuUnfoldOutlined className='dropdown-icon' />
                    </Space>
                </a>
            </Dropdown>
        </StyledNavigation>
    )
}