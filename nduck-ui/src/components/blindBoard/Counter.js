import React, { Component } from 'react'

class Counter extends Component {
    render() {
        const { store } = this.props
        return (
            <div>
                <h1>
                    Value:
                    {store.getState().counter.value}
                </h1>
            </div>
        )
    }
}

export default Counter
