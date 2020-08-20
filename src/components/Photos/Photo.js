import React from 'react';
import './Photo.css';

const Photo = ({farm, server, id, secret, title}) => {
    return (
        <img className="photo" src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_b.jpg`} alt={title}/>
    );
}

export default Photo;