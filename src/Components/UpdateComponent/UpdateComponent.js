import React from 'react';
import './UpdateComponent.css';

export default function UpdateComponent(props) {
    return (
        <div className="update__container">

        <img src={props.img} alt="update image" />

        <div className="update__content">

            <a href="/" className="content__title">
            <h4>{props.title}</h4>
            </a>    

            <p className="content__text">
             {props.text}
            </p>

        </div>

        <div className='update__timestamp'>{props.timestamp}</div>
        
        </div>
    );
}