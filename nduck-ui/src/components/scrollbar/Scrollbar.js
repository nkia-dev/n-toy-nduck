import React from 'react'
import Scrollbars from 'react-custom-scrollbars'

const Scrollbar = props => {
    const { children, ...other } = props
    return (
        <Scrollbars
            renderTrackHorizontal={scrollbarProps => (
                <div {...scrollbarProps} className="track-horizontal" />
            )}
            renderTrackVertical={scrollbarProps => (
                <div {...scrollbarProps} className="track-vertical" />
            )}
            renderView={scrollbarProps => (
                <div {...scrollbarProps} className="track-view" />
            )}
            {...other}
        >
            {children}
        </Scrollbars>
    )
}

export default Scrollbar
