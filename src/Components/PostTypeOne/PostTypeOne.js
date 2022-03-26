import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './PostTypeOne.css';
import postavatar from '../../assets/postavatar1.jpg';
import { Link } from '@mui/material';
import postComments from '../../assets/postcomments.svg';
import postViews from '../../assets/postviews.svg';

const PostTypeOne = (props) => {
    return (
        <Grid item xs={12} sm={6}>
    
            <div className="post__container-one" >
                <div className='post__content'>
                    <img src={postavatar} className="content__avatar" />

                    <div className="content__dtc">
                        <div className="postDate">
                        24 August 2021
                        </div>
                        <Link className="content__title">
                            <h3>
                            Tesla Cybertruck-inspired camper trailer for Tesla fans who can’t just wait for the truck!
                            </h3>
                        </Link>

                        <div className="views__comments">
                            <div className="dtc__info">
                                <img src={postComments} />29.36k
                            </div>
                            <div className="dtc__info">
                                <img src={postViews} />29.36k
                            </div>
                            <div className="dtc__info">
                                <img src={postComments} />29.36k
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
        </Grid>
    );
};

export default PostTypeOne;