import React, { Component } from 'react';
import { Grid, Row, Col, Button, Panel } from 'react-bootstrap';
import { Formik } from 'formik';

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
    <div>
      <h1>My Form</h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>    
    </div>
    );
  }
}

export default SearchBar;
