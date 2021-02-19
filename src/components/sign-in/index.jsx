import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input";
import CustomButton from "../custom-button";

// import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";
import "./sign-in.styles.scss";

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [useCredentials, setUseCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = useCredentials
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUseCredentials({ ...useCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have a account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);

// import React, { Component } from "react";
// import { connect } from 'react-redux'
// import FormInput from '../form-input'
// import CustomButton from '../custom-button'

// // import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
// import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'
// import './sign-in.styles.scss'


// class SignIn extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "",
//       password: "",
//     };  
//   }

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     const { emailSignInStart } = this.props
//     const { email, password } = this.state;
//     emailSignInStart(email, password)
//   };

//   handleChange = (e) => {
//     const { value, name } = e.target
//     this.setState({[name]: value})
//   };

//   render() {
//     const { googleSignInStart } = this.props
//     return (
//       <div className="sign-in">
//         <h2>I already have a account</h2>
//         <span>Sign in with your email and password</span>

//         <form onSubmit={this.handleSubmit}>
//           <FormInput
//             type="email"
//             name="email"
//             value={this.state.email}
//             handleChange={this.handleChange}
//             label="email"
//             required
//           />

//           <FormInput
//             type="password"
//             name="password"
//             value={this.state.password}
//             handleChange={this.handleChange}
//             label="password"
//             required
//           />
//           <div className="buttons">
//             <CustomButton type="submit">Sign In</CustomButton>
//             <CustomButton
//               type="button"
//               onClick={googleSignInStart}
//               isGoogleSignIn
//             >
//               Sign In With Google
//             </CustomButton>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   googleSignInStart: () => dispatch(googleSignInStart()),
//   emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
// })

// export default connect(null, mapDispatchToProps)(SignIn)