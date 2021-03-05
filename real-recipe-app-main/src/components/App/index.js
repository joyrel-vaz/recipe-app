/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
//import 'bootstap/dist/css/bootstrap.min.css';
//import Navigation from '../Navigation';

import Application from '../Application';
import ShopList from '../ShopList';
import SignUp from '../SignUp';
//import Sidebar from '../Sidebar';

import * as ROUTES from '../../constants/routes';
import UserProvider from '../../providers/userprovider';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from '../Navbar';


/*function App() {
  const user = null;
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
}*/

const App=()=>(
    <Router>
      <NavigationBar/>
        <div>
            <UserProvider><Application/></UserProvider>
      
      <Route path={ROUTES.ShopList} component={ShopList}/>
      <Switch>
  <Route exact path={ROUTES.SignUp} component={SignUp} />
  
</Switch>
    </div>
    </Router>
);

export default App;