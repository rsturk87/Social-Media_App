import React, {useEffect, useState} from 'react';
import './RightBar.css';

function RightBar() {
    const [friendsList, setFriends] = useState([]);
  
    const getFriends = () => {
        fetch('https://randomuser.me/api/?results=7')
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
            <h2>Friends</h2>
            {
                friendsList.map(
                user => <div className="friend-list"><img className="friend-photo" src={user.picture.thumbnail} alt={user.name.first+' profile photo'} />
                <h6>{user.name.first+' '+user.name.last}</h6></div>)
            }
        </div>
    )
}

export default RightBar;