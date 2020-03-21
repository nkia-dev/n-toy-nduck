import React from 'react'
import { Layout } from 'antd'

const Sidebar = props => {
    const { content, children, collapsible, ...other } = props
    return (
        <Layout.Sider
            collapsible={collapsible}
            {...other}
            style={{ background: 'white' }}
        >
            <div
                className="layout-menu-logo"
                style={{
                    minHeight: 64,
                    background: 'white',
                    borderButtom: '1px',
                }}
            >
                여기 로고 넣으삼
            </div>
            {content || children}
        </Layout.Sider>
    )
}

Sidebar.defaultProps = {
    collapsible: true,
}

export default Sidebar
