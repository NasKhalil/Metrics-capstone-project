import metricsReducer from '../../redux/metrics/metrics';

const mockStore = {
  allCovid: {
    covidCountries: [
      {
        allDeaths: 1000,
        allRegions: [],
        confirmedCases: 600000,
        id: 'tunisia',
        name: 'Tunisia',
      },
    ],
  },
};

describe('Test', () => {
  test('Initial State', () => {
    expect(metricsReducer(undefined, {})).toEqual([]);
  });
});

describe('Mock Metrics Reducer', () => {
  test('Test Metrics Reducer With Mock Data', () => {
    const FETCH_COUNTRIES = 'metrics/FETCH_COUNTRIES';
    const store = mockStore;
    const action = {
      type: FETCH_COUNTRIES,
      payload: {
        covidCountries: [
          {
            allDeaths: 1000,
            allRegions: [],
            confirmedCases: 600000,
            id: 'tunisia',
            name: 'Tunisia',
          },
        ],
        total: 890567,
      },
    };
    expect(metricsReducer(store.allCovid, action)).toEqual({
      covidCountries: [
        {
          allDeaths: 1000,
          allRegions: [],
          confirmedCases: 600000,
          id: 'tunisia',
          name: 'Tunisia',
        },
      ],
      total: 890567,
    });
  });
});
