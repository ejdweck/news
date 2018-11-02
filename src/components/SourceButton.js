import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class SourceButton extends Component {
    constructor(props) {
    super(props);
    this.state = {
      toggled: false
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
    return (
      <Button active={this.state.toggled} onClick={()=>this.handleClick(this.props.sourceName)}>
        {this.props.sourceName}
      </Button>
    );
  }
}

export default SourceButton;
