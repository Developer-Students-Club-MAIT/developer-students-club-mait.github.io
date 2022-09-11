import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/teams2022.css";
import anshGoyal from "../assets/profilePictures/profilePictures2022/Ansh Goyal.jpg";
import bhavyaGiri from "../assets/profilePictures/profilePictures2022/Bhavya Giri.jpg";
import dakshMakhija from "../assets/profilePictures/profilePictures2022/Daksh Makhija.jpg";
import dishantNagpal from "../assets/profilePictures/profilePictures2022/Dishant Nagpal.jpg";
import rajatKumar from "../assets/profilePictures/profilePictures2022/Rajat Dev.jpg";
import rohanAditya from "../assets/profilePictures/profilePictures2022/Rohan Aditya.jpg";
import sahilRohera from "../assets/profilePictures/profilePictures2022/Sahil Rohera.jpg";
import souravAggarwal from "../assets/profilePictures/profilePictures2022/Sourav Aggarwal.jpg";
import vikasSingh from "../assets/profilePictures/profilePictures2022/Vikas Singh.jpg";
import bhumikaChopra from "../assets/profilePictures/profilePictures2022/Bhumika Chopra.jpg";
import arnavGupta from "../assets/profilePictures/profilePictures2022/Arnav Gupta.jpg";
import nawedAli from "../assets/profilePictures/profilePictures2022/Nawed Ali.jpg";
import aditya from "../assets/profilePictures/profilePictures2022/Aditya.jpg";
import dhruvChopra from "../assets/profilePictures/profilePictures2022/Dhruv Chopra.jpeg";
import surajUppal from "../assets/profilePictures/profilePictures2022/Suraj Uppal.jpg";
import taniyaSharma from "../assets/profilePictures/profilePictures2022/Taniya Sharma.jpg";
import isharJain from "../assets/profilePictures/profilePictures2022/Ishar Jain.jpeg";
import aryanMathur from "../assets/profilePictures/profilePictures2022/Aryan Mathur.jpeg";
import jiyaVerma from "../assets/profilePictures/profilePictures2022/Jiya Verma.jpg";
import ajayPathak from '../assets/profilePictures/profilePictures2022/Ajay Pathak.jpg'
import shauryamSaxena from "../assets/profilePictures/profilePictures2022/Shauryam Saxena.jpg"
const Teams2022 = () => {
  const [members, setMembers] = useState([
    {
      name: "Bhumika Chopra",
      title: "Lead",
      img: bhumikaChopra,
      github: "https://github.com/BhumikaChopra3",
      linkedin: "https://www.linkedin.com/in/bhumika-chopra-673951203",
      twitter: "https://mobile.twitter.com/bhumikachopra7",
    },
    {
      name: "Sourav Aggarwal",
      title: "Technical Head",
      img: souravAggarwal,
      github: "https://github.com/100RAV-AGGARWAL",
      linkedin: "https://www.linkedin.com/in/sourav-aggarwal/",
      twitter: "https://twitter.com/souravagg01",
    },
    {
      name: "Bhavya Giri",
      title: "Outreach Head",
      img: bhavyaGiri,
      github: "https://github.com/bhavya-giri",
      linkedin: "https://www.linkedin.com/in/bhavyagiri/",
      twitter: "https://twitter.com/BhavyaGiri_",
    },
    {
      name: "Arnav Gupta",
      title: "Creative Design Head",
      img: arnavGupta,
      github: "https://github.com/arnavvgupta/",
      linkedin: "https://www.linkedin.com/in/arnav-gupta-b1715121b",
      twitter: "",
    },
    {
      name: "Aryan Mathur",
      title: "Research Head",
      img: aryanMathur,
      github: "",
      linkedin: "https://www.linkedin.com/in/aryan-mathur-307b3721a",
      twitter: "https://twitter.com/llaryanll",
    },
    {
      name: "Ajay Pathak",
      title: "Cloud Mentor",
      img: ajayPathak,
      github: "",
      linkedin: "",
      twitter: "",
    },
    {
      name: "Vikas Singh",
      title: "Visual Editor",
      img: vikasSingh,
      github: "https://github.com/vikas70607",
      linkedin: "https://www.linkedin.com/in/vikas-singh-233a28229",
      twitter:
        "https://twitter.com/sanguine_spirt",
    },
    {
      name: "Rohan Aditya",
      title: "Content Writer",
      img: rohanAditya,
      github: "https://github.com/Adityarohan17",
      linkedin: "https://www.linkedin.com/in/rohan-aditya-5a583121a/",
      twitter: "https://twitter.com/ROHANAD12962590",
    },
    {
      name: "Ansh Goyal",
      title: "Social Media Manager",
      img: anshGoyal,
      github: "https://github.com/AnshGoyal27",
      linkedin: "https://www.linkedin.com/in/ansh-goyal-211623228",
      twitter: "https://twitter.com/AnshGoyal27",
    },
    {
      name: "Nawed Ali",
      title: "Blockchain Mentor",
      img: nawedAli,
      github: "https://github.com/nawed2611",
      linkedin: "",
      twitter: "https://twitter.com/nawed2611",
    },
    {
      name: "Sahil Rohera",
      title: "Sr Web Developer",
      img: sahilRohera,
      github: "https://github.com/sahilrohera10",
      linkedin: "https://www.linkedin.com/in/sahil-rohera-202939214/",
      twitter: "https://twitter.com/SahilRohera10",
    },
    {
      name: "Aditya",
      title: "Graphic Designer",
      img: aditya,
      github: "https://www.github.com/Hey-Aditya",
      linkedin: "https://www.linkedin.com/in/hey-aditya",
      twitter: "https://www.twitter.com/HeyyAdityaa",
    },
    {
      name: "Dhruv Chopra",
      title: "Content Writer",
      img: dhruvChopra,
      github: "https://github.com/dhruvchopra2003",
      linkedin: "https://www.linkedin.com/in/dhruvchopra2003",
      twitter: "https://www.twitter.com/DhruvC1",
    },
    {
      name: "Daksh Makhija",
      title: "Event Manager",
      img: dakshMakhija,
      github: "",
      linkedin: "https://www.linkedin.com/in/daksh-makhija-a30892202",
      twitter: "",
    },
    {
      name: "Ishar Jain",
      title: "Jr Web Developer",
      img: isharJain,
      github: "https://www.github.com/ishar19",
      linkedin: "https://www.linkedin.com/in/ishar-jain-8401031b5",
      twitter: "https://www.twitter.com/ishartwt",
    },
    {
      name: "Rajat Kumar",
      title: "Flutter Developer",
      img: rajatKumar,
      github: "https://www.github.com/loyaltytrooper",
      linkedin: "https://www.linkedin.com/in/rajat-dev",
      twitter:
        "https://twitter.com/LoyaltyTrooper",
    },
    {
      name: "Jiya Verma",
      title: "Graphic Designer",
      img: jiyaVerma,
      github: " https://github.com/jvrox",
      linkedin: "https://www.linkedin.com/in/jiya-verma-05511a226",
      twitter: "https://twitter.com/jvrox_x",
    },
    {
      name: "Taniya Sharma",
      title: "Competitive Programmer",
      img: taniyaSharma,
      github: "",
      linkedin: "https://www.linkedin.com/in/taniya-sharma-36386b1ba",
      twitter: "https://twitter.com/taniya_sharma5",
    },
    {
      name: "Suraj Uppal",
      title: "ML Mentor",
      img: surajUppal,
      github: "https://github.com/SurajUppal21",
      linkedin: "https://www.linkedin.com/in/suraj-uppal-06224221a/",
      twitter: "",
    },
    {
      name: "Dishant Nagpal",
      title: "Open Source Mentor",
      img: dishantNagpal,
      github: "https://github.com/Dishant10",
      linkedin: "https://www.linkedin.com/in/dishant-nagpal-6a365019a/",
      twitter: "https://twitter.com/DishantNagpal10",
    },
    {
      name: "Shauryam Saxena",
      title: "Android Developer",
      img: shauryamSaxena,
      github: "https://github.com/shauryam-exe",
      linkedin: "https://www.linkedin.com/in/shauryam-saxena-024966216/",
      twitter: "https://twitter.com/DishantNagpal10",
    },
  ]);
  const membersCard = members.map((member) => {
    return (
      <div className="main-box">
        <div className="team-wrap">
          <div className="team-member text-center">
            <div className="team-img">
              <img src={member.img} />
              <div className="overlay">
                <div className="team-details text-center">
                  <div className="socials mt-20">
                    {member.github && (
                      <a href={member.github}>
                        <svg fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg>
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin}>
                        <svg fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="30px" height="30px">    <path d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z"/></svg>                   </a>
                    )}
                    {member.twitter && (
                      <a href={member.twitter}>
                        <svg fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"/></svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <h6 className="team-title">{member.name}</h6>
            <span>{member.title}</span>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="team-container">
      <div className="teams">
        <div className="team-2022">
          <Link to="/team/2022">
            <div>Team-2022</div>
          </Link>
        </div>
        <div className="team-2021">
          <Link to="/team/2021">
            <div>Team-2021</div>
          </Link>
        </div>
        <div className="team-2020">
          <Link to="/team/2020">
            <div>Team-2020</div>
          </Link>
        </div>
      </div>
      <h1 className="heading">Our Team</h1>
      <div className="grid">{membersCard}</div>
    </div>
  );
};

export default Teams2022;
