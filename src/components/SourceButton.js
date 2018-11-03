import React, { Component } from 'react';
import { Button, Image } from 'react-bootstrap';
import './SourceButton.css';

class SourceButton extends Component {
    constructor(props) {
    super(props);
    this.state = {
      toggled: false,
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
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
	handleClick = (source) => {
    if (this.state.toggled === false) {
      this.props.addSelectedSource(source);
    } else if (this.state.toggled === true) {
      this.props.removeSelectedSource(source);
    }
    this.setState(prevState => ({
      toggled: !prevState.toggled
    }));
	}
  render() {
    let sourceName = this.props.sourceName;
    let sourceLogo = this.state.sourceLogo[sourceName];
    let sourceSrc = "//logo.clearbit.com/" + sourceLogo + '?size=40';
    return (
      <Button className="source-button" active={this.state.toggled} onClick={()=>this.handleClick(this.props.sourceName)}>
        <Image src={`${sourceSrc}`} rounded />
      </Button>
    );
  }
}

export default SourceButton;
