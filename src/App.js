import React, { Component } from 'react';
import './App.css';
import { Jumbotron, Button } from 'react-bootstrap';
import NewsGrid from './components/NewsGrid'
import io from 'socket.io-client';

import  wrangleNewsAPIResponse from './helpers/dataWrangling'
let socket = null;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    }
  }
 
  componentDidMount() {
    // connect to web socket
    socket = io('localhost:8080');
    socket.on('connect', (data) => {
      console.log('connected to server', socket);
    });
  }

  sendArticleQueryToServer = (sources, query) => {
    let data = {
      sources: sources,
      query: query,
    }
    // TODO is socket gauranteed to be null if connect fails?
    if(socket == null) {
      //console.log('error: the socket is not connected');
      return;
    }
    //console.log('emiting to server')
    // send query to server for processing
    socket.emit('query-news-api', {content: data});
    // set interval to poll server for query updates
    let interval = setInterval(() => {
      socket.emit('query-update', {});
    }, 500);
    // when server responds with query finished, stop the polling,
    // and parse the response data and store in state
    socket.on('query-finished', (data) => {
      console.log('query finished! ', data)
      clearInterval(interval);
      this.parseNewsArticles(data);
    });

  }
  
  parseNewsArticles = (data) => {
    let articles = wrangleNewsAPIResponse(data);
    //console.log(articles)
    this.setState({
      articles: articles
    }, ()=> console.log(this.state))
  }

  render() {
    return (
      <div className="App">
        <Jumbotron className="jumbotron">
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
        <NewsGrid 
          sendArticleQueryToServer={this.sendArticleQueryToServer}
          articles={this.state.articles}
          />
      </div>
    );
  }
}

export default App;
