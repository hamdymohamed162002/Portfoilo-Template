import React from 'react';
import Card from '../../component/Card/Card';
import './feedback.scss'
const FeedBack = () => {
    return (<div className='feedback'>
      
            <div className="feed-text">
             <div>   <div className="badge">testimonials</div></div>
                <h2>what our client said</h2> </div>
            <div className="Cards-container">
                <Card />
                <Card />
            </div>

       
    </div>);
}

export default FeedBack;