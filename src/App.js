import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homePage'
import ShopPage from './pages/shop';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
   );
}

export default App;


// installed
// npm i
// npm i node-sass

// had a problem with SASS found a fix
// npm uninstall node-sass
// npm install node-sass@4.14.1

// to remove through terminal
// rm -rf yarn.lock

// update dependencies 
// npm update -D
// the n next command to fix the updates
// npm audit fix 
