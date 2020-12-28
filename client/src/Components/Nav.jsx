import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/layout.scss";
import HomeIcon from "../assets/home.png";
import BlogIcon from "../assets/blog.png";
import TeamsIcon from "../assets/people.png";
import ProjectsIcon from "../assets/projects.png";
import { MdEventNote } from "react-icons/md";

import Footer from "./Footer.jsx";

function Nav(props) {
  return (
    <div className="layout">
      <div className="layout__navbar">
        <div className="layout__nav">
          <Link to="/">
            <div>
              <img className="layout__nav__icon" src={HomeIcon} alt="icon" />
            </div>
            <div>Home</div>
          </Link>
        </div>
        <div className="layout__nav">
          <Link to="/projects">
            <div>
              <img
                className="layout__nav__icon"
                src={ProjectsIcon}
                alt="icon"
              />
            </div>
            <div>Projects</div>
          </Link>
        </div>
        <div className="layout__nav">
          <Link to="/blogs">
            <div>
              <img className="layout__nav__icon" src={BlogIcon} alt="icon" />
            </div>

            <div>Blogs</div>
          </Link>
        </div>
        <div className="layout__nav">
          <Link to="/teams">
            <div>
              <img className="layout__nav__icon" src={TeamsIcon} alt="icon" />
            </div>

            <div>Team</div>
          </Link>
        </div>

        <div className="layout__nav">
          <Link to="/events">
            {/* <div><img className="layout__nav__icon" src={TeamsIcon} alt="icon" /></div> */}
            <MdEventNote size={25} />

            <div>Events</div>
          </Link>
        </div>
      </div>
      <div className="layout__content">{props.children}</div>
    </div>
  );
}

export default Nav;
