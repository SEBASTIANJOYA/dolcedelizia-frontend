import React,{useState,Fragment} from 'react';
import {Form,Button} from "react-bootstrap";
import {useForm} from 'react-hook-form';
import './login.css'; 
import Menu from '../../components/Menu/menu.component';
import Axios from 'axios';
import logout from '../../../controllers/logout'


    
    const Login = () => {

       
        const [userLogin,setUserLogin]= useState("");
        const [passwordLogin,setPasswordLogin]= useState("");

       
        const verifiylogin = () =>{
            
            Axios.post('http://localhost:8080/user/loginUsuario',{

                user:userLogin,
                password:passwordLogin,

            }).then(response => {

                if(response.data.auth===false){
                    alert(response.data.message);
                }
                else{
                    
                    var date=new Date();
                    localStorage.setItem('iduser', response.data.iduser);
                    localStorage.setItem('user', response.data.user)
                    localStorage.setItem('date',date);
                    localStorage.setItem('type_user',response.data.typeuser)
                    
                    if(response.data.typeuser=="1"){
                        window.location.href="./homedolcedelizia"
                    }
                    else if(response.data.typeuser==="2"||response.data.typeuser=="3"){
                        window.location.href="./administrador/productos";
                         
                        
                    }
                   //window.location.href="./administrador/productos?user="+userLogin;
                }
            });

           

        }


        const {register,handleSubmit, formState: { errors }} = useForm();
        
        const onsubmit = (data,e) =>{
            console.log(data);
            e.target.reset();
        }

    return (

        <Fragment>
            {
        (logout()||!localStorage.getItem("user"))?
        
        <div className="Login">
        
        <Form onSubmit={handleSubmit(onsubmit)}
              style={{ widthmax: '1500px', 
                 height: '100%'}}
                 
                 className="login-form">
            
                <h1 style={{color: 'black'}}>INICIO DE SESION</h1>
                <br/>
           

            <Form.Group >
                <Form.Label 
                    style={{color: 'black', fontSize:'15px'}}>
                        <b>USUARIO <br/></b> 
                </Form.Label>
                <br/>
                <Form.Control 
                    name="usuario"
                    style={{color: 'black',paddingtop: '10px' }} 
                    type="text" 
                    placeholder="Ingresa Usuario." 

                    {...register("usuario", { 
                        required:{
                            value: true,
                            message: 'Campo Obligatorio' 
                        }
                    })}   
                    onChange={(e)=>{
                        setUserLogin(e.target.value);
                    }}/>
                    
                    <span 
                    style={{fontSize:'15px'}}
                    className="text-danger text-small d-block ">
                        {errors.usuario &&  errors.usuario.message}
                    </span>
                
                <Form.Group className="mt-6" controlId="formBasicPassword">
                    <Form.Label required
                        style={{color: 'black', fontSize:'15px'}}>
                        <b><br/>CONTRASEÑA<br/> </b> 
                    
                    </Form.Label>
                    <br/>
                    <Form.Control
                        name="contraseña"
                        {...register("contraseña", { 
                            required:{
                                value: true,
                                message: 'Campo Obligatorio' 
                            }
                        })}
                        type="password" 
                        placeholder="Ingresa Contraseña." 
                        
                        onChange={(e)=>{
                            setPasswordLogin(e.target.value);
                        }}/>
                        
                        
                    <span 
                     style={{fontSize:'15px'}}
                    className="text-danger text-small d-block ">
                        {errors.contraseña &&  errors.contraseña.message}
                    </span>
                </Form.Group>
            
                
            </Form.Group>
            <br/>
            <Button className="btnlogin"  onClick={verifiylogin}>Log in</Button>
            <div className="text-center pt-3">
            <Button type="submit"style={{padddingtop:'300px'}}href="/registrodatos" variant="btn btn-link">Haz Click Para Registrarte ! </Button>

            </div>
           
 

        </Form>
        </div>
        :
        (localStorage.getItem("type_user")==="1")?

        window.location.href="./homedolcedelizia"
        :
        window.location.href="./administrador/empleados"

    
    }
        </Fragment>
    )
};


export default Login;