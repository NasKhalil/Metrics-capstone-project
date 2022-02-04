import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import RegionsData from '../components/RegionsData';

describe('RegionsData test', () => {
  test('should render', () => {
    const footer = render(
      <Router>
        <Provider store={store}>
          <RegionsData regions={[]} countryName="France" />
        </Provider>
      </Router>,
    );

    expect(footer).toMatchSnapshot();
  });
});
