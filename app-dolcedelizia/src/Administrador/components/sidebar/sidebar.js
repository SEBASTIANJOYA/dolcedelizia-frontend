import React,{Fragment,useState} from 'react';
import * as FaIcons from 'react-icons/io';
import * as FaIcons2 from 'react-icons/bs';
import * as FaIcons3 from 'react-icons/hi';
import * as FaIcons4 from 'react-icons/md';
import * as FaIcons5 from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import './sidebar.scss'
const defaultProduct = {
    reference: '',
    name: '',
    description: '',
};

const Logout=function(){

  localStorage.clear();

  

  window.location.href="./homedolcedelizia"
}

var ValidarRutaPedidos=function(){

    var pathname="/administrador/pedidosrealizados";
    var capturar=window.location.pathname;
    
        if((capturar=="/administrador/facturacionfisica")){

          pathname=window.location.pathname;


      }
        
    
    

     return pathname;

}

const Sidebar = () => {


  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color:'gray' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons5.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
              
            </li>

            <li ><Link to="/administrador/empleados"  className="nav-text" ><FaIcons.IoIosAlbums className="me-2"/>  Empleados</Link></li>
              <li ><Link to="/administrador/productos"  className="nav-text" ><FaIcons2.BsFillBagFill className="me-2"/>  Productos</Link></li>
              <li><Link to="/administrador/reporteventas"  className="nav-text"style={{width:'270px'}} ><FaIcons3.HiOutlineDocumentReport className="me-2"/>  Reporte de Ventas</Link></li>
              <li><Link to={ValidarRutaPedidos()}className="nav-text" ><FaIcons4.MdBorderColor className="me-2"/>  Pedidos</Link></li>
              <li ><Link to="/homedolcedelizia"  className="nav-text" 
              onClick={Logout}
              
              
              >Cerrar Sesion</Link></li>
            
          </ul>
        </nav>
      </IconContext.Provider>
    </>
    )
};



export default  Sidebar;