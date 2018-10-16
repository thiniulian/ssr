import './Checkout.css';
import React from 'react';

export default class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Checkout',
      url: `${process.env.PUBLIC_PATH}:${process.env.PORT}/assets/tractor-blue.jpg`
    };
  }

  render() {
    const { title, url } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <img
          className="checkout-img"
          src={url}
          alt={title}
        />
      </div>
    );
  }
}
