import React from 'react';
import './ConversionRates.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {CChart} from '@coreui/react-chartjs';

const ConversionRates = (props) => {
    return (
        <Grid item lg={7} md={6} sm={6} xs={12}>
            <Paper 
            sx={{
                borderRadius: '16px',
                padding: '24px',
            }}
            className="conversion__paper"
            >
                <h2>Conversion Rates</h2>
            <CChart
            width='100%'
            height="100%"
            type="bar"
            data={{
                labels: ['Italy', 'Japan', 'China', 'Canada', 'France', 'Germany', 'South korea', 'Netherlands','United States' , 'United kingdom'],
                datasets: [
                {
                    label: 'Conversion Rates',
                    backgroundColor: '#00ab55',
                    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200,1380],
                },
                ],
            }}
            labels="days"
            />
            </Paper>
        </Grid>
    );
};

export default ConversionRates;

