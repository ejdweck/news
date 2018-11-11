import React, { Component } from 'react';
import { Grid, Row, Col, Image, Well, Button } from 'react-bootstrap';
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
      sourceLogo: {
        "cnn": "cnn.com",
        "fox-news": 'foxnews.com',
        "the-wall-street-journal": "wsj.com",
        "the-new-york-times": "nytimes.com",
        "associated-press":  "ap.org",
        "bloomberg": "bloomberg.com",
        "bbc-news": "bbc.com",
        "cbs-news": "cbsnews.com",
        "msnbc": "msnbc.com",
        "nbc-news": "nbcnews.com",
        "new-york-magazine": "nymag.com",
        "reuters": "reuters.com",
        "the-economist": "economist.com",
        "the-guardian-uk": "theguardian.com",
        "the-huffington-post": "huffingtonpost.com",
        "the-washington-post": "washingtonpost.com",
        "time": "time.com",
        "usa-today": "usatoday.com",
        "vice-news": "news.vice.com",
      }
    };
    this.addSelectedSource = this.addSelectedSource.bind(this);
    this.removeSelectedSource = this.removeSelectedSource.bind(this);
  }

  // was mutating state - now using previous state to ensure
  // everything is okay.
  incrementSource(source) {
    console.log(source);
    return (previousState, currentProps) => {
        console.log(previousState)
        let newSources = previousState.sources.concat([source]);
        return { ...previousState, sources: newSources};
    };
  }

  addSelectedSource = (source) => {
    this.setState(this.incrementSource(source));
  }
  
  removeSelectedSource = (source) => {
    //console.log('REMOVING source')
    let sourcesArray = this.state.sources;
    sourcesArray.splice(sourcesArray.indexOf(source), 1 );
    this.setState({
      sources: sourcesArray
    });
  }
  
  sentimentScoreClassname = (score) => {
    score = parseFloat(score);
    //console.log("SERCOREEEEE, ", score);
    //console.log(typeof score)
    let floatZero = parseFloat(0);

    if (score > floatZero) {
      //console.log('success');
      return "success";
    } else if (score === floatZero) {
      //console.log('warning');
      return "warning";
    } else {
      //console.log('danger');
      return "danger";
    }
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
    //console.log(this.props.articles.length)

    let coverageName = {
      'danger': 'Negative Language',
      'warning': 'Neutral Language',
      'success': 'Positive Language'
    }
    // dynamically render all the columns of articles for selected sources
    for (i = 0; i < this.props.articles.length; i++) {
      // get article logo based on source
      let sourceLogo = this.state.sourceLogo[this.props.articles[i].content[0].source.id];
      let sourceSrc = "//logo.clearbit.com/" + sourceLogo + "?size=30";
      const articleColumn = this.props.articles[i].content.map((article) =>
        <div>
          <Well className="article">
            <Row>
              <Col md={10}>
                <h3 className="article-headline">{article.title}</h3>
                <Button 
                  bsStyle={this.sentimentScoreClassname(article.score.comparative)}
                  onClick={()=>alert('clickeddd')}
                  >
                  {coverageName[this.sentimentScoreClassname(article.score.comparative)]}
                </Button>
              </Col>
              <Col md={2}>
                <Image src={`${sourceSrc}`} rounded />
                
              </Col>
            </Row>
            <hr />
            <div className="wrapper">
              <Image className="images" src={article.urlToImage} rounded />
              <p>{article.description}</p>
            </div>
            <hr />
            <p>{article.url}</p>
          </Well>
        </div>
      );
      const wCol = <Col md={colWidth}><h1>{this.props.articles[i].content[0].source.name} </h1> {articleColumn}</Col>
      arrOfCols.push(wCol);
    }
    //console.log(arrOfCols);

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
