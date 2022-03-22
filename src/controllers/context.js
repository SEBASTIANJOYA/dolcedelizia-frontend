import React,{useState,useEffect,createContext} from 'react'

export const DataContext= createContext();

export const DataProvider=(props)=>{
    const [items_carrito,setItems_carrito]=useState([])
    
    const addProdCar=(data)=>{

        items_carrito.push(data)

        

    }

    useEffect(()=>{
        
        setItems_carrito(JSON.parse(localStorage.getItem('items')))
       
    },[])

   
    const value={

        addCarrito:addProdCar,  
        items:[items_carrito,setItems_carrito]
    }

    return (

        <DataContext.Provider value={value}>

        {props.children}
        </DataContext.Provider>
    )
}
