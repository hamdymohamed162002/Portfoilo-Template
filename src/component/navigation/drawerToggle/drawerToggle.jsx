import React from 'react';
import './drawerToggle.scss'
const DrawerToggle = (props) => {
    return (

        <div onClick={props.clicked}  className='DrawerToggle'>
            <div></div>
            <div></div>
            <div></div>
        </div>);
}

export default DrawerToggle;