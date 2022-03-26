import React from 'react';
import './CurrentSubjectChart.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {CChart} from '@coreui/react-chartjs';

const CurrentSubjectChart = (props) => {
    return (
        <Grid item lg={5} md={6} sm={6} xs={12}>
            <Paper 
            sx={{
                borderRadius: '16px',
                padding: '24px',
            }}
            className="Current__paper"
            >
                <h2>Current Subject</h2>
                <CChart 
                type="radar"
                data={{
                    labels: [
                    'English',
                    'Math',
                    'History',
                    'Physics',
                    'Geography',
                    'Chinese',
                    ],
                    datasets: [
                    {
                        label: 'Series 1',
                        backgroundColor: '#00ab5533',
                        borderColor: '#00ab55',
                        pointBackgroundColor: '#00ab55',
                        pointBorderColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: '#00ab55',
                        data: [40, 56, 90, 41, 56, 55, 40],
                    },
                    {
                        label: 'Series 2',
                        backgroundColor: '#ffed4333',
                        borderColor: '#ffed43',
                        pointBackgroundColor: '#ffed43',
                        pointBorderColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: '#ffed43',
                        data: [100, 96, 20, 69, 96, 80, 10],
                    },
                    {
                        label: 'Series 3',
                        backgroundColor: '#ff484222',
                        borderColor: '#ff4842',
                        pointBackgroundColor: '#ff4842',
                        pointBorderColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: '#ff4842',
                        data: [100, 96, 40, 19, 96, 27, 70],
                    },
                    ],
                }}
                />
            </Paper>
        </Grid>
    );
};

export default CurrentSubjectChart;

