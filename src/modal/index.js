import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
export class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.getElementById('modal-root');
  }
  close = () => {
    console.log(this);
    if (this.props) {
      this.props.onClose(null);
    }
  };
  render() {
    // debugger;
    if (!this.props.show) {
      return null;
    }
    return ReactDOM.createPortal(
      <div>
        <div className="modal is-active">
          <div className="modal-background" onClick={this.close} />
          <div className="modal-card ">
            <section className="modal-card-body modal-wrapper">{this.props.children}</section>
          </div>
        </div>
      </div>,
      this.el
    );
  }
}
