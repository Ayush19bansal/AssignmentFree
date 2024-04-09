import React from 'react'
import {Getctx} from "./UserContext"

function Cards() {
    const ctx = Getctx();

    
  return (
    <div className='Card-Container'>
        {/* <h3>Top Students</h3> */}
    
      {
        ctx.arr.map((item,index)=>(
            <div className='card' index={item.id}>
            <div className='upper'></div>
            <div className='lower'>
                <h2>{item.name}</h2>
                <p>{item.feedback} </p>
            </div>
    
              
          </div>
        ))
      }
 
    </div>
  )
}

export default Cards
