import '../../sass/_certifications.scss';
import advancedCSS from '../../img/advanced-css-sass.jpg';
import unhCert from '../../img/unh-coding-cert.png'
import webdevCert from '../../img/webdevboot-cert.jpg';
import reactCert from '../../img/reactCert.jpg';
import typescriptCert from '../../img/typescriptCert.jpg';
import algodataCert from '../../img/algodataCert.jpg';

const Certifications = () => {
    return (
        <div id='about' className='certifications'>
        


            
                <figure className='certifications__item--1'><img src={unhCert} alt='advanced css sass cert' className='gal' />
                <p className='certifications__text'>UNH Coding and Programming</p></figure>
                <figure className='certifications__item'><img src={advancedCSS} alt='advanced css sass cert' className='gal' />
                <p className='certifications__text'>Advanced CSS and Sass</p></figure>
                <figure className='certifications__item'><img src={webdevCert} alt='advanced css sass cert' className='gal' />
                <p className='certifications__text'>Web Dev Bootcamp 2022</p></figure>
                <figure className='certifications__item'><img src={reactCert} alt='advanced css sass cert' className='gal' />
                <p className='certifications__text'>React - The Complete Guide</p></figure>
                <figure className='certifications__item'><img src={algodataCert} alt='advanced css sass cert' className='gal' />
                <p className='certifications__text'>Algorithms + Data Structures</p></figure>
                <figure className='certifications__item'><img src={typescriptCert} alt='advanced css sass cert' className='gal' />
                <p className='certifications__text'>Understanding Typescript</p></figure>
            </div>


    )
}

export default Certifications;