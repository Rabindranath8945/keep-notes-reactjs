import React, { useState } from "react";
import CreateNote from "./CreateNote";
import Note from "./Note";
import "./index.css";

const Layout = () => {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    // alert("I am Clicked");
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };

  const deleteNote = (id) => {
    setAddItem((oldData) =>
      oldData.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <section className="layout">
      <div className="container">
        <div className="row">
          <CreateNote passNote={addNote} />

          {addItem.map((value, index) => {
            return (
              <>
                <Note
                  key={index}
                  id={index}
                  title={value.title}
                  content={value.content}
                  deleteItem={deleteNote}
                />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Layout;
