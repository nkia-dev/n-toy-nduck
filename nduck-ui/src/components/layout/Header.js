import React from 'react';
import { Layout, Breadcrumb, Avatar, Dropdown, Menu, Badge, Divider } from 'antd';
import { UserOutlined, LogoutOutlined, NotificationOutlined } from '@ant-design/icons';

const Header = () => {
    const renderOverlayMenu = () => (
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
                <span>Light Theme</span>
            </Menu.Item>
            <Menu.Item>
                <LogoutOutlined />
                <span>Dark Theme</span>
            </Menu.Item>
        </Menu>
    );
    return (
        <Layout.Header className="layout-header">
            <div className="layout-header-title">
                <Breadcrumb />
            </div>
            <div className="layout-header-noti">
                <Badge dot>
                    <NotificationOutlined />
                </Badge>
            </div>
            <Divider type="vertical" />
            <div className="layout-header-account">
                <Dropdown overlay={renderOverlayMenu} trigger={['click']}>
                    <Avatar className="layout-account-avatar">
                        {'Admin'.charAt(0)}
                    </Avatar>
                </Dropdown>
            </div>
        </Layout.Header>
    );
};

export default Header;
