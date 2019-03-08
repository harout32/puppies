import React, { Component } from 'react';

import Typed from 'typed.js';

import './index.scss';
export class LandingPage extends Component {
  componentDidMount() {
    console.log(this.titleRef);
    var typed = new Typed(this.titleRef, {
      strings: [
        '<b>Save</b> them.',
        '<b>Help</b> them.',
        '<b>They</b> need your help!.'
      ],
      typeSpeed: 100,
      backSpeed: 60,
      backDelay: 700,
      smartBackspace: true,
      loop: true,
    });
  }
  render() {
    return (
        <section className="hero is-large is-info is-fullheight background-hero">
          <div className="hero-head" />

          <div className="hero-body">
            <div className="container has-text-centered">
              <p className="title">
                <span ref={ref => (this.titleRef = ref)} />
              </p>
              <p className="subtitle">Because <b> You </b> can !</p>
            </div>
          </div>

          <div className="hero-foot">
            <nav className="tabs is-boxed is-fullwidth">
              <div className="container">
                <ul>
                  
                </ul>
              </div>
            </nav>
          </div>
        </section>
        
    );
  }
}
