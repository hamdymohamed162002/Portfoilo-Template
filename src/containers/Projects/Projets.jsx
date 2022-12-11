import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import './projets.scss'
import AnimatedText from '../../component/UI/AnimatedText/animatedText';
import { useRef } from 'react';
import Project from '../../component/project/project';
import img1 from '../../assets/imgs/img1.jpg'
import img2 from '../../assets/imgs/img2.jpg'
import img3 from '../../assets/imgs/img3.jpg'
import Buttonn from '../../component/UI/Button2/Button2';
import { ReactComponent as Dots } from '../../assets/dots.svg';
gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
    const Projects = useRef([]);
    const floatingdev = useRef(null)
    const floatingLine = useRef(null)
    const floatingLine2 = useRef(null)
    const Title = useRef(null);
    useEffect(() => {


        Projects.current.forEach((e, i) => {
            gsap.from(Projects.current[i], {
                y: 500, duration: 1,opacity:0, delay: i / 1 == 1 ? 0.2 : i / 3 == 1 ? 0.2 : 0, scrollTrigger: {
                    trigger: Projects.current[i],
                    toggleActions: "play reverse play reverse"
                    ,

                    start: "top-=100px bottom",

                }
            })
        })
        gsap.to(floatingLine.current, {
            x: -100, y: 100, duration: 0.5, scrollTrigger: {
                trigger: floatingLine.current,
             
                scrub: true
            }
        })
        gsap.to(floatingLine2.current, {
            y: 100, duration: 0.5, scrollTrigger: {
                trigger: floatingLine2.current,
               
                scrub: true
            }
        })
        gsap.to(floatingdev.current, {
            x: 100, y: 100, duration: 0.5, scrollTrigger: {
                trigger: floatingdev.current,
            
                scrub: true
            }
        })
        gsap.from(Title.current.children, {
            y: 500, duration: 1, stagger: 0.02, scrollTrigger: {
                trigger: Title.current.children,

                start: "-500 bottom"
            }
        })

    }, [])



    return (
        <section id='Projects' className='Projects'>

            <div className="container-Fluid">
                <div className="parallex">
                    <div ref={floatingdev} className="floating-div"></div>
                    <div ref={floatingLine} className="floating-line"></div>
                    <div ref={floatingLine2} className="floating-line2"></div>
                </div>
                <div className="backGround">
                    <Dots />
                </div>
                <div className="Projects-title">
                    <span className='badge'>Case Study</span>
                    <div ref={Title} className="title"><AnimatedText >Selected Projects</AnimatedText></div>
                </div>
                <div className='Projects-container'>
                    <Project  ref={(e) => Projects.current[0] = e} img={img1} />
                    <Project ref={(e) => Projects.current[1] = e} img={img2} />
                    <Project ref={(e) => Projects.current[2] = e} img={img3} />
                    <Project ref={(e) => Projects.current[3] = e} img={img1} />


                </div>
                <div className="btn-container">
                    <Buttonn>hello</Buttonn>
                </div>
                <div className='btn-text'>
                    <h3 >hover from diffrent postions</h3>
                </div>
            </div>
        </section>
    );
}

export default Projects;