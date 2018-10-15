import React from 'react';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Welcome to React SSR!'
    };
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}
