import '../../sass/_portfolio.scss';


const Portfolio = () => {
    return (

        <div id='portfolio' className='portfolio'>

            <figure className='portfolio__item portfolio__item--1'>
                <p className='portfolio__header'>YelpCamp</p>
                <div className='portfolio__item--hidden'>hidden text test
                <button>test</button> </div>
                
           
            </figure>

            <figure className='portfolio__item portfolio__item--2'>
                <p className='portfolio__header'>Draught Picker</p>
                <div className='portfolio__item--hidden'>hidden text test </div>
         
            </figure>

            <figure className='portfolio__item portfolio__item--3'>
                <p className='portfolio__header'>DnD Creator</p>
                <div className='portfolio__item--hidden'>hidden text test </div>
 
            </figure>

        </div>
    )
}

export default Portfolio;