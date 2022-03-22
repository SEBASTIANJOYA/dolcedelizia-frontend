import React, { Fragment,useState} from 'react'
import './itemcarrito.scss'
import Axios from 'axios'
import * as BsIcons from 'react-icons/bs';
import { Link } from 'react-router-dom';

class Carrito extends React.Component {
  
   total=0
   state=null
   items=[];
  constructor(props) {
    super(props)
    this.state = { DatosCargados:false, 
      
      productos:[]} 
    this.items=[];
    this.total=0;
  }
  
  
  totalCarrito(cantidad,precio,descuento){

    
      let subtotal=0 
      let cantidad_descuento=0 

      cantidad_descuento=(cantidad*precio)*descuento
      subtotal+=(cantidad*precio)-cantidad_descuento
      
      this.total=this.total+subtotal;

      
      
      return subtotal;
  }

  cargaDatos(){

    this.items=JSON.parse(localStorage.getItem('items'));
    this.setState({DatosCargados:true,productos:this.items})
    this.total=0;
  }

  addOrder(total){

    
    if(localStorage.getItem('user')==null){
      alert("Debe loguearse primero")
      window.location.href="./login"
    }
    else{

      
      
      Axios.post('https://backend-dolcedelizia.herokuapp.com/order/registroPedido',{

      id_usuario:localStorage.getItem("iduser"),
      productos:this.items,
      total:(this.total/2)


    }).then((response)=>{
            
      console.log(response)
      localStorage.removeItem("items")
      window.location.href="./homedolcedelizia"
     
      
  });


    }
    

  }
  DeleteProduct(id){
    
    let transaction  =this.items.findIndex(element => element.id === id)
    this.items.splice(transaction, 1)
    let ArrayJSON= JSON.stringify(this.items)
    localStorage.setItem("items",ArrayJSON)
    this.cargaDatos()
    
    

  }
  componentDidMount(){
    this.cargaDatos();
  }
  render() { 

    const{DatosCargados,productos}=this.state
    return (

      <>

      {
        (
           this.items==null) ?

        <h1 style={{paddingTop:'100px',paddingBottom:'100px'}}>CARRITO VACIO</h1>
        :
        (this.items.length==0) ?
        <h1 style={{paddingTop:'100px',paddingBottom:'100px'}}>CARRITO VACIO</h1>
        :
        <>
        <div clasName=" table-responsive container"style={{paddingTop:'50px',paddingBottom:'100px',alignItems:'center'}}>

          <table className="table  table-striped table-borderless" style={{paddingLeft:'500px'}}>

                <thead >
                          
                          <tr>
                              <th scope="col">Item</th>
                              <th scope="col">Cantidad</th>
                              <th scope="col">Descuento</th>
                              <th scope="col">Subtotal</th>
                              <th scope="col">...</th>
                          </tr>

                </thead>

                <tbody>
                      {
                        
                      productos.map(e=>{

                        return(

                          <tr>
                              <td>{e.name}</td>
                              <td>{e.amount}</td>
                              <td>{e.discount}</td>
                              <td>{this.totalCarrito(e.prize,e.amount,e.discount)}</td>
                              <td>
                              <Link to="/carrito"onClick={()=>this.DeleteProduct(e.id)}><BsIcons.BsFillTrashFill className="me-2" style={{color: 'red', fontSize: '30px'}}/></Link>
                              
                              </td>

                          </tr>
  
                        )})} 
 
                </tbody>

          </table>

        </div>

        
        

<div className="d-flex align-items-end  flex-column bd-highlight mb-3"  style={{height: "150px"}}>
<div>

<div className="p-2 align-items-baseline" style={{paddingRight:'20px'}}><h4>Total: $ {this.total}</h4></div>

<div className=" p-2"><button onClick={()=>this.addOrder(this.total)}className="btn btn-primary">Realizar Pedido</button></div>

</div>

</div>
        

        
              
        </>  
          
      }
      
      
      
      </>
  );
    
    }
}
 
export default Carrito;

