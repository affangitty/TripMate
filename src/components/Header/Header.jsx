import React from 'react';
import './Header.css';
import { Autocomplete } from '@react-google-maps/api';
import logo from "../../images/logo-removebg-preview.png";
import SearchIcon from '@mui/icons-material/Search';
import search from "../../images/search.png"

const Header = () => {
  return (
    <header className="header">
      <img src={logo} height="50px" width="200px" className="header-title"/>
      <div className="header-search">
        <span className="header-subtitle">Explore new places</span>
        <div className="header-search">
          <div className="header-search-icon">
            <img src={search} height="25px" width="25px" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="header-search-input"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
