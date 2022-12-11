import React from 'react'
import './card.scss'
import img from '../../assets/imgs/card.jpg'
const Card = () => {
    return ( <div className='Card'>
        <div className="imgBox">
            <img src={img} alt="" />
        </div>
        <div className="content">
            <div className="details">
                <h2>Name client <br/> <span>Senior UI/UX</span></h2>
                <div className="data">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium qui recusandae cumque ipsa. Quod, inventore minus, nesciunt itaque reprehenderit temporibus, molestias quia accusamus a explicabo veniam mollitia. Vel, repudiandae autem.
                </div>
            </div>
        </div>
    </div>  );
}
 
export default Card;