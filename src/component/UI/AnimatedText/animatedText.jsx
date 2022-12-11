import React, { Fragment } from 'react';
import {gsap} from'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import './anmi.scss'
gsap.registerPlugin(ScrollTrigger)
const AnimatedText = (props) => {
    const str=props.children;
    const arr=Array.from(str);
 

    return ( 
    <Fragment>
        {arr.map((e,i)=>( <span key={i} style={{width:e===' '?'17px':''}} >{e===' '?' ':e} </span>)
           
        )}
    </Fragment>
    );
}
 
export default AnimatedText;