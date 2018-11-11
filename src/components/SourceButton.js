import React, { Component } from 'react';
import { Button, Image } from 'react-bootstrap';
import './SourceButton.css';

class SourceButton extends Component {
    constructor(props) {
    super(props);
    this.state = {
      //toggled: false,
      toggled: {
        "cnn": false,
        "fox-news": false,
        "the-wall-street-journal": false,
        "the-new-york-times": false,
        "associated-press": false,
        "bloomberg": false,
        "bbc-news": false,
        "cbs-news": false,
        "msnbc": false,
        "nbc-news": false,
        "new-york-magazine": false,
        "reuters": false,
        "the-economist": false,
        "the-guardian-uk": false,
        "the-huffington-post": false,
        "the-washington-post": false,
        "time": false,
        "usa-today": false,
        "vice-news": false,
      },
      sourceLogo: {
        "cnn": "cnn.com",
        "fox-news": 'foxnews.com',
        "the-wall-street-journal": "wsj.com",
        "the-new-york-times": "nytimes.com",
        "associated-press":  "ap.org",
        "bloomberg": "bloomberg.com",
        "bbc-news": "bbcnews.com",
        "cbs-news": "cbsnews.com",
        "msnbc": "msnbc.com",
        "nbc-news": "nbcnews.com",
        "new-york-magazine": "nymag.com",
        "reuters": "reutersnews.com",
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

  componentDidMount() {
    let source = this.props.sourceName;
    //console.log('componenting mounting', source)
    // when component renders, hack to grab 4 sources and add them
    // to sources list by simulating a real click.
    if (source === "cnn") {
      this.handleClick(source);
    } 
    else if (source === "fox-news" ) {
      this.handleClick(source);
    }
    else if (source === "the-new-york-times") {
      this.handleClick(source);
    }
    else if (source === "the-washington-post") {
      this.handleClick(source);
    }
  }

	handleClick = (source) => {
    if (this.state.toggled[source] === false) {
      this.props.addSelectedSource(source);
    } else if (this.state.toggled[source] === true) {
      this.props.removeSelectedSource(source);
    }
    let newToggledState = this.state.toggled;
    let oldToggledState = this.state.toggled[source];
    newToggledState[source] = !oldToggledState;
    this.setState(prevState => ({
      toggled: newToggledState 
    }));
  }

  render() {
    // grab the logo from clearbit.com
    let sourceName = this.props.sourceName;
    let sourceLogo = this.state.sourceLogo[sourceName];
    let sourceSrc = "//logo.clearbit.com/" + sourceLogo + "?size=40";
    // get button state info 
    let toggledState = this.state.toggled[sourceName];
    return (
      <Button 
        className="source-button"
        active={toggledState}
        onClick={()=>this.handleClick(this.props.sourceName)
        }>
        <Image src={`${sourceSrc}`} rounded />
      </Button>
    );
  }
}

export default SourceButton;
