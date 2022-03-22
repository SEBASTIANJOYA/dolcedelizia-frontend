import React from 'react' ;

import {BrowserRouter as Router,Switch, Route, Redirect } from 'react-router-dom';
import ReporteVentas from'../Administrador/pages/ReporteVentas/reporteventas';
import Producto from '../Administrador/pages/Productos/productos.crudproductos';
import Empleado from '../Administrador/pages/Empleados/empleados.crudempleados';
import PedidosRealizados from '../Administrador/pages/Pedidos/pedidosrealizados';


const Routes = () => {
    return(

        
           
            <Switch>

                <Route exact path="/administrador/productos">
                    <Producto></Producto>
                </Route>

                <Route exact path="/administrador/empleados">
                    <Empleado></Empleado>
                </Route>
                
                <Route exact path="/administrador/reporteventas">
                    <ReporteVentas></ReporteVentas>
                </Route>

                <Route exact path="/administrador/pedidosrealizados">
                    <PedidosRealizados></PedidosRealizados>
                </Route>

                <Redirect path="/**" to="/administrador/empleados"/>  

            </Switch>
   
        
    )
    
};

export default Routes;
