import {gsap ,Power3} from 'gsap';
import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Logo from '../../component/Logo/Logo';
import DrawerToggle from '../../component/navigation/drawerToggle/drawerToggle';
import NavigationItems from '../../component/navigation/navigationitems/navigationitems';
import './navBar.scss'
const NavBar = (props) => {
    const navRef=useRef(null);
    const [NavActive,setNavActive]=useState(false);
    const changeBackground = () => {
       
        if (window.scrollY >= 88) {
            
            setNavActive(true)
          
            
        } else {
            setNavActive(false)
        }
        return
      }
    useEffect(()=>{
        
        window.addEventListener('scroll',changeBackground)
      

      
    },[NavActive]);
    

    
    return ( 
                <header ref={navRef} className={`Container-Fluid ${NavActive?'Active':''}`} >
            <div className="Nav-container">
            <div className='Logo-container'>
            <Logo/>
            <div className="Logo-text">
                <h2>keyStroke</h2>
                <p>hover the logo</p>
            </div>
            </div>
         
                <nav className='DesktopOnly' >
         <NavigationItems/>
                </nav>
                <DrawerToggle clicked={props.showSide}/>
            </div>
        </header>
    );
}
 
export default NavBar;