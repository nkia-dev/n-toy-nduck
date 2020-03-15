import React, { Component } from 'react';
import { Layout, Breadcrumb, Avatar, Dropdown, Menu, Icon, Badge, Divider } from 'antd';
import { RouteComponentProps, withRouter } from 'react-router';
import drop from 'lodash/drop';
import { Link } from 'react-router-dom';
import i18next from 'i18next';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
//
// import { Websocket, Authentication } from '../../redux/actions';



class Header extends Component {

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    handleLinkAccount = () => {

    }

    handleLogout = () => {

    }

    handleLinkAlarm = () => {
    }

    renderOverlayMenu = () => {
        return (
            <Menu>
                <Menu.Item onClick={}>
                    <Icon type="user" />
                    <span>My Account</span>
                </Menu.Item>
                <Menu.Item onClick={}>
                    <Icon type="logout" />
                    <span>Logout</span>
                </Menu.Item>
                <Menu.Item onClick={}>
                    <Icon type="logout" />
                    <span>Light Theme</span>
                </Menu.Item>
                <Menu.Item onClick={}>
                    <Icon type="logout" />
                    <span>Dark Theme</span>
                </Menu.Item>
            </Menu>
        );
    }

    render() {
        const { location } = this.props;
        const { pathname } = location;
        const splitPathname = drop(pathname.split('/'));
        return (
            <Layout.Header className="layout-header">
                <div className="layout-header-title">
                    <Breadcrumb>
                        {
                            splitPathname.map((path, index) => {
                                if (splitPathname.length === 1 || index === splitPathname.length - 1) {
                                    return (
                                        <Breadcrumb.Item key={path}>
                                            {i18next.t(`${splitPathname[0]}.${path}`)}
                                        </Breadcrumb.Item>
                                    )
                                }
                                const linkPath = `/${Array.from({ length: index + 1 }, (v, i) => splitPathname[i]).join('/')}`;
                                return (
                                    <Breadcrumb.Item key={path}>
                                        <Link to={linkPath}>{i18next.t(`${splitPathname[0]}.${path}`)}</Link>
                                    </Breadcrumb.Item>
                                )
                            })
                        }
                    </Breadcrumb>
                </div>
                <div className="layoutt-header-noti">
                    <Badge dot={true}>
                        <Icon onClick={this.handleLinkAlarm} className="layout-header-noti-icon" type="notification" />
                    </Badge>
                </div>
                <Divider type="vertical" />
                <div className="layout-header-account">
                    <Dropdown overlay={this.renderOverlayMenu} trigger={['click']}>
                        <Avatar className="layout-account-avatar">
                            {'Admin'.charAt(0)}
                        </Avatar>
                    </Dropdown>
                </div>
            </Layout.Header>
        )
    }
}

export default withRouter(Header);
