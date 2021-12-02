import React, { useState } from "react";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    // const value = event.target.value;
    // const name= event.target.name;

    const { name, value } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="main-note">
            <div className="main_note">
              <form>
                <input
                  type="text"
                  className="form-control mb-3"
                  name="title"
                  value={note.title}
                  onChange={InputEvent}
                  placeholder="Title"
                  autoComplete="off"
                />
                <textarea
                  className="form-control mb-3"
                  rows=""
                  cols=""
                  name="content"
                  value={note.content}
                  onChange={InputEvent}
                  placeholder="Write a note ..."
                ></textarea>
                <div className="add_btn">
                  <button
                    className="btn btn-light"
                    type="submit"
                    value="Submit"
                    onClick={addEvent}
                  >
                    <i className="fas fa-plus add_icon"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </>
  );
};

export default CreateNote;
