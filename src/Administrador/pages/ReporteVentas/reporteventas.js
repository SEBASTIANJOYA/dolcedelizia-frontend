
import React,{Fragment,useEffect,useState} from 'react';

import  Axios  from 'axios';
import { Button,Modal } from 'react-bootstrap';

const ControlVentas = ()=>{

    const [order,setOrder]=useState([]);
    const [show, setShow] = useState(false);
    const [description,setDescription] = useState([]);
    const handleClose = () => {
        setShow(false);
        setDescription([])

    }
    
    const handleShow = (id_factura) => {
    
        DescripcionPedido(id_factura)
        setShow(true);

   

    }
  
    const sendOrder = (id_pedido) => {

        Axios.post('https://backend-dolcedelizia.herokuapp.com/order/cambiarEstado',
        {
            id_pedido: id_pedido

        }).then((response)=>{

            window.location.reload();

        })

    }

    useEffect(()=>{

        Axios.get('https://backend-dolcedelizia.herokuapp.com/order/listaPedidos',
        {


        }).then((response)=>{

            setOrder(response.data.result)
            console.log(response.data.result[0])

        })
    },[])

    const DescripcionPedido=(id_factura)=>{

        Axios.post("https://backend-dolcedelizia.herokuapp.com/order/descripcionPedido",{
            id_factura:id_factura
        }).then((response)=>{
            setDescription(response.data.result);
            
        })


    }


    return(
            <Fragment>

         
<div className="container pedidos" >
                

                <header style={{marginTop:'50px',marginBottom:'50px'}}>PEDIDOS ENTREGADOS</header>
                
                <div className="table-responsive container"style={{paddingTop:'50px',overflow:'auto',maxHeight: "30rem",
                 }}>
                <table className="table table-striped">


                    <thead>

                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Total</th>
                            



                        </tr>
                    </thead>

                    <tbody>
                        

                            {

                                order.map(e=>
                                    {

                                        if(e.estado=="1"){

                                        

                                        return(
                                            <tr>

                                                <td>{e.id_pedido}</td>
                                                <td>{e.fecha}</td>
                                                <td>
                                                    <Button variant="primary" onClick={()=>handleShow(e.id_factura)}>
                                                        D
                                                    </Button>

                                                    <Modal show={show} onHide={handleClose}>
                                                            <Modal.Header closeButton>
                                                            <Modal.Title>Detalle del Pedido</Modal.Title>
                                                            </Modal.Header>
                                                            <Modal.Body style={{alignText: 'center',marginLeft:'60px',marginBottom:'40px'}}>
                                                                <table style={{minWidth:'200px'}}>
                                                                    <thead>

                                                                        <tr>

                                                                            <th>Producto</th>
                                                                            <th>Cantidad</th>
                                                                        </tr>
                                                                    </thead>

                                                                    <tbody>

                                                                        
                                                                            {

                                                                                description.map(e=>{
                                                                                    return(
                                                                                        <tr>

                                                                                        <td className="col-lg-10">{e.nombre}<br></br></td>
                                                                                        <td className="col-lg-2">{e.cantidad}</td>
                                                                                        </tr>
                                                                                    )
                                                                                })
                                                                            }

                                                                            
                                                                        
                                                                    </tbody>
                                                                </table>
                                                            </Modal.Body>
                                                            <Modal.Footer >
                                                            <Button variant="secondary" onClick={handleClose}>
                                                                Close
                                                            </Button>
                                                            
                                                            </Modal.Footer>
                                                    </Modal>
                                                </td>
                                                <td>{e.total}</td>
                                                

                                            </tr>

                                    
                                        )
                                        
                                        }

                                    }
                    
                                )
                            }

                        



                    </tbody>


                </table>

                </div>

            </div>
    </Fragment>

            

    );

}

export default ControlVentas;