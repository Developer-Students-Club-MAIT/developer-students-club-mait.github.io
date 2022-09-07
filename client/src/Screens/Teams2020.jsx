import React, { useEffect } from "react";
import "../assets/css/teams.scss";
import { Link } from "react-router-dom";
import logo from "../assets/profilePictures/profilePictures2020/sample.jpg";
import deepika from "../assets/profilePictures/profilePictures2020/deepika.jpg";
import deeksha from "../assets/profilePictures/profilePictures2020/deeksha.jpg";
import harshita from "../assets/profilePictures/profilePictures2020/harshita.jpg";
import roopam from "../assets/profilePictures/profilePictures2020/roopam.jpg";
import ayush from "../assets/profilePictures/profilePictures2020/ayush.jpg";
import anjali from "../assets/profilePictures/profilePictures2020/anjali.jpg";
import ashish from "../assets/profilePictures/profilePictures2020/ashish.jpg";
import bhupen from "../assets/profilePictures/profilePictures2020/bhupen.jpg";
import ishika from "../assets/profilePictures/profilePictures2020/ishika.jpg";
import shubham from "../assets/profilePictures/profilePictures2020/shubham.jpg";
import arpit from "../assets/profilePictures/profilePictures2020/arpit.jpg";
import saksham from "../assets/profilePictures/profilePictures2020/saksham.jpg";
import eishu from "../assets/profilePictures/profilePictures2020/eishu.jpg";
import kaustubh from "../assets/profilePictures/profilePictures2020/kaustubh.jpg";
import ankit from "../assets/profilePictures/profilePictures2020/ankit.jpg";
import prateek from "../assets/profilePictures/profilePictures2020/prateek.jpg";
import indrakant from "../assets/profilePictures/profilePictures2020/indrakant.jpg";
import harsh from "../assets/profilePictures/profilePictures2020/harsh.jpg";
import ishita from "../assets/profilePictures/profilePictures2020/ishita.jpg";

function Teams2020(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="html">
      {/* DSC Lead------------------------------------------------- */}
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
      <div className="container-fluid">
        <div className="text-center m-4">
          <h1 id="heading">Our team</h1>
        </div>

        <div className="row text-center">
          <div className="col-12 lead mb-4">
            <div className="team-card p-4 m-4">
              <img src={deepika} className="mt-2 mb-4" />
              <h4>Deepika Rana</h4>
              <h6>DSC Lead</h6>
              <div className="socialIcons mt-3 mb-2">
                <a href="https://github.com/deepika-rana">
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/deepika-rana/"
                  className="mx-4"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://twitter.com/deepika_rana_">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core team members-------------------------------------------- */}
      <div className="container-fluid">
        <div className="text-center mt-5 mb-4">
          <h2>Core team members</h2>
        </div>

        <div className="row text-center">
          <div className="col-sm-12 col-md-6 col-lg-4  core-members">
            <div className="team-card p-4 m-4">
              <img src={deeksha} className="mt-2 mb-4" />
              <h4>Deeksha Madan</h4>
              <h6>Core member</h6>
              <div className="socialIcons mt-3 mb-2">
                <a href="https://github.com/icoder18">
                  <i class="fab fa-github"></i>
                </a>
                <a href="http://linkedin.com/in/deekshamadan" className="mx-4">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 core-members">
            <div className="team-card p-4 m-4">
              <img src={harshita} className="mt-2 mb-4" />
              <h4>Harshita Chaddha</h4>
              <h6>Core member</h6>
              <div className="socialIcons mt-3 mb-2">
                <a href="">
                  <i class="fab fa-github"></i>
                </a>
                <a href="" className="mx-4">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 core-members">
            <div className="team-card p-4 m-4">
              <img src={roopam} className="mt-2 mb-4" />
              <h4>Roopam Garg</h4>
              <h6>Core member</h6>
              <div className="socialIcons mt-3 mb-2">
                <a href="https://github.com/roopamgarg">
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/roopamgarg1/"
                  className="mx-4"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 core-members">
            <div className="team-card p-4 m-4">
              <img src={ayush} className="mt-2 mb-4" />
              <h4>Aayush Parashar</h4>
              <h6>Core member</h6>
              <div className="socialIcons mt-3 mb-2">
                <a href="https://github.com/i-aayush711">
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="http://linkedin.com/in/aayush-parashar"
                  className="mx-4"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 core-members">
            <div className="team-card p-4 m-4">
              <img src={anjali} className="mt-2 mb-4" />
              <h4>Anjali Saxena</h4>
              <h6>Core member</h6>
              <div className="socialIcons mt-3 mb-2">
                <a href="https://github.com/Anjali2001saxena">
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/anjali-saxena-1437ab1a4/"
                  className="mx-4"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 mb-4 core-members">
            <div className="team-card p-4 m-4">
              <img src={ashish} className="mt-2 mb-4" />
              <h4>Ashish Papnai</h4>
              <h6>Core member</h6>
              <div className="socialIcons mt-3 mb-2">
                <a href="https://github.com/ashishpapanai">
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="https://linkedin.com/in/ashishpapanai"
                  className="mx-4"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Executive members------------------------------------- */}
      <div className="container-fluid">
        <div className="text-center mt-5 mb-4">
          <h2>Executive members</h2>
        </div>

        <div className="row text-center mb-5">
          <div className="col-sm-12 col-md-6 col-lg-4  core-members">
            <div className="team-card p-4 m-4">
              <img src={bhupen} className="mt-2 mb-4" />
              <h4>Bhupen Pal</h4>
              <h6>Sr. Web Developer</h6>
              <div className="socialIcons mt-3 mb-2">
                <a href="https://github.com/BhupenPal">
                  <i class="fab fa-github"></i>
                </a>
                <a href="https://in.linkedin.com/in/bhupenpal" className="mx-4">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4  core-members">
            <div className="team-card p-4 m-4">
              <img src={ishika} className="mt-2 mb-4" />
              <h4>Ishika</h4>
              <h6>Web Developer</h6>
              <div className="socialIcons mt-3 mb-2">
                <a href="https://github.com/ishikalohia">
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/ishika-lohia-30484817a"
                  className="mx-4"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://twitter.com/Ishika30055013?s=09">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4  core-members">
            <div className="team-card p-4 m-4">
              <img src={shubham} className="mt-2 mb-4" />
              <h4>Shubham Singla</h4>
              <h6>Sr. UI/UX Developer</h6>
              <div className="socialIcons mt-3 mb-2">
                <a href="https://github.com/shubhamsingla807">
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/shubhamsingla/"
                  className="mx-4"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://twitter.com/shubham_807">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4  core-members">
            <div className="team-card p-4 m-4">
              <img src={arpit} className="mt-2 mb-4" />
              <h4>Arpit Gupta</h4>
              <h6>UI/UX Developer</h6>
              <div className="socialIcons mt-3 mb-2">
                <a href="https://github.com/arpit2205">
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/arpit-gupta-28710318b"
                  className="mx-4"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4  core-members">
            <div className="team-card p-4 m-4">
              <img src={saksham} className="mt-2 mb-4" />
              <h4>Saksham Arora</h4>
              <h6>Open Source Executive</h6>
              <div className="socialIcons mt-3 mb-2">
                <a href="https://github.com/sakshamarora1">
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/sakshamarora1"
                  className="mx-4"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://twitter.com/sakshamarora__">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4  core-members">
            <div className="team-card p-4 m-4">
              <img src={eishu} className="mt-2 mb-4" />
              <h4>Eishu Pal</h4>
              <h6>Flutter Developer</h6>
              <div className="socialIcons mt-3 mb-2">
                <a href="https://github.com/eishu18sept">
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/eishu-pal-89aaa6193/"
                  className="mx-4"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4  core-members">
            <div className="team-card p-4 m-4">
              <img src={kaustubh} className="mt-2 mb-4" />
              <h4>Kaustubh Gupta</h4>
              <h6>Sr. ML Executive</h6>
              <div className="socialIcons mt-3 mb-2">
                <a href="https://github.com/kaustubhgupta">
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/kaustubh-gupta-612767ab/"
                  className="mx-4"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://twitter.com/Kaustubh1828">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4  core-members">
            <div className="team-card p-4 m-4">
              <img src={ankit} className="mt-2 mb-4" />
              <h4>Ankit Bharadwaj</h4>
              <h6>Android Developer</h6>
              <div className="socialIcons mt-3 mb-2">
                <a href="https://github.com/ankit1414">
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/ankit1414"
                  className="mx-4"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4  core-members">
            <div className="team-card p-4 m-4">
              <img src={prateek} className="mt-2 mb-4" />
              <h4>Prateek Grewal</h4>
              <h6>Sr. Content Writer</h6>
              <div className="socialIcons mt-3 mb-2">
                <a href="https://github.com/prateekgrewal">
                  <i class="fab fa-github"></i>
                </a>
                <a href="" className="mx-4">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4  core-members">
            <div className="team-card p-4 m-4">
              <img src={indrakant} className="mt-2 mb-4" />
              <h4>Indrakant Dana</h4>
              <h6>Sr. Graphic Designer</h6>
              <div className="socialIcons mt-3 mb-2">
                <a href="">
                  <i class="fab fa-github"></i>
                </a>
                <a href="" className="mx-4">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4  core-members">
            <div className="team-card p-4 m-4">
              <img src={harsh} className="mt-2 mb-4" />
              <h4>Harsh Kaushik</h4>
              <h6>Graphic Designer</h6>
              <div className="socialIcons mt-3 mb-2">
                <a href="https://github.com/haarsh01">
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/haarsh01/"
                  className="mx-4"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4  core-members">
            <div className="team-card p-4 m-4">
              <img src={ishita} className="mt-2 mb-4" />
              <h4>Ishita Arora</h4>
              <h6>Sr. Social Media Manager</h6>
              <div className="socialIcons mt-3 mb-2">
                <a href="https://github.com/ishitacs">
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="http://linkedin.com/in/ishita-arora-1a52a619b"
                  className="mx-4"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams2020;
