import React from 'react';
import ReactDOM from 'react-dom';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import SVG from 'react-inlinesvg';
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import github from '../assets/github.png'
import insta from '../assets/insta.png'
import dsc from '../assets/dsc.JPG'
const Footer = () => {
    return(
        <div>
            
            <Grid container spacing = {3} style = {{marginBottom: "-2%"}}>
                <Grid item sm = {12} md = {4} style = {{paddingTop: "5%"}}>
                    <center>
                    <div>
                    <img src = {dsc} style = {{width: "80%"}}></img>
                    </div>
                    <div style = {{marginLeft : "10%"}}>
                    <a href = "https://www.instagram.com/gdsc_mait/">
                        <img src = {insta} className = "footer-icon"></img>
                    </a>
                    <a href = "https://m.facebook.com/Developer-Student-Club-MAIT">
                        <img src = {facebook} className = "footer-icon"></img>
                    </a>
                    <a href = "https://github.com/Developer-Students-Club-MAIT">
                        <img src = {github} className = "footer-icon"></img>
                    </a>
                    <a href = "https://twitter.com/dsc_mait">
                        <img src = {twitter} className = "footer-icon"></img>
                    </a>
                    </div>
                    </center>
                </Grid>
                <Grid item sm = {12} md = {8} style = {{backgroundColor: "#CCCCCC",flex:1}}>
                <div className="mapouter">
        <div className="gmap_canvas" style = {{width: "100%"}}>
        
          <iframe
            title="map"
            width="100%"
            height="300px"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=mait&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>
                </Grid>
            </Grid>
            </div>
    );
};
export default Footer;