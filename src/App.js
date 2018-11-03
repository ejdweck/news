import React, { Component } from 'react';
import './App.css';
import { Jumbotron, Button } from 'react-bootstrap';
import NewsGrid from './components/NewsGrid'
import io from 'socket.io-client';

let socket;

class App extends Component {
  constructor(props) {
    super(props);

    this.sendArticleQueryToServer = this.sendArticleQueryToServer.bind(this);
  }
 
  sendArticleQueryToServer = (sources, query) => {
    let data = {
      sources: sources,
      query: query,
    }
    console.log('emiting to server')
    socket.emit('query-news-api', {data: data});
  }

  componentDidMount() {
    // connect to web socket
    socket = io('localhost:8080');
    socket.on('connect', function(){
      console.log('connected to server', socket);
    })
  }

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
        <NewsGrid sendArticleQueryToServer={this.sendArticleQueryToServer}/>
      </div>
    );
  }
}

export default App;
