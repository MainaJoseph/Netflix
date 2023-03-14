import React from 'react';
import './Contactus.css';


const Contactus = () => {
  return (
    <div className='contactus'>
    <nav className="contactus__navbar">
      <div className="contact__navbarlogo">
      <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="Netflix"
          />
      </div>
      <div className="contactus__navbarbuttons">
        <button className="contactus__navbarjoin-button">Join Netflix</button>
        <button className="contact__navbarsignin-button">Sign In</button>
      </div>
    </nav>
    </div>
  )
}

export default Contactus;