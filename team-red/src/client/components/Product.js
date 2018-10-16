import React from 'react';

export class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [{
        name: 'Porsche-Diesel Master 419',
        image: 'tractor-blue.jpg',
        thumbnail: 'tractor-blue-thumb.jpg'
      }, {
        name: 'Fendt F20 Dieselroß',
        image: 'tractor-green.jpg',
        thumbnail: 'tractor-green-thumb.jpg'
      }, {
        name: 'Eicher Diesel 215/16',
        image: 'tractor-red.jpg',
        thumbnail: 'tractor-red-thumb.jpg'
      }]
    };
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        {
          products.map(product => (
            <img
              src={`${process.env.PUBLIC_PATH}:${process.env.PORT}/${product.image}`}
              alt={product.name}
              key={product.name}
            />
          ))
        }
      </div>
    );
  }
}
