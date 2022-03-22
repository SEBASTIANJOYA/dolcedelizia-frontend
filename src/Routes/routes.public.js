import React from 'react' ;

import {BrowserRouter as Router,Switch, Route, Redirect } from 'react-router-dom';
import Login from '../Cliente/pages/Login/login.component';
import Registro from '../Cliente/pages/Registro-Datos/registro.component';
import HomeDolceDelizia from '../Cliente/pages/Home/home.component.jsx';
import Carrito from '../Cliente/pages/Carrito/carrito.component'
import QuienesSomos from '../Cliente/pages/QuienesSomos/quienessomos.component.jsx'
const Routes = () => {
    return(

        <Router>
            <Switch>
                <Route exact path="/">
                    
                    <HomeDolceDelizia></HomeDolceDelizia>
                </Route>

                <Route exact path="/homedolcedelizia">
                    
                    <HomeDolceDelizia></HomeDolceDelizia>
                </Route>

                <Route exact path="/login">
                     
                    <Login></Login>
                </Route>

                <Route exact path="/quienessomos">
                    <QuienesSomos></QuienesSomos>
                </Route>
                <Route exact path="/registrodatos">
                    
                    <Registro></Registro>
                </Route>

                <Route  path='/carrito'
                render={(props) => (
                    <Carrito {...props}  />
                )}/>
                    
                    
                

                <Redirect path="/**" to="/"/> 

            </Switch>
            </Router>
   

    )
    
};

export default Routes;
