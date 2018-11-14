import React, { Component } from 'react';
import { Well, Button, Image, Row, Col } from 'react-bootstrap';
import './Article.css';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
    let coverageName = {
      'danger': 'Negative Language',
      'warning': 'Neutral Language',
      'success': 'Positive Language'
    }
    return (
      <div className="article-container">
        <Well className="article">
          <Row>
            <Col md={10}>
              <h3 className="article-headline">{this.props.title}</h3>
              <Button 
                className="coverage-button"
                bsStyle={this.sentimentScoreClassname(this.props.score.comparative)}
                onClick={()=>alert('clickeddd')}
                >
                {coverageName[this.sentimentScoreClassname(this.props.score.comparative)]}
              </Button>
            </Col>
            <Col md={2}>
              <Image src={`${this.props.sourceSrc}`} rounded />
            </Col>
          </Row>
          <hr />
          <div className="wrapper">
            <Image className="images" src={this.props.urlToImage} rounded />
            <p className="article-description">{this.props.description}</p>
          </div>
          <hr />
          <a href={this.props.url}>Read full article</a>
        </Well>
      </div>
    );
  }
}

export default Article;
