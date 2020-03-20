import React from 'react';
import { Layout, Breadcrumb, Avatar, Dropdown, Menu, Badge, Divider } from 'antd';
import { UserOutlined, LogoutOutlined, NotificationOutlined } from '@ant-design/icons';

import { AccountInfo } from '../../containers/authentication';
import { MainMenu } from '../menu';


const Header = ({ routes }) => {
    const logoStyle = {
        cursor: 'pointer',
        float: 'left',
        lineHeight: '60px',
        margin: '0 35px 0 16px',
        width: '60px',
        height: '60px',
    };
    const itemStyle = {
        display: 'flex',
        float: 'right',
        marginRight: '0px',
        width: 'unset',
    };
    return (
        <React.Fragment>
            <div className="layout-navbar">
                <div tabIndex="-1" className="at-layout-navbar-logo" style={logoStyle}>
                    <div className="at-img-wrap">
                        <img src="/public/images/n-duck_logo.jpg" alt="" />
                    </div>
                </div>
                <div className="at-layout-navbar-item" style={itemStyle}>
                    <AccountInfo />
                </div>
                 <MainMenu routes={routes} />
            </div>
        </React.Fragment>
    );
};

export default Header;
