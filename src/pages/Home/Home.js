import React, {useEffect, useState} from 'react';
import './Home.css';
import Post from './components/Post.js';

function Home() {
    const [userB, setUser] = useState();
  
    const getUserB = () => {
        fetch('https://randomuser.me/api/?results=20')
        .then(
            res => res.json()
        )
        .then(
            data => {
            const result = data.results[0]
            setUser(result);
            sessionStorage.setItem('userB', JSON.stringify(result))
            }
        )
    }

    useEffect(
        () => getUserB(), []
    )

    // const getContent = () => {
    //     fetch('__to-do')
    //     .then(
    //         res => res.json()
    //     )
    //     .then(
    //         data => {
    //         const result = data.results[0]
    //         setUser(result);
    //         sessionStorage.setItem('userB', JSON.stringify(result))
    //         }
    //     )
    // }

    let content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis felis ac velit tincidunt suscipit. Etiam velit magna, cursus eu sollicitudin non, pellentesque eget tellus.';
    
    return (
        <div className="home">
            {
                userB &&
                <Post 
                    fullname={userB.name.first+' '+userB.name.last} 
                    picture={userB.picture.thumbnail} 
                >
                    {content}
                </Post>
            }
        </div>
    );
}

export default Home;