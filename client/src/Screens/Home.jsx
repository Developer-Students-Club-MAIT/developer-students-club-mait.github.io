import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
<<<<<<< HEAD
import SVG from 'react-inlinesvg';
import laptop from '../assets/project1.svg';
import laptopcat from '../assets/Project2.svg';
import bot from '../assets/bot.JPG'
import garrow from '../assets/arrow1.JPG'
import barrow from '../assets/arrow2.JPG'
import Footer from '../Components/Footer.jsx'
import hero from '../assets/hero-image.JPG'
=======
import Logo from "../assets/dsc.png";
import SVG from "react-inlinesvg";
import laptop from "../assets/project1.svg";
//import laptopcat from '../assets/project2.svg';
import bot from "../assets/bot.JPG";
import garrow from "../assets/arrow1.JPG";
import barrow from "../assets/arrow2.JPG";
import Footer from "../Components/Footer.jsx";
import hero from "../assets/hero-image.JPG";
import Axios from "axios";
import AOS from 'aos';
import RoboAnimations from "../Components/RoboAnimation.jsx";
//Screens
import Blogs from '../Screens/Blogs.jsx'
>>>>>>> e8d57f1c69d64054f083436c80b6d445e24a9023

function Home() {
  const [projects,setProjects] = useState([])
  const blue = {
    color: "#346DF1",
  };
  const yellow = {
    color: "#FBBD00",
  };
  const green = {
    color: "#069E57",
  };
  const red = {
    color: "#EB4132",
  };
  useEffect(() => {
    AOS.init();
  })
  useEffect(() => {
    fetchProjects();
  },[])
  const fetchProjects = () => {
    Axios.get('https://api.github.com/orgs/Developer-Students-Club-MAIT/repos',{
      headers:{
        Accept:"application/vnd.github.inertia-preview+json"
      }
    }).then((res) => {
      setProjects(res.data.slice(0,2))
    })
  }

  const renderProjects = () => {
    return projects.map((project) => {
      return (
        <Grid  item sm={12} md={6}>
            <div class="project-box">

              <div className="project-header">
              <img className="project-owner" src={project.owner.avatar_url} alt="owner"/>
              <h1 className="project-head">
                {project.name}
              </h1>
              </div>
              <p
                style={{ color: "#464646" }}
                className="project-content"
              >
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
      )
    })
  }
  return (
    <div>
      <Box className="mt-9">
        <Grid container spacing={3}>
          <Grid item sm={12} md={1} lg={1}></Grid>
          <Grid item sm={12} md={6} lg={6}>
            <div className="header-content">
              <div className="main-heading">
                <img src={Logo} height={"40rem"} alt="logo" />
                <h1 className="heading">
                  <span style={green}>D</span>eveloper{" "}
                  <span style={yellow}>S</span>tudents{" "}
                  <span style={red}>C</span>lub
                </h1>
              </div>
              <div className="college-name">
                <span style={blue}>Maharaja</span>{" "}
                <span style={yellow}>Agrasen</span>{" "}
                <span style={green}>Institute</span>
                <span style={blue}> Of </span>{" "}
                <span style={red}>technology</span>
              </div>
              <div className="para-first">
                <p className="para-first-style">
                  <span style={blue}>D</span>eveloper <span style={red}>S</span>
                  tudent <span style={yellow}>C</span>lubs MAIT is university
                  based community groups for students interested in{" "}
                  <span style={blue}>G</span>
                  <span style={red}>o</span>
                  <span style={red}>o</span>
                  <span style={blue}>g</span>
                  <span style={green}>l</span>
                  <span style={red}>e</span> developer and latest technologies.
                  Students from all undergraduate years with an interest in
                  growing as a developer are welcome. By joining a DSC, students
                  grow their knowledge in a peer-to-peer learning environment
                  and build solutions in a community.
                </p>
              </div>
              <button className="button">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdQe6EQchVGBLeoLVx1ZqiNILDgue2Li8GUycZJNNq05nBduw/viewform"
                className="button-text"
              >
                Register Now
              </a>
            </button>
            </div>
          </Grid>
          <Grid item sm={12} md={5} lg={5}>
            <div className="head-image">
              <div>
                <img src={hero} style={{ height: "100%", width: "100%" }}></img>
              </div>
            </div>
          </Grid>
        
        </Grid>
        <Grid container spacing={0}>
          <Grid item md={6}>
            <div className="blue-box" data-aos="fade-right">
              <h1 className="box-head">
                <center>Connect</center>
              </h1>
              <p className="box-content">
                Meet other students on campus interested in developer
                technologies. All are welcome, including those with diverse
                backgrounds and different majors.{" "}
              </p>
            </div>
          </Grid>
          <Grid item sm={0} md={6}>
            <img src={garrow} className="g-arrow"></img>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <img
              src={barrow}
              className="b-arrow"
              style={{ marginLeft: "30%" }}
            ></img>
          </Grid>
          <Grid item md={6}>
            <div className="green-box" data-aos="fade-left">
              <h1 className="box-head">
                <center>Learn</center>
              </h1>
              <p className="box-content">
                Learn about a wide range of technical topics where new skills
                are gained through hands-on workshops, in-person training and
                project building activities.
              </p>
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          style={{
            backgroundColor: "#F9F9F9",
            marginBottom: "5%",
            marginTop: "5%",
          }}
        >
          <div className="mobile">
            <h1
              style={{ color: "#000000", width: "100%" }}
              className="box-head"
            >
              <center>Tech Stacks</center>
            </h1>
            <p
              style={{
                color: "#7E7E7E",
              }}
              className="box-content"
            >
              <center>Exciting Technologies we worked on</center>
            </p>
          </div>
          <Grid item sm={12} md={6}>
            {/* <img src={bot} style={{ width: "100%", height: "100%" }}></img> */}
            <RoboAnimations/>
          </Grid>
          <Grid item sm={12} md={6}>
            <div className="tech-box">
              <div className="laptop">
                <h1 style={{ color: "#000000" }} className="box-head">
                  <center>Tech Stacks</center>
                </h1>
                <p
                  style={{ color: "#7E7E7E" }}
                  className="tech-secondary-header"
                >
                  <center>Exciting Technologies we worked on</center>
                </p>
              </div>
              <div
                className="tech-blocks"
                style={{
                  borderColor: "#346DF1",
                  color: "#346DF1",
                }}
                data-aos="fade-up"
              >
                Machine Learning
              </div>
              <div
                className="tech-blocks"
                style={{
                  marginLeft: "25%",
                  borderColor: "#EB4132",
                  color: "#EB4132",
                }}
                data-aos="fade-up"

              >
                Web Development
              </div>
              <div
                className="tech-blocks"
                style={{
                  borderColor: "#FBBD00",
                  color: "#FBBD00",
                }}
                data-aos="fade-up"

              >
                App Development
              </div>
              <div
                className="tech-blocks"
                style={{
                  marginLeft: "25%",
                  borderColor: "#069E57",
                  color: "#069E57",
                }}
                data-aos="fade-up"

              >
                
                UI/UX Design
              </div>
              <div
                className="tech-blocks"
                style={{ marginBottom: "5%" }}
                data-aos="fade-up"

              >
                Action on Google
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid spacing={3} container className="projects">
          {renderProjects()}
        </Grid>
{/* 
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className="grey-box">
              <p className="grey-box-content">
                <h1 style={{ color: "#000000" }} className="box-head">
                  <center>Community Guidelines</center>
                </h1>
                When you join DSC MAIT, you’re joining a community. And like any
                growing community, a few ground rules about expected behavior
                are good for everyone. These guidelines cover both online (e.g.
                mailing lists, social channels) and offline (e.g. in-person
                meetups) behavior.<br></br>
                <br></br>
                Violations of code of conduct can result in members being
                removed from DSC MAIT. Use your best judgement, and if you’d
                like more clarity or have questions feel free to reach out.
              </p>
            </div>
          </Grid>
        </Grid>
         */}
        <container>
          <Footer />
        </container>
      </Box>
    </div>
  );
}

export default Home;
