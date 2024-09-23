import React from 'react'
import { useCart } from 'react-use-cart';
import '../Stylesheet/category.css'

function Cart({item}) {
    const {addItem} = useCart();

    const handleAdditems=()=>{
        addItem({...item, key:item._id})
    }
  return (
    
        <div className='card'>
                    
                    <div className='card-body'> 
                    <img className='card-img-top' src={item.image} width={200} height={200} alt={item.title} />
                    <h5 className='card-title text-center '>{item.title}</h5>
                    <h5 className='card-title text-danger'>{item.price}</h5>
                    <button onClick={handleAdditems} className='btn bg-warning p-3'>Add to Cart</button>
                    </div>
                    </div>
    
  )
}

export default Cart