import React,{Fragment,useState,useEffect} from 'react';
import {Dropdown} from "react-bootstrap";
import Sidebar from '../../components/sidebar/sidebar'
import './productos.scss'
import Axios from 'axios';
import { Button,Modal } from 'react-bootstrap';

function validacionDescripcion(){
    var subject = document.getElementById("desc-input").value; 
    var regex = /^[^$%&|/*+<>#()=?¡¿]*$/;
    if(regex.test(subject) == false) { 
        alert("No se pueden ingresar caracteres especiales")
    }else{
    }
}

function validacionNombre(){
    var subject = document.getElementById("update-name").value; 
    var regex = /[a-zA-Z\t\h]+|(^$)/;
    if(regex.test(subject) == false) { 
        alert("No se pueden ingresar numeros")
    }else{
    }
}

const Producto = ()=>{
    const [show, setShow] = useState(false);
    const [name,setname]= useState("");   
    const [descripcion,setdescripcion]= useState("");
    const [valorunitario,setvalorunitario]= useState("");
    const [products,setProducts]= useState([]);
    const [categories,setCategories]=useState([]);
    const [category,setCategory]= useState("")
    const [dropdown,setDropdown]= useState("Seleccione Una")
    const [amount,setAmount]=useState("")
    const [id_producto,setIdProducto]= useState("")
    const handleClose = () => {
        setShow(false);
        

    }
    
    const handleShow = (id,nombre,descripcion,valor,cantidad) => {
        setIdProducto(id)
        setname(nombre)
        setdescripcion(descripcion)
        setvalorunitario(valor)
        setAmount(cantidad)
        setShow(true);

   

    }
        
        useEffect(()=>{

            Axios.get('https://backend-dolcedelizia.herokuapp.com/product/listaProductos',{ 
        
    
            }).then((response)=>{

                
                
                setProducts(response.data)
                
               
               
                
            });

            Axios.get('https://backend-dolcedelizia.herokuapp.com/product/typeProduct',{

            }).then(response=>{

                console.log(response.data)
                setCategories(response.data)

            })
       
    
        },[])

        
        
        const Addproducts=()=>{

            

            var verificar=false;

            products.map(value=>{
                
                if(value.nombre==name){
                   verificar=true
                }
            })
            
           if(verificar==true){

                alert("Producto ya Registrado")
           }
           else{
            Axios.post('https://backend-dolcedelizia.herokuapp.com/product/registroProducto',{

            
                nombre:name, 
                descripcion:descripcion,
                valor_unitario:Number(valorunitario),
                cantidad:Number(amount),
                categoria:category
                
                })
                .then((response)=>{
    
                    
    
                    console.log(response);
                    window.location.href="/administrador/productos"
                    
    
    
                })
           }
           

    


        }

        const ModifyProduct=(id)=>{
            
           
            if(dropdown!="Seleccione Una"){
            Axios.put('https://backend-dolcedelizia.herokuapp.com/product/actualizarProducto',{

            
                nombre:name, 
                descripcion:descripcion,
                valor_unitario:Number(valorunitario),
                cantidad:Number(amount),
                categoria:category,
                id_producto:id
                })
                .then((response)=>{
    
                    
    
                    console.log(response);
                    alert("hola")
                    
    
    
                })
            }else{
                    alert("Inserte una categoria")
                }

           }


        

        
        
    return(
            <Fragment>

            
            
            <div className="container productos" style={{fontSize:'20px',paddingTop:'30px'}}>
                
                <form onSubmit={Addproducts} style={{paddingBottom:'60px'}}>
                    <header >Registro de Productos</header>
                    <br></br>
                    <div className="row">

                        <div className="form-group col-md-6" style={{textAlign: 'Left'}}>

                            <label id="name-product">Nombre</label>
                            <input type="text" id='update-name' name="update-name" class="form-control" placeholder="Nombre" required  
                            
                                onChange={(e)=>{
                                    validacionNombre();
                                    setname(e.target.value);
                                    
                                }}></input>
                            <br></br>                    
                        </div>
                       
                        <div className="form-group col-md-6 " style={{textAlign: 'Left'}}>

                            <label id="desc-product">Descripcion</label>
                            <input type="text" id="desc-input" name="desc-input" class="form-control" placeholder="Descripcion" required  onChange={(e)=>{
                                    validacionDescripcion();
                                    setdescripcion(e.target.value);
                                  
                                }}></input>
                                                
                            <br></br>  
                                                
                        </div>

                        <div className="form-group col-md-4" style={{textAlign: 'Left'}}>

                            <label id="prize-product">Valor Unitario</label>
                            <input type="number" name="prize-input" class="form-control" placeholder="Precio Un." required
                             onChange={(e)=>{
                                setvalorunitario(e.target.value);
                                
                            }} ></input>
                            <br></br>                    
                        </div>

                        <div className="form-group col-md-4" style={{textAlign: 'Left'}}>

                            <label id="amount-productt">Cantidad</label>
                            <input type="number" name="amount-input" class="form-control" placeholder="Cantidad" required
                             onChange={(e)=>{
                                setAmount(e.target.value);
                                
                            }}></input>
                            <br></br>                    
                        </div>
                        
                        <div className="form-group  col-md-4" style={{textAlign: 'Left'}}>

                            <label id="categories-product">Categoria</label>
                            <Dropdown onSelect={(e)=>{

                                    categories.map((value)=>{

                                        

                                        if(e== value.Id_tipo){
                                            setDropdown(value.nombre)
                                        
                                        }
                                    })

                                    setCategory(e)
                            }} >
                                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{width:'100%'}}>
                                    {dropdown}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {
                                    categories.map((e)=>{
                                                
                                                return(
                                                <Dropdown.Item eventKey={e.Id_tipo} value={e.nombre}>{e.nombre}</Dropdown.Item>
                                                );
                                            
                                            
                                        })
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                                            
                        </div>

                    </div>
                    <br></br>
                <button type="submit" class="btn btn-primary">Registrar</button>

                </form>
                <div className="table-responsive container" style={{paddingTop:'50px',paddingBottom:'50px',textAlign:'center',maxHeight: "30rem",overflow:'auto'}}>
                    <h4>Productos Registrados</h4>
                    
                    <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Valor Unitario</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Acciones</th>

                        </tr>
                    </thead>
                    <tbody>

                    {

                    products.map((value)=>{
                        return(
                        <tr>
                            <td>{value.id_producto}</td>
                            <td>{value.nombre}</td>
                            <td>{value.valor_unitario}</td>
                            <td>{value.descripcion}</td>
                            <td>{value.categoria}</td>
                            <td>{value.cantidad}</td>
                            
                            <td>
                            <Button variant="success" onClick={()=>handleShow(value.id_producto,value.nombre,value.descripcion,value.valor_unitario,value.cantidad)}>
                                                        D
                                                    </Button>

                            <Modal size="lg"show={show} onHide={handleClose} style={{Width:'600px',display:'flex'}}>
                                    <Modal.Header closeButton >
                                    <Modal.Title>Actualizar Producto: {name}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body style={{alignText: 'center',marginLeft:'60px',marginBottom:'40px',width:'600px'}}>
                                    
                                    <form onSubmit={()=>ModifyProduct(id_producto)} >
                                    <div className="row">
                                    <div className="form-group col-md-6" style={{textAlign: 'Left'}}>

                                    <label id="name-product">Nombre</label>
                                    <input type="text" id='update-name' name="update-name" defaultValue={name}class="form-control"  required  

                                        onChange={(e)=>{
                                            validacionNombre();
                                            setname(e.target.value);
                                            
                                        }}></input>
                                    <br></br>                    
                                    </div>

                                    <div className="form-group col-md-6 " style={{textAlign: 'Left'}}>

                                        <label id="desc-product">Descripcion</label>
                                        <input type="text" id="desc-input" name="desc-input"defaultValue={descripcion} class="form-control" required  onChange={(e)=>{
                                                validacionDescripcion();
                                                setdescripcion(e.target.value);
                                            
                                            }}></input>
                                                            
                                        <br></br>  
                                                            
                                   
                                    </div>

                                    <div className="form-group col-md-4" style={{textAlign: 'Left'}}>

                                        <label id="prize-product">Valor Unitario</label>
                                        <input type="number" name="prize-input" class="form-control" defaultValue={valorunitario} placeholder="Precio Un." required
                                        onChange={(e)=>{
                                            setvalorunitario(e.target.value);
                                            
                                        }} ></input>
                                        <br></br>                    
                                    </div>

                                    <div className="form-group col-md-3" style={{textAlign: 'Left'}}>

                                        <label id="amount-product">Cantidad</label>
                                        <input type="number" name="amount-input" className="form-control" defaultValue={amount} placeholder="Cantidad" required
                                        onChange={(e)=>{
                                            setAmount(e.target.value);
                                            
                                        }}></input>
                                        <br></br>                    
                                    </div>

                                    <div className="form-group  col-md-5" style={{textAlign: 'Left'}}>

                                        <label id="categories-product">Categoria</label>
                                        <Dropdown onSelect={(e)=>{

                                                categories.map((value)=>{

                                                    

                                                    if(e== value.Id_tipo){
                                                        setDropdown(value.nombre)
                                                    
                                                    }
                                                })

                                                setCategory(e)
                                        }} >
                                            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{width:'100%'}}>
                                                {dropdown}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                {
                                                categories.map((e)=>{
                                                            
                                                            return(
                                                            <Dropdown.Item eventKey={e.Id_tipo} value={e.nombre}>{e.nombre}</Dropdown.Item>
                                                            );
                                                        
                                                        
                                                    })
                                                }
                                            </Dropdown.Menu>
                                        </Dropdown>
                                                        
                                    </div>
                                    </div>
                                    <Button type="submit"variant="primary" >
                                        Save Changes
                                    </Button>
                                    <Button href="/administrador/productos"variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    </form>
                                    
                                    </Modal.Body>
                                    <Modal.Footer >
                                    
                                    
                                    </Modal.Footer>
                            </Modal>
                            </td>
                                        
                        </tr>)
                        }
                    )}

                        
                    </tbody>
                    </table>
                    
                </div>

            </div>


           

            

            </Fragment>

            

    );

}

export default Producto;
