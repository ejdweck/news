import React, { Component } from 'react';
import { Grid, Row, Col, Panel, Image } from 'react-bootstrap';
import './NewsGrid.css'
import SearchBar from './SearchBar';
import SourceButton from './SourceButton';

class NewsGrid extends Component {

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
    // set interval to poll server 
  }

  addSelectedSource = (source) => {
    //console.log('ADDING source')
    this.setState({
      sources: this.state.sources.concat([source])
    });
  }
  
  removeSelectedSource = (source) => {
    //console.log('REMOVING source')
    let sourcesArray = this.state.sources;
    sourcesArray.splice(sourcesArray.indexOf(source), 1 );
    this.setState({
      sources: sourcesArray
    });
  }

  render() {
    // render buttons for users to select sources 
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
    let colWidth = 12/this.props.articles.length;
    console.log(this.props.articles.length)
    // dynamically render all the columns of articles for selected sources
    for (i = 0; i < this.props.articles.length; i++) {
      const articleColumn = this.props.articles[i].content.map((article) =>
        <Panel className={article.source.id} bsStyle="warning" key={article.url}>
          <Panel.Title componentClass="h3">{article.title}</Panel.Title>
          <p>{article.score.comparative}</p>
          < hr/>
          <div className="wrapper">
            <Image className="images" src={article.urlToImage} rounded />
            <Panel.Body >{article.description}</Panel.Body>
          </div>
        </Panel>
      );
      const wCol = <Col md={colWidth}>{articleColumn}</Col>
      arrOfCols.push(wCol);
    }
    console.log(arrOfCols);

    return (
      <div >
        <SearchBar 
          getNewsArticles={this.getNewsArticles}
          sendArticleQueryToServer={this.props.sendArticleQueryToServer}
          sources={this.state.sources}
          />
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

export default NewsGrid;
