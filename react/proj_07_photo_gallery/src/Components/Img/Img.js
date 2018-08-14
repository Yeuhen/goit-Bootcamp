import React from 'react';
import './Img.css';
import cardImg from './tux.png';

const ImgCard = ({url}) => {
    return (
        <li className="img-card">
            <img src={url !== '' ? url : cardImg} alt="artist" className="artist-card__img"/>
        </li>
    );
};

export default ImgCard;
