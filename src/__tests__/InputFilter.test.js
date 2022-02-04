import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import InputFilter from '../components/InputFilter';

describe('InputFilter test', () => {
  test('should render', () => {
    const footer = render(
      <Router>
        <Provider store={store}>
          <InputFilter filter="den" onChange={() => {}} />
        </Provider>
      </Router>,
    );

    expect(footer).toMatchSnapshot();
  });
});
