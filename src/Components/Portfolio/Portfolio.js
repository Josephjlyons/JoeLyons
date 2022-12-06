import '../../sass/_portfolio.scss';
// import yelpCamp from '../../img/yelp-camp-img.png';
// import draughtPicker from '../../img/draught-picker.png';
// import dnd from '../../img/dnd-homepage-Img.png';

const Portfolio = () => {
    return (

        <div id='portfolio' className='portfolio'>

            <figure className='portfolio__item portfolio__item--1'>
                <p className='portfolio__header--yelp'>YelpCamp</p>
                <div className='portfolio__item--hidden'>hidden text test
                <button>test</button> </div>
                
                {/* <img src={yelpCamp} alt='yelpcamp homepage' className='worksImg' /> */}
            </figure>

            <figure className='portfolio__item portfolio__item--2'>
                <p className='portfolio__header--draught'>Draught Picker</p>
                <div className='portfolio__item--hidden'>hidden text test </div>
                {/* <img src={draughtPicker} alt='draught homepage' className='worksImg' /> */}
            </figure>

            <figure className='portfolio__item portfolio__item--3'>
                <p className='portfolio__header--dnd'>DnD Creator</p>
                <div className='portfolio__item--hidden'>hidden text test </div>
                {/* <img src={dnd} alt='dnd homepage' className='worksImg' /> */}
            </figure>

        </div>
    )
}

export default Portfolio;