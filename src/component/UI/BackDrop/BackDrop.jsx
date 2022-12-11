import React from 'react'
import './Backdrop.scss';
const BackDrop = (props) => {
    return ( 
       props.show? <div onClick={props.clicked} className='backDrop'></div>:null
      );
}
 
export default BackDrop;