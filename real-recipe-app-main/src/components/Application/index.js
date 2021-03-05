/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
//import { BrowserRouter as Router,Route } from 'react-router-dom';
import {Router} from "@reach/router";
import ProfilePage from "../Profile";

//import Navigation from '../Navigation';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import PasswordReset from '../PassForget';
import axios from 'axios';
//import ShopList from '../ShopList';

//import * as ROUTES from '../../constants/routes';

function Application() {
  const user = null;
  axios.get('http://localhost:8080/').then(res=> alert(res.data.mytext)).catch(err=>console.log(err));
  return (
        user ?
        <ProfilePage />
      :
        <Router>
          <SignUp path="signUp" />
          <SignIn path="/" />
          <PasswordReset path = "passwordReset" />
        </Router>

  );
}

/*const App=()=>(
    <Router>
        <div>
       <Navigation/>
       
        <hr/>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />      
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route path={ROUTES.Navbar} component={Navbar}/>
      <Route path={ROUTES.ShopList} component={ShopList}/>

    </div>
    </Router>
);*/

export default Application;