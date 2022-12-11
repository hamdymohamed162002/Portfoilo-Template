import React from 'react';
import { ReactComponent as Wavess } from './waves.svg';
import './waves.scss'
const Waves = () => {
    return ( 
        <div className='waves-container'>
            <Wavess/>
           <div className="fade"></div>
        </div>
     );
}
 
export default Waves;