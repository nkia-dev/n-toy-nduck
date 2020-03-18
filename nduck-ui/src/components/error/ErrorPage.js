import React from 'react';
import { Result } from 'antd';

const ErrorPage = (props) => {
    const { status } = props;
    console.log(status)
    return (
        <div className="error-container">
            <Result
                status={status}
                title={status}
                subTitle="Sorry, the page you visited does not exist."
            />
        </div>
    );
};

export default ErrorPage;
