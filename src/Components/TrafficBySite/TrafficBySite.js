import React from 'react';
import './TrafficBySite.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TrafficSite from '../TrafficSite/TrafficSite';
import facebookIcon from '../../assets/FacebookIcon.svg';
import googleIcon from '../../assets/googleicon.svg';
import linkedInIcon from '../../assets/linkedinicon.svg';
import twitterIcon from '../../assets/twittericon.svg';

export default function TrafficBySite(props) {
    return (
        <Grid item lg={4} md={6} sm={6} xs={12}>
            <Paper 
            sx={{
                padding: '24px',
                paddingBottom: '8px',
                borderRadius: '16px'
            }} 
            className="Traffic__paper">
                <h2>Traffic By Site</h2>   
                <div className="traffic__flexContainer"> 
                    <TrafficSite icon={facebookIcon} number="45.58k" siteName="FaceBook" />
                    <TrafficSite icon={googleIcon} number="40.52k" siteName="Google" />
                    <TrafficSite icon={linkedInIcon} number="95.88k" siteName="Linkedin" />
                    <TrafficSite icon={twitterIcon} number="74.23k" siteName="Twitter" />
                </div>
            </Paper>
        </Grid>
    );
}