import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowCircleUp} from '@fortawesome/free-solid-svg-icons';



import '../../sass/_footer.scss';

const Footer = () => {
return(
    <div className='footer'>
     
            <div className='footer__icon'>

            <a href='/#' ><FontAwesomeIcon className='footer__icon'icon={faArrowCircleUp} /></a>
            </div>
            <p className='name'> Joe Lyons</p>

        <p className="copyright">
            &copy; 2023
        </p>
    </div>
)
}

export default Footer;