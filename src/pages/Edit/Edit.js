import React, {useEffect, useState, useContext} from 'react';
import {useParams} from 'react-router-dom';
import UserContext from '../../context/userContext.js';

function Edit() {
    let user = useContext(UserContext);

    return (
        <div className="edit">
            
        </div>
    );
}

export default Edit;