import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Jumbotron, Button } from 'react-bootstrap';
import NewsSource from './components/NewsSource'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <h1>Just a Bite</h1>
          <p>
            News bites from different sites
          </p>
          <p>
            See the difference in media coverage across the different sources in real time
          </p>
          <p>
            <Button bsStyle="primary">mission</Button>
          </p>
        </Jumbotron>
        <NewsSource />
      </div>
    );
  }
}

export default App;
