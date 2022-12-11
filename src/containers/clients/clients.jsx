import React from 'react'
import './client.scss'
import img1 from '../../assets/imgs/compones/1.png';
import img2 from '../../assets/imgs/compones/2.png';
import img3 from '../../assets/imgs/compones/3.png';
import img4 from '../../assets/imgs/compones/4.png';
import img5 from '../../assets/imgs/compones/5.png';
import img6 from '../../assets/imgs/compones/6.png';




const Clients = () => {
   
  

    

    // Hard coded so sorry for that
    return (
        <div className="Clinets">
            <div className="Client-container">
                <div className="Clients-text">
                 <div>   <div className="badge">asda</div></div>
                    <div className="text">
                        <h2>We’ve built solutions for...</h2>
                        Nulla facilisi. Nullam in magna id dolor blandit rutrum eget.
                    </div>

                </div>
                <div className="Clients-imgs">

                    <div

                        className='img bord'>
                        <img src={img1} alt="" />
                    </div>
                    <div

                        className='img bord'>
                        <img src={img2} alt="" />
                    </div>
                    <div

                        className='img'>
                        <img src={img3} alt="" />
                    </div>
                    <div

                        className='img bord'>
                        <img src={img4} alt="" />
                    </div>
                    <div

                        className='img bord'>
                        <img src={img5} alt="" />
                    </div>
                    <div

                        className='img'>
                        <img src={img6} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Clients;