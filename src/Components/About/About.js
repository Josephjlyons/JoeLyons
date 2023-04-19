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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae justo eget magna.
                        Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Id leo in vitae turpis massa sed.
                        Elementum nisi quis eleifend quam adipiscing vitae. Praesent semper feugiat nibh sed pulvinar proin gravida.
                        Vitae ultricies leo integer malesuada nunc vel risus commodo viverra.
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
