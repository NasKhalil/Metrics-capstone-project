import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowRightCircleFill } from 'react-icons/bs';

import virus from '../images/virus.png';
import '../styling/CountryData.css';

const CountryData = ({ name, confirmedCases }) => (
  <li className="country-data">
    <div className="right">
      <BsArrowRightCircleFill className="arrow" />
    </div>
    <div className="country">
      <img src={virus} alt="Covid logo" className="covid-img" />
      <aside>
        <h2>{name}</h2>
        <span>Total Confirmed</span>
        <h3>{`${confirmedCases} cases`}</h3>
      </aside>
    </div>
  </li>
);

CountryData.propTypes = {
  name: PropTypes.string.isRequired,
  confirmedCases: PropTypes.number.isRequired,
};

export default CountryData;
