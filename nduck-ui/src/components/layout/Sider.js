import React from 'react';
import { Layout } from 'antd';
import { SiderProps } from 'antd/lib/layout/Sider';


const Sider = props => {
    const {
        content,
        children,
        collapsible,
        ...other
    } = props;
    return (
        <Layout.Sider collapsible={collapsible} {...other}>
            <div className="layout-menu-logo" />
            {content || children}
        </Layout.Sider>
    )
}

Sider.defaultProps = {
    collapsible: true,
}

export default Sider;
