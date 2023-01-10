import '../../sass/_portfolio.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
    return (

        <div id='portfolio' className='portfolio'>

            <figure className='portfolio__item portfolio__item--1'>
                <p className='portfolio__header'>YelpCamp</p>
                <div className='portfolio__item--hidden'>
                <ul className='portfolio__list'>
                        <li>Secure passport login</li>
                        <li>Controllable map with campground data</li>
                        <li>image uploading</li>
                        <li>Protected routes</li>
                        <li>Easy to use interface</li>
                    </ul>

                    <a href="https://github.com/Josephjlyons/YelpCamp"><FontAwesomeIcon className="header__icons" icon={faGithub} /></a>
                </div>

            </figure>

            <figure className='portfolio__item portfolio__item--2'>
                <p className='portfolio__header'>Draught Picker</p>
                <div className='portfolio__item--hidden'>

                    <ul className='portfolio__list'>
                        <li>Search with OpenBreweryDB API</li>
                        <li>Customize search with zip codes</li>
                        <li>Favorite and save breweries</li>
                        <li>View information of breweries</li>
                        <li>Overhead map location of brewery</li>
                    </ul>
                    <a href="https://github.com/Josephjlyons/DraughtPicker"><FontAwesomeIcon className="header__icons" icon={faGithub} /></a>
                    <a href='https://josephjlyons.github.io/DraughtPicker/'><FontAwesomeIcon className="header__icons" icon={faGlobe} /></a>
                </div>

            </figure>

            <figure className='portfolio__item portfolio__item--3'>
                <p className='portfolio__header'>DnD Creator</p>
                <div className='portfolio__item--hidden'>

                <ul className='portfolio__list'>
                        <li>Secure Bcrypt login</li>
                        <li>Create a ready to use character</li>
                        <li>generated stats from DND API </li>
                        <li>view multiple created characters</li>
                        <li>Easy navigation for character switching</li>
                    </ul>
                    <a href="https://github.com/tjvig94/dnd-exp"><FontAwesomeIcon className="header__icons" icon={faGithub} /></a>
                </div>

            </figure>

        </div>
    )
}

export default Portfolio;