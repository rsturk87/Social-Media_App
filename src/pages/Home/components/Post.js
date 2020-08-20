import React, {useState, useContext} from 'react';
import UserContext from '../../../context/userContext.js';
import PostPhotos from '../../../components/Photos/PostPhotos.js';
import './Post.css';

function Post({fullname, picture, children}) {
    return (
        <div className="post">
            <Header fullname={fullname} picture={picture} />
            <PostPhoto />
            <PostBody>
                {children}
            </PostBody>
            <PostFooter />
        </div>
    );
}

const Header = ({fullname, picture}) => {
    return (
        <div className="post-header">
            <img className="profile-pic" src={picture} alt={fullname+' profile picture'} />
            <span>{fullname}</span>
        </div>
    )
}

const PostPhoto = () => {
    return (
        <div>
            <PostPhotos />
        </div>
    )
}

const PostBody = ({children}) => {
    const reactions = ['thumbs-up', 'heart', 'poo']
    
    return (
        <div className="post-body">
            {children}
            <div className="reaction-container">
                {
                    reactions.map(
                        icon => <i key={icon} className={'fas fa-'+icon} />
                    )
                }
            </div>
        </div>
    );
}

const PostFooter = () => {
    const [comments, setComments] = useState([]);
    const [text, setText] = useState('');

    const user = useContext(UserContext);

    const postComment = (e) => {
        e.preventDefault();

        setComments([...comments, 
            {content: text, time: Date().toString()}
        ]);
        setText('')
    }

    return (
        <div className="post-footer">
            {comments.map(
                (comment, id) => <Comment 
                key={id}
                content={comment.content}
                time={comment.time}
                fullname={user.name.first+' '+user.name.last}
                picture={user.picture.thumbnail}
                />
            )}
            <form onSubmit={postComment}>
                <textarea 
                    className="comment-area" 
                    placeholder="Comment here" 
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                />
                <input className="comment-btn" type='submit' value='Comentar' />
            </form>
            <hr className="post-division" />
        </div>
    );
}

const Comment = ({picture, fullname, content, time}) => {
    return (
        <div className="comment">
            <Header picture={picture} fullname={fullname} />
            <p className="comment-time">{time}</p>
            <p>{content}</p>
        </div>
    );
}

export default Post;