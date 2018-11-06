import React, { Component } from 'react';
import './App.css';
import { Jumbotron, Button } from 'react-bootstrap';
import NewsGrid from './components/NewsGrid'
import io from 'socket.io-client';

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
    })
  }

  sendArticleQueryToServer = (sources, query) => {
    let data = {
      sources: sources,
      query: query,
    }
    if(socket == null) {
      return;
    }
    console.log('emiting to server')
    socket.emit('query-news-api', {content: data});
    let interval = setInterval(() => {
      socket.emit('query-update', {});
    }, 1000);
    socket.on('query-finished', (data) => {
      console.log('query finished! ', data)
      clearInterval(interval);
      this.parseNewsArticles(data);
    })
  }

  parseNewsArticles = (response) => {
    let responseJson = JSON.parse(response);
    let cnnArticles = [];
    let foxArticles = [];
    let wsjArticles = [];
    let nytimesArticles = [];
    let apArticles = [];
    let bloombergArticles = [];
    let bbcArticles = [];
    let cbsArticles = [];
    let msnbcArticles = [];
    let nbcArticles = [];
    let nymagazineArticles = [];
    let reutersArticles = [];
    let economistArticles = [];
    let huffingtonpostArticles = [];
    let washingtonpostArticles = [];
    let timeArticles = [];
    let usatodayArticles = [];
    let vicenewsArticles = [];
    let i;
    let articles = [];
    for (i = 0; i < responseJson.articles.length; i++) {
      console.log(responseJson.articles[i].source.id)
      if (responseJson.articles[i].source.id === 'cnn') {
        cnnArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'fox-news') {
        foxArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'the-wall-street-journal') {
        wsjArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'the-new-york-times') {
        nytimesArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'associated-press') {
        apArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'bloomberg') {
        bloombergArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'bbc-news') {
        bbcArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'cbs-news') {
        cbsArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'msnbc') {
        msnbcArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'nbc-news') {
        nbcArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'new-york-magazine') {
        nymagazineArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'reuters') {
        reutersArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'the-economist') {
        economistArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'the-huffington-post') {
        huffingtonpostArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'the-washington-post') {
        washingtonpostArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'time') {
        timeArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'usa-today') {
        usatodayArticles.push(responseJson.articles[i]);
      } else if (responseJson.articles[i].source.id === 'vice-news') {
        vicenewsArticles.push(responseJson.articles[i]);
      }
    }
    console.log(cnnArticles.length);
    if (cnnArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: cnnArticles
      };
      articles.push(articlesObj);
    }
    if (foxArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: foxArticles
      };
      articles.push(articlesObj);
    }
    if (wsjArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: wsjArticles
      };
      articles.push(articlesObj);
    }
    if (nytimesArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: nytimesArticles
      };
      articles.push(articlesObj);
    }
    if (apArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: apArticles
      };
      articles.push(articlesObj);
    }
    if (bloombergArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: bloombergArticles
      };
      articles.push(articlesObj);
    }
    if (bbcArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: bbcArticles
      };
      articles.push(articlesObj);
    }
    if (cbsArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: cbsArticles
      };
      articles.push(articlesObj);
    }
    if (msnbcArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: msnbcArticles
      };
      articles.push(articlesObj);
    }
    if (nbcArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: nbcArticles
      };
      articles.push(articlesObj);
    }
    if (nymagazineArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: nymagazineArticles
      };
      articles.push(articlesObj);
    }
    if (reutersArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: reutersArticles
      };
      articles.push(articlesObj);
    }
    if (economistArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: economistArticles
      };
      articles.push(articlesObj);
    }
    if (huffingtonpostArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: huffingtonpostArticles
      };
      articles.push(articlesObj);
    }
    if (washingtonpostArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: washingtonpostArticles
      };
      articles.push(articlesObj);
    }
    if (timeArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: timeArticles
      };
      articles.push(articlesObj);
    }
    if (usatodayArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: usatodayArticles
      };
      articles.push(articlesObj);
    }
    if (vicenewsArticles.length > 0) {
      let articlesObj = {
        source: '',
        content: vicenewsArticles
      };
      articles.push(articlesObj);
    }
    console.log('articlessss')
    console.log(articles)
    this.setState({
      articles: articles
    }, ()=> console.log(this.state))
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
        <NewsGrid 
          sendArticleQueryToServer={this.sendArticleQueryToServer}
          articles={this.state.articles}
          />
      </div>
    );
  }
}

export default App;
