import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/layout.scss";
import Footer from "./Footer.jsx";
function Nav(props) {
  return (
    <div className="layout">
      <div className="layout__navbar">
        <div className="layout__nav">
          <Link to="/">
            <div>#</div>
            <div>Home</div>
          </Link>
        </div>
        <div className="layout__nav">
          <Link to="/teams">
            <div>#</div>
            <div>Teams</div>
          </Link>
        </div>
        <div className="layout__nav">
          <Link to="/">
            <div>#</div>
            <div>Blogs</div>
          </Link>
        </div>
        <div className="layout__nav">
          <Link to="/teams">
            <div>#</div>
            <div>Events</div>
          </Link>
        </div>
      </div>
      <div className="layout__content">{props.children}</div>

    </div>
  );
}

export default Nav;
