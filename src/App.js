import React, {useEffect, useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import SideBar from './components/SideBar/SideBar.js';
import RightBar from './components/RightBar/RightBar.js';
import Country from './pages/Country/Country.js';
import Edit from './pages/Edit/Edit.js';
import Home from './pages/Home/Home.js';
import UserContext from './context/userContext.js';

function App() {
  const [user, setUser] = useState();
  
  const getUser = () => {
    const userData = sessionStorage.getItem('user');

    if (userData) {
      const data = JSON.parse(userData);
      setUser(data);
    }

    else {
      fetch('https://randomuser.me/api')
      .then(
        res => res.json()
      )
      .then(
        data => {
          const result = data.results[0]
          setUser(result);
          sessionStorage.setItem('user', JSON.stringify(result))
        }
      )
    }
  }

  useEffect(
    () => getUser(), []
  )
  
  return (
    <UserContext.Provider value={{user, setUser}}>
    <div className="App">
      <div className="content">
        {
          user && 
          <>
            <SideBar 
              picture={user.picture.large} 
              name={user.name.first+' '+user.name.last} 
              phone={user.phone} 
              email={user.email} 
              city={user.location.city} 
              country={user.location.country}
            />

              <div className="page-container">
                <Switch>
                  <Route path='/Country/:country_name' component={Country} />
                  <Route path='/Edit/' component={Edit} />
                  <Route exact path='/'>
                    <Home />
                  </Route>
                </Switch>
              </div>
            <div className="content__right">
              <RightBar />
            </div>
          </>
        }
      </div>
    </div>
    </UserContext.Provider>
  );
}

export default App;