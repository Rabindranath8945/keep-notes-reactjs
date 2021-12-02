import React from "react";
import Logo from "./images/logo.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <nav className="navbar navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={Logo} alt="LOGO" width="30" height="50" /> Google Notes
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
