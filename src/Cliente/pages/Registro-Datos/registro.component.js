import React,{useState} from 'react';
import {Form,Col,Row,Button} from "react-bootstrap";
import './registro.css'
import Menu from '../../components/Menu/menu.component';
import Axios from 'axios'

function validacionPrimerNombre(){
    var subject = document.getElementById("nameone").value; 
    var regex = /[a-zA-Z\t\h]+|(^$)/;
    if(regex.test(subject) == false) { 
        alert("No se pueden ingresar numeros")
    }else{
    }
}

function validacionSegundoNombre(){
    var subject = document.getElementById("nametwo").value; 
    var regex = /[a-zA-Z\t\h]+|(^$)/;
    if(regex.test(subject) == false) { 
        alert("No se pueden ingresar numeros")
    }else{
    }
}

function validacionPrimerApellido(){
    var subject = document.getElementById("lastnameone").value; 
    var regex = /[a-zA-Z\t\h]+|(^$)/;
    if(regex.test(subject) == false) { 
        alert("No se pueden ingresar numeros")
    }else{
    }
}

function validacionSegundoApellido(){
    var subject = document.getElementById("lastnametwo").value; 
    var regex = /[a-zA-Z\t\h]+|(^$)/;
    if(regex.test(subject) == false) { 
        alert("No se pueden ingresar numeros")
    }else{
    }
}


const Registro = () => {

    const [user,setUser]= useState("");   
    const [password,setPassword]= useState("");
    const [cedula,setCedula]= useState("");   
    const [surname,setSurname]= useState("");   
    const [second_surname,setSecond_surname]= useState("");   
    const [first_name,setFirst_name]= useState("");   
    const [second_name,setSecond_name]= useState("");   
    const [email,setEmail]= useState("");   
    const [direction,setDirection]= useState("");   
    const [telephone_number,setTelephone_Number]= useState("");      
    
    const register=()=>{
        
        
        Axios.post('https://backend-dolcedelizia.herokuapp.com/user/registroCliente',{ 
    
            usuario:user,
            contrasena:password,
            identificacion: cedula,
            primer_apellido:surname,
            segundo_apellido:second_surname,
            primer_nombre:first_name,
            segundo_nombre:second_name,
            direccion:direction,
            telefono:telephone_number,
            Id_tipo:1,
            email:email

        }).then((response)=>{
            
            
            
        });
        window.location.href="./login"
    }
    return (
      
        <div className="Registro"> 
            
            
               
    
                <Form action='./login' onSubmit={register}>

                <br/>
            <h3 style={{color: 'black'}}>REGISTRO DE DATOS</h3>

            <br/>
                
                    <Row>
                        <Col sm lg={3} >
                            
                            <Form.Control required type='number' placeholder="Cedula"  onChange={(e)=>
                            {
                                setCedula(e.target.value);
                            }
                            } />
                        </Col>
                        <Col sm>
                            
                            <Form.Control required id='nameone' placeholder="Primer Nombre" onChange={(e)=>
                            {
                                validacionPrimerNombre();
                                setFirst_name(e.target.value);
                            }
                            } />
                        </Col>
                        <Col>
                            
                            <Form.Control  id='nametwo' placeholder="Segundo Nombre" onChange={(e)=>
                            {
                                validacionSegundoNombre();
                                setSecond_name(e.target.value);
                            }
                            }/>
                        </Col>
                    </Row>

                    <br />
                
                    <Row>
                        <Col sm>
                            
                            <Form.Control required id='lastnameone' placeholder="Primer Apellido" onChange={(e)=>
                            {
                                validacionPrimerApellido();
                                setSurname(e.target.value);
                            }
                            }/>
                        </Col>
                        <Col sm>
                            
                            <Form.Control required id='lastnametwo' placeholder="Segundo Apellido" onChange={(e)=>
                            {
                                validacionSegundoApellido();
                                setSecond_surname(e.target.value);
                            }
                            }/>
                        </Col>
                        
                        <Col sm>
                            
                            <Form.Control required type='email' placeholder="Email" onChange={(e)=>
                            {
                                setEmail(e.target.value);
                            }
                            }/>
                        </Col>
                    </Row>
                    <br />
                    
                    <Row>
                        <Col sm>
                            
                            <Form.Control required type='text' placeholder="Usuario" onChange={(e)=>
                            {
                                setUser(e.target.value);
                            }
                            }/>
                        </Col>
                        <Col sm>
                            
                            <Form.Control required type='password' placeholder="Contraseña" onChange={(e)=>
                            {
                                setPassword(e.target.value);
                            }
                            }/>
                        </Col>
                        
                        <Col sm>
                            
                            <Form.Control required type='text' placeholder="Direccion" onChange={(e)=>
                            {
                                setDirection(e.target.value);
                            }
                            }/>
                        </Col>

                        <Col sm>
                        
                            <Form.Control required type='number' placeholder="Telefono" onChange={(e)=>
                            {
                                setTelephone_Number(e.target.value);
                            }
                            }/>
                        </Col>
                    </Row>
                    
                    <br />
                    <div style={{paddingleft:"50px"}}>
                    <Button type="submit" ><b> Cancelar  </b></Button>
                    <Button type="submit" className="btn btn-primary " ><b> Guardar </b></Button>
                    
                
                    </div>
                    <div style={{paddingleft:"50px"}}>
                    <Button href="/login" variant="btn btn-link">Haz Click Para Iniciar Sesion ! </Button>
                    </div>
                </Form>
        
                

            


        </div>
        
        
    
        

    )
};
export default Registro;






