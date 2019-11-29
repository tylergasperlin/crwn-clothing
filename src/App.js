import React from 'react';
import './App.css';
import HomePage from './components/homepage/homepage-component'
import {Route, Switch} from 'react-router-dom'

const HatsPage = () =>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/hats" component={HatsPage}></Route>
      </Switch>
    </div>

 
  );
}

export default App;
