import React from 'react';
import Paper from '@mui/material/Paper';
import './MainPost.css';
import Grid from '@mui/material/Grid';
import avatartBG from '../../assets/avatartbg.svg';
import { Link } from '@mui/material';
import postComments from '../../assets/postcomments.svg';
import postViews from '../../assets/postviews.svg';

const MainPost = (props) => {
    return (
        <Grid item sm={3} md={6} lg={3}>
            <Paper className="mainpost">
                <img src={props.image} />
                <div className="mainpost__avatar">
                    <img src={avatartBG} className="avatartbg" />
                    <img src={props.avatar} className="avatar__itself" />
                </div>
                <div className="mainpost__content">
                    <p className='content__date'>
                        {props.date}
                    </p>
                    <Link className="content__title">
                    <h3>{props.title}</h3>
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
            </Paper>
        </Grid>
    );
};

export default MainPost;