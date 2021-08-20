import React, { Component } from 'react';

export class CC extends Component {
  constructor() {
    super();
    this.state = { total: 1 };
    console.log('constructor');
    //1
  }

  componentDidMount() {
    const newTotal = +localStorage.getItem('total');
    this.setState({ total: newTotal });
    console.log('componentDidMount');
    //3
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(
      'componentDidUpdate',
      'prevProps=',
      prevProps,
      'prevState=',
      prevState
    );
    //3
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    //3
  }

  render() {
    console.log('render');
    //2

    return (
      <div>
        <h1
          onClick={() => {
            this.setState({ total: this.state.total + 1 });
          }}
        >
          {this.state.total}
        </h1>
      </div>
    );
  }
}

export default CC;
