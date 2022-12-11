import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import './button.scss'
const Buttonn = (props) => {
    const ref=useRef(null)
    const [coords,setCoords]=useState({
        x:0,
        y:0
    })
 const handelMouse=(e)=>{
    const xx=e.clientX-ref.current.getBoundingClientRect().left;
    const yy=e.clientY-ref.current.getBoundingClientRect().top;

setCoords({x:xx,
    y:yy})

 }
    return ( <button ref={ref} onMouseMove={handelMouse}  className='btn-2'>
        {props.children}
        <div style={{top:coords.y,left:coords.x}}></div>
    </button> );
}
 
export default Buttonn;