import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <section className="section_footer">
        <footer className="note_footer">
          <p>Copyright &copy; {year}</p>
        </footer>
      </section>
    </>
  );
};

export default Footer;
