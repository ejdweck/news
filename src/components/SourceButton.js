import React, { Component } from 'react';
import { Button, Image } from 'react-bootstrap';

class SourceButton extends Component {
    constructor(props) {
    super(props);
    this.state = {
      toggled: false,
      sourceLogo: {
        "cnn": "cnn.com",
        "fox-news": 'foxnews.com',
        "the-wall-street-journal": "wsj.com",
        "the-new-york-times": "nytimes.com"
      }
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
	handleClick = (source) => {
    if (this.state.toggled == false) {
      this.props.addSelectedSource(source);
    } else if (this.state.toggled == true) {
      this.props.removeSelectedSource(source);
    }
    this.setState(prevState => ({
      toggled: !prevState.toggled
    }));
	}
  render() {
    let sourceName = this.props.sourceName;
    console.log(sourceName)
    let sourceLogo = this.state.sourceLogo[sourceName];
    let sourceSrc = "//logo.clearbit.com/" + sourceLogo;
    return (
      <Button active={this.state.toggled} onClick={()=>this.handleClick(this.props.sourceName)}>
        {this.props.sourceName}
        <Image src={`${sourceSrc}`} circle />
      </Button>
    );
  }
}

export default SourceButton;
