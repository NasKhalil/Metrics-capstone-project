import moment from 'moment';

const myDate = moment(new Date()).format('YYYY-MM-DD');
const baseUrl = 'https://api.covid19tracking.narrativa.com/api/';
const FETCH_COUNTRIES = 'metrics/FETCH_COUNTRIES';

export const fetchCountries = (payload) => ({
  type: FETCH_COUNTRIES,
  payload,
});

export const fetchApiData = () => async (dispatch) => {
  const countries = await fetch(`${baseUrl}${myDate}`);
  const response = await countries.json();
  if (response) {
    const { dates, total } = response;
    const regions = dates[`${myDate}`].countries;
    const countriesArr = Object.values(regions);
    const oneCountry = countriesArr.map((country) => (
      {
        name: country.name,
        confirmedCases: country.today_confirmed,
        id: country.id,
        allDeaths: country.today_deaths,
        allRegions: country.regions,
        recovered: country.today_recovered,
        openCases: country.today_open_cases,
      }
    ));
    const totalConfirmed = total.today_confirmed;
    const allData = { oneCountry, totalConfirmed };
    dispatch(fetchCountries(allData));
  }
};

const initialState = [];

const metricsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default metricsReducer;
