import React, { useState } from "react";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = (event) => {
    event.preventDefault();
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expandIt = () => {
    setExpand(true);
  };

  const expandCls = () => {
    setExpand(false);
  };

  return (
    <>
      <section onDoubleClick={expandCls}>
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
                    onClick={expandIt}
                  />

                  {expand ? (
                    <textarea
                      className="form-control mb-3"
                      rows=""
                      cols=""
                      name="content"
                      value={note.content}
                      onChange={InputEvent}
                      placeholder="Write a note ..."
                    ></textarea>
                  ) : null}

                  {expand ? (
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
                  ) : null}
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </section>
    </>
  );
};

export default CreateNote;
