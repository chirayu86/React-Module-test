import React from "react";
import "../styles/CreateNote.css";
import sendImage from "../assets/send.png";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';



function CreateNote({ group, createNote }) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  function onCreate() {
    let grpList = JSON.parse(localStorage.getItem("grpList"));
    let note = {id:uuidv4() ,content:text, creAt: new Date() };
    let updatedGrpList = grpList.map((grp) =>
      grp.name === group.name ? { ...grp, notes: [...grp.notes, note] } : grp
    );
    localStorage.setItem("grpList", JSON.stringify(updatedGrpList));
    console.log(JSON.parse(localStorage.getItem("grpList")));
    createNote(note);
    setText("")
  }

  return (
    <div className="create-note-container">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter Your Text Here...."
        className="create-note-textarea"
        cols="30"
        rows="10"
      ></textarea>
      <button  disabled={text===''} className="send-image">
        <img onClick={onCreate} src={sendImage} />
      </button>
    </div>
  );
}

export default CreateNote;
