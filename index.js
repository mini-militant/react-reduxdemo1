import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import ReduxDemo from "./ReduxDemo" 


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <ReduxDemo/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
