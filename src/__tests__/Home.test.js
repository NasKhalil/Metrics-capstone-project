import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Home from '../pages/Home';

describe('Home test', () => {
  test('should render', () => {
    const footer = render(
      <Router>
        <Provider store={store}>
          <Home />
        </Provider>
      </Router>,
    );

    expect(footer).toMatchSnapshot();
  });
});
