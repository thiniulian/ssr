import React from "react";
import './Basket.css';

export default class Basket extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "This is the basket!",
    };
  }

  render() {
    return (
      <div id="basket">
        Basket: x item(s)
      </div>
    );
  }
}