import React from 'react'

const Dashboard = props => (
    <div>
        <h1>{props.title}</h1>
        {props.children}
    </div>
)

export default Dashboard
