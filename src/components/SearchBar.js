import React, { Component } from 'react';
import { FormControl, FormGroup, Grid, Row, Button, Alert } from 'react-bootstrap';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      showAlert: false
    };
    // searchbar methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // alert methods
    this.handleDismissAlert = this.handleDismissAlert.bind(this);
  }

  componentDidMount() {
    setTimeout(()=> {
      this.sendQuery();
    }, 100)
  }

  sendQuery() {
    // only allow for query to be sent if user has between 2 to 5 sources selected
    if (this.props.sources.length > 1 && this.props.sources.length < 6 ) {
      this.props.sendArticleQueryToServer(this.props.sources, this.state.value);
    } else {
      // prompt user w/ error message
      this.setState({
        showAlert: true
      });
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.sendQuery();
    event.preventDefault();
  }

  handleDismissAlert() {
    this.setState({ showAlert: false });
  }
  
  render() {
    let alert = null;
    if (this.state.showAlert) {
      alert =(
        <Alert bsStyle="danger" onDismiss={this.handleDismissAlert}>
          <h4>Bad number of sources!</h4>
          <p>
            Please select between 2 and 5 sources in order to compare different media coverage between issues.
          </p>
          <p>
            <Button onClick={this.handleDismissAlert}>Dismiss</Button>
          </p>
        </Alert>
      )
    }
    
    return (
    <div className="search-bar">
      {alert}
      <Grid>
        <form onSubmit={this.handleSubmit}>
        <Row className="d-inline">
          <FormGroup
            controlId="formBasicText"
            bsClass="form-inline"
          >
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
            <Button type="submit" value="Submit" >
              Search
            </Button>
          </FormGroup>
        </Row>
        </form>    
      </Grid>
    </div>
    );
  }
}

export default SearchBar;
