import React from 'react';
import PropTypes from 'prop-types';
import worldMap from '../images/world-map.png';

import '../styling/World.css';

const World = ({ totalConfirmed }) => (
  <>
    <div className="worldContainer">
      <img className="worldMap" src={worldMap} alt="world map" />
      <div className="cases">
        <h3>Cases Arround the world</h3>
        <span>{totalConfirmed}</span>
      </div>
    </div>
  </>
);

World.propTypes = {
  totalConfirmed: PropTypes.number,
};

World.defaultProps = {
  totalConfirmed: 0,
};

export default World;
