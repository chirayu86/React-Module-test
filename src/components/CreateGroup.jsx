import React from "react";
import "../styles/CreateGroup.css";
import { useState } from "react";

function CreateGroup({ onClose, onCreate }) {
  const colors = ["#B38BFA", "3FF79F2", "#43E6FC", "#F19576","#0047FF","#6691FF"];

  const [grpName, setGrpName] = useState("");
  const [color, setColor] = useState(null);
  const [selectedColor,setSelectedColor] = useState(null)
  

  const handleInputChange = (event) => {
    setGrpName(event.target.value);
  };

  const handleCreate = () => {

    if(grpName.trim()==='') {
     alert("group name cannot be empty")
     return
    }
    
    if(color===null) {
      alert("please choose a color")
      return
    }

    if(!(grpName.length <= 50)) {
      alert("grpname can be only 50 characters")
      return
    }

    let grpList = JSON.parse(localStorage.getItem('grpList'))
    if(grpList.some(group=>group.name === grpName)) {
      alert("Two Groups Cannot have the Same Name")
      return
    }

    let group = {name:grpName,color:color,notes:[]}
    let newGrpList = [...grpList,group]
    localStorage.setItem('grpList',JSON.stringify(newGrpList))
    

    onCreate(group);
    onClose();
  };

  return (
    <div className="create-grp-overlay" onClick={onClose}>
      <div className="create-grp-content" onClick={(e) => e.stopPropagation()}>
        <h3 className="create-grp-header">Create New Group</h3>
        <div className="name-container">
          <h3>Group Name</h3>
          <input  className='input-field' type="text" value={grpName} onChange={handleInputChange} />
        </div>
        <div className="color-container">
         <h3>Choose Color</h3>
          <div className="color-selector">
            {colors.map((col) => (
              <button onClick={()=>{setColor(col);setSelectedColor(col)}}
                className={`color-btn ${selectedColor === col ? 'active' : ''}`}
                style={{ backgroundColor: col }}
              ></button>
            ))}
          </div>
        </div>
        <div className="create-btn-container">
          <div className="create-btn-spacer"></div>
          <button className="create-btn" onClick={handleCreate}>Create</button>
        </div>
      </div>
    </div>
  );
}

export default CreateGroup;
