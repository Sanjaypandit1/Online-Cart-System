import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className='row fixed-bottom'>
        <button
          className='btn btn-danger col-2'
          onClick={this.props.onReset} // Handle Reset button click
        >
          Reset
        </button>

        <div className='col-8 bg-light d-flex justify-content-center align-items-center' style={{ height: '100%' }}>
          <h1>{this.props.totalAmount}</h1>
        </div>

        <button
          className='btn btn-primary col-2'
          onClick={this.props.onPayNow} // Handle Pay Now button click
        >
          Pay Now
        </button>
      </div>
    );
  }
}
