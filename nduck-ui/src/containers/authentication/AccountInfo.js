import React from 'react';
import { Dropdown, Menu, Avatar } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';

const AccountInfo = () => {
    const menus = () => (
        <Menu>
            <Menu.Item>
                <UserOutlined />
                <span>My Account</span>
            </Menu.Item>
            <Menu.Item>
                <LogoutOutlined />
                <span>Logout</span>
            </Menu.Item>
            <Menu.Item>
                <LogoutOutlined />
                <span>My Setting</span>
            </Menu.Item>
            <Menu.Item>
                <LogoutOutlined />
                <span>Theme Change</span>
            </Menu.Item>
        </Menu>
    );
    return (
        <Dropdown overlay={menus()} trigger={['click']}>
            <a href="#" className="ant-dropdown-link">
                <Avatar />
                {/* <span className="ts-title-username">{currentUser.username}</span> */}
            </a>
        </Dropdown>
    );
};
export default AccountInfo;
