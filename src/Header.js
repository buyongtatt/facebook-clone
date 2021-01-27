import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import TvIcon from '@material-ui/icons/Tv';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img src="https://cdn2.iconfinder.com/data/icons/social-18/512/Facebook-2-512.png"></img>
        <div className="header_input">
          <SearchIcon />
          <input type="text" placeholder='Search Something'></input>
        </div>
      </div>
      <div className="header_center">
          <div className='header_option
          header_option--active'>
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
          <div className='header_info'>
            <Avatar>
             
            </Avatar>
            <h4>Hello world</h4>
          </div>
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
      </div>
    </div>
  );
}

export default Header;
