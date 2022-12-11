import React from 'react';
import { useEffect } from 'react';
import { forwardRef } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import './project.scss'
const Project = (props,ref) => {
    const [compX,setCompX]=useState(0);
    const [compY,setCompY]=useState(0);
    const [Style,SetStyle]=useState({})
    const reff=useRef(null)
    const  handelEnter=(event)=>{
        percentX=(((event.clientX-reff.current.getBoundingClientRect().left)/reff.current.clientHeight)*10)*2;
        percentY=(((event.clientY-reff.current.getBoundingClientRect().top)/reff.current.clientWidth)*10)*2;
       setCompX(percentX);
       setCompY(percentY);

            console.log(percentX+"   "+percentY)
            SetStyle({transform:`perspective(800px) rotateX(${10-compX}deg) rotateY(${10-compY}deg) scale3d(1,1,1)  `})
          
   
    }
    const handelMouseLeave=(e)=>{
        SetStyle({transform:`perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)  `})
    }
    
let percentX;
let percentY;
   
  
    return ( 
      <div ref={ref}   className="project-container">
          <div   ref={reff}   className='project'>
            <div className="project-text">
                <p>ios ,desgin</p>
                <h2>Just a Title</h2>
            </div>

            <img onMouseMove={(e)=>handelEnter(e)} onMouseOut={handelMouseLeave} style={Style}  src={props.img} alt="" />
        </div>
      </div>
     );
}
 
export default forwardRef( Project);