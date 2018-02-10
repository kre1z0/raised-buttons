import React, { Component } from 'react';

import Button from '../components/button';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Button>default</Button>
        <Button primary>primary</Button>
        <Button secondary>secondary</Button>
        <Button disabled>disabled</Button>
        <Button>Very looooooooooooooooooooooooooong</Button>
      </div>
    );
  }
}

export default App;
