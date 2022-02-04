import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchApiData } from '../redux/metrics/metrics';
import Navbar from '../components/Navbar';
import World from '../components/World';
import InputFilter from '../components/InputFilter';
import CountryData from '../components/CountryData';

import '../styling/Home.css';

const Home = () => {
  const AllData = useSelector((state) => state.metricsReducer);
  const { oneCountry, totalConfirmed } = AllData;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!AllData.length) {
      dispatch(fetchApiData());
    }
  }, []);

  const [filter, setFilter] = useState('');
  const onChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <Navbar year="2022" title="World Covid-12" />
      <World totalConfirmed={totalConfirmed} />
      <InputFilter filter={filter} onChange={onChange} />
      <ul className="container">
        {oneCountry && oneCountry
          .filter((location) => location.name.toLowerCase().includes(filter.toLowerCase()) || filter === '')
          .map((country) => {
            const {
              name,
              confirmedCases,
              id,
              allDeaths,
              recovered,
              openCases,
              allRegions,
            } = country;
            return (
              <section className="country-card" key={id}>
                <Link
                  to={`/details/${name}`}
                  state={
                    {
                      countryName: name,
                      confirmCases: confirmedCases,
                      deaths: allDeaths,
                      allRecovered: recovered,
                      casesOpen: openCases,
                      regions: allRegions,
                    }
                  }
                >
                  <CountryData name={name} confirmedCases={confirmedCases} />
                </Link>
              </section>
            );
          })}
      </ul>
    </div>
  );
};

export default Home;
