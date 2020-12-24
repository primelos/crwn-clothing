import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import HomePage from './pages/homePage'
import ShopPage from './pages/shop';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up";
import Header from './components/header'
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";


class App extends Component{
  constructor(){
    super()

    this.state = {
      currentUser: null

    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
     if(userAuth) {
       const userRef = await createUserProfileDocument(userAuth)

       userRef.onSnapshot(snapShot => {
         this.setState({
           currentUser: {
             id: snapShot.id,
             ...snapShot.data()
           }
         })
        })
        
     }
     this.setState({ currentUser: userAuth})
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }


  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );

  }
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
