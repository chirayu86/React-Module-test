import React from 'react'
import '../styles/Group.css'

function Group({group}) {
 
  function getInitials(name) {
    const nameParts = name.trim().split(' ').filter(part => part.length > 0);
    const initials = nameParts.map(part => part[0].toUpperCase()).join('');
    return initials;
}

  return (
    <div  className='grp-container'>
        <div className='grp-logo' style={{backgroundColor:group.color}}>{getInitials(group.name)}</div>
        <h2>{group.name}</h2>
    </div>
  )
}

export default Group