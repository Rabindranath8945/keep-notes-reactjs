import React from 'react'

const Note = () => {
    return (
        <>
            <div className="note">
                <h1>Title</h1>
                <p>This is the content</p>
                <div className="add_btn">
                   <button className="btn btn-light" type="submit" value="Submit"><i class="far fa-trash-alt add_icon"></i></button>
                </div>
            </div>
        </>
    )
}

export default Note
