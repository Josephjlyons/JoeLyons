import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt, faFile } from '@fortawesome/free-solid-svg-icons';
import PopUp from './ContactPopUp';
import '../../sass/_header.scss';


const Header = () => {
const [openContact, setOpenContact] = useState(false)

    return (
        <div className='header'>
            <ul id="nav" className="header__nav">

                <li><a className="header__nav--item" href="#about">About</a></li>
                <li><a className="header__nav--item" href="#portfolio">Projects</a></li>
                <li><a className="header__nav--item" onClick={() => setOpenContact(true)} href="#contact">Contact</a></li>
                <PopUp open={openContact} onClose={() => setOpenContact(false)}/>
                <li><a className="header__nav--item" href='https://docs.google.com/document/d/14y2lHTV8S7WNrUancx8AV5NL0C6BFgX0oCL4gwMoIgk/export?format=pdf' download='Joseph Lyons Resume' aria-label='resume'>Resume</a></li>
            </ul>
            <h1 className='header__h1'>Joe Lyons</h1>
            <p className='header__text'>full stack developer specializing in front end engineering</p>
            <div className='header__social-list'>
                <ul>

                    <li>  <a href="https://github.com/Josephjlyons" aria-label='github'><FontAwesomeIcon className="header__icons header__icons--1" icon={faGithub} /> </a></li>
                    <li>  <a href="mailto:josephjlyons90@gmail.com" aria-label='email'><FontAwesomeIcon className="header__icons header__icons--2" icon={faAt} /> </a></li>
                    <li>  <a href="https://www.linkedin.com/in/josephlyons1990/" aria-label='linkedIn'><FontAwesomeIcon className=" header__icons header__icons--3" icon={faLinkedin} /> </a></li>
                    <li>  <a href='https://docs.google.com/document/d/14y2lHTV8S7WNrUancx8AV5NL0C6BFgX0oCL4gwMoIgk/export?format=pdf' aria-label='resume'>
                        <FontAwesomeIcon className='header__icons header__icons--4' icon={faFile} /></a></li>


                </ul>
            </div>
        </div>
    )
}

export default Header;