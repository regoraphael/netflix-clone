import { bool } from 'prop-types';
import React from 'react';
import './Header.css';

const Header = ({ black }) => (
  <header className={black ? 'black' : ''}>
    <div className="header--logo">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="netflix-logo"
      />
    </div>
    <div className="header--user">
      <img
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="user-logo"
      />
    </div>
  </header>
);

Header.propTypes = {
  black: bool,
}.isRequired;

export default Header;
