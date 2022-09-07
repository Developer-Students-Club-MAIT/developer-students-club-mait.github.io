import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";
import '../assets/css/teams2022.css'
import anshGoyal from '../assets/profilePictures/profilePictures2022/Ansh Goyal.jpg'
import bhavyaGiri from '../assets/profilePictures/profilePictures2022/Bhavya Giri.jpg'
import dakshMakhija from '../assets/profilePictures/profilePictures2022/Daksh Makhija.jpg'
import dishantNagpal from '../assets/profilePictures/profilePictures2022/Dishant Nagpal.jpg'
import rajatKumar from '../assets/profilePictures/profilePictures2022/Rajat Dev.jpg'
import rohanAditya from '../assets/profilePictures/profilePictures2022/Rohan Aditya.jpg'
import sahilRohera from '../assets/profilePictures/profilePictures2022/Sahil Rohera.jpg'
import souravAggarwal from '../assets/profilePictures/profilePictures2022/Sourav Aggarwal.jpg'
import vikasSingh from '../assets/profilePictures/profilePictures2022/Vikas Singh.jpg'
const Teams2022 = () => {
    const [members,setMembers] = useState([
        {
            name:'Bhumika Chopra',
            title:'Lead',
            img:dishantNagpal,
            github:'',
            linkedin:'',
            twitter:''
        },
        {
            name:'Sourav Aggarwal',
            title:'Technical Head',
            img:souravAggarwal,
            github:'https://github.com/100RAV-AGGARWAL',
            linkedin:'https://www.linkedin.com/in/sourav-aggarwal/',
            twitter:'https://twitter.com/souravagg01'
        },
        {
            name:'Bhavya Giri',
            title:'Outreach Head',
            img:bhavyaGiri,
            github:'https://github.com/bhavya-giri',
            linkedin:'https://www.linkedin.com/in/bhavyagiri/',
            twitter:'https://twitter.com/BhavyaGiri_'
        },
        {
            name:'Arnav Gupta',
            title:'Creative Design Head',
            img:dishantNagpal,
            github:'',
            linkedin:'',
            twitter:''
        },
        {
            name:'Aryan Mathur',
            title:'Research Head',
            img:dishantNagpal,
            github:'',
            linkedin:'',
            twitter:''
        },
        {
            name:'Ajay Pathak',
            title:'Cloud Mentor',
            img:dishantNagpal,
            github:'',
            linkedin:'',
            twitter:''
        },
        {
            name:'Vikas Singh',
            title:'Visual Editor',
            img:vikasSingh,
            github:'https://github.com/vikas70607',
            linkedin:'https://www.linkedin.com/in/vikas-singh-233a28229',
            twitter:'https://twitter.com/sanguine_spirt?t=U24aHrEANt0OMc9sR_Tx9Q&s=09'
        },
        {
            name:'Rohan Aditya',
            title:'Content Writer',
            img:rohanAditya,
            github:'https://github.com/Adityarohan17',
            linkedin:'https://www.linkedin.com/in/rohan-aditya-5a583121a/',
            twitter:'https://twitter.com/ROHANAD12962590'
        },
        {
            name:'Ansh Goyal',
            title:'Social Media Manager',
            img:anshGoyal,
            github:'https://github.com/AnshGoyal27',
            linkedin:'https://www.linkedin.com/in/ansh-goyal-211623228',
            twitter:'https://twitter.com/AnshGoyal27?s=08'
        },
        {
            name:'Nawed Ali',
            title:'Blockchain Mentor',
            img:dishantNagpal,
            github:'',
            linkedin:'',
            twitter:''
        },
        {
            name:'Sahil Rohera',
            title:'Sr Web Developer',
            img:sahilRohera,
            github:'https://github.com/sahilrohera10',
            linkedin:'https://www.linkedin.com/in/sahil-rohera-202939214/',
            twitter:'https://twitter.com/SahilRohera10'
        },
        {
            name:'Aditya',
            title:'Graphic Designer',
            img:dishantNagpal,
            github:'',
            linkedin:'',
            twitter:''
        },
        {
            name:'Dhruv Chopra',
            title:'Content Writer',
            img:dishantNagpal,
            github:'',
            linkedin:'',
            twitter:''
        },
        {
            name:'Daksh Makhija',
            title:'Event Manager',
            img:dakshMakhija,
            github:'',
            linkedin:'https://www.linkedin.com/in/daksh-makhija-a30892202',
            twitter:''
        },
        {
            name:'Ishar Jain',
            title:'Jr Web Developer',
            img:dishantNagpal,
            github:'www.github.com/ishar19',
            linkedin:'www.linkedin.com/in/ishar-jain-8401031b5',
            twitter:'www.twitter.com/ishartwt'
        },
        {
            name:'Rajat Kumar',
            title:'Flutter Developer',
            img:rajatKumar,
            github:'https://www.github.com/loyaltytrooper',
            linkedin:'https://www.linkedin.com/in/rajat-dev',
            twitter:'https://twitter.com/LoyaltyTrooper?t=jtBVB4h9_3lEm2x9ftASLA&s=09'
        },
        {
            name:'Jiya Verma',
            title:'Graphic Designer',
            img:dishantNagpal,
            github:'',
            linkedin:'',
            twitter:''
        },
        {
            name:'Taniya Sharma',
            title:'Competitive Programmer',
            img:dishantNagpal,
            github:'',
            linkedin:'',
            twitter:''
        },
        {
            name:'Suraj Uppal',
            title:'ML Mentor',
            img:dishantNagpal,
            github:'',
            linkedin:'',
            twitter:''
        },
        {
            name:'Dishant Nagpal',
            title:'Open Source Mentor',
            img:dishantNagpal,
            github:'https://github.com/Dishant10',
            linkedin:'https://www.linkedin.com/in/dishant-nagpal-6a365019a/',
            twitter:'https://twitter.com/DishantNagpal10'
        },

    ])
    const membersCard = members.map(member=>{
        return(
            <div className='main-box inner flex'>
                <div className='team-wrap'>
                    <div className='team-member text-center'>
                        <div className='team-img'>
                            <img src={member.img}/>
                            <div className='overlay'>
                                <div className='team-details text-center'>
                                    <p>{member.name}</p>
                                    <div className='socials mt-20'>
                                        <a href={member.github}><span className='fa fa-github'></span></a>
                                        <a href={member.linkedin}><span className='fa fa-linkedin'></span></a>
                                        <a href={member.twitter}><span className='fa fa-twitter'></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h6 className='team-title'>{member.name}</h6>
                        <span>{member.title}</span>
                    </div>
                </div>
            </div>
        )
    })
  return (
    <div className='team-container'>
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
        <h1 className='heading'>Our Team</h1>
        <div className='grid'>
        {membersCard}
        </div>
        
    </div>
  )
}

export default Teams2022