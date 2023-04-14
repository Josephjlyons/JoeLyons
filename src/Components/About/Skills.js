import React from 'react';
import '../../sass/_about.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faReact, faNodeJs, faSass, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
// import FadeInSection from '../../FadeInSections';


const Skills = () => {
    return (
        <div className='skills'>
            <div className='skills skills--1'>
            <FontAwesomeIcon className='skills__icon' icon={faJsSquare} />
            {/* <h2 className='skills__heading'>Javascript</h2> */}
        </div>

        <div className='skills skills--2'>
            <FontAwesomeIcon className='skills__icon' icon={faReact} />
            {/* <h2 className='skills__heading'>React</h2> */}
        </div>
        <div className='skills skills--3'>
            <FontAwesomeIcon className='skills__icon' icon={faNodeJs} />
            {/* <h2 className='skills__heading'>Nodejs</h2> */}
        </div>
        <div className='skills skills--4'>
            <FontAwesomeIcon className='skills__icon' icon={faSass} />
            {/* <h2 className='skills__heading'>Sass</h2> */}
        </div>
        <div className='skills skills--5'>
            <FontAwesomeIcon className='skills__icon' icon={faDatabase} />
            {/* <h2 className='skills__heading'>MongoDB</h2> */}
        </div>
        <div className='skills skills--6'>
            <FontAwesomeIcon className='skills__icon' icon={faHtml5} />
            {/* <h2 className='skills__heading'>HTML</h2> */}
        </div>
        
    </div>
    )
}

export default Skills;