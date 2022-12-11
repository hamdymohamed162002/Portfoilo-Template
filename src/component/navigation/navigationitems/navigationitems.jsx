import React from 'react';
import NavigationItem from './navigationitem/navigationitem'
import './navigationitem.scss'

const NavigationItems = (props) => {
    return ( 
       
                    <ul>
<NavigationItem clicked={props.clicked} to={'#Home'}>Home</NavigationItem>
<NavigationItem clicked={props.clicked} to={'#Projects'}>Projects</NavigationItem>
<NavigationItem clicked={props.clicked} to={'#Services'}>Services</NavigationItem>
<NavigationItem clicked={props.clicked} to={'#Contact-us'}>Contact Us</NavigationItem>

                    </ul>
               

     );
}
 
export default NavigationItems;