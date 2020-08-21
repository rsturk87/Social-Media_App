import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './SideBar.css';

function SideBar({picture, name, phone, email, city, country}) {
  
  const [search, setSearch] = useState('');
  const doSearch = (e) => e.preventDefault();
  
  return (
    
    <div className="sidebar">
      <Link to='/'>
      <h3 className="home-button">P.</h3>
      </Link>

      <img className='avatar' src={picture} alt='foto de perfil' />
      <h2>{name}</h2>

      <Link to={'/Edit'}>
      <h2>Edit</h2>
      </Link>

      <h5><i className="fas fa-mobile-alt"></i> {phone}</h5>
      <h5><i className="fas fa-envelope-open-text"></i> {email}</h5>

      <Link to={'/Country/'+country}>
      <h4><i className="fas fa-map-marker-alt"></i> {city+', '+country}</h4>
      </Link>

      <form onSubmit={doSearch} className="form">
        <input type='text' className="search" placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)} />
        <button className="search-button"><i className="fa fa-search"></i></button>
      </form>
    </div>
  );
}

export default SideBar;