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
                        I’m Joe Lyons, a down to earth humorous person who enjoys having fun while working but also meeting and exceeding goal expectations.
                        I’m a Full Stack Developer with strong teamwork and communication skills, flexible and adaptive. Frontend focused, enthusiastic about designing aesthetically pleasing applications.
                        Interesting in joining a company that builds, innovates and creates products that will bring positive change to the environment and/or technology that benefits people with how they live their lives. Graduate of University of New Hampshire with a Certificate in Full Stack Web Development.

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
