import React, { useState } from 'react';
import FooterScreen from './FooterScreen';
import './LoginScreen.css';
import SignupScreen from './SignupScreen';

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogoClick = () => {
    window.location.reload();
  };

  const handleGetStartedClick = (e) => {
    e.preventDefault();
    const inputEmail = e.target.form[0].value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailInput = document.getElementById('emailInput');
    
    if (inputEmail === '') {
      setErrorMessage('Please enter your email address');
      emailInput.classList.add('error');
      emailInput.classList.remove('valid');
    } else if (!emailRegex.test(inputEmail)) {
      setErrorMessage('Invalid email address');
      emailInput.classList.add('error');
      emailInput.classList.remove('valid');
    } else {
      setEmail(inputEmail);
      setSignIn(true);
      emailInput.classList.add('valid');
      emailInput.classList.remove('error');
    }
  };

  const handleInputChange = () => {
    const emailInput = document.getElementById('emailInput');
    if (emailInput.classList.contains('error') || emailInput.classList.contains('valid')) {
      emailInput.classList.remove('error');
      emailInput.classList.remove('valid');
      setErrorMessage('');
    }
  };

  return (
    <div>
      <div className="loginScreen">
        <div className="loginScreen__background">
          <img
            onClick={handleLogoClick}
            className="loginScreen__logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="Netflix"
          />
          <button onClick={() => setSignIn(true)} className="loginScreen__button">
            Sign In
          </button>
          <div className="loginScreen__gradient" />
        </div>
        <div className="loginScreen__body">
          {signIn ? (
            <SignupScreen email={email} />
          ) : (
            <>
              <h1>Unlimited films, TV programmes and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
              <div className="loginScreen__input">
                <form>
                  <input
                    id="emailInput"
                    type="email"
                    placeholder="Email address"
                    onChange={handleInputChange}
                  />
                  <button onClick={handleGetStartedClick} className="loginScreen__getStarted">
                    Get Started &nbsp; >
                  </button>
                </form>
                {errorMessage && (
                  <p className="loginScreen__errorMessage">{errorMessage}</p>
                )}
              </div>
            </>
          )}
        </div>
        <div className="loginScreen__border" />
      </div>
      {!signIn && <FooterScreen />}
    </div>
  );
}

export default LoginScreen;
