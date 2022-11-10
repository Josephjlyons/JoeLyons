
import '../../sass/_header.scss';

const Header = () => {
    return (
        <div className='header'>
       <ul id="nav" className="header__nav">
                        {/* <li className="current"><a className="header__smoothscroll" href="#home">Home</a></li> */}
                        <li><a className="header__smoothscroll" href="#about">About</a></li>
                        <li><a className="header__smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="header__smoothscroll" href="#portfolio">Projects</a></li>
                        <li><a className="header__smoothscroll" href="#contact">Contact</a></li>
                    </ul>
            <h1 className='header__h1'>Joe Lyons</h1>

            <div className='header__social'>
                <ul>
                    {/* build out social accounts with icons */}
                    <a href="https://github.com/Josephjlyons"><i className="header__icons fab fa-github-square"></i></a>
                    <a href="mailto:josephjlyons90@gmail.com"><i className="header__icons fas fa-at"></i></a>
                    <a href="https://www.linkedin.com/in/joseph-lyons-0a2630200/"><i className=" header__icons fab fa-linkedin"></i></a>
                    {/* <a href='https://docs.google.com/document/d/14y2lHTV8S7WNrUancx8AV5NL0C6BFgX0oCL4gwMoIgk/export?format=pdf' ><i className="header__icons far fa-file"></i></a> */}


                </ul>
            </div>
        </div>
    )
}

export default Header;