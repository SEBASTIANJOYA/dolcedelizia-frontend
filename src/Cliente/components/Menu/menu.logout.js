import React, { useContext } from 'react';

import {Navbar,Button,Container,Nav,Form,FormControl, Row,Col} from "react-bootstrap";
import logo from './dolcedelizia.png';
import logocarrito from './carrito.png'
import {DataContext} from '../../../controllers/context.js'



const Home = () => {

  const value= useContext(DataContext)
  const [carrito,setCarrito]=value.items

  
  
  
    return (
        <Navbar className="navbar navbar-dark bg-primary " collapseOnSelect="true" role="navigation" bg="blue" expand="md" style={
          {
            
            fontSize:'16px',
            
          }
        }>
        <Container fluid>
          <Navbar.Brand  style={{backgroundImage:''}} href="/homedolcedelizia">
          <img src={logo} alt="logo" style={{width:'50px'}}/>
            <b >     DOLCE DELIZIA</b></Navbar.Brand>
          <Navbar.Toggle aria-controls=" basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{widthmax:'100%',}}>
            <Row style={{margin:'auto', marginLeft:'50px'}}>
            <Nav
              className="mr-auto me-auto "
              style={{ maxHeight: '250px',  }}
              navbarScroll
            >
              <Col lg={4}>
              <Nav.Link href="/homedolcedelizia"><b>INICIO</b></Nav.Link>
              </Col>
              <Col lg={6}>
              <Nav.Link href="/quienessomos"><b>QUIENES SOMOS</b></Nav.Link>
              </Col>
              <Col lg={4}>

              <Nav.Link href="/login" className="ml-2"><b>LOGIN</b></Nav.Link>
              </Col>

              

             
            </Nav>
            


            </Row>
            <Nav>
              

                              
                <a href="/carrito" id="carrito_logout"><img src={logocarrito}  alt="logo" style={{width:'50px'}}/><span className="badge  ml-2"
                style={{background:'red'}}>{

                  (localStorage.getItem('items')==null)?
                  0:
                  carrito.length
                }</span></a> 


              
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
};


export default Home;