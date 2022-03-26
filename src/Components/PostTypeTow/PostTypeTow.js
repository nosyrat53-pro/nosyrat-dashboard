import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './PostTypeTow.css';
import postavatar from '../../assets/postavatar1.jpg';
import { Link } from '@mui/material';
import postComments from '../../assets/postcomments.svg';
import postViews from '../../assets/postviews.svg';

const PostTypeTow = (props) => {
    return (
        <Grid item xs={12} sm={3} md={6} >
    
            <div className="post__container" >
                <div className='post__content'>
                    <img src={props.postavatar} className="content__avatar" />

                    <div className="content__dtc">
                        <div className="postDate">
                        {props.date}
                        </div>
                        <Link className="content__title">
                            <h3>
                            {props.title}
                            </h3>
                        </Link>

                        <div className="views__comments">
                            <div className="dtc__info">
                                <img src={postComments} />{props.comments}
                            </div>
                            <div className="dtc__info">
                                <img src={postViews} />{props.views}
                            </div>
                            <div className="dtc__info">
                                <img src={postComments} />{props.shares}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
        </Grid>
    );
};

export default PostTypeTow;