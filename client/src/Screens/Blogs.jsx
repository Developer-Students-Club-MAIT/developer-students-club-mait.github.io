import React, { useState, useEffect } from 'react';
import { withStyles, Grid, Typography, Divider } from "@material-ui/core";

function Blogs(props) {
    const [PostData, setPostData] = useState(null);
    const [Loading, setLoading] = useState(false);

    useEffect(async () => {
        await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/dscmait`)
            .then(doc => doc.json())
            .then(posts => {
                setPostData(posts.items)
                setLoading(true)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <Grid container component='main'>
            <Grid item xs={12}>
                <Typography variant='h2' align='center'>Our Blogs</Typography>
            </Grid>
            <Grid container component='div' justify='space-evenly'>
                {Loading ?
                    (
                        PostData && PostData.map((post, index) => {
                            let BackgroundImg = document.createElement("div");
                            BackgroundImg.innerHTML = post.description;
                            BackgroundImg = BackgroundImg.querySelector("img").src
                            let Description = document.createElement("div");
                            Description.innerHTML = post.description;
                            Description = Description.querySelector("p").innerHTML
                            return (
                                <Grid item sm={12} md={6} key={index}>
                                    <div style={{ width: '75%', margin: '30px auto', boxShadow: '0px 8px 1rem rgba(159, 232, 244, 0.8)' }}>
                                        <img src={BackgroundImg} alt="" style={{ height: '100%', width: '100%' }} />
                                        <div style={{ padding: 15 }}>
                                            <Typography variant='h3' style={{ fontSize: 40, color: '#346DF1', fontWeight: 600, fontFamily: 'Poppins' }}>{post.title}</Typography>
                                            <Typography variant='p' style={{ fontFamily: 'Poppins', fontSize: 22, color: '#464646' }}>
                                                <span dangerouslySetInnerHTML={{ __html: Description }}></span>
                                            </Typography>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
                                                <div>
                                                    <span style={{ font: 'italic normal 600 23px/28px Montserrat', color: '#FBBD00' }}>{post.author}</span>
                                                    <br />
                                                    <span style={{ font: 'normal normal normal 23px/28px Montserrat' }}>{new Date(post.pubDate).toDateString()}</span>
                                                </div>
                                                <div>
                                                    <a href={post.link} target="_blank">
                                                        <button className="project-button">
                                                            Read Now{" "}
                                                            <i
                                                                class="fas fa-external-link-alt"
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
                    'LOADING'
                }
            </Grid>
        </Grid>
    )
}

export default Blogs;