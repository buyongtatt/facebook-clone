import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import TvIcon from '@material-ui/icons/Tv';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img src="https://cdn2.iconfinder.com/data/icons/social-18/512/Facebook-2-512.png"></img>
        <div className="header_input">
          <SearchIcon />
          <input type="text"></input>
        </div>
      </div>
      <div className="header_middle">
          <div className='header_option'>
            <HomeIcon fontSize='large'/>
          </div>
          <div className='header_option'>
            <FlagIcon fontSize='large'/>
          </div>
          <div className='header_option'>
            <TvIcon fontSize='large'/>
          </div>
          <div className='header_option'>
            <StorefrontIcon fontSize='large'/>
          </div>
          <div className='header_option'>
            <SupervisorAccountIcon fontSize='large'/>
          </div>
      </div>
      <div className="header_right">
          
      </div>
    </div>
  );
}

export default Header;
