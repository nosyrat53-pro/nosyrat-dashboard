import React from 'react';
import {CChart} from '@coreui/react-chartjs';
import './PieChart.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function PieChart() {
    return (
        <Grid item lg={5} md={6} sm={6} xs={12}>
            <Paper 
            sx={{
                padding: '24px',
                borderRadius: '16px'
            }}
            className="Piechart__paper"
            >
                <h2>Current Visits</h2>
        <CChart
        type="pie"
        data={{
            labels: ['#America', '#Africa', '#Eruope', '#Asia'],
            datasets: [
            {
                backgroundColor: ['#00a14f', '#ff4842', '#ffc107', '#1890ff'],
                data: [27.5, 28.4, 9.2, 34.7],
            },
            ],
        }}
        />
        </Paper>
        </Grid>
    );
}