import React from 'react';
import "../assets/css/teams.scss";
import logo from '../assets/profilePictures/sample.jpg';

function Teams(props) {
    return (
        <div className="html">

            {/* DSC Lead------------------------------------------------- */}
            <div className="container">
                <div className="text-center m-4"><h1 id="heading">Our team</h1></div>

                <div className="row text-center">
                    <div className="col-12 lead mb-4">
                        <div className="card p-4 m-4">
                            <img src={logo} className="mt-2 mb-4" />
                            <h4>Deepika Rana</h4>
                            <h6>DSC Lead</h6>
                            <div className="socialIcons mt-3 mb-2">
                                <a href=""><i class="fab fa-github"></i></a>
                                <a href="" className="mx-4"><i class="fab fa-linkedin-in"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Core team members-------------------------------------------- */}
            <div className="container">
                <div className="text-center mt-5 mb-4"><h2>Core team members</h2></div>

                <div className="row text-center">
                    <div className="col-sm-12 col-md-6 col-lg-4  core-members">
                        <div className="card p-4 m-4">
                            <img src={logo} className="mt-2 mb-4" />
                            <h4>Deeksha Madan</h4>
                            <h6>Technical Lead</h6>
                            <div className="socialIcons mt-3 mb-2">
                                <a href=""><i class="fab fa-github"></i></a>
                                <a href="" className="mx-4"><i class="fab fa-linkedin-in"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4 core-members">
                        <div className="card p-4 m-4">
                            <img src={logo} className="mt-2 mb-4" />
                            <h4>Harshita Chaddha</h4>
                            <h6>Core member</h6>
                            <div className="socialIcons mt-3 mb-2">
                                <a href=""><i class="fab fa-github"></i></a>
                                <a href="" className="mx-4"><i class="fab fa-linkedin-in"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4 core-members">
                        <div className="card p-4 m-4">
                            <img src={logo} className="mt-2 mb-4" />
                            <h4>Roopam Garg</h4>
                            <h6>Sr. Web developer</h6>
                            <div className="socialIcons mt-3 mb-2">
                                <a href=""><i class="fab fa-github"></i></a>
                                <a href="" className="mx-4"><i class="fab fa-linkedin-in"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4 core-members">
                        <div className="card p-4 m-4">
                            <img src={logo} className="mt-2 mb-4" />
                            <h4>Aayush Parashar</h4>
                            <h6>Core member</h6>
                            <div className="socialIcons mt-3 mb-2">
                                <a href=""><i class="fab fa-github"></i></a>
                                <a href="" className="mx-4"><i class="fab fa-linkedin-in"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4 core-members">
                        <div className="card p-4 m-4">
                            <img src={logo} className="mt-2 mb-4" />
                            <h4>Anjali Saxena</h4>
                            <h6>Core member</h6>
                            <div className="socialIcons mt-3 mb-2">
                                <a href=""><i class="fab fa-github"></i></a>
                                <a href="" className="mx-4"><i class="fab fa-linkedin-in"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4 core-members">
                        <div className="card p-4 m-4">
                            <img src={logo} className="mt-2 mb-4" />
                            <h4>Ashish Papnai</h4>
                            <h6>Core member</h6>
                            <div className="socialIcons mt-3 mb-2">
                                <a href=""><i class="fab fa-github"></i></a>
                                <a href="" className="mx-4"><i class="fab fa-linkedin-in"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Executive members------------------------------------- */}
            <div className="container">
                <div className="text-center mt-5 mb-4"><h2>Executive members</h2></div>

                <div className="row text-center">

                <div className="col-sm-12 col-md-6 col-lg-4  core-members">
                        <div className="card p-4 m-4">
                            <img src={logo} className="mt-2 mb-4" />
                            <h4>Bhupen Pal</h4>
                            <h6>Sr. Web Developer</h6>
                            <div className="socialIcons mt-3 mb-2">
                                <a href=""><i class="fab fa-github"></i></a>
                                <a href="" className="mx-4"><i class="fab fa-linkedin-in"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4  core-members">
                        <div className="card p-4 m-4">
                            <img src={logo} className="mt-2 mb-4" />
                            <h4>Ishika</h4>
                            <h6>Web Developer</h6>
                            <div className="socialIcons mt-3 mb-2">
                                <a href=""><i class="fab fa-github"></i></a>
                                <a href="" className="mx-4"><i class="fab fa-linkedin-in"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4  core-members">
                        <div className="card p-4 m-4">
                            <img src={logo} className="mt-2 mb-4" />
                            <h4>Shubham Singla</h4>
                            <h6>Sr. UI/UX Developer</h6>
                            <div className="socialIcons mt-3 mb-2">
                                <a href=""><i class="fab fa-github"></i></a>
                                <a href="" className="mx-4"><i class="fab fa-linkedin-in"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4  core-members">
                        <div className="card p-4 m-4">
                            <img src={logo} className="mt-2 mb-4" />
                            <h4>Arpit Gupta</h4>
                            <h6>UI/UX Developer</h6>
                            <div className="socialIcons mt-3 mb-2">
                                <a href=""><i class="fab fa-github"></i></a>
                                <a href="" className="mx-4"><i class="fab fa-linkedin-in"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4  core-members">
                        <div className="card p-4 m-4">
                            <img src={logo} className="mt-2 mb-4" />
                            <h4>Saksham Arora</h4>
                            <h6>Open Source Executive</h6>
                            <div className="socialIcons mt-3 mb-2">
                                <a href=""><i class="fab fa-github"></i></a>
                                <a href="" className="mx-4"><i class="fab fa-linkedin-in"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4  core-members">
                        <div className="card p-4 m-4">
                            <img src={logo} className="mt-2 mb-4" />
                            <h4>Eishu Pal</h4>
                            <h6>Flutter Developer</h6>
                            <div className="socialIcons mt-3 mb-2">
                                <a href=""><i class="fab fa-github"></i></a>
                                <a href="" className="mx-4"><i class="fab fa-linkedin-in"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4  core-members">
                        <div className="card p-4 m-4">
                            <img src={logo} className="mt-2 mb-4" />
                            <h4>Kaustubh Gupta</h4>
                            <h6>Sr. ML Executive</h6>
                            <div className="socialIcons mt-3 mb-2">
                                <a href=""><i class="fab fa-github"></i></a>
                                <a href="" className="mx-4"><i class="fab fa-linkedin-in"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4  core-members">
                        <div className="card p-4 m-4">
                            <img src={logo} className="mt-2 mb-4" />
                            <h4>Ankit Bharadwaj</h4>
                            <h6>Android Developer</h6>
                            <div className="socialIcons mt-3 mb-2">
                                <a href=""><i class="fab fa-github"></i></a>
                                <a href="" className="mx-4"><i class="fab fa-linkedin-in"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4  core-members">
                        <div className="card p-4 m-4">
                            <img src={logo} className="mt-2 mb-4" />
                            <h4>Prateek Grewal</h4>
                            <h6>Sr. Content Writer</h6>
                            <div className="socialIcons mt-3 mb-2">
                                <a href=""><i class="fab fa-github"></i></a>
                                <a href="" className="mx-4"><i class="fab fa-linkedin-in"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4  core-members">
                        <div className="card p-4 m-4">
                            <img src={logo} className="mt-2 mb-4" />
                            <h4>Indrakant Dana</h4>
                            <h6>Sr. Graphic Designer</h6>
                            <div className="socialIcons mt-3 mb-2">
                                <a href=""><i class="fab fa-github"></i></a>
                                <a href="" className="mx-4"><i class="fab fa-linkedin-in"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4  core-members">
                        <div className="card p-4 m-4">
                            <img src={logo} className="mt-2 mb-4" />
                            <h4>Harsh Kaushik</h4>
                            <h6>Graphic Designer</h6>
                            <div className="socialIcons mt-3 mb-2">
                                <a href=""><i class="fab fa-github"></i></a>
                                <a href="" className="mx-4"><i class="fab fa-linkedin-in"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4  core-members">
                        <div className="card p-4 m-4">
                            <img src={logo} className="mt-2 mb-4" />
                            <h4>Ishita Arora</h4>
                            <h6>Sr. Social Media Manager</h6>
                            <div className="socialIcons mt-3 mb-2">
                                <a href=""><i class="fab fa-github"></i></a>
                                <a href="" className="mx-4"><i class="fab fa-linkedin-in"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            

        </div>
    );
}

export default Teams;