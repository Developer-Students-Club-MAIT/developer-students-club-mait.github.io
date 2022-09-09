import React, { useState, useEffect } from 'react';
import { withStyles, Grid, Typography, Divider } from "@material-ui/core";
import Loader from '../Components/Loader.jsx';
import '../assets/css/Blogs.scss'


function Blogs(props) {
    const [PostData, setPostData] = useState(null);
    const [Loading, setLoading] = useState(false);

    async function FetchBlogsAPI() {
        setLoading(true)

        //Old Medium Blogs
        await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/dscmait`)
            .then(doc => doc.json())
            .then(posts => {
                setPostData(posts.items)
            })
            .catch(err => console.log(err))

        //New Medium Blogs (2022 onwards)
        await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@gdscmait`)
            .then(doc => doc.json())
            .then(posts => {
                if (posts.items.length) {
                    setPostData(PostData => [...posts.items, ...PostData])
                }
                setLoading(false)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        window.scroll(0, 0)
        FetchBlogsAPI()
    }, [])

    if (Loading) {
        return <Loader />
    }


    return (
        <Grid container component='main'>
            <Grid item xs={12}>
                <Typography variant='h2' align='center' style={{ color: "#4285f4", fontFamily: "Lato", fontWeight: "700" }}>Our Blogs</Typography>
            </Grid>
            <Grid container component='div' justify='space-evenly'>
                {!Loading ?
                    (
                        PostData && PostData.map((post, index) => {
                            let BackgroundImg = document.createElement("div");
                            BackgroundImg.innerHTML = post.description;
                            console.log(post)
                            BackgroundImg = BackgroundImg.querySelector("img").src
                            let Description = document.createElement("div");
                            Description.innerHTML = post.description;
                            Description = Description.querySelector("p").innerHTML
                            return (
                                <Grid item sm={12} md={6} key={index}>
                                    <div style={{ width: '75%', margin: '30px auto', boxShadow: "8px 8px 5px 0px #acf2fd" }} className='blog-content-box'>
                                        <img src={BackgroundImg} alt="" style={{ height: '100%', width: '100%' }} />
                                        <div style={{ padding: 15, }}>
                                            <Typography variant='h3' style={{ fontSize: "24px", color: '#EA4335', fontWeight: 600, fontFamily: 'Poppins', }} className='blog-title'>{post.title}</Typography>
                                            <Typography style={{ fontFamily: 'Poppins', fontSize: "16px", color: '#464646', marginTop: "7px" }} className='blog-desc'>
                                                <span dangerouslySetInnerHTML={{ __html: Description }}></span>
                                            </Typography>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }} className='blog-extra'>
                                                <div>
                                                    <span style={{ font: 'italic normal 600 23px/28px Montserrat', color: '#4285F4' }}>{post.author}</span>
                                                    <br />
                                                    <span style={{ font: 'normal normal normal 23px/28px Montserrat' }}>{new Date(post.pubDate).toDateString()}</span>
                                                </div>
                                                <div>
                                                    <a href={post.link} target="_blank">
                                                        <button style={{ width: "fit-content", padding: "7px", color: "white", backgroundColor: "#00e626" }} className="project-button">
                                                            Read Now{" "}
                                                            <i
                                                                className="fas fa-external-link-alt"
                                                                style={{ fontSize: "20px" }}
                                                            ></i>
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            )
                        })
                    )
                    :
                    <Loader />
                }
            </Grid>
        </Grid>
    )
}

export default Blogs;