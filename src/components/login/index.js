import React, { Component, Fragment } from 'react';
import * as firebase from 'firebase';
import { googleAuthProvider, facebookAuthProvider } from '../../firebase';

import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import './index.scss';
export class LoginComponent extends Component {
  googleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(res => {
        this.props.onClose({
          email: res.user.email,
          name: res.user.displayName
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  facebookLogin = () => {
    firebase
      .auth()
      .signInWithPopup(facebookAuthProvider)
      .then(res => {
        this.props.onClose({
          email: res.user.email,
          name: res.user.displayName
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Fragment>
        <div className="login-wrapper">
          <div className="header">
            <div className="title has-text-centered ">Login</div>
            <p className="login-logo">
              <Logo />
            </p>
          </div>
          <div className="buttons is-centered login-buttons">
            <button className="button is-danger is-outlined" onClick={this.googleLogin}>
              Login with Google
            </button>
            <button className="button is-link is-outlined" onClick={this.facebookLogin}>
              Login with Facebook
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}
