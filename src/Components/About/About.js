import React from 'react';
import '../../sass/_about.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faJsSquare, faReact, faNodeJs, faSass, faHtml5} from '@fortawesome/free-brands-svg-icons';
import {faDatabase} from '@fortawesome/free-solid-svg-icons';


const About = () => {
    return (
        <div id='about' className='about'>

            <div className='feature'>
                <FontAwesomeIcon className='feature__icon' icon={faJsSquare} />
                <h4 className='feature__heading'>Javascript</h4>
                <p className='feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum cupiditate amet? adipisicing elit. Perferendis laborum cupiditate amet? vadipisicing elit. Perferendis laborum cupiditate amet?</p>
            </div>
            <div className='feature'>
        
                <FontAwesomeIcon className='feature__icon' icon={faReact} />
                <h4 className='feature__heading'>React</h4>
                <p className='feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum cupiditate amet?</p>
            </div>
            <div className='feature'>
            <FontAwesomeIcon className='feature__icon' icon={faNodeJs} />
                <h4 className='feature__heading'>Nodejs</h4>
                <p className='feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum cupiditate amet?</p>
            </div>
            <div className='feature'>
                <FontAwesomeIcon className='feature__icon' icon={faSass} />
                <h4 className='feature__heading'>Css/Sass</h4>
                <p className='feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum cupiditate amet?</p>
            </div>
            <div className='feature'>
            <FontAwesomeIcon className='feature__icon' icon={faDatabase} />
                <h4 className='feature__heading'>MongoDB</h4>
                <p className='feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum cupiditate amet?</p>
            </div>
            <div className='feature'>
                <FontAwesomeIcon className='feature__icon' icon={faHtml5} />
                <h4 className='feature__heading'>HTML</h4>
                <p className='feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum cupiditate amet?</p>
            </div>

     
        </div>
    )
}

export default About;
