import React, { Fragment } from 'react';
import { useState } from 'react';
import SideDrawer from '../../component/sideDrawer/sideDrawer';
import NavBar from '../../containers/NavBarContainer/NavContainer';
import './layout.scss';

const Layout = (props) => {
    const [showSide,setShowSide]=useState(false);

    const handleShowSide=()=>{
        setShowSide(true);
    }
    const handleCloseSide=()=>{
        setShowSide(false);
    }
    return ( 

        <Fragment>
            <SideDrawer close={handleCloseSide} show={showSide}/>
            <div className='layout'>
       <NavBar showSide={handleShowSide} />
       <main className='Page-Container'>
      <div className="container-fluid">
      {props.children}
      </div>
       </main>
        </div>
        </Fragment>
     );
}
 
export default Layout;
