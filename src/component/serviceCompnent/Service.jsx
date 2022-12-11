import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { ReactComponent as Img } from '../../assets/icons/1.svg';
import './service.scss'
const Service = (props) => {
    
    const [compX,setCompX]=useState(0);
    const [compY,setCompY]=useState(0);
    const [Style,SetStyle]=useState({marginTop:props.margin})
    const reff=useRef(null)
    
    const  handelEnter=(event)=>{
        percentX=(((event.clientX-reff.current.getBoundingClientRect().left)/reff.current.clientHeight)*10)*2;
        percentY=(((event.clientY-reff.current.getBoundingClientRect().top)/reff.current.clientWidth)*10)*2;
       setCompX(percentX);
       setCompY(percentY);

            console.log(percentX+"   "+percentY)
            SetStyle({...Style,transform:`perspective(800px) rotateX(${10-compX}deg) rotateY(${10-compY}deg) scale3d(1,1,1)  `})
          
   
    }
    const handelMouseLeave=(e)=>{
        SetStyle({...Style,transform:`perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)  `})
        
    }
    
let percentX;
let percentY;
   

    
    return (<div onMouseMove={handelEnter} onMouseLeave={handelMouseLeave} ref={reff} style={Style} onMouseEnter={()=>props.onMouse(props.number)} className={`Sevice-container ${props.isActive?'Active':''}`}>

        <div className="Service-icon">
            <div className={`icon-before ${props.color}`}>
                <div className={`icon ${props.color}`}>
                    <div className="img">   <Img /></div>
                </div>
            </div>
        </div>
        <div className="Service-text">
            <h2>{props.h2}</h2>
            <p>{props.para}</p>
        </div>
<div className='background'></div>
    </div>);
}

export default Service;