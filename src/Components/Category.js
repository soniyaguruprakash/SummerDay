import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import ice from '../Assets/icecream/ice_bg.jpg'
import juice from '../Assets/juice/juice.jpg'
import '../Stylesheet/category.css'
import { NavLink } from 'react-router-dom';

function Category() {
  return (
    <>
        

        <div className='category'>
        <i class="fa-solid fa-arrow-left"></i>
            <h1 className='h1' >Select your Menu</h1>
            <button className='btn btn-lg bg-success m-2' >
    <NavLink to='/' style={{textDecoration:'none',color:"white"}}> Back to </NavLink> </button>

            <div className=' conainer category_list d-flex'>
              <NavLink to='/ice' style={{textDecoration:"none"}}>
                 <div className='card'>
                    <img className='img-top' src={ice} alt='icecream' width={350} height={350} />
                    <div className='card-body'>
                        <h5 className='card-title h2 text-center'>Ice Cream</h5>
                       
                    </div>
                
                </div>
                </NavLink>
               
                
                    <NavLink to='/juice' style={{textDecoration:"none"}}>
                    <div className='card'>
                    <img className='img-top' src={juice} alt='freshjuice'  width={350} height={350}  />
                        <div className='card-body'>
                        <h5 className='card-title h2 text-center'>Fresh Juice</h5>
                        
                        </div>

                    </div>
                    </NavLink>
                
                
                
            </div>
        </div>

    </>
  )
}

export default Category