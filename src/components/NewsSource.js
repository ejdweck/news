import React, { Component } from 'react';
import { Grid, Row, Col, Button, Panel, Image } from 'react-bootstrap';
import './NewsSource.css'
import SearchBar from './SearchBar';
import SourceButton from './SourceButton';

class NewsSource extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      sources: [],
      sourceOptions: [
        "cnn",
        "fox-news",
        "the-wall-street-journal",
        "the-new-york-times",
        "associated-press",
        "bloomberg",
        "bbc-news",
        "cbs-news",
        "msnbc",
        "nbc-news",
        "new-york-magazine",
        "reuters",
        "the-economist",
        "the-guardian-uk",
        "the-huffington-post",
        "the-washington-post",
        "time",
        "usa-today",
        "vice-news", 
      ],
    };
    this.addSelectedSource = this.addSelectedSource.bind(this);
    this.removeSelectedSource = this.removeSelectedSource.bind(this);
  }

  componentDidMount() {
    //this.getNewsArticles('pittsburgh');
  }

  getNewsArticles = (searchInput) => {
    // call news api
    const urlData = {
      country: 'us',
      apiKey: 'c477fa4aa1474688a99cb5392449a6fd',
      sources: this.state.sources,
      pageSize: '100',
      page: '1',
      sortBy: 'publishedAt',
      q: searchInput,
    }
    const headers = {
      Accept: 'application/json',
    }
    fetch(`https://newsapi.org/v2/top-headlines?sources=${encodeURIComponent(urlData.sources)}&q=${encodeURIComponent(urlData.q)}&pageSize=${encodeURIComponent(urlData.pageSize)}&page=${encodeURIComponent(urlData.page)}&publishedAt=${encodeURIComponent(urlData.publishedAt)}&apiKey=${encodeURIComponent(urlData.apiKey)}`, {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      // set state with data
      .then((responseJson) => {
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
        //console.log(JSON.stringify(responseJson))
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
      });
  }

  addSelectedSource = (source) => {
    console.log('ADDING source')
    this.setState({
      sources: this.state.sources.concat([source])
    });
  }
  
  removeSelectedSource = (source) => {
    console.log('REMOVING source')
    let sourcesArray = this.state.sources;
    sourcesArray.splice(sourcesArray.indexOf(source), 1 );
    this.setState({
      sources: sourcesArray
    });
  }

  render() {
    /*
    const cnnArticles = this.state.cnn.map((article) =>
      <Panel className="newsStory" bsStyle="primary" key={article.url}>
        <Panel.Heading>
          <Panel.Title componentClass="h3">{article.title}</Panel.Title>
        </Panel.Heading>
        <Row>
          <br />
          <Image className="images" src={article.urlToImage} rounded />
          <Panel.Body>{article.description}</Panel.Body>
        </Row>
      </Panel>
    );
    const foxArticles = this.state.fox.map((article) =>
      <Panel className="newsStory" bsStyle="danger" key={article.url}>
        <Panel.Heading>
          <Panel.Title componentClass="h3">{article.title}</Panel.Title>
        </Panel.Heading>
        <Row>
          <br />
          <Image className="images" src={article.urlToImage} rounded />
          <Panel.Body>{article.description}</Panel.Body>
        </Row>
      </Panel>
    );
    const nytimesArticles = this.state.nytimes.map((article) =>
      <Panel className="newsStory" bsStyle="info" key={article.url}>
        <Panel.Heading>
          <Panel.Title componentClass="h3">{article.title}</Panel.Title>
        </Panel.Heading>
        <Row>
          <br />
          <Image className="images" src={article.urlToImage} rounded />
          <Panel.Body>{article.description}</Panel.Body>
        </Row>
      </Panel>
    );
    const wsjArticles = this.state.wsj.map((article) =>
      <Panel className="newsStory" bsStyle="warning" key={article.url}>
        <Panel.Heading>
          <Panel.Title componentClass="h3">{article.title}</Panel.Title>
        </Panel.Heading>
        <Row>
          <br />
          <Image className="images" src={article.urlToImage} rounded />
          <Panel.Body>{article.description}</Panel.Body>
        </Row>
      </Panel>
    ); */
    const sourceButtons = this.state.sourceOptions.map((source) => 
      <SourceButton 
        key={source}
        sourceName={source}
        addSelectedSource={this.addSelectedSource}
        removeSelectedSource={this.removeSelectedSource}
      />
    );
    let i;
    let arrOfCols = [];
    console.log(this.state.articles.length)
    for (i = 0; i < this.state.articles.length; i++) {
      const articleColumn = this.state.articles[i].content.map((article) =>
        <Panel className="newsStory" bsStyle="warning" key={article.url}>
          <Panel.Heading>
            <Panel.Title componentClass="h3">{article.title}</Panel.Title>
          </Panel.Heading>
          <Row>
            <br />
            <Image className="images" src={article.urlToImage} rounded />
            <Panel.Body>{article.description}</Panel.Body>
          </Row>
        </Panel>
      );
      const wCol = <Col md={3}>{articleColumn}</Col>
      arrOfCols.push(wCol);
    }
    console.log(arrOfCols);

    return (
      <div >
        <SearchBar getNewsArticles={this.getNewsArticles}/>
        {sourceButtons}
        <Grid className="container">
          <Row>
            {arrOfCols}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default NewsSource;
