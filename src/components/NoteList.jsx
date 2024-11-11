import React from 'react'
import Note from './Note'
import CreateNote from './CreateNote'
import Group from './Group'
import { useState,useEffect } from 'react'
import '../styles/NoteList.css'
import toggle from '../assets/groupToggle.png'

function toggleSidebar() {
  const sidebar = document.getElementById('groups-container');
  sidebar.classList.toggle('active');
}

function NoteList({group}) {


    const [notes,setNotes] = useState([])

    const handleCreate = (note)=>{
      setNotes((prev)=>[...prev,note])
    }
    
    useEffect(() => { 
      let grpList  = JSON.parse(localStorage.getItem('grpList'))
      let gr = grpList.find((grp)=>grp.name===group.name)
      if(gr===undefined) { return }
      setNotes(gr.notes) 
    }, [group]); 

    return(
        <div className='main-notes-container'>
        <div className='note-header'><button onClick={toggleSidebar} className='sidebar-btn'><img src={toggle} alt="" /></button><Group group={group} ></Group></div>
        <div className='notes-container'>
          {notes.map(note=><Note note={note} key={note.id}></Note>)}
        </div>
        <CreateNote createNote={handleCreate} group={group} className="note-text-area"></CreateNote>
        </div>
    )
}

export default NoteList