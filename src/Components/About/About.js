import React from 'react';
import '../../sass/_about.scss';

const About = () => {
    return (
        <div className='about'>

            <div className='feature'>
                <svg className="feature__icon"><use xlinkHref="#lnr-code"></use></svg>
                <h4 className='feature__heading'>Javascript</h4>
                <p className='feature__text'>Strong understanding of the Javascript language, multiple projects built with front-end and back-end code.</p>
            </div>
            <div className='feature'>
                <svg className="feature__icon"><use xlinkHref="#lnr-diamond"></use></svg>
                <h4 className='feature__heading'>React</h4>
                <p className='feature__text'>Confident using the React library, creating reuseable components for scalability.</p>
            </div>
            <div className='feature'>
                <svg className="feature__icon"><use xlinkHref="#lnr-layers"></use></svg>
                <h4 className='feature__heading'>Nodejs</h4>
                <p className='feature__text'>Used in most personal projects that require a back-end server.</p>
            </div>
            <div className='feature'>
            <svg className="feature__icon"><use xlinkHref="#lnr-magic-wand"></use></svg>
                <h4 className='feature__heading'>Css/Sass</h4>
                <p className='feature__text'>Confident with css and the preprocessor sass using flexbox and grid layouts, custom scripts for compiling and supports </p>
            </div>
            <div className='feature'>
                <svg className="feature__icon"><use xlinkHref="#lnr-database"></use></svg>
                <h4 className='feature__heading'>MongoDB</h4>
                <p className='feature__text'>Confident with database C.R.U.D. operations, pulling data to display to users on a given application/webpage.</p>
            </div>
            <div className='feature'>
                <svg className="feature__icon"><use xlinkHref="#lnr-text-align-justify"></use></svg>
                <h4 className='feature__heading'>HTML</h4>
                <p className='feature__text'>Strong skills with creating quick html files to be used and styled.</p>
            </div>


        </div>
    )
}

export default About;
