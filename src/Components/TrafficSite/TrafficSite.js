import React from 'react';
import './TrafficSite.css';

export default function TrafficSite({icon , number , siteName}) {
    return (
        <div className='traffic__container'>
            <img src={icon} alt="facebook icon" />
            <div className='traffic__content'>
                <h2 className='TrafficContent__number'>{number}</h2>
                <h4 className="TrafficContent__name">{siteName}</h4>
            </div>
        </div>
    );
}