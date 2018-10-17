import './Products.css';
import React from 'react';

export default class Products extends React.Component {
  constructor() {
    super();

    this.state = {
      spaceshipParts: []
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined' && typeof fetch !== 'undefined') {
      fetch(`${process.env.API_URL}/spaceship-parts`)
        .then(response => response.json())
        .then((spaceshipParts) => {
          this.setState({
            spaceshipParts
          });
        });
    }
  }

  render() {
    const { spaceshipParts } = this.state;
    return (
      <div>
        <h1>Products</h1>
        {
          spaceshipParts.map(part => (
            <img
              className="product-img"
              src={part.url}
              alt={part.type}
              key={part.type}
            />
          ))
        }
      </div>
    );
  }
}
