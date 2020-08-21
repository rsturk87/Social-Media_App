import React, {useEffect, useState} from 'react';
import './RightBar.css';

function RightBar() {
    const [friendsList, setFriends] = useState();
  
    const getFriends = () => {
        fetch('https://randomuser.me/api/?results=40')
        .then(
            res => res.json()
        )
        .then(
            data => {
            const result = data.results;
            setFriends(result);
            sessionStorage.setItem('friendsList', JSON.stringify(result))
            }
        )
    }

    useEffect(
        () => getFriends(), []
    )
    
    return(
        <div className="right-bar">
            
        </div>
    )
}

export default RightBar;