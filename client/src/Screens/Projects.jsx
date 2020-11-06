import { Grid } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import RightArrow from "../assets/right.png";
import Loader from "../Components/Loader.jsx";

function Projects({ count }) {
  const [projects, setProjects] = useState([]);
  const [loader,setLoader] = useState(false)
  useEffect(() => {
    window.scroll(0,0)
    fetchProjects();
  }, []);
  const fetchProjects = () => {
    setLoader(true);
    Axios.get(
      `https://api.github.com/orgs/Developer-Students-Club-MAIT/repos?per_page=${
        count || 10
      }`,
      {
        headers: {
          Accept: "application/vnd.github.inertia-preview+json",
        },
      }
    ).then((res) => {
      setLoader(false);  
      setProjects(res.data);
    });
  };

  const renderProjects = () => {
    return projects.map((project) => {
      return (
        <Grid item sm={12} md={6}>
          <div class="project-box">
            <div className="project-header">
              <img
                className="project-owner"
                src={project.owner.avatar_url}
                alt="owner"
              />
              <h1 className="project-head">{project.name.replaceAll('-', ' ').replaceAll('_', ' ')}</h1>
            </div>
            <p style={{ color: "#464646" }} className="project-content">
              {project.description}
            </p>
            {/* <div style={{ width: "60%", marginLeft: "20%" }}>
                <SVG src={laptop} />
              </div> */}
            <a href={project.html_url} target="_blank">
              <button className="project-button">
                Check Now{" "}
                <i
                  class="fas fa-external-link-alt"
                  style={{ fontSize: "20px" }}
                ></i>
              </button>
            </a>
          </div>
        </Grid>
      );
    });
  };
  if(loader){
      return <Loader />
  }
  return (
    <Grid container id="projects" spacing={3} className="projects">
    {renderProjects()}
    <Grid item container sm={12}>
      <a target="_blank" href="https://github.com/Developer-Students-Club-MAIT" className="projects__more">View More Projects <img className="projects__arrow" src={RightArrow} alt="see more"/></a>
    </Grid>
  </Grid>
  );
}

export default Projects;
