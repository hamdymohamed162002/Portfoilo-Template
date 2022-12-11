import React from 'react';
import Laptop from './Laptop/Laptop';
import './HomeBanner.scss'
import Waves from './waves/waves';
import Button from '../../component/UI/Button/button';
import AnimatedText from '../../component/UI/AnimatedText/animatedText';
import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';

const Home = () => {
    const title=useRef(null)  
    const subTitle=useRef(null) 
    const para=useRef(null);
    const Btn=useRef(null);
   
    useEffect(()=>{
        gsap.from(title.current.children,{duration:1,delay:0,y:500,stagger:0.02})
        gsap.from(subTitle.current.children,{duration:0.7,delay:1,y:0,x:500,stagger:0.05,opacity:0})
        gsap.from(para.current,{opacity:0,duration:0.5,delay:1.7})
        gsap.from(Btn.current,{opacity:0,duration:1,delay:1.7})

    },[])
    return ( 
   <div className='forwaves'>
     <div id='Home' className='Home-container'>
<div className="Home-Text">
    <h2 ref={title}><AnimatedText>hamdymohamed</AnimatedText></h2>
    <h1 ref={subTitle} > <AnimatedText >Software Engineer</AnimatedText> </h1>
    <p ref={para}>I'm a frontend developer with basic knowledge in designing great User interface and develop real life interactions.</p>
<div ref={Btn} className="Button"><Button >Hover me</Button></div>
 
</div>
<Laptop/></div>
<Waves/>
    </div> );
}
 
export default Home;