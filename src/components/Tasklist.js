import React from 'react'
import { useDispatch,useSelector } from "react-redux";
export const Tasklist=()=> {
    
        const dispatch = useDispatch()
           const Portable = useSelector(state => state.Todos)
           const handleClick =(id) => dispatch({
             type : 'delete',
             payload: id
           })
             return (
               <lu>
              {Portable.map(todo=><li onClick={(id)=> handleClick(todo.id) }>{todo.text}</li>)}
              </lu>
             )
        
      };


export default Tasklist
