import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

import '../styling/Details.css';
import virus from '../images/virus.png';
import RegionsData from './RegionsData';

const Details = () => {
  const location = useLocation();
  const {
    countryName,
    confirmCases,
    deaths,
    allRecovered,
    casesOpen,
    regions,
  } = location.state;
  return (
    <>
      <Navbar title={countryName} />
      <div className="country-details">
        <img src={virus} alt="Covid19 Logo" className="covid-img" />
        <aside>
          <h2>{countryName}</h2>
          <div className="details-top">
            <div>
              <span>Total Confirmed </span>
              <h3>{`${confirmCases} cases`}</h3>
            </div>
            <div>
              <span>Total Deaths</span>
              <h3>{`${deaths} cases`}</h3>
            </div>
            <div>
              <span>Total Recovered</span>
              <h3>{`${allRecovered} cases`}</h3>
            </div>
            <div>
              <span>Total Open</span>
              <h3>{`${casesOpen} cases`}</h3>
            </div>
          </div>
        </aside>
      </div>
      <RegionsData regions={regions} countryName={countryName} />
    </>
  );
};

export default Details;
