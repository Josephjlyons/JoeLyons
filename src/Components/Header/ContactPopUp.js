import React from "react";
import '../../sass/_popUp.scss';
import photo from '../../img/photoMe2.webp';

const PopUp = ({ open, onClose }) => {
if (!open) return null;
return(
    <div onClick={onClose} className='overlay'>
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className='modalContainer'
    >

      <div className='popUp'>
        <p className='popUp__closeBtn' onClick={onClose}>
          X
        </p>
        <div className='popUp__content'>
          <p></p>
          <h1>Contact Me</h1>
          <img className="popUp__content--img" src={photo} alt="joseph lyons" />
          <p>Email: josephjlyons90@gmail.com</p>
          <p>Phone: (603) 707-1045</p>
        </div>

        </div>
      </div>
    </div>

);
}
export default PopUp;