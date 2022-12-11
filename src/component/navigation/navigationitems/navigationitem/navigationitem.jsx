import React from 'react';
import { useState } from 'react';

import './navigationitem.scss'


const NavigationItem = ( props ) => {
    const [isActive,setIsActive]=useState(false);
    const [Style,setStyle]=useState({});
  
    const handelMouseEnter=()=>{
        setIsActive(true);
    }
    const handelMouseLeave=()=>{
        setStyle({transform:'translateX(120%)'});
        setIsActive(false);
        setTimeout(()=>{
setStyle({})
console.log(Style)
        }
,
 500       )
    }
    return (
        <li >
        <a onClick={props.clicked}  onMouseEnter={handelMouseEnter}
        onMouseOut  ={handelMouseLeave}
            href={props.to}
          >{props.children}
          <span style={Style} className={`underline ${isActive?'Active':''}`}></span></a>
    </li>
    )
};

export default NavigationItem;