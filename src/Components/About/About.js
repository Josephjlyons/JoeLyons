import React from 'react';
import '../../sass/_about.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faReact, faNodeJs, faSass, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';


const About = () => {
    return (
        <div id='about' className='features'>


            <div className='feature feature--1'>
                <FontAwesomeIcon className='feature__icon' icon={faJsSquare} />
                <h2 className='feature__heading'>Javascript</h2>
                <p className='feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum cupiditate amet? </p>
            </div>

            <div className='feature feature--2'>
                <FontAwesomeIcon className='feature__icon' icon={faReact} />
                <h2 className='feature__heading'>React</h2>
                <p className='feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum cupiditate amet?</p>
            </div>
            <div className='feature feature--3'>
                <FontAwesomeIcon className='feature__icon' icon={faNodeJs} />
                <h2 className='feature__heading'>Nodejs</h2>
                <p className='feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum cupiditate amet?</p>
            </div>
            <div className='feature feature--4'>
                <FontAwesomeIcon className='feature__icon' icon={faSass} />
                <h2 className='feature__heading'>Css/Sass</h2>
                <p className='feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum cupiditate amet?</p>
            </div>
            <div className='feature feature--5'>
                <FontAwesomeIcon className='feature__icon' icon={faDatabase} />
                <h2 className='feature__heading'>MongoDB</h2>
                <p className='feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum cupiditate amet?</p>
            </div>
            <div className='feature feature--6'>
                <FontAwesomeIcon className='feature__icon' icon={faHtml5} />
                <h2 className='feature__heading'>HTML</h2>
                <p className='feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum cupiditate amet?</p>
            </div>

        </div>

    )
}

export default About;
