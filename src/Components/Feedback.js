import React from 'react'
import {Getctx} from "./UserContext"

function Feedback() {
    const ctx = Getctx();
  return (
    <div className='Card-Container'>
      {ctx.arr.map((item,index)=>(
        <div className='feed'  key={index}>
        <h3>{item.name}</h3>
        <hr/>
        <p>{item.feedback} </p>
      </div>
      ))}
    </div>
  )
}

export default Feedback
