import React from "react";
import Group from "./Group";
import CreateGroup from "./CreateGroup";
import "../styles/GroupList.css";
import { useState, useEffect } from "react";

function toggleSidebar() {
  const sidebar = document.getElementById('groups-container');
  sidebar.classList.toggle('active');
}

function GroupList({ selectGroup }) {


  let groups = [];

  useEffect(() => {
    groups = JSON.parse(localStorage.getItem("grpList"));
    setGrpList(groups);
    //console.log(groups)
  }, []);

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [grpList, setGrpList] = useState(groups);
  const [selected, setSelected] = useState(null);
  const showPopup = () => setIsPopupVisible(true);
  const hidePopup = () => setIsPopupVisible(false);

  function createGroup(name) {
    setGrpList((prev) => [...prev, name]);
  }

  return (
    <div id="groups-container">
      <h2 className="header">Pocket Notes</h2>
      <div className="group-list">
        {grpList.map((group) => (
          <button
            key={group}
            onClick={() => {
              selectGroup(group);
              setSelected(group);
              toggleSidebar()
            }}
            className={`list-button ${selected === group ? 'active' : ''}`}
          >
            <Group group={group}></Group>
          </button>
        ))}
      </div>
      <button className="floating-button" onClick={()=>{
        showPopup()
      }}>
        +
      </button>
      {isPopupVisible && (
        <CreateGroup onClose={hidePopup} onCreate={createGroup} />
      )}
    </div>
  );
}

export default GroupList;
