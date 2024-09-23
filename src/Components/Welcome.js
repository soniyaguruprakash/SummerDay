import React from 'react'
import '../Stylesheet/welcome.css'
import {Routes,Route, NavLink} from 'react-router-dom'
import Category from './Category'

function Welcome() {
  return (
    <>
        <header>
                <nav className='enquiry'>
                    <li> <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-envelope-arrow-up-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zm.192 8.159 6.57-4.027L8 9.586l1.239-.757.367.225A4.49 4.49 0 0 0 8 12.5c0 .526.09 1.03.256 1.5H2a2 2 0 0 1-1.808-1.144M16 4.697v4.974A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-1.965.45l-.338-.207z"/>
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016"/>
</svg> xyz@gmail.com</li>
                    <li> <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-telephone-forward-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708"/>
</svg>   888-888-8888</li>
                </nav>
                {/* <div className='circle'>
                <div className='cir1'></div>
                <div className='cir2'></div>
                <div className='cir3'></div>
                </div> */}
                <div className='intro'>
                    <h1>Welcome to <span>Chill Chill</span> </h1>
                    <h1><span>Cool Cool</span> </h1>
                    <button className='btn'><NavLink to='/category' style={{textDecoration:'NONE',color:'white'}}> Order Now</NavLink></button>
                </div>
                {/* <div className='circle2'>
                <div className='cir4'></div>
                <div className='cir5'></div>
                <div className='cir6'></div>
                </div> */}
                  
        </header>
        


    </>
  )
}

export default Welcome