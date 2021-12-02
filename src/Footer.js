import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
           <footer className="note_footer">
               <p>Copyright &copy; {year}</p>
           </footer>
        </>
    )
}

export default Footer
