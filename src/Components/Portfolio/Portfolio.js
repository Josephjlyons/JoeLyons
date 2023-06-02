import '../../sass/_portfolio.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import yelpCampMain from '../../img/yelpCamp.webp';
import draughtPickerMain from '../../img/draught-picker.webp';
import dndCreatorMain from '../../img/dnd.webp';
import { FadeInDown } from '../../FadeInSections';


const Portfolio = () => {
    return (

        <div id='portfolio' className='portfolio'>

            <figure className='portfolio__item portfolio__item--1'>
                <p className='portfolio__header portfolio__header--yelp'>YelpCamp</p>
                <img className='portfolio__item portfolio__item--yelp' src={yelpCampMain} alt='yelp-camp-main'></img>
                {/* <div className='portfolio__item--info'> */}
                <div className='portfolio__item portfolio__item--infos'>
                    <FadeInDown>
                        <ul className='portfolio__item--list1'>
                            <li>Secure passport login</li>
                            <li>Interactive Map</li>
                            <li>image uploading</li>
                            <li>Protected routes</li>
                            <li>Easy to use interface</li>
                        <a href="https://github.com/Josephjlyons/YelpCamp" aria-label='github'><FontAwesomeIcon className="portfolio__icons" icon={faGithub} /></a>
                        </ul>

                    </FadeInDown>
                </div>
            </figure>

            <figure className='portfolio__item portfolio__item--2'>
                <p className='portfolio__header'>Draught Picker</p>
                <img className='portfolio__item portfolio__item--draught' src={draughtPickerMain} alt='draught-main'></img>
                <div className='portfolio__item--info'>
                    <FadeInDown>
                        <ul className='portfolio__item--list2'>
                            <li>OpenBreweryDB API</li>
                            <li>Search by zip codes</li>
                            <li>Favorite and save breweries</li>
                            <li>View brewery info</li>
                            <li>Map location of brewery</li>
                        <a href="https://github.com/Josephjlyons/DraughtPicker" aria-label='github'><FontAwesomeIcon className="portfolio__icons" icon={faGithub} /></a>
                        <a href='https://josephjlyons.github.io/DraughtPicker/' aria-label='website'><FontAwesomeIcon className="portfolio__icons" icon={faGlobe} /></a>
                        </ul>
                    </FadeInDown>
                </div>

            </figure>

            <figure className='portfolio__item portfolio__item--3'>
                <p className='portfolio__header'>DnD Creator</p>
                <img className='portfolio__item portfolio__item--dnd' src={dndCreatorMain} alt='dnd-main'></img>
                <div className='portfolio__item--info'>
                    <FadeInDown>
                        <ul className='portfolio__item--list1'>
                            <li>Secure Bcrypt login</li>
                            <li>Fast character creation</li>
                            <li>generated from DND API </li>
                            <li>view multiple characters</li>
                            <li>Easily swap characters</li>
                        <a href="https://github.com/tjvig94/dnd-exp" aria-label='github'><FontAwesomeIcon className="portfolio__icons" icon={faGithub} /></a>
                        </ul>
                    </FadeInDown>
                </div>

            </figure>

        </div>
    )
}


export default Portfolio;