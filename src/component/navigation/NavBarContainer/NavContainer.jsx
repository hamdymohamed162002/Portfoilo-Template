import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Logo from '../../component/Logo/Logo';
import DrawerToggle from '../../component/navigation/drawerToggle/drawerToggle';
import NavigationItems from '../../component/navigation/navigationitems/navigationitems';
import './navBar.scss'
const NavBar = () => {
    const [NavActive,setNavActive]=useState(false);
    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 66) {
            setNavActive(true)
        } else {
            setNavActive(false)
        }
      }
    useEffect(()=>{
        window.addEventListener('scroll',changeBackground)

    },[]);

    
    return ( 
                <header className={`Container-Fluid ${NavActive?'Active':''}`} >
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
                <DrawerToggle/>
            </div>
        </header>
    );
}
 
export default NavBar;