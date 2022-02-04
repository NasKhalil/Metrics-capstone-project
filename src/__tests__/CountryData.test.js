import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import CountryData from '../components/CountryData';

describe('CountryData test', () => {
  test('should render', () => {
    const footer = render(
      <Router>
        <Provider store={store}>
          <CountryData name="France" confirmedCases={50} />
        </Provider>
      </Router>,
    );

    expect(footer).toMatchSnapshot();
  });
});
