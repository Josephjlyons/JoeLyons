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


            <figure className='certifications__item certifications__item--1'><img src={unhCert}
                alt='Unh Certification' className='cert-images' />
            </figure>

            <figure className='certifications__item certifications__item--2'><img src={webdevCert}
                alt='Web Dev Certification' className='cert-images' />
            </figure>

            <figure className='certifications__item certifications__item--3'><img src={reactCert}
                alt='React Certification' className='cert-images' />
            </figure>

            <figure className='certifications__item certifications__item--4'><img src={advancedCSS}
                alt='Advanced Css and Sass Certification' className='cert-images' />
            </figure>

            <figure className='certifications__item certifications__item--5'><img src={typescriptCert}
                alt='Typescript Certification' className='cert-images' />
            </figure>

            <figure className='certifications__item certifications__item--6'><img src={algodataCert}
                alt='Algorithms Certification' className='cert-images' />
            </figure>

        </div>


    )
}

export default Certifications;