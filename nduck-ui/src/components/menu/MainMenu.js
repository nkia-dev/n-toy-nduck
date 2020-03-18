import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';

import sortBy from 'lodash/sortBy';
import { withRouter, RouteComponentProps, Redirect, matchPath } from 'react-router-dom';

import { Sidebar } from '../layout';
import { IRoute } from '../../routes/routes';

const MainMenu = (props) => {
    const { location, routes } = props;
    const { pathname } = location;
    const onePath = pathname.split('/').length === 2;
    const onePathname = pathname.split('/')[1];
    const [menus, setMenus] = useState([]);
    const [collapsed, setCollapsed] = useState(false);

    const buildMenus = (param) => {
        const menu = () => {
            const newMenus = param.reduce((prev, curr) => {
                if (!curr.isMenu) {
                    return prev;
                }
                const obj = {
                    key: curr.path,
                    icon: curr.icon,
                    title: curr.title,
                    order: curr.order,
                    subMenus: curr.subRoutes ? menu(curr.subRoutes) : null,
                };
                prev.push(obj);
                return prev;
            }, []);
            return sortBy(newMenus, ['order']);
        };
        setMenus(menu);
    };
    useEffect(() => {
        buildMenus(routes);
    }, []);


    const handleLink = (path) => {
        props.history.push(path);
    };
    const renderTitle = (menu) => {
        const { key, title, icon } = menu;
        return (
            <>
                {/*{icon && <Icon type={icon} />}*/}
                <MenuUnfoldOutlined />
                <span>{title || key}</span>
            </>
        );
    };
    const handleCollapse = (param) => {
        setCollapsed(param);
    };

    const renderMenus = (param) => {
        return param.map((values) => {
            const { key, subMenus } = values;
            if (subMenus && subMenus.length) {
                const newMenus = subMenus.map(subMenu => (
                    <Menu.Item
                        key={subMenu.key}
                        onClick={() => handleLink(subMenu.key)}
                    >
                        {renderTitle(subMenu)}
                    </Menu.Item>
                ));
                return (
                    <Menu.SubMenu
                        key={key}
                        title={renderTitle(values)}
                    >
                        {newMenus}
                    </Menu.SubMenu>
                );
            }
            return (
                <Menu.Item
                    key={key}
                    onClick={() => handleLink(values.key)}
                >
                    {renderTitle(values)}
                </Menu.Item>
            );
        });
    };
    return (
        <Sidebar onCollapse={handleCollapse} collapsed={collapsed} width={240}>
            <Menu
                // theme="dark"
                mode="inline"
                defaultSelectedKeys={[`/${onePathname}`]}
                selectedKeys={[`/${onePathname}`]}
                // defaultSelectedKeys={[isNumber ? pathname : `/${onePathname}`]}
                // selectedKeys={[isNumber ? pathname : `/${onePathname}`]}
                // defaultOpenKeys={onePath ? null : [`/${onePathname}`]}
            >
                {renderMenus(menus)}
            </Menu>
        </Sidebar>
    );
};

export default withRouter(MainMenu);
