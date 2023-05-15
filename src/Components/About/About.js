import React from 'react';
import '../../sass/_about.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faReact, faNodeJs, faSass, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FadeInSections } from '../../FadeInSections';


const About = () => {
    return (

        <div id='about' className='about'>

            <span className='about__bio-text'>
                <FadeInSections>
                    <p>
                        Full Stack Developer with strong teamwork and coordination skills, eye for design and streamlined applications.
                        Strong drive to see problems out and come up with an effective solution in a timely manner.
                        Always learning, refining and studying technologies as they advance to keep up to date.
                        Interested in joining a company to help grow and innovate new products. Graduate of University of New Hampshire with a Certificate in Full Stack Web Development (4.0).
                    </p>
                </FadeInSections>
            </span>
            <div className='about__skills'>
                <div className='about__skills--1'>
                    <FadeInSections>
                        <FontAwesomeIcon className='about--icon' icon={faJsSquare} />
                        <h2 className='about__heading'>Javascript</h2>
                    </FadeInSections>
                </div>

                <div className='about__skills--2'>
                    <FadeInSections>
                        <FontAwesomeIcon className='about--icon' icon={faReact} />
                        <h2 className='about__heading'>React</h2>
                    </FadeInSections>
                </div>
                <div className='about__skills--3'>
                    <FadeInSections>
                        <FontAwesomeIcon className='about--icon' icon={faNodeJs} />
                        <h2 className='about__heading'>Nodejs</h2>
                    </FadeInSections>
                </div>
                <div className='about__skills--4'>
                    <FadeInSections>
                        <FontAwesomeIcon className='about--icon' icon={faSass} />
                        <h2 className='about__heading'>Sass</h2>
                    </FadeInSections>
                </div>
                <div className='about__skills--5'>
                    <FadeInSections>
                        <FontAwesomeIcon className='about--icon' icon={faDatabase} />
                        <h2 className='about__heading'>MongoDB</h2>
                    </FadeInSections>
                </div>
                <div className='about__skills--6'>
                    <FadeInSections>
                        <FontAwesomeIcon className='about--icon' icon={faHtml5} />
                        <h2 className='about__heading'>HTML</h2>
                    </FadeInSections>
                </div>

            </div>
        </div>

    )
}

export default About;
