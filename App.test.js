
import React from 'react';
import App from './AppSmartphone';
import renderer from 'react-test-renderer';

jest.mock('TextInput', () => {
    const React = require('React');
    return class extends React.Component {
        render () {
          return React.createElement('TextInput', this.props, this.props.children);
        }
    };
});

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
