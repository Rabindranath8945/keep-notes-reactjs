import React, { useState } from "react";
import CreateNote from "./CreateNote";
import Note from "./Note";

const Layout = () => {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    // alert("I am Clicked");
    setAddItem((prevData) => {
      return [...prevData, note];
    });
    console.log(note);
  };

  return (
    <div className="layout">
      <div className="container">
        <CreateNote passNote={addNote} />
        {addItem.map((value, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={value.title}
              content={value.content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Layout;
