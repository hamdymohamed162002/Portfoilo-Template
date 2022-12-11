import React, { Fragment } from 'react';
import NavigationItems from '../navigation/navigationitems/navigationitems';
import BackDrop from '../UI/BackDrop/BackDrop';
import './sidedrawer.scss';
const SideDrawer = (props) => {
    return (
        <Fragment>
            
              <BackDrop show={props.show} clicked={props.close}/>
            <div className={`SideDrawer ${props.show?'Open':'Close'}`}>
              
                <nav>
                    <NavigationItems clicked={props.close}/>
                </nav>
            </div>
        </Fragment>
    );
}

export default SideDrawer;