import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../pages/Navbar';
import HomePage from '../components/HomePage';
import store from '../redux/configureStore';

describe('Render components', () => {
  test('render navbar', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><Navbar /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('render DetailPage', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><HomePage /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
