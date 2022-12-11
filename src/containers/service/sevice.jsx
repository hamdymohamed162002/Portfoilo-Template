import React from 'react';
import { useState } from 'react';
import Service from '../../component/serviceCompnent/Service';
import './service.scss'
const Services = () => {
    const [isActive, setActive] = useState([false, false, false])
    const onMouse = (n) => {
        for (let i = 0; i < 3; i++) {
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
        <div id='Services' className='Services-container'>
            <div className="Services-text">
                <div className="badge">what we can do for you</div>
                <h2>Services we can help you with</h2>
            </div>
            <div className="container-fluidd">
                <Service h2={'Development'}
                    color={'blue'}
                    onMouse={onMouse}
                    margin={'250px'}
                    isActive={isActive[0]}
                    number={0}
                    para={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus similique ipsum quidem non tempora ad eius, debitis earum vero impedit nostrum corporis soluta '}
                    />
                <Service
                h2={'Desgin'}
                    color={'purple'}
                    onMouse={onMouse}
                    margin={'150px'}
                    para={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus similique ipsum quidem non tempora ad eius, debitis earum vero impedit nostrum corporis soluta '}
                    isActive={isActive[1]}
                    number={1} />
                <Service para={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus similique ipsum quidem non tempora ad eius, debitis earum vero impedit nostrum corporis soluta '}  h2={'markting'}color={''} onMouse={onMouse} margin={'50px'} isActive={isActive[2]} number={2} />
            </div>
        </div>
    );
}

export default Services;