import './Basket.css';
import React from 'react';

export default class Basket extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'This is the basket!'
    };
  }

  render() {
    const { title } = this.state;
    return (
      <div id="basket">
        Basket: x item(s)
        {title}
      </div>
    );
  }
}
