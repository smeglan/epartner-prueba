import React from 'react';
import './banner.css'

export const Banner = ({ ...props }) => {
    const { image } = props;
    return (
        <div style={{ height: "40vh", marginBottom: 20 }}>
            <div className="paralax" style={{ backgroundImage: image, paddingTop: 30, paddingLeft: 20 }}>{props.children}</div>
        </div>
    )
}
