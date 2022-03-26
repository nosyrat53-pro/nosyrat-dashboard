import React from 'react';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import './Statistics.css';

const Statistics = ({bg , number , title , icon , textColor}) => {
    return (
        <Grid item lg={3} md={3} sm={6} xs={12}>
            <Paper sx={{
                backgroundColor: bg,
                boxShadow: 'none',
                borderRadius: '16px',
                padding: '40px 0px',
                textAlign: 'center'
            }}>
                <div className="Paper__icon">
                    <img src={icon} alt='weekly sales'/>
                </div>
                <div className='paper__countings'>
                    <h1 style={{color: textColor}}>{number}</h1>
                    <h3 style={{color: textColor}}>{title}</h3>
                </div>
            </Paper>
        </Grid>
    );
};

export default Statistics;
