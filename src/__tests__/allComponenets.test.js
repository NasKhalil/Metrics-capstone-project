import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Home from '../pages/Home';
import CountryData from '../components/CountryData';
import Navbar from '../components/Navbar';
import InputFilter from '../components/InputFilter';
import RegionsData from '../components/RegionsData';

describe('All components/pages render correctly', () => {
  test('Home component renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <Home />
          </Provider>
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('CountryData component renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <CountryData name="France" confirmedCases={50} />
          </Provider>
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Navbar component renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <Navbar title="Test" year="2022" />
          </Provider>
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('InputFilter component renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <InputFilter filter="den" onChange={() => {}} />
          </Provider>
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('RegionsData component renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <RegionsData regions={[]} countryName="France" />
          </Provider>
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
