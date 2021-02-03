import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect'
import "./App.css";

import HomePage from "./pages/homePage";
import ShopPage from "./pages/shop";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up";
import CheckoutPage from "./pages/checkout";

import Header from "./components/header";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from './redux/user/user.selectors'

// LOOK AT LESSON 174 TO ADD DATA TO FIRESTORE ***

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      // console.log(userAuth);
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/"         component={HomePage}     />
          <Route       path="/shop"     component={ShopPage}     />
          <Route exact path="/checkout" component={CheckoutPage} />

          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
            }
          />
          {/* <Route exact path="/signin" component={SignInAndSignUpPage} /> */}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

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

// npm i redux redux-logger react-redux  -> manage state
// npm i reselect    for memoization
// npm i redux-persist    for saving state to local storage 
// npm install lodash.memoize     used to add memoizing to selectCollection and collectionUrlParam
// npm i react-stripe-checkout
// heroku login
// heroku create crwn-cfv-clothing --buildpack https://github.com/mars/create-react-app-buildpack.git
// git push heroku master
// npm i redux-thunk -> allows us to handle asynchronous event handling and firing multiple actions -> middleware that allows us to fire functions