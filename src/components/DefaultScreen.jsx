import React from 'react'
import startScreen from '../assets/startScreen1.png'
import '../styles/DefaultScreen.css'
import toggle from '../assets/groupToggle.png'


function toggleSidebar() {
  const sidebar = document.getElementById('groups-container');
  sidebar.classList.toggle('active');
}

function DefaultScreen() {
  return (
    <div className='main-default-container'>
      <button className='sidebar-default-btn' onClick={toggleSidebar}><img src={toggle} alt="" /></button>
        <img className='default-image' src={startScreen} alt="" />
    </div>
  )
}

export default DefaultScreen