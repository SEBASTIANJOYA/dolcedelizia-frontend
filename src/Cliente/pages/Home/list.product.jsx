import React, { Fragment } from 'react'
import Producto from './product.component'
import Categoria from './category'
const list = (props) => {
    return ( 
        <Fragment>

            <div className="list">
                {
                    
                    props.category.map(cat=>


                        
                
                         
                        
                    <div> 
                        <Categoria style={{fontWeight:'bold'}} nombre={cat.nombre}/>
                        
                        {                        
                        props.list.map(item =>
                        (cat.Id_tipo==item.Id_tipo)?
                        <Producto
                            key={item.id_producto}
                            id={item.id_producto}
                            nombre={item.nombre}
                            precio={item.valor_unitario}
                            categoria={cat.nombre}
                            descuento={item.porcentaje_descuento}
                            cantidad={item.cantidad}
                        />
                        :
                        console.log("hecho")  
                          )}</div>
                   
                    
                        )
                    
                
                }
                
                


            </div>
        </Fragment>

    );
}
 
export default list;