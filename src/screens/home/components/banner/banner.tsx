import React from 'react';
import './banner.css'

export const Banner = ({ ...props }) => {
    const { image, text, color } = props;
    return (
        <div style={{ height: "40vh" }}>
            <img src={image} style={{ height: '100%', width: '100%' }}></img>
            <div className="center">{props.children}</div>
        </div>
    )
}
