import React from "react";

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <div className="col-md-3">
        <div className="note">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <div className="add_btn">
            <button
              className="btn btn-light"
              onClick={deleteNote}
              type="submit"
              value="Submit"
            >
              <i class="far fa-trash-alt add_icon"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Note;
