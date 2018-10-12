import React, { Component } from 'react';
import { Grid, Row, Col, Button, Panel, Image } from 'react-bootstrap';

class NewsSource extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      fox: [],
      cnn: [],
    };
  }

  componentDidMount() {
    // call news api
    const urlData = {
      country: 'us',
      apiKey: 'c477fa4aa1474688a99cb5392449a6fd',
      sources: 'fox-news, cnn'
    }
    const headers = {
      Accept: 'application/json',
    }
    fetch(`https://newsapi.org/v2/top-headlines?sources=${encodeURIComponent(urlData.sources)}&apiKey=${encodeURIComponent(urlData.apiKey)}`, {
      method: "GET",
      headers: headers,   
    })
      .then((response) => response.json())
      // set state with data
      .then((responseJson) => {
        let i;
        let foxArticles = [];
        let cnnArticles = [];
        console.log(responseJson)
        for (i = 0; i < responseJson.articles.length; i++) {
          if (responseJson.articles[i].source.id === 'fox-news') {
            console.log(responseJson.articles[i].source.id);
            foxArticles.push(responseJson.articles[i]);
          } else if (responseJson.articles[i].source.id === 'cnn') {
            console.log(responseJson.articles[i].source.id);
            cnnArticles.push(responseJson.articles[i]);
          }
        }
        this.setState({
          fox: foxArticles,
          cnn: cnnArticles,
        })
      }); 
  }

  render() {
    const cnnArticles = this.state.cnn.map((article) => 
      <Panel bsStyle="info" key={article.title}>
        <Panel.Heading>
          <Panel.Title componentClass="h3">{article.title}</Panel.Title>
        </Panel.Heading>
        <Grid>
          <Col md={3}>
            <Image src={article.urlToImage} rounded />
          </Col>
          <Col md={3}>
            <Panel.Body>{article.description}</Panel.Body>
          </Col>
        </Grid>
      </Panel>
    );
    const foxArticles = this.state.fox.map((article) =>
        <Panel bsStyle="warning" key={article.title}>
          <Panel.Heading>
            <Panel.Title componentClass="h3">{article.title}</Panel.Title>
          </Panel.Heading>
          <Panel.Body>{article.description}</Panel.Body>
        </Panel>
    );
    return (
      <div className="Grid">
        <Grid>
          <Row className="show-grid">
            <Col md={6}>
              {cnnArticles}
            </Col>
            <Col md={6}>
              {foxArticles}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default NewsSource;
