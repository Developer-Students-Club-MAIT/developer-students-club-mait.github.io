import React from 'react';
import { withStyles, Grid, Typography, Divider } from "@material-ui/core";
import BlogsBackground from '../assets/BlogsBackground.png'

function Blogs(props) {
    return (
        <Grid container component='main'>
            <Grid item xs={12}>
                <Typography variant='h2' align='center'>Our Blogs</Typography>
            </Grid>
            <Grid container component='div' justify='space-evenly'>
                {
                    Array.apply(null, { length: 4 }).map((e, i) => (
                        <Grid item xs={6}>
                            <div style={{ width: '75%', margin: '30px auto' }}>
                                <img src={BlogsBackground} alt="" style={{ height: '100%', width: '100%' }} />
                                <div style={{ padding: 15 }}>
                                    <Typography variant='h3'>Wonders Of Nature</Typography>
                                    <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, consectetur dolorem? Aspernatur optio vero dignissimos vitae natus. Deserunt, delectus eius.</Typography>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div>
                                            Doe John
                                            18 May 2020
                                        </div>
                                        <div>
                                            <button>
                                                Read Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    ))
                }
            </Grid>
        </Grid>
    )
}

export default Blogs;