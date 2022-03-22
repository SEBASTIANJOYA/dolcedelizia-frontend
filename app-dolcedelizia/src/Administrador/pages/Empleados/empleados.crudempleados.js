import React,{Fragment,useState,useEffect} from 'react';
import {Dropdown} from 'react-bootstrap'
import Sidebar from '../../components/sidebar/sidebar'
import './empleados.scss';
import Axios from 'axios'

function onlyNums(e){
    const code = window.event ? e.which : e.keyCode;

    return !( code < 48 || code > 57 );
}

function validacionUsuario(){
    var subject = document.getElementById("input-user").value; 
    var regex = /^[^$%&|/*+<>#()=?¡¿ ]*$/;
    if(regex.test(subject) == false) { 
        alert("No se pueden ingresar caracteres especiales")
    }else{
    }
}

function validacionPrimerNombre(){
    var subject = document.getElementById("input-name1").value; 
    var regex = /[a-zA-Z\t\h]+|(^$)/;
    if(regex.test(subject) == false) { 
        alert("No se pueden ingresar numeros")
    }else{
    }
}

function validacionSegundoNombre(){
    var subject = document.getElementById("input-name2").value; 
    var regex = /[a-zA-Z\t\h]+|(^$)/;
    if(regex.test(subject) == false) { 
        alert("No se pueden ingresar numeros")
    }else{
    }
}

function validacionPrimerApellido(){
    var subject = document.getElementById("input-lastname1").value; 
    var regex = /[a-zA-Z\t\h]+|(^$)/;
    if(regex.test(subject) == false) { 
        alert("No se pueden ingresar numeros")
    }else{
    }
}

function validacionSegundoApellido(){
    var subject = document.getElementById("input-lastname2").value; 
    var regex = /[a-zA-Z\t\h]+|(^$)/;
    if(regex.test(subject) == false) { 
        alert("No se pueden ingresar numeros")
    }else{
    }
}

function validaciondireccion(){
    var subject = document.getElementById("").value; 
    var regex = /^[a-zA-Z ]+$/;
    if(regex.test(subject) == true) { 
        alert("Valido");
    }else{
        alert("No se puede ingresar numeros")
    }

}
const rest=[{
    id: 2,
    nombre:"administrador"
 },{ 

    id: 3,
    nombre:"empleado"
 }
]

var items=[];  
 
 
const Empleado = ()=>{
    
    const [dropdown,setDropdown]=useState("SELECCIONE UNA");
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
    const [users,setUsers]= useState([]);
    const [type_user,setType_user]= useState("");


    
    useEffect(()=>{

        Axios.get('https://backend-dolcedelizia.herokuapp.com/user/listaUsuarios',{ 
    
        }).then((response)=>{
            
            console.log(response)
           setUsers(response.data)
           
            
        });
   

    },[])

    const addUsers=()=>{

        
        
        

        Axios.post('https://backend-dolcedelizia.herokuapp.com/user/registroCliente',{
            usuario:user,
            contrasena:password,
            identificacion: cedula,
            primer_apellido:surname,
            segundo_apellido:second_surname,
            primer_nombre:first_name,
            segundo_nombre:second_name,
            direccion:direction,
            telefono:123,
            Id_tipo:type_user,
            email:email

        })
        .then((response)=>{

            console.log(response);
            

            window.location.href="./administrador/empleados"


        })

    }

    const deleteUser=(Id)=>{

        
        
        Axios.delete(`https://backend-dolcedelizia.herokuapp.com/user/eliminarUsuario/${Id}`,{
            
        }).then((response)=>{

            
            window.location.href="./administrador/empleados"
        })
    }

   
    
    
    
   
    return(
            <Fragment>
            
            
            
            {
                (localStorage.getItem('type_user')=="3")?


            <div><h1>NO DISPONIBLE</h1></div>
            :
            <div className="container empleados"  style={{paddingTop:'30px'}}>
                
                <form onSubmit={addUsers} style={{paddingBottom:'50px'}}>

                    <header style={{paddingBottom:'20px'}}>Registro de Empleados</header>
                     
                     <div className="row">

                         <div className="form-group col-md-4">
                         <br></br>
                             <label className="label-name1">Primer Nombre</label>
                             <input className="form-control" id="input-name1"placeholder="Primer Nombre" type="text"
                                onChange={(e)=>{
                                    validacionPrimerNombre()
                                    setFirst_name(e.target.value);
                                    
                                }}
                            required ></input>

                         </div>

                         <div className="form-group col-md-4">
                             <br></br>
                             <label className="label-name2">Segundo Nombre</label>
                             <input  className="form-control" id="input-name2"placeholder="Segundo Nombre" type="text"
                                onChange={(e)=>{
                                    validacionSegundoNombre()
                                    setSecond_name(e.target.value)
                                }}
                                ></input>

                         </div>

                         <div className="form-group col-md-4">
                             <br></br>
                             <label className="label-lastname1">Primer Apellido</label>
                             <input className="form-control" id="input-lastname1"placeholder="Primer Apellido" type="text"
                             
                                onChange={(e)=>{
                                    validacionPrimerApellido()
                                    setSurname(e.target.value)
                                }}
                                required></input>

                         </div>


                     </div>
                        
                     <div className="row">

                         <div className="form-group col-md-4">
                             <br></br>
                             <label className="label-lastname2">Segundo Apellido</label>
                             <input className="form-control" id="input-lastname2" placeholder="Segundo Apellido" type="text"
                               
                                onChange={(e)=>{
                                    validacionSegundoApellido()
                                    setSecond_surname(e.target.value)
                                }}
                             
                                required></input>

                         </div>

                         <div className="form-group col-md-4">
                             <br></br>
                             <label className="label-age">Email</label>
                             <input className="form-control" id="input-email"placeholder="Email" type="email"
                                onChange={(e)=>{
                                    setEmail(e.target.value);
                                }}
                                
                                required></input>

                         </div>

                         <div className="form-group col-md-4">
                             <br></br>
                             <label className="label-direction">Direccion</label>
                             <input className="form-control" id="input-direction"placeholder="Direccion" type="text"
                                onChange={(e)=>{
                                    setDirection(e.target.value);
                                }}
                             
                                required></input>

                         </div>
                     </div>

                     <div className="row">

                          <div className="form-group col-md-3">

                            <br></br>
                            <label className="label-user">Cedula</label>
                            <input className="form-control" id="input-cc"placeholder="Cedula" type="number" onKeypress={(e)=>{
                                    if (e.charCode >= 48 && e.charCode <= 57) {
                                        e.preventDefault()
                                     }
                            }} 
                                onChange={(e)=>{

                                    setCedula(e.target.value)
                                }}
                            
                                required></input>


                          </div>

                         <div className="form-group col-md-3">

                             <br></br>
                             <label className="label-user">Usuario</label>
                             <input className="form-control" id="input-user"placeholder="Usuario" type="text"
                                onChange={(e)=>{
                                    validacionUsuario()
                                    setUser(e.target.value);

                                }}
                             
                                required></input>


                         </div>

                         <div className="form-group col-md-3">
                                <br></br>
                             <label className="label-password">Contraseña</label>
                             <input className="form-control" id="input-password"placeholder="Contraseña" type="password"
                             
                                onChange={(e)=>{
                                    

                                    setPassword(e.target.value);
                                }}
                                required></input>


                         </div>

                        <div className="form-group col-md-3">

                            <br></br>
                            <label className="label-type">Rol</label>
                            <Dropdown id="tipo" onSelect={(e)=>{
                                
                                rest.map((s)=>{

                                    if(e== s.id){
                                        setDropdown(s.nombre)
                                       
                                    }
                                })
                                
                                setType_user(e)
                            }} >
                                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{width:'100%'}}>
                                {
                                    dropdown
                                }
                                </Dropdown.Toggle>

                                <Dropdown.Menu >
                                {

                                            rest.map((e)=>{
                                                
                                                    return(
                                                <Dropdown.Item eventKey={e.id} value={e.nombre}>{e.nombre}</Dropdown.Item>
                                                );
                                                
                                                
                                            })
                                    
                                       
                                }
                               
                                </Dropdown.Menu>
                            </Dropdown>

                           
                           
                        </div>


                     </div>
                     
                    <button type="submit"className="btn btn-primary "  style={{marginTop:'50px'}}>REGISTRAR</button>

                </form>

                <div className="table-responsive container"style={{paddingTop:'50px',overflow:'auto',maxHeight: "30rem",
    }}>

                    <header style={{paddingBottom:'20px'}}>Empleados Registrados</header>

                    <table className="table  table-striped" >

                        <thead >
                            
                            <tr>
                                <th scope="col">Codigo</th>
                                <th scope="col">Primer Nombre</th>
                                <th scope="col">Segundo Nombre</th>
                                <th scope="col">Primer Apellido</th>
                                <th scope="col">Segundo Apellido</th>
                                <th scope="col">Direccion</th>
                                <th scope="col">Email</th>
                                <th scope="col">Acciones</th>
                            </tr>

                        </thead>

                        <tbody >

                            {

                                users.map((value)=>{
                                    
                                    if(value.Id_tipo!="1"){
                                    return(
                                    <tr>
                                        <td>{value.identificacion}</td>
                                        <td>{value.primer_nombre}</td>
                                        <td>{value.segundo_nombre}</td>
                                        <td>{value.primer_apellido}</td>
                                        <td>{value.segundo_apellido}</td>
                                        <td>{value.direccion}</td>
                                        <td>{value.email}</td>
                                        <td><button className="btn btn-primary" onClick={()=>deleteUser(value.identificacion)} type="submit" style={{width:'2px'}}>E</button>
                                            
                                            <button className="btn btn-success" type="submit" style={{width:'2px'}}>A</button>
                                        </td>
                                    </tr>)
                                    }
                                })
                            }

                               
                               
                        </tbody>

                    </table>

                </div>

               



            </div>
            }
            </Fragment>

            

    );

}



export default Empleado;
