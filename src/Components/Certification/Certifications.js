import '../../sass/_certifications.scss';
import advancedCSS from '../../img/advanced-css-sass.webp';
import unhCert from '../../img/unh-coding-cert.webp';
import webdevCert from '../../img/webdevboot-cert.webp';
import reactCert from '../../img/reactCert.webp';
import typescriptCert from '../../img/typescriptCert.webp';
import algodataCert from '../../img/algodataCert.webp';
import Slider from 'react-slick';
import '../../sass/_slick-theme.scss';
import '../../sass/_slick.scss';

const Certifications = () => {
    const settings = {

        dots: false,
        arrows: true,
        adaptiveHeight: true,
        fade:true,
        // autoplay: true,
        // centerMode: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        lazyLoad: true,
        infinite: true,
        speed: 5,

        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 1,

                }
            },

        ]


    };
    return (

        <div className='certifications'>
            <Slider className='certifications__slick-slider' {...settings}>

                <figure className='certifications__item certifications__item--1'><img src={unhCert}
                    alt='Unh Certification' />
                </figure>

                <figure className='certifications__item certifications__item--2'><img src={webdevCert}
                    alt='Web Dev Certification' />
                </figure>

                <figure className='certifications__item certifications__item--3'><img src={reactCert}
                    alt='React Certification' />
                </figure>

                <figure className='certifications__item certifications__item--4'><img src={advancedCSS}
                    alt='Advanced Css and Sass Certification' />
                </figure>

                <figure className='certifications__item certifications__item--5'><img src={typescriptCert}
                    alt='Typescript Certification' />
                </figure>

                <figure className='certifications__item certifications__item--6'><img src={algodataCert}
                    alt='Algorithms Certification' />
                </figure>
            </Slider>
        </div>


    )
}

export default Certifications;