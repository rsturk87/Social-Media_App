import React, {useState, useContext} from 'react';
import UserContext from '../../context/userContext.js';
import './Edit.css';

function Edit() {
    const {user, setUser} = useContext(UserContext);
    const [editedUser, setEditedUser] = useState({...user});

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({...editedUser});
    }

    const applyKey = (obj, keys, value) => {
        if (Array.isArray(keys)){
            const [head, ...tail] = keys;
            
            if (keys.length === 1){
                return {...obj, [head]: value}
            }
            return {...obj, [head]: applyKey(obj [head], tail, value)}
        }
        else throw 'Keys must be an array';
    }

    const handleChange = (keys) => (e) => {
        setEditedUser(applyKey({...editedUser}, keys.split('.'), e.target.value));
    }
    
    return (
        <div className="edit">
            <form className="edit-form" onSubmit={handleSubmit}>
                <input className="form-input" type='text' value={editedUser.name.first} onChange={handleChange('name.first')} /><br/>
                <input className="form-input" type='text' value={editedUser.name.last} onChange={handleChange('name.last')} /><br/>
                <input className="form-input" type='text' value={editedUser.phone} onChange={handleChange('phone')} /><br/>
                <input className="form-input" type='text' value={editedUser.email} onChange={handleChange('email')} /><br/>
                <button className="form-save" type='submit'>Save Changes</button>
            </form>
        </div>
    );
}

export default Edit;