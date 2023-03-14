import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { loggin, loggout, selectUser } from './features/userSlice';
import Contactus from './Footercomponents/Contactus';
import NotFound from './screens/NotFound';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        //logged in
       
        dispatch(loggin ({
          uid: userAuth.uid,
          email: userAuth.email,
        })
        );
      } else {
        //logged out
        dispatch(loggout());
      }
    });

      return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ): (
          <Routes>
            <Route path="/profile"
              element={<ProfileScreen />}/>
          
          <Route exact path="/"
            element={<HomeScreen />}/>

<Route path="/404"
          element={<NotFound />} />

         <Route path="*"
          element={<NotFound />} />
          
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
