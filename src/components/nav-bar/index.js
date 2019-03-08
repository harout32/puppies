import React, { Component, Fragment } from 'react';
import './index.scss';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

import { connect } from 'react-redux';


import { Modal } from '../../modal';
import { LoginComponent } from '../login';

import { authLogin } from '../../actions';

class NavBar extends Component {
  state = {
    showModal: false
  };
  closeModal = (data) => {
    this.setState({ showModal: false });
    if(data) {
      this.props.authLogin(data);
    }
  };
  openModal = () => {
    this.setState({ showModal: true });
  };
  render() {
    return (
      <Fragment>
        <nav className="navbar nav-bar ">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
              <div className="logo">
              <Logo></Logo>
              </div>
              </a>
              <span
                className="navbar-burger burger"
                data-target="navbarMenuHeroB"
              >
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenuHeroB" className="navbar-menu">
              <div className="navbar-end">

                <span className="navbar-item">
                  <button
                    className="button  is-white is-outlined"
                    onClick={this.openModal}
                  >
                    <span>Sign In</span>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </nav>
        <Modal show={this.state.showModal} onClose={this.closeModal}>
        <LoginComponent onClose={this.closeModal}></LoginComponent>
        </Modal>
      </Fragment>
    );
  }
}

export const NavBarComponent = connect(()=> ({}),{authLogin})(NavBar);