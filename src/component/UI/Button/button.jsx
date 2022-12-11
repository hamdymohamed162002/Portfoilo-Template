import React from 'react';
import { useState } from 'react';
import './button.scss';
const Button = (props) => {
    const light=true;
    const [text,settext]=useState(props.children)
    const classlist=light?'Btn Light':'Btn Dark';
  
    const mouseEnterHandler=(e)=>{
      
settext('WOW')        
   }
   const mouseLeaveHandler=(    )=>{
    settext(props.children)     
   }
    return ( 
        <button className={classlist} onMouseEnter={(event)=>mouseEnterHandler(event)} onMouseLeave={mouseLeaveHandler}>
{text}
        </button>
     );
}
 
export default Button;