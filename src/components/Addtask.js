import React from 'react'
import {useState} from "react";
import{useDispatch}from 'react-redux'
export const Addtask=()=> {
    
        const dispatch = useDispatch()
        const [newtodo, setnewtodo] = useState()
        const handleChange =(event)=>setnewtodo(event.target.value)
        const handleClick =()=> dispatch ({
          type:'ADD',
          payload:{
            text: newtodo,
            id:Math.random()
          }
     
        })
      return(
          <div>
            <input type="text"  value={newtodo}  onChange={handleChange}/>
            <button onClick={handleClick}>addTodo</button>
          </div>
      )
     
     }


export default Addtask
