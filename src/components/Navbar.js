import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoIosArrowBack, IoMdMic, IoIosSettings } from 'react-icons/io';

const Navbar = ({ year, title }) => (
  <>
    <nav>
      <div>
        <Link to="/" className="back-btn">
          <IoIosArrowBack />
        </Link>
        <span>{year}</span>
      </div>
      <span>{title}</span>
      <div>
        <Link to="/details" className="back-btn">
          <IoMdMic />
        </Link>
        <IoIosSettings />
      </div>
    </nav>
  </>
);

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string,
};

Navbar.defaultProps = {
  year: '',
};

export default Navbar;
