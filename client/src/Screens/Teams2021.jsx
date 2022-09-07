import React, { useEffect } from "react";
import "../assets/css/teams2021.scss";
import { Link } from "react-router-dom";
//profile pictures
import aditya from "../assets/profilePictures/profilePictures2021/aditya.jpg";
import shitiz from "../assets/profilePictures/profilePictures2021/Shizzz.png";
import satyam from "../assets/profilePictures/profilePictures2021/satyam.jpg";
import gauransh from "../assets/profilePictures/profilePictures2021/gauransh.jpg";
import aakash from "../assets/profilePictures/profilePictures2021/akash.jpg";
import mohd_arif from "../assets/profilePictures/profilePictures2021/mohd_arif.png";
import reeha from "../assets/profilePictures/profilePictures2021/reeha.png";
import charvi from "../assets/profilePictures/profilePictures2021/charvi.jpg";
import nidhi from "../assets/profilePictures/profilePictures2021/nidhi.jpeg";
import tushar from "../assets/profilePictures/profilePictures2021/tushar.jpg";
import aman from "../assets/profilePictures/profilePictures2021/aman.jpg";
import prakhar from "../assets/profilePictures/profilePictures2021/prakhar.jpg";
import shraddha from "../assets/profilePictures/profilePictures2021/shraddha.jpg";
import piyush from "../assets/profilePictures/profilePictures2021/piyush.png";
import vidushi from "../assets/profilePictures/profilePictures2021/vidushi.jpeg";
import abhishek from "../assets/profilePictures/profilePictures2021/abhishek.jpg";

//function to refresh page after loading once
function refreshPage() {
  setTimeout(() => {
    window.location.reload(false);
  }, 1);
  console.log("page to reload");
}

function Teams2021(props) {
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
        <div className="text-center ">
          <h1 className="big-heading">Our team</h1>
        </div>
        <br />
        <div className="row text-center">
          <div className=" mb-4 square-flip leader">
            <div className="aditya square">
              <div className="square-container">
                <div className="align-center">
                  <img src={aditya} height="200vh" width="180vw" alt="" />
                </div>
                <h2 className="textshadow">Aditya Jha</h2>
                <h3 className="textshadow">DSC Lead</h3>
              </div>
              <div className="flip-overlay"></div>
            </div>
            <div className="aditya square2">
              <div className="square-container2">
                <div className="align-center"></div>
                <h2>Social Links</h2>
                <a
                  href="https://www.linkedin.com/in/aditya-jha-b66545191/"
                  className="fa fa-linkedin"
                ></a>
                <a
                  href="https://twitter.com/AdityaJha_1504"
                  className="fa fa-twitter"
                ></a>
                <a
                  href="https://github.com/Aditya-Jha2002"
                  className="fa fa-github"
                ></a>
              </div>
              <div className="flip-overlay"></div>
            </div>
          </div>
        </div>

        {/*Technical Lead*/}
        <div className="row text-center">
          <div className="leader mb-4 square-flip">
            <div className="shitiz square">
              <div className="square-container">
                <div className="align-center">
                  <img src={shitiz} height="200vh" width="180vw" alt="" />
                </div>
                <h2 className="textshadow">Shitiz Aggarwal</h2>
                <h3 className="textshadow">Technical Lead</h3>
              </div>
              <div className="flip-overlay"></div>
            </div>
            <div className="shitiz square2">
              <div className="square-container2">
                <div className="align-center"></div>
                <h2>Social Links</h2>
                <a
                  href="https://www.linkedin.com/in/shitiz-aggarwal-920b411a6/"
                  className="fa fa-linkedin"
                ></a>
                <a
                  href="https://twitter.com/Shitiz_Agg"
                  className="fa fa-twitter"
                ></a>
                <a
                  href="https://github.com/SHITIZ-AGGARWAL"
                  className="fa fa-github"
                ></a>
              </div>
              <div className="flip-overlay"></div>
            </div>
          </div>
        </div>
      </div>

      {/*Core Members*/}

      <div className="container-fluid">
        <div className="text-center m-4 p-4">
          <h2 className="big-heading">Core team members</h2>
        </div>

        <div className="row row1 text-center">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="square-flip core-members">
              <div className="prakhar square">
                <div className="square-container">
                  <div className="align-center">
                      <img src={prakhar} height="200vh" width="180vw" alt="" />
                  </div>
                  <h2 className="textshadow">Prakhar Sharma</h2>
                  <h3 className="textshadow">Sr. Web Developer</h3>
                </div>
                <div className="flip-overlay"></div>
              </div>
              <div className="prakhar square2">
                <div className="square-container2">
                  <div className="align-center"></div>
                  <h2>Social Links</h2>
                  <a
                    href="https://www.linkedin.com/in/prakhar-sharma-2206"
                    className="fa fa-linkedin"
                  ></a>
                  <a href="#" className="fa fa-twitter"></a>
                  <a
                    href="https://github.com/Prakharsharma2206"
                    className="fa fa-github"
                  ></a>
                </div>
                <div className="flip-overlay"></div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="square-flip core-members">
              <div className="vidushi square">
                <div className="square-container">
                  <div className="align-center">
                    <img src={vidushi} height="200vh" width="180vw" alt="" />
                  </div>
                  <h2 className="textshadow">Vidushi Tyagi</h2>
                  <h3 className="textshadow">Jr. Web Developer</h3>
                </div>
                <div className="flip-overlay"></div>
              </div>
              <div className="vidushi square2">
                <div className="square-container2">
                  <div className="align-center"></div>
                  <h2>Social Links</h2>
                  <a
                    href="https://www.linkedin.com/in/vidushi-tyagi-51b2511aa/"
                    className="fa fa-linkedin"
                  ></a>
                  <a href="#" className="fa fa-twitter"></a>
                  <a
                    href="https://github.com/vidushityagi8"
                    className="fa fa-github"
                  ></a>
                </div>
                <div className="flip-overlay"></div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="square-flip core-members">
              <div className="gauransh square">
                <div className="square-container">
                  <div className="align-center">
                    <img src={gauransh} height="200vh" width="180vw" alt="" />
                  </div>
                  <h2 className="textshadow">Gauransh Kumar</h2>
                  <h3 className="textshadow">DevOps Developer</h3>
                </div>
                <div className="flip-overlay"></div>
              </div>
              <div className="gauransh square2">
                <div className="square-container2">
                  <div className="align-center"></div>
                  <h2>Social Links</h2>
                  <a
                    href="https://www.linkedin.com/in/gauranshk21"
                    className="fa fa-linkedin"
                  ></a>
                  <a
                    href="https://twitter.com/gauransh_k"
                    className="fa fa-twitter"
                  ></a>
                  <a
                    href="https://github.com/gauranshkumar"
                    className="fa fa-github"
                  ></a>
                </div>
                <div className="flip-overlay"></div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="square-flip core-members">
              <div className="akash square">
                <div className="square-container">
                  <div className="align-center">
                    <img src={aakash} height="200vh" width="180vw" alt="" />
                  </div>
                  <h2 className="textshadow">Aakash Gupta</h2>
                  <h3 className="textshadow">Jr. Android Developer</h3>
                </div>
                <div className="flip-overlay"></div>
              </div>
              <div className="akash square2">
                <div className="square-container2">
                  <div className="align-center"></div>
                  <h2>Social Links</h2>
                  <a
                    href="https://www.linkedin.com/in/acash512"
                    className="fa fa-linkedin"
                  ></a>
                  <a
                    href="https://twitter.com/acash512?s=08"
                    className="fa fa-twitter"
                  ></a>
                  <a
                    href="https://github.com/Acash512"
                    className="fa fa-github"
                  ></a>
                </div>
                <div className="flip-overlay"></div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="square-flip core-members mb-4">
              <div className="mohd square">
                <div className="square-container">
                  <div className="align-center">
                    <img src={mohd_arif} height="200vh" width="180vw" alt="" />
                  </div>
                  <h2 className="textshadow">Mohd Arifullah</h2>
                  <h3 className="textshadow">Sr. Android Developer</h3>
                </div>
                <div className="flip-overlay"></div>
              </div>
              <div className="mohd square2">
                <div className="square-container2">
                  <div className="align-center"></div>
                  <h2>Social Links</h2>
                  <a
                    href="https://www.linkedin.com/in/mohdarif8299/"
                    className="fa fa-linkedin"
                  ></a>
                  <a href="#" className="fa fa-twitter"></a>
                  <a
                    href="https://github.com/mohdarif8299"
                    className="fa fa-github"
                  ></a>
                </div>
                <div className="flip-overlay"></div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className=" square-flip core-members">
              <div className="reeha square">
                <div className="square-container">
                  <div className="align-center">
                    <img src={reeha} height="200vh" width="180vw" alt="" />
                  </div>
                  <h2 className="textshadow">Syeda Reeha Quasar</h2>
                  <h3 className="textshadow">Sr. ML Developer</h3>
                </div>
                <div className="flip-overlay"></div>
              </div>
              <div className="reeha square2">
                <div className="square-container2">
                  <div className="align-center"></div>
                  <h2>Social Links</h2>
                  <a
                    href="https://www.linkedin.com/in/syeda-reeha-quasar"
                    className="fa fa-linkedin"
                  ></a>
                  <a
                    href="https://twitter.com/QuasarReeha"
                    className="fa fa-twitter"
                  ></a>
                  <a
                    href="https://github.com/syedareehaquasar"
                    className="fa fa-github"
                  ></a>
                </div>
                <div className="flip-overlay"></div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="square-flip core-members">
              <div className="tushar square">
                <div className="square-container">
                  <div className="align-center">
                    <img src={tushar} height="200vh" width="180vw" alt="" />
                  </div>
                  <h2 className="textshadow">Tushar Bhutani</h2>
                  <h3 className="textshadow">Visual Editor</h3>
                </div>
                <div className="flip-overlay"></div>
              </div>
              <div className="tushar square2">
                <div className="square-container2">
                  <div className="align-center"></div>
                  <h2>Social Links</h2>
                  <a
                    href="http://www.linkedin.com/tubhutani13"
                    className="fa fa-linkedin"
                  ></a>
                  <a href="#" className="fa fa-twitter"></a>
                  <a href="#" className="fa fa-github"></a>
                </div>
                <div className="flip-overlay"></div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="square-flip core-members">
              <div className="gdsc square"></div>
              <div className="gdsc square2"></div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="square-flip core-members">
              <div className="satyam square">
                <div className="square-container">
                  <div className="align-center">
                    <img src={satyam} height="200vh" width="180vw" alt="" />
                  </div>
                  <h2 className="textshadow">Satyam Mishra</h2>
                  <h3 className="textshadow">Graphic Designer</h3>
                </div>
                <div className="flip-overlay"></div>
              </div>
              <div className="satyam square2">
                <div className="square-container2">
                  <div className="align-center"></div>
                  <h2>Social Links</h2>
                  <a
                    href="https://www.linkedin.com/in/satyam86400/"
                    className="fa fa-linkedin"
                  ></a>
                  <a
                    href="https://twitter.com/satyam86400"
                    className="fa fa-twitter"
                  ></a>
                  <a
                    href="https://github.com/SATYAM86400"
                    className="fa fa-github"
                  ></a>
                </div>
                <div className="flip-overlay"></div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="square-flip core-members">
              <div className="aman square">
                <div className="square-container">
                  <div className="align-center">
                    <img src={aman} height="200vh" width="180vw" alt="" />
                  </div>
                  <h2 className="textshadow">Aman Kumar</h2>
                  <h3 className="textshadow">Flutter Developer</h3>
                </div>
                <div className="flip-overlay"></div>
              </div>
              <div className="aman square2">
                <div className="square-container2">
                  <div className="align-center"></div>
                  <h2>Social Links</h2>
                  <a
                    href="http://linkedin.com/in/thisisamank"
                    className="fa fa-linkedin"
                  ></a>
                  <a
                    href="https://twitter.com/thisisaman01"
                    className="fa fa-twitter"
                  ></a>
                  <a
                    href="https://github.com/thisisamank"
                    className="fa fa-github"
                  ></a>
                </div>
                <div className="flip-overlay"></div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="square-flip core-members">
              <div className="piyush square">
                <div className="square-container">
                  <div className="align-center">
                    <img src={piyush} height="200vh" width="180vw" alt="" />
                  </div>
                  <h2 className="textshadow">Piyush Dhall</h2>
                  <h3 className="textshadow">Cloud Mentor</h3>
                </div>
                <div className="flip-overlay"></div>
              </div>
              <div className="piyush square2">
                <div className="square-container2">
                  <div className="align-center"></div>
                  <h2>Social Links</h2>
                  <a
                    href="https://www.linkedin.com/in/piyush-dhall/"
                    className="fa fa-linkedin"
                  ></a>
                  <a href="#" className="fa fa-twitter"></a>
                  <a
                    href="https://github.com/diamondzxd"
                    className="fa fa-github"
                  ></a>
                </div>
                <div className="flip-overlay"></div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="square-flip core-members">
              <div className="abhishek square">
                <div className="square-container">
                  <div className="align-center">
                    <img src={abhishek} height="200vh" width="180vw" alt="" />
                  </div>
                  <h2 className="textshadow">Abhishek Rawat</h2>
                  <h3 className="textshadow">Open Source Mentor</h3>
                </div>
                <div className="flip-overlay"></div>
              </div>
              <div className="abhishek square2">
                <div className="square-container2">
                  <div className="align-center"></div>
                  <h2>Social Links</h2>
                  <a
                    href="https://www.linkedin.com/in/abshk-jr/"
                    className="fa fa-linkedin"
                  ></a>
                  <a
                    href="https://twitter.com/abshk_jr"
                    className="fa fa-twitter"
                  ></a>
                  <a
                    href="https://github.com/abshk-jr"
                    className="fa fa-github"
                  ></a>
                </div>
                <div className="flip-overlay"></div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="square-flip core-members">
              <div className="nidhi square">
                <div className="square-container">
                  <div className="align-center">
                    <img src={nidhi} height="200vh" width="180vw" alt="" />
                  </div>
                  <h2 className="textshadow">Nidhi Chaurasia</h2>
                  <h3 className="textshadow">Content Creator</h3>
                </div>
                <div className="flip-overlay"></div>
              </div>
              <div className="nidhi square2">
                <div className="square-container2">
                  <div className="align-center"></div>
                  <h2>Social Links</h2>
                  <a
                    href="https://www.linkedin.com/in/nidhi-chaurasia-62b0781bb/"
                    className="fa fa-linkedin"
                  ></a>
                  <a
                    href="https://twitter.com/TweedyCharm"
                    className="fa fa-twitter"
                  ></a>
                  <a
                    href="https://github.com/NidhiChaurasia"
                    className="fa fa-github"
                  ></a>
                </div>
                <div className="flip-overlay"></div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="square-flip core-members">
              <div className="shraddha square">
                <div className="square-container">
                  <div className="align-center">
                    <img src={shraddha} height="200vh" width="180vw" alt="" />
                  </div>
                  <h2 className="textshadow">Shraddha Sharma</h2>
                  <h3 className="textshadow">Content Writer</h3>
                </div>
                <div className="flip-overlay"></div>
              </div>
              <div className="shraddha square2">
                <div className="square-container2">
                  <div className="align-center"></div>
                  <h2>Social Links</h2>
                  <a
                    href="https://www.linkedin.com/in/shraddha-sharma-68b292204"
                    className="fa fa-linkedin"
                  ></a>
                  <a href="#" className="fa fa-twitter"></a>
                  <a href="#" className="fa fa-github"></a>
                </div>
                <div className="flip-overlay"></div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="square-flip core-members">
              <div className="charvi square">
                <div className="square-container">
                  <div className="align-center">
                    <img src={charvi} height="200vh" width="180vw" alt="" />
                  </div>
                  <h2 className="textshadow">Charvi Verma</h2>
                  <h3 className="textshadow">Outreach Head</h3>
                </div>
                <div className="flip-overlay"></div>
              </div>
              <div className="charvi square2">
                <div className="square-container2">
                  <div className="align-center"></div>
                  <h2>Social Links</h2>
                  <a
                    href="https://www.linkedin.com/in/4v-verma/"
                    className="fa fa-linkedin"
                  ></a>
                  <a href="#" className="fa fa-twitter"></a>
                  <a
                    href="https://github.com/CharviVerma"
                    className="fa fa-github"
                  ></a>
                </div>
                <div className="flip-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams2021;
