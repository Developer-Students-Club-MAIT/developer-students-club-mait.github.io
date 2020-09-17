import React from 'react';
import ReactDOM from 'react-dom';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import laptop from '../assets/project1.svg'

function Home(){
    const blue = {
        color: "#346DF1"
    };
    const yellow = {
        color: "#FBBD00"
    };
    const green = {
        color: "#069E57"
    };
    const red = {
        color: "#EB4132"
    };
    return(
        <div>
             <Box className="mt-9">
            <Grid container spacing={3}>
            <Grid item sm = {12} md = {1} lg = {1}></Grid>
            <Grid item sm={12} md={7} lg={7}>
            <div className = "main-heading">
                <h1 className = "heading"><span style = {green}>D</span>eveloper <span style = {yellow}>S</span>tudents <span style = {red}>C</span>lub</h1>
            </div> 
            <div className = "college-name"><span style = {blue}>Maharaja</span> <span style = {yellow}>Agrasen</span> <span style = {green}>Institute</span><span style = {blue}> Of </span> <span style = {red}>technology</span></div>
            <div className = "para-first"><p className = "para-first-style">Developer Student Clubs MAIT is university based community groups for students interested in Google developer and latest technologies.
            Students from all undergraduate years with an interest in growing as a developer are welcome. By joining a DSC, students grow their knowledge in a peer-to-peer learning environment and build solutions in a community.</p></div>
            <div className = "button"><span className = "button-text">CTA</span></div>
            </Grid>
            <Grid item sm={12} md={4} lg={4}><div className = "head-image"></div> </Grid>
             
            </Grid>
            <Grid container spacing = {3}>
                <Grid item md = {6}>
                    <div className = "blue-box"><h1 className = "box-head"><center>Connect</center></h1>
                    <p className = "box-content">Meet other students on campus interested in developer technologies. All are welcome, including those with diverse backgrounds and different majors. </p></div>
                </Grid>
                <Grid item md = {6}></Grid>
            </Grid>
            <Grid container spacing = {3}>
            <Grid item md = {6}></Grid>
                <Grid item md = {6}>
                    <div className = "green-box"><h1 className = "box-head"><center>About</center></h1>
                    <p className = "box-content">Meet other students on campus interested in developer technologies. All are welcome, including those with diverse backgrounds and different majors</p></div>
                </Grid>
            </Grid>
            <Grid container spacing = {3}>
            <Grid item xs = {12}>
                <div className = "grey-box">
                    <p className = "grey-box-content">
                    <h1 style = {{color: "#000000"}} className = "box-head"><center>Community Guidelines</center></h1>
                    When you join DSC MAIT, you’re joining a community. And like any growing community, a few ground rules about expected behavior are good for everyone. These guidelines cover both online (e.g. mailing lists, social channels) and offline (e.g. in-person meetups) behavior.<br>
                    </br>
                    <br></br>
                    Violations of code of conduct can result in members being removed from DSC MAIT. Use your best judgement, and if you’d like more clarity or have questions feel free to reach out.</p>
                
                </div>
            </Grid>
            </Grid>
            <Grid container spacing = {3}>
                <Grid item sm = {12} md = {6}>
                    <div class = "project-box"><h1 style = {blue} className = "box-head"><center>Lorem ipsum Project</center></h1>
                    <p style = {{color: "#464646"}} className = "box-content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                    </div>

                </Grid>
                <Grid item sm = {12} md = {6}>
                    <div class = "project-box"><h1 style = {blue} className = "box-head"><center>Lorem ipsum Project</center></h1>
                    <p style = {{color: "#464646"}} className = "box-content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                    </div>
                </Grid>
            </Grid>
            </Box>
        </div>
        
    );
}

export default Home;


