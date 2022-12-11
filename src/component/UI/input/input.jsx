import React from 'react';
import { useState } from 'react';
import './input.scss'
const Input = (props) => {
    const [isEmpty,setEmpty]=useState(false)
    const onChange=(e)=>{
        if(e.target.value!=='')
        {
setEmpty(true);
        }
        else setEmpty(false)

    }
    return ( 
        <div  style={{width:`${props.Input?'':'100%'}`}} className={`input-container ${props.isActive ?'foucesd':''} ${ isEmpty?'foucesd':''}`}>
            <label className='label' htmlFor="">{props.label}</label>
            {props.Input?<input type="text" onChange={onChange}  onFocus={()=>props.clicked(props.number)} />:<textarea onChange={onChange} onFocus={()=>props.clicked(props.number)}  className='textarea'></textarea>}
        </div>
     );
}
 
export default Input;