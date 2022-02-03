import React from 'react';
import PropTypes from 'prop-types';

import '../styling/RegionsData.css';

const RegionsData = ({ regions, countryName }) => (
  <>
    <div className="region">
      <h3 className="region-title">Region&apos;s State</h3>
      <ul className="regions">
        {regions && regions.map((region) => {
          const {
            name,
            today_confirmed: todayConfirmed,
            today_deaths: todayDeaths,
            today_recovered: todayRecovered,
          } = region;
          return (
            <li key={name} className="region-list">
              <div>
                <h3 className="region-name">{name}</h3>
                <div className="region-detail">
                  <div>
                    <span>Total Confirmed </span>
                    <h3>{`${todayConfirmed} cases`}</h3>
                  </div>
                  <div>
                    <span>Total Deaths</span>
                    <h3>{`${todayDeaths} cases`}</h3>
                  </div>
                  <div>
                    <span>Total Recovered</span>
                    <h3>{`${todayRecovered} cases`}</h3>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {(!regions || !regions[0]) && (
        <h3 className="noData">
          We are sorry!
          <br />
          Data will be available as soon as possible for
          {' '}
          {countryName}
        </h3>
      )}
    </div>
  </>
);

RegionsData.propTypes = {
  regions: PropTypes.instanceOf(Array).isRequired,
  countryName: PropTypes.string.isRequired,
};

export default RegionsData;
