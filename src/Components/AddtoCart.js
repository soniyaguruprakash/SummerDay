import React from 'react'
import { useCart } from 'react-use-cart'
import {NavLink} from 'react-router-dom'

function AddtoCart() {

  const {
    isEmpty,
    totalUniqueItems,
    removeItem,
    updateItemQuantity,
    items,
    cartTotal,
    emptyCart,
    totalItems
  } = useCart();

  if(isEmpty){
    return <h1>Your Cart is Empty</h1>
  }

  return (
    <div>
        <h1>Your Orders</h1>
          <table className='table '>
            <tbody>
          {items.map((ite)=>{
            return( 
              <tr key={ite.id}>
                  <td>{ite.title}</td>
                  <td>{ite.price}</td>
                  <td>{ite.quantity}</td>
                  <button className='btn btn-lg bg-warning' onClick={()=>removeItem(ite.id)}>X</button>
              </tr>  
              
             
            )
          })}
          </tbody>
          </table>
          <div>
            <h4>Total Amount :{cartTotal}</h4>
            <button className='btn btn-success' onClick={
              ()=>{
                emptyCart();
                
                
            }}>Cancel</button>
            
            
          </div>

            </div>
  )
}

export default AddtoCart