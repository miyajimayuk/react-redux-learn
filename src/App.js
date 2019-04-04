import React, { Component } from 'react';

class App extends Component {
  render() {
    const { greet } = this.props;
    return (
      <div>
        <p>{greet} World!!!</p>
      </div>
    );
  }
}

export default App;
