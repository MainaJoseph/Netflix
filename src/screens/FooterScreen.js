import React, {useState} from 'react';
import './FooterScreen.css';





const FooterScreen = () => {

    const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };
  


  return (
    <footer className="footer">
        <div className='footer-text'>
        <p href="#">Questions?ContactUs</p>

        </div>
      <div className="footer-links">
        <a href="#">FAQ</a>
        <a href="#">Gift Card Terms</a>
        <a href="#">Help center</a>
        <a href="#">Account</a>
        <a href="#">Media Center</a>
        <a href="#">Investor Relations</a>
        <a href="#">Jobs</a>
        <a href="#">Ways to watch</a>
        <a href="#">Terms of use</a>
        <a href="#">Privacy</a>
        <a href="#">Cookie Preference</a>
        <a href="#">Cooparate Information</a>
        <a href="#">Contact Us</a>
        <a href="#">Speed Test</a>
        <a href="#">Legal Notice</a>
        <a href="#">Only on Netflix</a>
      </div>

      <div className="netflix-dropdown">
      <button className="netflix-dropdown-button" onClick={handleDropdownClick}>
      🌎 English  ▼
        <i className={`fas fa-angle-${isOpen ? 'up' : 'down'}`}></i>
      </button>
      {isOpen && (
        <ul className="netflix-dropdown-menu">
          <li><a href="#">English</a></li>
         
        </ul>
      )}
    </div>
  
     
    </footer>
  );
};

export default FooterScreen;
