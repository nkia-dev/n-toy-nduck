import React from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';

import { Header } from '../../layout';
import { ErrorPage } from '../../error';
import { MainMenu } from '../../menu';

const Container = (props) => {
    const { location, children, routes } = props;
    const status = null;
    return (
        <React.Fragment>
            <MainMenu routes={routes} />
            <Layout style={{ overflow: 'hidden' }}>
                {
                    status === 0 || status ? (
                        <ErrorPage status={status} />
                    ) : (
                        <React.Fragment>
                            <Header />
                            {children}
                        </React.Fragment>
                    )
                }
            </Layout>
        </React.Fragment>
    );
};

export default withRouter(Container);
