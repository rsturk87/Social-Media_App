import React, {useEffect, useState} from 'react';
import './Home.css';
import Post from './components/Post.js';

function Home() {
    const [userB, setUser] = useState([]);
  
    const getUserB = () => {
        fetch('https://randomuser.me/api/?results=7')
        .then(
            res => res.json()
        )
        .then(
            data => {
            const result = data.results
            setUser(result);
            sessionStorage.setItem('userB', JSON.stringify(result))
            }
        )
    }

    useEffect(
        () => getUserB(), []
    )

    let content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis felis ac velit tincidunt suscipit. Etiam velit magna, cursus eu sollicitudin non, pellentesque eget tellus.';
    
    return (
        <div className="home">
            {
                userB.map( user =>
                <Post 
                    fullname={user.name.first+' '+user.name.last} 
                    picture={user.picture.thumbnail} 
                >
                    {content}
                </Post>
                )
            }
        </div>
    );
}

export default Home;