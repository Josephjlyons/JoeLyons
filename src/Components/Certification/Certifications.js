import '../../sass/_certifications.scss';

import unh from '../../img/unh-coding-cert.webp';
import advanced from '../../img/advanced-css-sass.webp';
import algo from '../../img/algodataCert.webp';
import react from '../../img/reactCert.webp';
import webdev from '../../img/webdevboot-certSM.webp';
import typescript from '../../img/typescriptCert.webp';

import { FadeInSections, FadeInSideLTR, FadeInSideRTL } from '../../FadeInSections';


const Certifications = () => {

    return (

        <div className='certifications'>
            <h3>Certifications</h3>
                <figure className='certifications__item certifications__item--1'>
                    <FadeInSections>
                    <img src={unh}
                    alt='Unh Certification' />
                    </FadeInSections>
                </figure>
           
                <figure className='certifications__item certifications__item--2'>
                    <FadeInSideLTR>
                    <img src={webdev}
                    alt='Web Dev Certification' />
                    </FadeInSideLTR>
                </figure>

                <figure className='certifications__item certifications__item--3'>
                    <FadeInSideRTL>
                    <img src={react}
                    alt='React Certification' />
                    </FadeInSideRTL>
                </figure>

                <figure className='certifications__item certifications__item--4'>
                    <FadeInSideLTR>
                    <img src={advanced}
                    alt='Advanced Css and Sass Certification' />
                    </FadeInSideLTR>
                </figure>

                <figure className='certifications__item certifications__item--5'>
                    <FadeInSections>
                    <img src={typescript}
                    alt='Typescript Certification' />
                    </FadeInSections>
                </figure>

                <figure className='certifications__item certifications__item--6'>
                    <FadeInSideRTL>
                    <img src={algo}
                    alt='Algorithms Certification' />
                    </FadeInSideRTL>
                </figure>

           
        </div>


    )
}

export default Certifications;