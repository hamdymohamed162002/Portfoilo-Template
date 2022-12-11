import React from 'react';
import { useState } from 'react';
import Button from '../../component/UI/Button/button';
import Input from '../../component/UI/input/input';
import './contactus.scss'
const ContactUs = () => {
    const [isActive,setActive]=useState([false,false,false,false,false]);

    const onMouseClick = (n) => {
        for (let i = 0; i < 5; i++) {
            if (n == i) {
                setActive(prevState => {
                    const newState = [...prevState]
                    newState[i] = true;
                    return newState;
                })
            }
            else setActive(prevState => {
                const newState = [...prevState]
                newState[i] = false;
                return newState;
            })
        }
        console.log(isActive)
      
    }
    return ( 
        <div id='Contact-us' className='contact-section'>
<div className="contact-container">
    <div className="contact-text">
        <div className="badge">
            need a Developer?
        </div>
        <div className="Title "><h2>Let’s work together</h2></div>
        <div className="mail tex"><h2>mail</h2>
        <p>hm385249@gmail.com</p></div>
        <div className="addres tex"><h2>addres</h2>
        <p>shiebn elkom ,menofia</p></div>
        <div className="phone tex">
            <h2>phone</h2>
            <p>+201065533380</p>

        </div>
    </div>
    <div className="contact-form">
        <div className="form-container">
            <form action="">
                <Input clicked={onMouseClick} isActive={isActive[0]} number={0}  Input label={'Name'}/>
                <Input clicked={onMouseClick} isActive={isActive[1]} number={1} Input  label={'Email'}/>
                <Input clicked={onMouseClick} isActive={isActive[2]} number={2} Input label={'Company'}/>
                <Input clicked={onMouseClick} isActive={isActive[3]} number={3} Input label={'Phone'}/>
                <Input clicked={onMouseClick} isActive={isActive[4]} number={4} Input={false} label={'Message'}/>
<div className='submit-container'><Button>Submit</Button></div>
            </form> 
        </div>

    </div>
</div>
        </div>
     );
}
 
export default ContactUs;