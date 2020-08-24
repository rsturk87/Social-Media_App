import React from 'react';
import {useParams} from 'react-router-dom';
import Photos from '../../components/Photos/Photos.js';
import './Country.css';

function Country(props) {

    const {country_name} = useParams();

    return (
        <div className="country">
            <Photos tag={country_name} />
        </div>
    );

}

export default Country;