import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Navbar from '../components/Navbar';

describe('Navbar test', () => {
  test('should render', () => {
    const footer = render(
      <Router>
        <Provider store={store}>
          <Navbar title="Test" year="2022" />
        </Provider>
      </Router>,
    );

    expect(footer).toMatchSnapshot();
  });
});
