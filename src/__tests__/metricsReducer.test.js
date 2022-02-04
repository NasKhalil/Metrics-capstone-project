import reducer from '../redux/metrics/metrics';

const mockStore = {
  allCovid: {
    covidCountries: [
      {
        allDeaths: 8165,
        allRegions: [],
        confirmedCases: 654287,
        id: 'tunisia',
        name: 'Tunisia',
      },
    ],
  },
};

describe('Test', () => {
  test('Initial State', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });
});

describe('Mock Countries Reducer', () => {
  test('Test Countries Reducer With Mock Data', () => {
    const FETCH_COUNTRIES = 'metrics/FETCH_COUNTRIES';
    const store = mockStore;
    const action = {
      type: FETCH_COUNTRIES,
      payload: {
        covidCountries: [
          {
            allDeaths: 8165,
            allRegions: [],
            confirmedCases: 654287,
            id: 'tunisia',
            name: 'Tunisia',
          },
        ],
        total: 954103,
      },
    };
    expect(reducer(store.allCovid, action)).toEqual({
      covidCountries: [
        {
          allDeaths: 8165,
          allRegions: [],
          confirmedCases: 654287,
          id: 'tunisia',
          name: 'Tunisia',
        },
      ],
      total: 954103,
    });
  });
});
