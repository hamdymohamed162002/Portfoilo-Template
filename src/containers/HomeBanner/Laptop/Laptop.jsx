import React from 'react';
import {ReactComponent as LapImg} from './latptop.svg'
import './laptop.scss'
import { useState } from 'react';
import { useEffect } from 'react';
const Laptop = (props) => {
    const [apper,setapper]=useState(false)
    useEffect(()=>{
        setTimeout(()=>{
setapper(true);
        },1000)
    }
    ,[apper])
    return ( 
        
        <LapImg   className={`Laptop ${apper? 'apper':''}`} />
     );
}
 
export default Laptop;