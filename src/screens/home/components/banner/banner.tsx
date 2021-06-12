import React from 'react';
import './banner.css'

export const Banner = ({ ...props }) => {
    const { image } = props;
    return (
        <div style={{ height: "40vh" }}>
            <img src={image} style={{ height: '100%', width: '100%' }} alt="Banner"></img>
            <div className="center">{props.children}</div>
        </div>
    )
}
