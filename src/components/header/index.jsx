import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon";
import CartDropDown from "../cart-dropdown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";
// import "./header.styles.scss";
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'


const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer >
      <LogoContainer to="/" >
        <Logo />
      </LogoContainer>
      <OptionsContainer >
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
        <OptionLink to="/contact" >
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropDown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
