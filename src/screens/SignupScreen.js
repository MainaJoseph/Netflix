import React, {useRef, useEffect, useState} from 'react';
import './SignupScreen.css';
import {auth} from '../firebase';
import {GoogleButton} from 'react-google-button';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";



function SignupScreen({ email }){

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const provider = new GoogleAuthProvider();

    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState(false);

    

      // set email input field value to the email prop value
      useEffect(() => {
        if (email) {
          emailRef.current.value = email;
        }
      }, [email]);



        //if the password is not between 4 to 60 characters
     const handlePasswordChange = () => {
        const password = passwordRef.current.value;
        if (password.length < 4 || password.length > 60) {
          setPasswordError(true);
          passwordRef.current.style.borderBottom = "2px solid #cc5500";
        } else {
          setPasswordError(false);
          passwordRef.current.style.borderBottom = "1px solid green";
        }
      };

      //email address is not in the correct format 
      const handleEmailChange = () => {
        const email = emailRef.current.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          setEmailError(true);
          emailRef.current.style.borderBottom = '2px solid #cc5500';
        } else {
          setEmailError(false);
          emailRef.current.style.borderBottom = '1px solid green';
        }
      };

    


    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
                console.log(authUser);
        }).catch(error => {
            alert(error.message)
        });

    };

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value  
        ).then((authUser) => {
            console.log(authUser);  }).catch(error => {
                alert(error.message)
            });
    }


    // sign in with google
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
          .then((result) => {
            // The signed-in user info.
            const user = result.user;
            console.log(user);
          })
          .catch((error) => {
            console.log(error);
          });
      };

     

  return (
    <div className='signupScreen'>
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} placeholder='Email or Phone' type='email'
              onChange={handleEmailChange}
              style={{ borderBottom: emailError ? "2px solid #cc5500" : "0px solid white" }}
            />
            {emailError && <p style={{ color: "#cc5500" }}>Invalid Email address</p>}
            <input
              ref={passwordRef}
              placeholder='Password'
              type='password'
              onChange={handlePasswordChange}
              style={{ borderBottom: passwordError ? "2px solid #cc5500" : "0px solid white" }}
            /> 
            {passwordError && <p style={{ color: "#cc5500" }}>Password must be between 4 and 60 characters.</p>}
            <button type='submit' onClick={signIn}>Sign In</button>

            <h5>
            <input type="checkbox" id="rememberMe" /> &nbsp;
                <span className='signupScreen__remember'>Remember Me  </span>
            <span className='signupScreen__help'>Need help?</span></h5>

            <h4> <span className='signupScreen__gray'>New to Netflix? </span>
                 <span className='signupScreen__link' onClick={register}>Sign up now.</span></h4>

               <div  className='signScreen__alt'><h4>OR</h4></div>
<div>
<GoogleButton onClick={handleGoogleSignIn} className='signupScreen__googlebutton' />
</div>

 <div className='signupScreen__details'>
    <h5><span >This page is protected by Google reCAPTCHA to ensure you're not a bot. </span> 
<span className='signScreen__learnmore'>Learn more.</span></h5>
</div>

<div className='signScreen__maina'> 
    <h4 ><a href="https://mainajm.netlify.app/"
        target="_blank"
        rel="noopener noreferrer">Mainajm</a></h4>
</div>

                 
        </form>

    </div>
  )
}

export default SignupScreen;