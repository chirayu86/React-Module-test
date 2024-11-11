import { useState , useEffect } from 'react'
import GroupList from './components/GroupList'
import NoteList from './components/NoteList'
import DefaultScreen from './components/DefaultScreen'
import './App.css'


function App() {
  
  const [group,setGroup] = useState('')
  const [selected,setSelected] = useState(false)

  useEffect(() => { 
    if(localStorage.getItem('grpList')===null) {
      localStorage.setItem('grpList','[]')
    }
  }, []); 

  const setSelectedGroup = (grp)=>{
    setGroup(grp)
    setSelected(true)
  }

  return (
     <div className='main-container'>
      <GroupList className='group' selectGroup={setSelectedGroup} />
      {selected ? <NoteList  group={group} className='note'/> : <DefaultScreen className='default-screen-component'/>} 
     </div>
  )
}

export default App
