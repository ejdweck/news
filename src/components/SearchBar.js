import React, { Component } from 'react';
import { FormControl, FormGroup, Grid, Row, Col, Button, Panel } from 'react-bootstrap';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    console.log('searrrrching form search input')
    this.props.getNewsArticles(this.state.value);
    event.preventDefault();
  }
  
  render() {
    
    return (
    <div className="search-bar">
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
