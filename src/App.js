import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'


import './App.css';

import HomePage from './pages/homePage'
import ShopPage from './pages/shop';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up";
import Header from './components/header'
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from './redux/user/user.actions'

class App extends Component{

  unsubscribeFromAuth = null


  componentDidMount(){
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
     if(userAuth) {
       const userRef = await createUserProfileDocument(userAuth)

       userRef.onSnapshot(snapShot => {
         
           setCurrentUser({
             id: snapShot.id,
             ...snapShot.data()
           })
         
        })
        
     }
     setCurrentUser({ currentUser: userAuth });
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }


  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );

  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(null, mapDispatchToProps)(App);


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

// npm i redux redux-logger react-redux