import { Component } from 'react';

class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };

    console.log('MyClassComponent constructor');
  }

  render() {
    return <div>MyClassComponent</div>;
  }
}

export default MyClassComponent;
