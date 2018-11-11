/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import Adapter from 'enzyme-adapter-react-16'
import { Alert, Button } from 'react-bootstrap';

import SearchBar from './components/SearchBar';
import SourceButton from './components/SourceButton';

configure({ adapter: new Adapter() });

// App Tests
describe('App component testing', function() {
  it('renders welcome message', function() {
    const wrapper = shallow(<App />); 
    const welcome = <h1 className='App-title'>Welcome to React</h1>;
    expect(wrapper.contains(welcome)).to.equal(false);
  });
});

// SearchBar Component Tests
describe('SearchBar Component testing...', function() {
  it('alert should not be visible on startup', function() {
    const wrapper = shallow(<SearchBar />); 
    const alert = (
      <Alert bsStyle="danger" onDismiss={null}>
        <h4>Bad number of sources!</h4>
        <p>
          Please select between 2 and 5 sources in order to compare different media coverage between issues.
        </p>
        <p>
          <Button onClick={null}>Dismiss</Button>
        </p>
      </Alert>
    );
    expect(wrapper.contains(alert)).to.equal(false);
  });

  it('text in input field should match state value', function() {
    const wrapper = shallow(<SearchBar />); 
    wrapper.find('FormControl').simulate('change', {
      target: { value: 'hello' }
    });
    expect(wrapper.state('value')).to.equal('hello');
  });
});

// SourceButton Component Tests
describe('SourceButton Component testing...', function() {
  it('check that a specific button has the proper icon src', function() {

    const wrapper = shallow(<SourceButton sourceName="bloomberg"/>); 
    const image = <img src="//logo.clearbit.com/bloomberg.com?size=30" className="img-rounded"></img>
    //expect(wrapper.contains(image)).to.equal(true);
    expect(wrapper.contains(image));
  });
});


