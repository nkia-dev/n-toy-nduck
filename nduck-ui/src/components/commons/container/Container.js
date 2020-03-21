import React from 'react'
import { Layout } from 'antd'
import { withRouter } from 'react-router-dom'

import { Header } from '../../layout'
import { ErrorPage } from '../../error'
import { MainMenu } from '../../menu'

const Container = props => {
    const { location, children, routes } = props

    const footerStyle = {
        height: '30px',
        lineHeight: '30px',
        textAlign: 'right',
        fontSize: '12px',
        opacity: '.6',
        padding: '0 16px 0 0',
    }
    const scrollShrink = () => {
        window.addEventListener('scroll', e => {
            console.log(e)
        })
    }
    scrollShrink()
    return (
        <React.Fragment>
            {/* <div>스크롤 내리면 없어지는 헤더</div> */}
            <Layout.Header>
                <Header routes={routes} />
            </Layout.Header>
            <Layout.Content style={{ display: 'flex' }}>
                {children}
            </Layout.Content>
            <Layout.Footer style={footerStyle}>
                <React.Fragment>
                    Copyright 2020. N-duck all rights reserved.
                </React.Fragment>
            </Layout.Footer>
        </React.Fragment>
    )
}

export default withRouter(Container)
