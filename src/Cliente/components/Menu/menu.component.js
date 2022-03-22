import React, { Fragment } from 'react';
import MenuLogout from './menu.logout';
import MenuLogged from './menu.logued';
const Home = () => {

  const localStorage=window.localStorage.getItem('user');
  
    return (
        <Fragment>
          {
          (localStorage==null)?
          <MenuLogout></MenuLogout>
          :<MenuLogged></MenuLogged>

          
          }
          
      </Fragment>
       
    )
};


export default Home;