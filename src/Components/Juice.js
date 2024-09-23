import React, { useState } from 'react'
import AddtoCart from './AddtoCart'
import Cart from './Cart'
import '../Stylesheet/icecream.css'
import data from '../Assets/Juice'
import { CartProvider, useCart } from "react-use-cart";
import { NavLink } from 'react-router-dom'

function Juice() {
       
    console.log(data)

    
    
  return (
    <CartProvider>
    <>
    <button className='btn btn-success m-2' >
    <NavLink to='/category' style={{textDecoration:'none',color:"white"}}> Back to </NavLink> </button>
      <div className='contain'>
        
             <div className='items'>
            
                {data.map((item)=>{
                    return(
                        <Cart 
                        item={item}
                        key={item.id}
                         />
                        
               
                // </div>
                    )

                })}   
               
               
                
               
                
                </div>
                <div className='cart'>
                    <AddtoCart />
                    
                </div>

           
            </div> 
            
           
    </>
    
    </CartProvider>

  )
}

export default Juice