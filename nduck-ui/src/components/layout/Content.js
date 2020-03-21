import React from 'react'
import { Layout } from 'antd'

import { Scrollbar } from '../scrollbar'

const Content = props => {
    const {
        title,
        titleText,
        titleAction,
        content,
        extraContent,
        children,
        scroll,
        action,
        className,
    } = props
    return (
        <Layout.Content className="layout-content">
            {(title || titleText || titleAction) && (
                <div className="layout-content-title">
                    {title || (
                        <>
                            <div className="layout-content-title-text">
                                {titleText}
                            </div>
                            <div className="layout-content-title-action">
                                {titleAction}
                            </div>
                        </>
                    )}
                </div>
            )}
            <div className="layout-content-container">
                {scroll ? (
                    <Scrollbar>{content || children}</Scrollbar>
                ) : (
                    content || children
                )}
                {extraContent}
            </div>
            <div className="layout-content-action">{action}</div>
        </Layout.Content>
    )
}

Content.defaultProps = {
    scroll: true,
}

export default Content
