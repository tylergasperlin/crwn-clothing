import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage-component'
import {Route, Switch} from 'react-router-dom'
import ShopPage from './pages/shop/shop-component'
import Header from './components/header/header-component'
import SignInSignOutPqge from './pages/signin-signout/signin-singout-component'


function App() {
  return (
    <div>
      <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/signin" component={SignInSignOutPqge}></Route>

        </Switch>
    </div>

 
  );
}

export default App;
