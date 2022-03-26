import React from "react";
import * as d3 from "d3";
import {CChart} from '@coreui/react-chartjs';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import './MultiLineChart.css';

const MultilineChart = () => {

  return (
      <Grid item lg={7} md={6} sm={6} xs={12}>
          <Paper sx={{
            padding: '24px',
            borderRadius: '16px'
            }}
            className="linechart__paper"
            >
        <h2>Website Visits</h2>
        <h4>(+43%) than last year</h4>
    <CChart
    width={'100%'}
    height="100%" 
    type="line" 
    data={{
    labels: ["2022", "Mar '03", "May '03", "Jul '03", "Sep '03"],
        datasets: [
        {
            label: "Team A",
            backgroundColor: "rgb(0, 171, 85)",
            borderColor: "rgb(0, 171, 85)",
            pointBackgroundColor: "#036a36",
            pointBorderColor: "#fff",
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22,30]
        },
        {
            label: "Team B",
            backgroundColor: "rgb(255, 231, 0)",
            borderColor: "rgb(255, 231, 0)",
            pointBackgroundColor: "#6c6306",
            pointBorderColor: "#fff",
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56,27,46]
        },
        {
            label: "Team C",
            backgroundColor: "#2d99ff",
            borderColor: "#2d99ff",
            pointBackgroundColor: "#07437a",
            pointBorderColor: "#fff",
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59,36,39]
        },
        ],
        }}
    />
    </Paper>
</Grid>
  );
};

export default MultilineChart;