import React, { Fragment,useState,useEffect } from 'react';
import Axios from 'axios'
import Lista from './list.product'
import Menu from '../../components/Menu/menu.component';






const HomeDolceDelizia  = () => {

    const [items,setItems]=useState([])
    const [category,setCategory]= useState([])
    

    useEffect(()=>{

        Axios.get('https://backend-dolcedelizia.herokuapp.com/product/listaProductos',{ 
    

        }).then((response)=>{

            
            console.log(response.data)
            setItems(response.data)
            
           
           
            
        });

        Axios.get('https://backend-dolcedelizia.herokuapp.com/product/typeProduct',{

            }).then(response=>{

                
                setCategory(response.data)
                

            })
   

    },[])
    return (
    <Fragment>
        {
               
            <div >
            
            
            <Lista category={category} list={items} />
            </div> 
            
          

            
        }

        


        
        
    
        

    </Fragment>
          
    
    )
};

export default  HomeDolceDelizia;