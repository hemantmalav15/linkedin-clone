import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';
function Header() {
  return (
    <div className='header'>

      {/* header left */}
      <div className="header-left">

        {/* linkedin logo */}
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="linkedin-logo" />

        {/* search bar */}
        <div className="header-search">
          {/* seacrhIcon */}
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      {/* header right */}
      <div className="header-right">
        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption avatar='https://avatars.githubusercontent.com/u/96330614?v=4' title='Me' />
      </div>
    </div>
  )
}

export default Header