
import '../../sass/_footer.scss';

const Footer = () => {
return(
    <div className='footer'>
         <ul class="nav">
            <li class="nav__item"><a href="#" class="nav__link">Joseph Lyons</a></li>
            {/* <li class="nav__item"><a href="#" class="nav__link">Request proposal</a></li> */}
            {/* <li class="nav__item"><a href="#" class="nav__link">Download home planner</a></li>
            <li class="nav__item"><a href="#" class="nav__link">Contact us</a></li>
            <li class="nav__item"><a href="#" class="nav__link">Submit your property</a></li>
            <li class="nav__item"><a href="#" class="nav__link">Come work with us</a></li> */}
        </ul>

        <p class="copyright">
            &copy; Copyright 2022
        </p>
    </div>
)
}

export default Footer;