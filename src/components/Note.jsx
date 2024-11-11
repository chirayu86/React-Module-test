import React from 'react'
import '../styles/Note.css'


function formatDate(date) {
  date = date instanceof Date ? date : new Date(date);
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

function formatTime(date) {
  date = date instanceof Date ? date : new Date(date);
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0'); 
  const amPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; 

  return `${hours}.${minutes} ${amPm}`;
}

function Note({note}) {
  return (
    <div className='note-container'>
    <p>{note.content}</p>
    <div className='note-details-container'>
    <div className='spacer'></div>
    <div className='date'>{formatDate(note.creAt)}</div>
    <div className='dot'>.</div>
    <div className='time'>{formatTime(note.creAt)}</div>
    </div>
    </div>
  )
}

export default Note