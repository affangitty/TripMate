import React,{useState} from 'react';
import './Header.css';
import { Autocomplete } from '@react-google-maps/api';
import logo from "../../images/logo-removebg-preview.png";
import search from "../../images/search.png"

const Header = ({setCoordinates}) => {
  const [autoComplete,setAutoComplete]=useState(null);
  const onLoad = (autoC) => setAutoComplete(autoC);
  const onPlaceChanged = () => {
    const lat=autoComplete.getPlace().geometry.location.lat();
    const lng=autoComplete.getPlace().geometry.location.lng();
    setCoordinates({lat,lng});
  };
  return (
    <header className="header">
      <img src={logo} height="50px" width="200px" className="header-title"/>
      <div className="header-search">
        <span className="header-subtitle">Explore new places</span>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
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
        </Autocomplete>
      </div>
    </header>
  );
};

export default Header;
