import React from 'react';
import Menu from './Cliente/components/Menu/menu.component'
import './App.scss';
import './Cliente/pages/Login/login.css';
import PublicRoutes from './Routes/routes.public'
import PrivateRoutes from './Routes/routes.private'
import {BrowserRouter as Router} from 'react-router-dom';
import Footer from "./Cliente/components/footer/footer.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import isAuth from './controllers/logout'
import Sidebar from './Administrador/components/sidebar/sidebar.js'
import {DataProvider} from './controllers/context.js'
function App() {
  return (

    
  <Router>

    <DataProvider>
    
    <div className="App"$>
      
    
      <header className="App-header">
        {

          (localStorage.getItem("type_user")=="2" || localStorage.getItem("type_user")=="3")?
          <Sidebar/>
          
          :
          <Menu/>

        }

        
       
        
      </header>

      <section className="App-main">

      {
           (isAuth()==true||localStorage.getItem("type_user")==null || localStorage.getItem("type_user")=="1")?

           <PublicRoutes/>
           :
           <PrivateRoutes/>


        }
      </section>

      
      <Footer></Footer>
      
    </div>

    
    </DataProvider> 
  </Router>

  
  );
}

export default App;
