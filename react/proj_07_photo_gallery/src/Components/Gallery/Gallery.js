import React from 'react';
import ImgCard from '../Img/Img';
import {connect} from 'react-redux';
import {gallery, galleryLength} from '../../selectors/gallerySelector'
import './Gallery.css';


const Gallery = ({gallery,galleryLength}) => {
    return (
        <div className='content'>
            <h2>Gallery items count {galleryLength}</h2>
            {gallery.map((el) => <ImgCard url={el.webformatURL}
                                        key={el.id}
            />)}
        </div>
    )
};

function mapStateToPropse(state) {
        return {
            gallery: gallery(state),
            galleryLength: galleryLength(state),
        }
}

export default connect(mapStateToPropse)(Gallery);


