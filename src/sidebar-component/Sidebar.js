import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
    const recentItem = (topic) => (<div className="sidebar-recentItem">
    <span className="sidebar-hash">
        #
    </span>
    <p>{ topic }</p>
</div>);
  return (
      <div className='sidebar'>
          <div className="sidebar-top">
              <img src="https://marketplace.canva.com/EAE4d-MUMN0/1/0/1600w/canva-black-minimalist-linkedin-banner-YOajvAl8njI.jpg" alt="background-img" />
              <Avatar className='sidebar-avatar' />
              <h2 className='sidebar-heading'>Hemant Malav</h2>
              <h4 className='sidebar-heading'>malavhemant5@gmail.com</h4>
          </div>

          <div className="sidebar-stats">
              <div className="sidebar-stat">
                  <p>Who viewed you</p>
                  <p className="sidebar-statNumber">2,145</p>
              </div>

              <div className="sidebar-stat">
                  <p>Views on post</p>
                  <p className="sidebar-statNumber">2,248
                  </p>
              </div>
          </div>
          <div className="sidebar-bottom">
              <p>Recent</p>
              {recentItem('react js')}
              {recentItem('front-end')}
              {recentItem('programming')}
              {recentItem('development')}
          </div>
    </div>
  )
}

export default Sidebar