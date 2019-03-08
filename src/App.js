import React, { Component } from 'react';
import './App.scss';
import { AppRouter } from './router';

import { NavBarComponent } from './components/nav-bar';
import { Footer } from './components/footer';
class App extends Component {

  render() {
    return (
      <>
      <NavBarComponent></NavBarComponent>
      <AppRouter></AppRouter>
      <Footer></Footer>
      </>
    );
  }
}

export default App;
