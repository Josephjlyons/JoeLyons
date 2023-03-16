import '../../sass/_certifications.scss';
import advancedCSS from '../../img/advanced-css-sass.webp';
import unhCert from '../../img/unh-coding-cert.webp';
import webdevCert from '../../img/webdevboot-cert.webp';
import reactCert from '../../img/reactCert.webp';
import typescriptCert from '../../img/typescriptCert.webp';
import algodataCert from '../../img/algodataCert.webp';

const Certifications = () => {
    return (
        <div id='about' className='certifications'>




            <figure className='certifications__item certifications__item--1'><img src={unhCert} alt='advanced css sass cert' className='cert-images' />
                {/* <p className='certifications__text'>UNH Coding and Programming</p> */}
            </figure>
            <figure className='certifications__item certifications__item--2'><img src={webdevCert} alt='advanced css sass cert' className='cert-images' />
                {/* <p className='certifications__text'>Web Dev Bootcamp 2022</p> */}
            </figure>
            <figure className='certifications__item certifications__item--3'><img src={reactCert} alt='advanced css sass cert' className='cert-images' />
                {/* <p className='certifications__text'>React - The Complete Guide</p> */}
            </figure>
            <figure className='certifications__item certifications__item--4'><img src={advancedCSS} alt='advanced css sass cert' className='cert-images' />
                {/* <p className='certifications__text'>Advanced CSS and Sass</p> */}
            </figure>
            <figure className='certifications__item certifications__item--5'><img src={typescriptCert} alt='advanced css sass cert' className='cert-images' />
                {/* <p className='certifications__text'>Understanding Typescript</p> */}
            </figure>

            <figure className='certifications__item certifications__item--6'><img src={algodataCert} alt='advanced css sass cert' className='cert-images' />
                {/* <p className='certifications__text'>Algorithms + Data Structures</p> */}
            </figure>

        </div>


    )
}

export default Certifications;