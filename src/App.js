import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignOutPage from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/shop' component={ ShopPage } />
        <Route path='/signIn' component={ SignInAndSignOutPage } />
      </Switch>
    </>
  );
}

export default App;
